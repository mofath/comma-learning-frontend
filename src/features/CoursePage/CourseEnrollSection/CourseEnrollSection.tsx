import Button from "@/components/ui/Button/Button";
import React, { useEffect, useState } from "react";
import styles from "./CourseEnrollSection.module.css";
import Image from "next/image";
import { useAddToCartMutation } from "@/services/cart.service";

interface CourseEnrollSectionProps {
	isUserAlreadyEnrolled: boolean;
	cost: number;
	instructorName: string;
	level: string;
	rate: number;
	duration: string;
	courseId: number;
}

const CourseEnrollSection: React.FC<CourseEnrollSectionProps> = ({
	isUserAlreadyEnrolled,
	cost,
	instructorName,
	level,
	rate,
	duration,
	courseId,
}) => {
	const [enrolledCourseId, setEnrolledCourseId] = useState<string | null>(null);

	const [addToCart] = useAddToCartMutation();

	useEffect(() => {
		console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
		if (isUserAlreadyEnrolled) {
			setEnrolledCourseId("isUserAlreadyEnrolled");
		}
	}, [isUserAlreadyEnrolled]);

	useEffect(() => {
		// Ensure that the router is available before calling router.push()
		if (enrolledCourseId) {
			// router.push('/watch-course/' + enrolledCourseId);
		}
	}, [enrolledCourseId]);

	// const onEnrollCourse = () => {
	// 	// Simulating enrollment process
	// 	const enrolledCourseId = "mocked-enrolled-course-id";
	// 	setEnrolledCourseId(enrolledCourseId);
	// };

	return (
		<div className={styles["course-enroll-section"]}>
			<div className={styles["course-enroll-section__header"]}>
				<p>Course name</p>
				<Button
					variant="transparent"
					className={styles["course-enroll-section__action-btn"]}
				>
					<>
						<Image
							src="/svg/save.svg"
							alt="save icon"
							width={22}
							height={22}
							priority
						/>
						<span>Save</span>
					</>
				</Button>
				<Button
					variant="transparent"
					className={styles["course-enroll-section__action-btn"]}
				>
					<Image
						src="/svg/share-dark.svg"
						alt="share icon"
						width={22}
						height={22}
						priority
					/>
					<span>Share</span>
				</Button>
			</div>
			<div className={styles["course-enroll-section__content"]}>
				<div>
					<span>Instructor Name&nbsp;:&nbsp;</span>
					<span>{instructorName}</span>
				</div>
				<div>
					<span>Instructor Level&nbsp;:&nbsp;</span>
					<span>{level}</span>
				</div>
				<div>
					<span>Duration&nbsp;:&nbsp;</span>
					<span>{duration}</span>
				</div>
				<div>
					<span>Rate&nbsp;:&nbsp;</span>
					<span>{rate}</span>
				</div>
				<div>
					<span>Course Cost&nbsp;:&nbsp;</span>
					<span>{cost}EGP</span>
				</div>
			</div>
			<Button
				className={styles["course-enroll-section__enroll-btn"]}
				variant="secondary"
				size="full"
				onClick={() => {
					console.log("added");
					addToCart({ id: courseId });
				}}
			>
				Add to cart
			</Button>
		</div>
	);
};

export default CourseEnrollSection;

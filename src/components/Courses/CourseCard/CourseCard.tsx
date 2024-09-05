import Image from "next/image";
import Button from "../../ui/Button/Button";
import React from "react";
// import Heart from "../../../../public/svg/heart.svg";
import { CourseListItem } from "@/types/Course";
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import styles from "./CourseCard.module.css";
import { useAddToCartMutation } from "@/services/cart.service";
import { toast } from "react-toastify";
import Link from "next/link";
import StarRatingSummary from "@/components/ui/StarRatingSummary/StarRatingSummary";

export default interface CourseCardProps {
	course: CourseListItem;
	withProgress?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({
	course,
	withProgress = false,
}) => {
	const [addToCart] = useAddToCartMutation();
	
	return (
		// <HoverCard
		// 	align="end"
		// 	side="right"
		// 	alignOffset={100}
		// 	className={clsx(styles["HoverCardContent"])}
		// 	content={
		// 		<AddToCartPopUp
		// 			length={1}
		// 			title={course.title}
		// 			description={course.description}
		// 			updated_at={course.updatedAt}
		// 			status={course.status ? "Active" : "Inactive"}
		// 		/>
		// 	}
		// >
		<Link href={`/course/${course.id}`}>
			<section className={styles["course-card"]}>
				<div className={styles.aside}>
					{/* {!withProgress ? (

						<Button
							variant="primary"
							radius="full"
							size="fit"
							className={styles["favorite-button"]}
						>
							<Heart
								width={20}
								height={20}
								color={course.isFavorite ? "#ff5646" : "black"}
							/>
						</Button>
					) : null} */}

					<div className={styles["image-container"]}>
						<Image
							className={styles.image}
							src={course.imageUrl}
							alt="course image"
							fill
							objectFit="contain"
						/>
					</div>
				</div>
				<header className={styles.header}>
					<h2 className={styles.title}>{course.title}</h2>
					<p
						className={styles.subtitle}
					>{`${course.instructor.firstName} ${course.instructor.lastName}`}</p>
				</header>
				<div className={styles.rating}>
					<StarRatingSummary
						rating={course.rating}
						reviewsCount={course.reviewCount}
					/>
				</div>
				{/* {(location || time) && (
					<div className={styles["time-location"]}>
						{location && (
							<p className={styles["location"]}>
								<Image
									src="/svg/location-pin.svg"
									alt="Location icon"
									width={16}
									height={16}
								/>
								<span>{location}</span>
							</p>
						)}
						{time && (
							<p className={styles["time"]}>
								<Image
									src="/svg/clock.svg"
									alt="Clock icon"
									width={16}
									height={16}
								/>
								<span>{time}</span>
							</p>
						)}
					</div>
				)} */}

				{course.enrolled ? (
					<p className={styles["enrolled"]}>Enrolled</p>
				) : (
					<footer className={styles.pricing}>
						{withProgress ? (
							<ProgressBar progress={"19" as string} />
						) : (
							<>
								<p className={styles.price}>{course.price}EGP</p>
								<p className={styles["discount-price"]}>
									{course.discountPrice}EGP
								</p>
								<Button
									onClick={() => {
										console.log(course.id);
										addToCart({ id: course.id });
										toast.success("Item added to cart");
									}}
									variant="transparent"
									className={styles["add-to-cart-button"]}
								>
									<Image
										src={"/images/plus.svg"}
										alt="Add to cart icon"
										width={20}
										height={20}
									/>
								</Button>
							</>
						)}
					</footer>
				)}
			</section>
		</Link>

		// </HoverCard>
	);
};
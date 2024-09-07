import React from "react";
import { CourseListItem } from "@/types/Course";
import { toast } from "react-toastify";
import Link from "next/link";
import clsx from "clsx";
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import { useAddToCartMutation } from "@/services/cart.service";
import StarRatingSummary from "@/components/ui/StarRatingSummary/StarRatingSummary";
import HeartIcon from "../../../../public/svg/heart.svg";
import PlusIcon from "../../../../public/svg/plus.svg";
import AddToCartPopUp from "@/features/Cart/components/AddToCartPopup/AddToCartPopup";
import HoverCard from "@/components/ui/HoverCard/HoverCard";
import "./CourseCard.css";

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
		<Link href={`/course/${course.id}`}>
			<HoverCard
				align="end"
				side="right"
				alignOffset={100}
				className={clsx("HoverCardContent")}
				content={
					<AddToCartPopUp
						length={1}
						title={course.title}
						description={course.description}
						updated_at={course.updatedAt}
						status={course.status ? "Active" : "Inactive"}
					/>
				}
			>
				<div className="course-card">
					<div className="course-card__image-wrapper">
						<img
							src={course.posterUrl}
							alt={course.title}
							className="course-card__image"
						/>
						{!withProgress ? (
							<button className="course-card__favorite-btn">
								<HeartIcon
									width={20}
									height={20}
									color={true ? "#ff5646" : "black"}
								/>
							</button>
						) : null}
					</div>
					<div className="course-card__info">
						{/* Course title */}
						<div className="course-card__title subtitle-3 wrap-text">
							<p>{course.title}</p>
						</div>
						{/* Course instructor */}
						<div className="course-card__instructor">
							<p>{course.instructor.name}</p>
						</div>
						{/* rating */}
						<div className="course-card__rating">
							<StarRatingSummary
								rating={course.rating}
								reviewsCount={course.reviewsCount}
							/>
						</div>
						<div className="course-card__footer">
							{/* Course pricing */}
							{!withProgress ? (
								<>
									<span className="course-card__pricing">
										<p className="course-card__pricing__price">
											{course.price}EGP
										</p>
										<p className="course-card__pricing__discount-price">
											{course.discountPrice}EGP
										</p>
									</span>
									{/* Add to cart */}
									<button
										className="course-card__cart-btn"
										onClick={() => {
											console.log(course.id);
											addToCart({ id: course.id });
											toast.success("Item added to cart");
										}}
									>
										<PlusIcon
											width={25}
											height={25}
											color={true ? "#ff5646" : "black"}
										/>
									</button>
								</>
							) : (
								<ProgressBar progress={"19" as string} />
							)}
						</div>
					</div>
					{/* <div className={styles["course-card__hover-details"]}>
					<p>{course.description}</p>
					<button className={styles["course-card__detail-btn"]}>
						View Details
					</button>
				</div> */}
				</div>
			</HoverCard>
		</Link>
	);
};

{
	/* <Link href={`/course/${course.id}`}></Link> */
}

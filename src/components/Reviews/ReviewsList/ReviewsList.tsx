import React from "react";
import ReviewComponent from "../ReviewComponent/ReviewComponent";
import { CourseReview } from "@/types/Review";
import styles from "./ReviewsList.module.css";

interface ReviewsListProps {
	reviews: CourseReview[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
	return (
		<div className={styles["reviews-list"]}>
			{reviews.map((review, index) => {
				return <ReviewComponent key={index} review={review} />;
			})}
		</div>
	);
};

export default ReviewsList;

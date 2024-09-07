import React from "react";
import StarRating from "../StarRating/StarRating";
import styles from "./StarRatingSummary.module.css";

interface StarRatingSummaryProps {
	rating: number;
	reviewsCount: number;
	className?: string;
}

const StarRatingSummary: React.FC<StarRatingSummaryProps> = ({
	rating,
	reviewsCount,
}) => {
	return (
		<div className={styles["star-rating-summary"]}>
			<span className={styles["star-rating-summary__rating"]}>{rating}</span>
			<StarRating rating={rating} />
			<span className={styles["star-rating-summary__review-count"]}>
				({reviewsCount})
			</span>
		</div>
	);
};

export default StarRatingSummary;


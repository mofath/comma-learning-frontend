import React from "react";
import styles from "./ReviewComponent.module.css";
import UserAvatarCard from "@/components/User/UserAvatarCard/UserAvatarCard";
import { CourseReview } from "@/types/Review";

export interface ReviewComponentProps {
	review: CourseReview;
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({ review }) => {
	return (
		<div className={styles["review"]}>
			<UserAvatarCard user={review.user} withRating={true} rating={review.rating} />
			<div>{review.text}</div>
		</div>
	);
};

export default ReviewComponent;

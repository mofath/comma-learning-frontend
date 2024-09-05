import React from "react";
import styles from "./UserReviewCard.module.css";
import UserAvatarCard from "@/components/User/UserAvatarCard/UserAvatarCard";
import Review from "@/types/Review";

type Props = {
	review: Review;
};

export default function UserReviewCard({ review }: Props) {
	const { reviewee, reviewer, reviewContent } = review;
	return (
		<section className={styles["user-review"]}>
			<div className={styles["upper"]}>
				<UserAvatarCard user={reviewee} />
				<p className={styles["review-content"]}>{reviewContent}</p>
			</div>

			<hr className={styles["separator"]} />
			<div className={styles["lower"]}>
				<UserAvatarCard user={reviewer} />
			</div>
		</section>
	);
}

import React from "react";
import styles from "./CourseVideoDescription.module.css";

interface CourseVideoDescriptionProps {
	description: string;
	category: string;
}

function CourseVideoDescription({
	description,
	category,
}: CourseVideoDescriptionProps) {
	return (
		<div className={styles["course-video-description"]}>
			<div className={styles["course-video-description__header"]}>
				<h2>Course Category</h2>
				<p>{category}</p>
			</div>

			<div className={styles["course-video-description__description"]}>
				<h2>Course Description</h2>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default CourseVideoDescription;

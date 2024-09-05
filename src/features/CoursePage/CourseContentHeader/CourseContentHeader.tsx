import React from "react";
import styles from "./CourseContentHeader.module.css";

interface CourseContentHeaderProps {
	title: string;
	subtitle?: string;
}

const CourseContentHeader: React.FC<CourseContentHeaderProps> = ({
	title,
	subtitle,
}) => {
	return (
		<div className={styles["course-content-header"]}>
			<h2>{title}</h2>
			{subtitle ? <p>{subtitle}</p> : null}
		</div>
	);
};

export default CourseContentHeader;

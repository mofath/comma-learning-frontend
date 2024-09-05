import React from "react";
import styles from "./CourseObjectiveSection.module.css";

interface CourseObjectiveSectionProps {
	objectives: string[];
}

const CourseObjectiveSection: React.FC<CourseObjectiveSectionProps> = ({
	objectives,
}) => {
	return (
		<div className={styles["course-objective-section"]}>
			<h2>By the end of this course, you will be able to:</h2>
			<ol className={styles["objective-list"]}>
				{objectives.map((objective, index) => {
					return <li key={index}>{objective}</li>;
				})}
			</ol>
		</div>
	);
};

export default CourseObjectiveSection;

import React from "react";
import { CourseCard } from "@/components/Courses/CourseCard/CourseCard";
import styles from "./MyCourses.module.css";
import { userEnrolledCoursesData } from "@/__mocks__/data/user";

const MyCourses: React.FC = () => {
	return (
		<div className={styles["my-courses"]}>
			<div className={styles["my-courses__header"]}>
				<h2>Courses you're enrolled in!</h2>
			</div>
			<div className={styles["my-courses__content"]}>
				<div className={styles["my-courses__course-list"]}>
					{userEnrolledCoursesData.map((course, index) => {
						return <CourseCard key={index} course={course} withProgress />;
					})}
				</div>
			</div>
		</div>
	);
};

export default MyCourses;

import React from "react";
import styles from "./CourseInstructorSection.module.css";
import UserAvatarCard from "@/components/User/UserAvatarCard/UserAvatarCard";
import { Instructor } from "@/types/Course";

interface CourseInstructorSectionProps {
	instructor: Instructor;
}

const CourseInstructorSection: React.FC<CourseInstructorSectionProps> = ({
	instructor,
}) => {
	return (
		<div className={styles["course-instructor-section"]}>
			<h2>Course Instructor</h2>
			<UserAvatarCard
				user={{
					name: instructor.name,
					avatarUrl: instructor.avatarUrl as any,
					jobTitle: instructor.jobTitle,
					organization: instructor.organization,
					is_instructor: true,
				}}
			/>
		</div>
	);
};

export default CourseInstructorSection;

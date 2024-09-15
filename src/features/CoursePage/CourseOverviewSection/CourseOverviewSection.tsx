import React from "react";
import styles from "./CourseOverviewSection.module.css";
import CourseContentHeader from "../ContentHeader/ContentHeader";
import UserAvatarCard from "@/components/User/UserAvatarCard/UserAvatarCard";
import { Instructor } from "@/types/Course";

interface CourseOverviewSectionProps {
	insturctor: Instructor;
	skillLevel: string;
	students: number;
	languages: string;
	captions: string;
	lectures: number;
	video: string;
	features: string[];
	description: string[];
}

const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = ({
	insturctor,
	skillLevel,
	students,
	languages,
	captions,
	lectures,
	video,
	features,
	description,
}) => {
	return (
		<div className={styles["course-overview-section"]}>
			<CourseContentHeader
				title="About this course"
				subtitle="Course Title and Subtitle here...."
			/>
			<div className={styles["course-overview-section__info"]}>
				<div className={styles["course-overview-section__info-row"]}>
					<div className={styles["course-overview-section__info-row-header"]}>
						By the numbers
					</div>
					<div
						className={`${styles["course-overview-section__info-row-cell"]} ${styles["numbers"]}`}
					>
						<ul>
							<li>
								<span>Skill level: </span> {skillLevel}
							</li>
							<li>
								<span>Students: </span> {students}
							</li>
							<li>
								<span>Languages: </span> {languages}
							</li>
							<li>
								<span>Captions: </span> {captions}
							</li>
						</ul>
						<ul>
							<li>
								<span>Lectures: </span> {lectures}
							</li>
							<li>
								<span>Video: </span> {video}
							</li>
						</ul>
					</div>
				</div>
				<div className={styles["course-overview-section__info-row"]}>
					<div className={styles["course-overview-section__info-row-header"]}>
						Features
					</div>
					<div className={styles["course-overview-section__info-row-cell"]}>
						<ul>
							<li>Available on iOS and Android</li>
						</ul>
					</div>
				</div>
				<div className={styles["course-overview-section__info-row"]}>
					<div className={styles["course-overview-section__info-row-header"]}>
						Describtion
					</div>
					<div
						className={`${styles["course-overview-section__info-row-cell"]} ${styles["describtion"]}`}
					>
						<ul>
							{features.map((feat, index) => (
								<li key={index}>{feat}</li>
							))}
						</ul>
					</div>
				</div>
				<div className={styles["course-overview-section__info-row"]}>
					<div className={styles["course-overview-section__info-row-header"]}>
						Instructor
					</div>
					<div
						className={`${styles["course-overview-section__info-row-cell"]} ${styles["instructor"]}`}
					>
						<UserAvatarCard
							user={{
								id: insturctor.id,
								fullName: insturctor.name,
								avatarUrl: insturctor?.avatarUrl,
								jobTitle: insturctor?.role as string,
								organization: insturctor?.organization,
							}}
							isInstructor={true}
						/>
						<ul>
							{description.map((desc, index) => (
								<li key={index}>{desc}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseOverviewSection;

"use client";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "@/features/CoursePage/CourseVideoDescription/CourseVideoDescription";
import CourseContentSection from "@/features/CoursePage/CourseContentSection/CourseContentSection";
import CourseEnrollSection from "@/features/CoursePage/CourseEnrollSection/CourseEnrollSection";
import VideoPlayer from "@/features/CoursePage/VideoPlayer/VideoPlayer";
import CourseReviewsSection from "@/features/CoursePage/CourseReviewsSection/CourseReviewsSection";
import AcquiredSkillsSection from "@/features/CoursePage/AcquiredSkillsSection/AcquiredSkillsSection";
import CourseCurriculumSection from "@/features/CoursePage/CourseCurriculumSection/CourseCurriculumSection";
import CourseInstructorSection from "@/features/CoursePage/CourseInstructorSection/CourseInstructorSection";
import CourseObjectiveSection from "@/features/CoursePage/CourseObjectiveSection/CourseObjectiveSection";
import styles from "./CoursePreviewPage.module.css";
import {
	useCheckEnrollmentQuery,
	useCourseQuery,
	useViewCourseMutation,
} from "@/services/course.service";
import CourseList from "@/components/Courses/CourseList/CourseList";
import { useParams } from "next/navigation";
import { useAuthUser } from "@/hooks/useAuthUser";
import { useSelector } from "react-redux";
import { selectedAuthUser } from "@/store";

interface CoursePreviewProps {
	watchMode?: boolean;
}

const CoursePreview: React.FC<CoursePreviewProps> = ({ watchMode = false }) => {
	const [activeChapterIndex, setActiveChapterIndex] = useState(0);
	const { courseId } = useParams<{ courseId: string }>();
	const { authUser } = useAuthUser();

	const user = useSelector(selectedAuthUser);
	const { data: isUserEnrolled } = useCheckEnrollmentQuery({
		userId: user?.id || "",
		courseId,
	});

	const { data: courseData, isLoading } = useCourseQuery({ id: courseId });

	const [viewCourse] = useViewCourseMutation();

	useEffect(
		() => {
			if (courseData) {
				viewCourse(courseId);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[courseData]
	);

	if (isLoading) return <p>Loading...</p>;

	console.log(111111111);
	console.log(courseData);

	console.log(111111111);

	return (
		<div className={`${styles["course-review-page"]} container`}>
			{/* Top section */}
			<div className={styles["course-review-page__top-section"]}>
				{/* Left side section */}
				<div className={styles["course-review-page__left-side"]}>
					<VideoPlayer
						videoUrl={courseData?.chapters[activeChapterIndex]?.videoUrl}
						poster={!watchMode ? courseData?.posterUrl : undefined}
					/>
					<CourseVideoDescription
						description={courseData?.description}
						category={courseData?.category?.name}
					/>
					<CourseReviewsSection
						courseId={courseId}
						user={authUser}
						watchMode={false}
					/>
				</div>
				{/* Right side section */}
				<div className={styles["course-review-page__right-side"]}>
					<CourseContentSection
						chapters={courseData.chapters}
						isUserAlreadyEnrolled={isUserEnrolled?.enrolled || false}
						setActiveChapterIndex={setActiveChapterIndex}
						completedChapter={[]}
					/>
					<CourseEnrollSection
						courseId={Number(courseId)}
						isUserAlreadyEnrolled={isUserEnrolled?.enrolled || false}
						cost={courseData?.price}
						instructorName={courseData?.instructor.name}
						rate={courseData?.totalRating}
						level={courseData?.instructor.level}
						duration={courseData?.duration}
					/>
				</div>
			</div>
			{/* Bottom section */}
			<div className={styles["course-review-page__bottom-section"]}>
				<AcquiredSkillsSection skills={courseData?.skills} />
				<h2>Course Content</h2>
				{courseData?.chapters.map((section: any) => {
					return (
						<CourseCurriculumSection
							key={section.id}
							sectionTitle={section.title}
							chapters={section.chapters}
						/>
					);
				})}
				<CourseInstructorSection instructor={courseData?.instructor} />
				<CourseObjectiveSection objectives={courseData?.objectives} />
				{/* <RelatedCoursesSection courses={coursesListData} /> */}
				{/* <CourseList category={courseData?.categories?.[0].name} /> */}
			</div>
		</div>
	);
};

export default CoursePreview;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import CourseContentSection from "@/features/CoursePage/CourseContentSection/CourseContentSection";
import VideoPlayer, {
	VideoPlayerHandle,
} from "@/features/CoursePage/VideoPlayer/VideoPlayer";
import CourseOverviewSection from "@/features/CoursePage/CourseOverviewSection/CourseOverviewSection";
import CourseNotes from "@/features/CoursePage/CourseNotes/CourseNotes";
import CourseQuestions from "@/features/CoursePage/CourseQuestions/CourseQuestions";
import Tabs from "@/components/ui/Tabs/Tabs";
import { courseData } from "@/__mocks__/data/course";
import CourseReviewsSection from "@/features/CoursePage/CourseReviewsSection/CourseReviewsSection";
import { useAuthUser } from "@/hooks/useAuthUser";
import styles from "./WatchCoursePage.module.css";

const CoursePreview: React.FC = () => {
	const [activeChapterIndex, setActiveChapterIndex] = useState(0);
	const [currentTimestamp, setCurrentTimestamp] = useState("0:00");
	const videoPlayerRef = useRef<VideoPlayerHandle>(null);
	const { courseId } = useParams<{ courseId: string }>();
	const { authUser } = useAuthUser();

	const currentChapterId = courseData.chapters[activeChapterIndex]?.id;

	const [courseInfo] = useState({
		...courseData,
	});

	useEffect(() => {
		checkUserEnrolledToCourse();
	}, []);

	const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] =
		useState<boolean>(false);

	const checkUserEnrolledToCourse = () => {
		setTimeout(() => {
			const response = {
				userEnrollCourses: [{ id: 123 }],
			};

			if (response.userEnrollCourses && response.userEnrollCourses.length > 0) {
				setIsUserAlreadyEnrolled(true);
			} else {
				setIsUserAlreadyEnrolled(false);
			}
		}, 1000);
	};

	const pauseVideo = () => {
		videoPlayerRef.current?.pause();
	};

	return (
		<div className={`container ${styles["course-review-page"]}`}>
			{/* Left side section */}
			<div className={styles["course-review-page__left-side"]}>
				<VideoPlayer
					ref={videoPlayerRef}
					videoUrl={courseInfo?.chapters[activeChapterIndex]?.videoUrl}
					poster={courseInfo?.posterUrl}
					onTimeUpdate={(t) => setCurrentTimestamp(t)}
				/>
				<Tabs>
					{/* Course Overview Tab */}
					<div title="Course Overview">
						<CourseOverviewSection
							insturctor={courseInfo.instructor}
							skillLevel={courseInfo.skillLevel}
							students={courseInfo.students}
							languages={courseInfo.skillLevel}
							captions={courseInfo.skillLevel}
							lectures={courseInfo.lectures}
							video={courseInfo.skillLevel}
							features={courseInfo.features}
							description={courseInfo.description}
						/>
					</div>
					{/* Notes Tab */}
					<div title="Notes">
						<CourseNotes
							currentTimestamp={currentTimestamp}
							chapterId={currentChapterId}
							userId={authUser?.id}
							pauseVideo={pauseVideo}
						/>
					</div>
					{/* Review Tab */}
					<div title="Review" className={styles["reviews-tab"]}>
						<CourseReviewsSection courseId={courseId} user={authUser} />
					</div>
					{/* Questions Tab */}
					<div title="Ask Instructor">
						<CourseQuestions courseId={courseId} user={authUser} />
					</div>
				</Tabs>
			</div>
			{/* Right side section */}
			<div className={styles["course-review-page__right-side"]}>
				<CourseContentSection
					chapters={courseInfo.chapters}
					watchMode={true}
					isUserAlreadyEnrolled={isUserAlreadyEnrolled}
					setActiveChapterIndex={setActiveChapterIndex}
					completedChapter={[]}
				/>
			</div>
		</div>
	);
};

export default CoursePreview;

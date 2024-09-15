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
import CourseReviewsSection from "@/features/CoursePage/CourseReviewsSection/CourseReviewsSection";
import { useAuthUser } from "@/hooks/useAuthUser";
import { useCourseQuery } from "@/services/course.service";
import "./WatchCoursePage.css";

interface ActiveVideo {
	chapterIndex: number;
	videoIndex: number;
}

const CoursePreview: React.FC = () => {
	const [activeVideo, setActiveVideo] = useState<ActiveVideo>({
		chapterIndex: 0,
		videoIndex: 0,
	});
	const [currentTimestamp, setCurrentTimestamp] = useState("0:00");
	const videoPlayerRef = useRef<VideoPlayerHandle>(null);
	const { courseId } = useParams<{ courseId: string }>();
	const { authUser } = useAuthUser();

	const currentChapterId = 1;

	const { data: courseData, isLoading } = useCourseQuery({ id: courseId });

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

	const handleVideoClick = (chapterIndex: number, videoIndex: number) => {
		setActiveVideo({ chapterIndex, videoIndex });
	};

	const pauseVideo = () => {
		videoPlayerRef.current?.pause();
	};

	return (
		<div className="course-watch-page container">
			{/* Left side section */}
			<div className="course-watch-page__left-side">
				<VideoPlayer
					ref={videoPlayerRef}
					videoUrl={
						courseData?.chapters[activeVideo.chapterIndex]?.videos[
							activeVideo.videoIndex
						]?.url
					}
					poster={courseData?.posterUrl}
					onTimeUpdate={(t) => setCurrentTimestamp(t)}
				/>
				<Tabs>
					{/* Course Overview Tab */}
					<div title="Course Overview">
						<div className="course-watch-page__tab-content">
							<CourseOverviewSection
								title={courseData?.title}
								insturctor={courseData?.instructor || {}}
								skillLevel={"Senior"} // TODO
								students={158} // TODO
								languages={courseData?.languages}
								captions={courseData?.skillLevel}
								lecturesCount={courseData?.lecturesCount}
								duration={courseData?.duration}
								features={courseData?.features} // TODO
								description={courseData?.description}
							/>
						</div>
					</div>
					{/* Notes Tab */}
					<div title="Notes">
						<div className="course-watch-page__tab-content">
							<CourseNotes
								currentTimestamp={currentTimestamp}
								chapterId={currentChapterId}
								userId={authUser?.id}
								pauseVideo={pauseVideo}
							/>
						</div>
					</div>
					{/* Review Tab */}
					<div title="Review" className="course-watch-page__tab-content">
						<div className="course-watch-page__tab-content">
							<CourseReviewsSection courseId={courseId} user={authUser} />
						</div>
					</div>
					{/* Questions Tab */}
					<div title="Ask Instructor">
						<div className="course-watch-page__tab-content">
							<CourseQuestions courseId={courseId} user={authUser} />
						</div>
					</div>
				</Tabs>
			</div>
			{/* Right side section */}
			<div className="course-watch-page__right-side">
				<CourseContentSection
					chapters={courseData?.chapters || []}
					watchMode={true}
					isUserAlreadyEnrolled={isUserAlreadyEnrolled}
					handleVideoClick={handleVideoClick}
					completedChapter={[]}
				/>
			</div>
		</div>
	);
};

export default CoursePreview;

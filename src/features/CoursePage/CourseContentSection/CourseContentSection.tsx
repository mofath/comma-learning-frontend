import Collapsible from "@/components/Collapsible/Collapsible";
import Image from "next/image";
import React, { useState } from "react";
import { Chapter } from "@/types/Course";
import "./CourseContentSection.css";
import { formatDuration } from "@/utils/formatDuration";

interface CompletedChapter {
	chapterId: number;
}

interface CourseContentSectionProps {
	chapters: Chapter[];
	isUserAlreadyEnrolled: boolean;
	watchMode?: boolean;
	setActiveChapterIndex: (index: number) => void;
	completedChapter: CompletedChapter[];
}

function CourseContentSection({
	chapters,
	// isUserAlreadyEnrolled,
	watchMode = false,
	setActiveChapterIndex,
}: CourseContentSectionProps) {
	const [, setActiveIndex] = useState(0);

	// const checkIsChapterCompleted = (chapterId: number) => {
	// 	return completedChapter.find((item) => item.chapterId === chapterId);
	// };

	return (
		<div className="course-content-section">
			<div className="course-content-section__header">
				<p>Course cotent</p>
			</div>
			<div className="course-content-section__chapters-list">
				{chapters.map((chapter, index) => {
					return (
						<div className="course-content-section__chapter-item">
							<Collapsible title={`Chapter ${index + 1}: ${chapter.title}`}>
								<div className="course-content-section__content">
									{chapter?.videos.map((video, index) => (
										<div
											key={index}
											className="course-content-section__content-item"
											onClick={() => {
												watchMode && setActiveChapterIndex(index);
												watchMode && setActiveIndex(index);
											}}
										>
											<span>
												{index + 1}. {video.title}
											</span>
											<span>
												<span className="course-chapter-item__duration">
													<i>
														{watchMode ? (
															<Image
																src="/svg/play.svg"
																alt="Arrow icon"
																width={30}
																height={30}
																priority
															/>
														) : (
															<Image
																src="/svg/play-locked.svg"
																alt="Arrow icon"
																width={30}
																height={30}
																priority
															/>
														)}
													</i>
													{formatDuration(video?.duration)} 
												</span>
											</span>
										</div>
									))}
								</div>
							</Collapsible>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CourseContentSection;

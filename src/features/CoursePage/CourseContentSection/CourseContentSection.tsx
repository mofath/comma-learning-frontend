import Collapsible from "@/components/Collapsible/Collapsible";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./CourseContentSection.module.css";
import { Chapter } from "@/types/Course";

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
		<div className={styles["course-content-section"]}>
			<Collapsible
				title="Course content"
				className={styles["course-content-section__collapsible"]}
			>
				<div className={styles["course-content-section__content"]}>
					{chapters.map((item, index) => (
						<div
							key={index}
							className={styles["course-chapter-item"]}
							onClick={() => {
								watchMode && setActiveChapterIndex(index);
								watchMode && setActiveIndex(index);
							}}
						>
							<span>
								{index + 1}. {item.title}
							</span>
							<span>
								<span className={styles["course-chapter-item__duration"]}>
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
									3 min
								</span>
							</span>
						</div>
					))}
				</div>
			</Collapsible>
		</div>
	);
}

export default CourseContentSection;

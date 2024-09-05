"use client";
// disable eslint
/* eslint-disable */
import { CourseListItem } from "@/types/Course";
import { CourseCard } from "../CourseCard/CourseCard";
import styles from "./CourseList.module.css";
import { useSearchParams } from "next/navigation";
import {
	useCoursesQuery,
	useEnrolledCoursesQuery,
	useViewedCoursesQuery,
} from "@/services/course.service";

type Props = {
	allCourses?: boolean;
	limit?: number;
	start?: number;
	type?: string;
	enrolled?: boolean;
	viewed?: boolean;
};

export default function CourseList({
	allCourses,
	limit = 4,
	start = 0,
	type,
	enrolled = false,
	viewed = false,
}: Props) {
	const searchParams = useSearchParams();
	const {
		data: courses,
		isLoading,
		error,
	} = enrolled
		? useEnrolledCoursesQuery({})
		: viewed
			? useViewedCoursesQuery({})
			: useCoursesQuery({
					type,
					category: searchParams.get("category") || "",
					limit,
				});

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error loading courses. Please try again later.</p>;
	}

	return (
		<section className={styles["list-container"]}>
			<article className={styles["list"]}>
				{courses.map((course: CourseListItem) => (
					<CourseCard key={course.id} course={course} />
				))}
			</article>

		</section>
	);
}

"use client";
import { CourseListItem } from "@/types/Course";
import { CourseCard } from "../CourseCard/CourseCard";
import { useSearchParams } from "next/navigation";
import {
	useCoursesQuery,
	useEnrolledCoursesQuery,
	useViewedCoursesQuery,
} from "@/services/course.service";
import "./CourseList.css";

type Props = {
	allCourses?: boolean;
	limit?: number;
	start?: number;
	type?: string;
	enrolled?: boolean;
	viewed?: boolean;
};

export default function CourseList({
	limit = 4,
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
		return <p className="course-list__loading">Loading...</p>;
	}

	if (error) {
		return (
			<p className="course-list__error">
				Error loading courses. Please try again later.
			</p>
		);
	}

	return (
		<section className="course-list">
			<article className="course-list__items">
				{courses.map((course: CourseListItem) => (
					<CourseCard key={course.id} course={course} />
				))}
			</article>
		</section>
	);
}

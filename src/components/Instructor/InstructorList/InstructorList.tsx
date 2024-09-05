"use client";
import { useInstructorsQuery } from "@/services/instructor.service";
import InstructorCard from "../InstructorCard/InstructorCard";
import styles from "./InstructorList.module.css";
import { InstructorListItem } from "../InstructorCard/Instructor";
type Props = {
	type?: string;
	category?: string;
	limit?: number;
};
export default function InstructorList({ category, type, limit = 4 }: Props) {
	const {
		data: instructors,
		isLoading,
		error,
	} = useInstructorsQuery({
		category,
		type,
		limit,
	});
	console.log(instructors);
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {JSON.stringify(error)}</p>;
	return (
		<section className={styles["list-container"]}>
			<h2 className={styles["title"]}>Comma Experts</h2>
			<div className={styles["list"]}>
				{instructors &&
					instructors.map((instructor: InstructorListItem) => (
						<InstructorCard key={instructor.id} {...instructor} />
					))}
			</div>
		</section>
	);
}

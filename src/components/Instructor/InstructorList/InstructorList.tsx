"use client";
import { useInstructorsQuery } from "@/services/instructor.service";
import InstructorCard from "../InstructorCard/InstructorCard";
import styles from "./InstructorList.module.css";
import { InstructorListItem } from "../InstructorCard/Instructor";
import React from "react";

interface InstructorsListProps {
	type?: string;
	category?: string;
	limit?: number;
}

const InstructorsList: React.FC<InstructorsListProps> = ({
	category,
	type,
	limit = 4,
}) => {
	const {
		data: instructors,
		isLoading,
		error,
	} = useInstructorsQuery({
		category,
		type,
		limit,
	});

	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>Error: {JSON.stringify(error)}</p>;

	return (
		<section className={styles["list-container"]}>
			<div className={styles["list"]}>
				{instructors &&
					instructors.map((instructor: InstructorListItem) => (
						<InstructorCard key={instructor.id} {...instructor} />
					))}
			</div>
		</section>
	);
};

export default InstructorsList;

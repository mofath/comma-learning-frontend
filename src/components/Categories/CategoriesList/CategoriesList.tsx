"use client";
import { useCategoriesQuery } from "@/services/categories.service";
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import styles from "./CategoriesList.module.css";
import React from "react";

type categoryListItem = {
	id: number;
	name: string;
};

export default function CategoriesList() {
	const { data: categories, isLoading } = useCategoriesQuery({});
	console.log(categories);
	if (isLoading) return <div>Loading...</div>;
	return (
		<div className={styles.list}>
			{categories.map((category: categoryListItem) => {
				return (
					<CategoryBadge
						key={category.id}
						title={category.name}
						value={category.name}
					/>
				);
			})}
		</div>
	);
}

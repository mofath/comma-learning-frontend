import CourseList from "@/components/Courses/CourseList/CourseList";
import InstructorList from "@/components/Instructor/InstructorList/InstructorList";
import styles from "./coursesSlug.module.css";
import CategoriesList from "@/components/Categories/CategoriesList/CategoriesList";
export default function Page({ params }: { params: { slug: string } }) {
	return (
		<section className={`container ${styles["category-container"]}`}>
			<h2 className={styles["header"]}>{params.slug} Courses</h2>
			<CategoriesList />
			<CourseList type={params.slug} />
			<InstructorList type={params.slug} />
		</section>
	);
}

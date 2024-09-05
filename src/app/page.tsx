import styles from "./page.module.css";
import CourseList from "@/components/Courses/CourseList/CourseList";
// import InstructorList from "@/components/Instructor/InstructorList/InstructorList";
import ClientsList from "@/features/landingPage/components/ClientsList/ClientsList";
import StatisticsList from "@/features/landingPage/components/StatisticsList/StatisticsList";
import Banner from "@/features/landingPage/components/Banner/Banner";
// import CategoriesList from "@/components/Categories/CategoriesList/CategoriesList";
import UserReviewList from "@/components/User/UserReviewList/UserReviewList";
import { Suspense } from "react";
import Loader from "@/components/ui/Loader/Loader";
export default async function Home({
	searchParams,
}: {
	searchParams?: { category?: string };
}) {
	console.log(searchParams);
	return (
		<main className={styles.main}>
			<Banner />
			<h2 className={styles["section-header"]}>
				Choose category to learn more about the courses in this category
			</h2>
			<article className={`container ${styles["courses-collection"]}`}>
				<article>
					<h2 className={styles["courses-header"]}>recorded courses</h2>
					<CourseList type="recorded" />
				</article>
				<article>
					<h2 className={styles["courses-header"]}>interactive courses</h2>
					<CourseList type="interactive" />
				</article>
				<article>
					<h2 className={styles["courses-header"]}>offline courses</h2>
					<CourseList type="offline" />
				</article>
			</article>

			<ClientsList />
			<div className="container">
				{/* <InstructorList
					url={`${process.env.NEXT_PUBLIC_API_URL}instructors?_start=0&_limit=4`}
				/> */}
				<StatisticsList />
				<h2>Loved by Our Learners</h2>
				{/* <CategoriesList /> */}
				<Suspense fallback={<Loader />} key={JSON.stringify(searchParams)}>
					<UserReviewList category={searchParams?.category ?? "computer"} />
				</Suspense>
			</div>
		</main>
	);
}
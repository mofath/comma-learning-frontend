import CourseList from "@/components/Courses/CourseList/CourseList";
// import InstructorList from "@/components/Instructor/InstructorList/InstructorList";
import ClientsList from "@/features/landingPage/components/ClientsList/ClientsList";
import StatisticsList from "@/features/landingPage/components/StatisticsList/StatisticsList";
import Banner from "@/features/landingPage/components/Banner/Banner";
// import CategoriesList from "@/components/Categories/CategoriesList/CategoriesList";
import UserReviewList from "@/components/User/UserReviewList/UserReviewList";
import { Suspense } from "react";
import Loader from "@/components/ui/Loader/Loader";
import "./page.css";

export default async function Home({
	searchParams,
}: {
	searchParams?: { category?: string };
}) {
	return (
		<main className="main">
			<Banner />
			<h2 className="section-header">
				Choose category to learn more about the courses in this category
			</h2>
			<article className="container courses-collection">
				<article>
					<h2 className="courses-header heading-1">Recorded Courses</h2>
					<CourseList type="recorded" />
				</article>
				<article>
					<h2 className="courses-header heading-1">Interactive Courses</h2>
					<CourseList type="interactive" />
				</article>
				<article>
					<h2 className="courses-header heading-1">Offline Courses</h2>
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


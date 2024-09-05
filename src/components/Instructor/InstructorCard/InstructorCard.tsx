import Image from "next/image";
import styles from "./InstructorCard.module.css";
import { InstructorListingResponse } from "@/services/instructor.service";
export default function InstructorCard({
	name,
	coursesCount,
	reviewsCount,
	jobTitle,
	organization,
	avatarUrl,
}: Readonly<InstructorListingResponse>) {
	return (
		<section className={styles["instructor-card"]}>
			<div className={styles.aside}>
				{true && (
					<div className={styles["top-rated-badge"]}>
						<p>Top Rated</p>
					</div>
				)}
				<div className={styles["image-container"]}>
					<Image
						className={styles.image}
						src={avatarUrl}
						alt="instructor image"
						fill
					/>
				</div>
			</div>
			<header className={styles.header}>
				<h2 className={styles.title}>{name}</h2>
			</header>
			<div className={styles.info}>
				<p className={styles["position"]}>
					{jobTitle} at <span>{organization}</span>
				</p>
			</div>
			<div className={styles["session-review"]}>
				<p className={styles["sessions"]}>{coursesCount} sessions</p>
				<p className={styles["reviews"]}>({reviewsCount} reviews)</p>
			</div>
		</section>
	);
}

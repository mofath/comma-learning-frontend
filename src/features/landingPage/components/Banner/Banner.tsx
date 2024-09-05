import Image from "next/image";
import styles from "./Banner.module.css";
import BannerReviewCard from "./Component/BannerReviewCard/BannerReviewCard";
export default function Banner() {
	return (
		<section className={`container ${styles["banner"]}`}>
			<div className={styles["content"]}>
				<div className={styles["left"]}>
					<ul className={styles["type-list"]}>
						<li className={styles["type-item"]}>Instructor</li>
						<li className={styles["type-item"]}>Trainee</li>
					</ul>
					<h1 className={styles["header"]}>
						Build an epic career with expert mentors today
					</h1>
					<h2 className={styles["sub-header"]}>
						Book and meet over 24,318+ mentors for 1:1 mentorship in our global
						community.
					</h2>
				</div>
				<div className={styles["right"]}>
					<div className={styles["review-cards"]}>
						<BannerReviewCard
							style={{
								position: "absolute",
								top: 0,
								left: -10,
								translate: "0px -50%",
							}}
						/>
						<BannerReviewCard
							style={{
								position: "absolute",
								top: "50%",
								translate: "-50% -50%",
								left: 0,
							}}
						/>
						<BannerReviewCard
							style={{
								position: "absolute",
								bottom: -25,
								left: "00%",
								translate: "18% 0",
							}}
						/>
					</div>

					<Image
						src="/images/card-placeholder.png"
						alt="banner"
						width={384}
						height={300}
					/>
				</div>
			</div>
			<footer className={styles["footer"]}>
				15+ Years engineering learning experience.
			</footer>
		</section>
	);
}

import Image from "next/image";
import BannerReviewCard from "./Component/BannerReviewCard/BannerReviewCard";
import "./Banner.css";

const Banner = () => {
	return (
		<section className="banner">
			<div className="banner__content">
				{/* Text section */}
				<div className="banner__text-section">
					<ul className="banner__tabs-list">
						<li className="banner__tab">Instructor</li>
						<li className="banner__tab">Trainee</li>
					</ul>
					<div className="banner__text">
						<h2>Build an epic career with expert mentors today</h2>
						<p>
							Book and meet over 24,318+ mentors for 1:1 mentorship in our
							global community.
						</p>
					</div>
				</div>
				{/* Visual section */}
				<div className="banner__visual-section">
					<div className="banner__review-cards">
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
						width={400}
						height={350}
					/>
				</div>
			</div>
			<footer className="banner__footer">
				<p> 15+ Years engineering learning experience.</p>
			</footer>
		</section>
	);
};

export default Banner;

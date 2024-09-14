import Image from "next/image";
import "./InstructorCard.css";

interface ExpertCardProps {
	name: string;
	coursesCount: number;
	reviewsCount: number;
	jobTitle: string;
	organization: string;
	avatarUrl: string;
}

const ExpertCard: React.FC<ExpertCardProps> = ({
	name,
	coursesCount,
	reviewsCount,
	jobTitle,
	organization,
	avatarUrl,
}) => {
	return (
		<section className="expert-card">
			<div className="expert-card__image-section">
				<div className="expert-card__top-rated-badge">
					<p>Top Rated</p>
				</div>
				<div className="expert-card__image-container">
					<Image
						className="expert-card__image"
						src={avatarUrl}
						alt="instructor image"
						width={340}
						height={358}
					/>
				</div>
			</div>

			<header className="expert-card__header">
				<h2 className="expert-card__title">{name}</h2>
			</header>

			<div className="expert-card__info">
				<p className="expert-card__position">
					{jobTitle} at <span>{organization}</span>
				</p>
			</div>

			<div className="expert-card__session-review">
				<p className="expert-card__sessions">{coursesCount} sessions</p>
				<p className="expert-card__reviews">({reviewsCount} reviews)</p>
			</div>
		</section>
	);
};

export default ExpertCard;

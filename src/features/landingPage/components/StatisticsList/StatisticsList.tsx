import Image from "next/image";
import { STATISTICS } from "@/constants/statistics";
import "./StatisticsList.css";

export default async function StatisticsList() {
	const statistics: { name: string; value: number; icon: string }[] =
		STATISTICS;
	return (
		<div className="statistics-section">
			<h2 className="statistics__header">Most importants clients</h2>
			<div className="statistics__sub-header">
				We measure our Success by our driven values
			</div>
			<div className="statistics-list">
				{statistics.map((statistic, index) => (
					<div key={index} className="statistics-item">
						<div className="statistics__title">
							<Image
								className="statistics__icon"
								src={statistic.icon}
								alt={statistic.name}
								width={25}
								height={25}
							/>
							<p>{statistic.name}</p>
						</div>
						<div className="statistics__value">+{statistic.value}</div>
					</div>
				))}
			</div>
		</div>
	);
}

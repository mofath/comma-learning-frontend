import Image from "next/image";
import styles from "./StatisticsList.module.css";
import { STATISTICS } from "@/constants/statistics";

export default async function StatisticsList() {
	const statistics: { name: string; value: number; icon: string }[] =
		STATISTICS;
	return (
		<div className={`${styles["statistics-section"]}`}>
			<h2 className={styles["statistics__header"]}>most importants clients</h2>

			<div className={styles["statistics__sub-header"]}>
				We measure our Success by our driven values
			</div>
			<div className={styles["statistics-list"]}>
				{statistics.map((statistic, index) => (
					<div key={index} className={styles["statistics-item"]}>
						<div className={styles["statistics__title"]}>
							<Image
								className={styles["statistics__icon"]}
								src={statistic.icon}
								alt={statistic.name}
								width={25}
								height={25}
							/>
							<p>{statistic.name}</p>
						</div>
						<div className={styles["statistics__value"]}>
							+{statistic.value}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

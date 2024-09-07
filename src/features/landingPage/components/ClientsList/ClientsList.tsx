import Image from "next/image";
import styles from "./ClientsList.module.css";
import { CLIENTS } from "@/constants/clients";

export default async function ClientsList() {
	const clients: { id: string; logo: string }[] = CLIENTS;
	return (
		<div className={styles["clients"]}>
			<h2 className={styles["clients__header"]}>Most importants clients</h2>
			<div className={styles["clients__sub-header"]}>
				Trusted by the industry&apos;s best experts
			</div>
			<div className={styles["clients__list"]}>
				{clients.map((client, index) => (
					<Image
						key={index}
						src={`${client?.logo}`}
						alt={client.id}
						width={80}
						height={80}
					/>
				))}
			</div>
		</div>
	);
}

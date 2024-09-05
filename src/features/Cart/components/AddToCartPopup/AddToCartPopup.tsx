import React from "react";
import styles from "./AddToCartPopUp.module.css";
import Button from "@/components/ui/Button/Button";
type Props = {
	title: string;
	status?: string;
	updated_at: string;
	length: number;
	description: string;
};

export default function AddToCartPopUp({
	title,
	status,
	updated_at,
	length,
	description,
}: Props) {
	return (
		<section className={styles["card"]}>
			<p className={styles["header"]}>{title}</p>
			<div className={styles["info"]}>
				{status && <p className={styles["status-badge"]}>{status}</p>}
				<p className={styles["last-updated"]}>Updated at {updated_at}</p>
			</div>
			<div>
				<p className={styles["duration"]}>{length / 60} total hours</p>
				<p className={styles["description"]}>{description}</p>
			</div>

			<div className={styles["actions"]}>
				<Button
					variant="accent"
					className={styles["add-to-cart-button"]}
					size="medium"
				>
					Add To Cart
				</Button>
			</div>
		</section>
	);
}

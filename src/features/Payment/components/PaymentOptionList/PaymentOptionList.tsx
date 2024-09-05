"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import React, { useState } from "react";
import styles from "./PaymentOptionList.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import AddCardModal from "../AddCardModal/AddCardModal";

type Props = {
	onSelect?: (value: string) => void;
};

export default function PaymentOptionList({ onSelect }: Props) {
	const [isCardModalOpen, setIsCardModalOpen] = useState(false);

	const switchCardModal = () => {
		setIsCardModalOpen((prev) => !prev);
	};

	return (
		<>
			<RadioGroup.Root
				className={styles["radio-group-root"]}
				defaultValue="default"
				aria-label="Payment Options"
			>
				<div className={styles["list-item"]}>
					<div>
						<RadioGroup.Item
							className={styles["radio-group-item"]}
							value="card"
							id="r1"
						>
							<RadioGroup.Indicator
								className={styles["radio-group-indicator"]}
							/>
						</RadioGroup.Item>
						<label className={styles["label"]} htmlFor="r1">
							Your credit and debit cards
						</label>
					</div>
					<Button
						variant="transparent"
						size="fit"
						className={styles["item-action"]}
						onClick={() => switchCardModal()}
					>
						<Image
							src="/images/payment/visa.png"
							alt="cards"
							width={40}
							height={20}
						/>
						+ Add a credit or Debit card
					</Button>
				</div>
				<hr className="divider" />
				<div className={styles["list-item"]}>
					<div>
						<RadioGroup.Item
							className={styles["radio-group-item"]}
							value="valu"
							id="valu"
						>
							<RadioGroup.Indicator
								className={styles["radio-group-indicator"]}
							/>
						</RadioGroup.Item>
						<Image
							src="/images/payment/valu.png"
							alt="valu"
							width={40}
							height={20}
						/>
						<label className={styles["label"]} htmlFor="valu">
							Buy now pay later
						</label>
					</div>
					<p className={styles["item-description"]}>
						valU Installment payments up to 60 months at 4.08% monthly interest
						rate. Please select this payment method only if you are a valU
						registered customer. <Link href="/valu">Learn more</Link>
					</p>
				</div>
				<hr className="divider" />
				<div className={styles["list-item"]}>
					<div>
						<RadioGroup.Item
							className={styles["radio-group-item"]}
							value="e-wallet"
							id="ewallet"
						>
							<RadioGroup.Indicator
								className={styles["radio-group-indicator"]}
							/>
						</RadioGroup.Item>
						<label className={styles["label"]} htmlFor="ewallet">
							E-wallets
						</label>
					</div>
					<p className={styles["item-description"]}>
						Effortless Payment: Seamlessly Transact Course Fees via E-Wallets
					</p>
				</div>
				<hr className="divider" />
				<div className={styles["list-item"]}>
					<RadioGroup.Item
						className={styles["radio-group-item"]}
						value="cash-machine"
						id="cash-machine"
					>
						<RadioGroup.Indicator className={styles["radio-group-indicator"]} />
					</RadioGroup.Item>
					<label className={styles["label"]} htmlFor="cash-machine">
						Cash-machines
					</label>
				</div>
			</RadioGroup.Root>

			<AddCardModal open={isCardModalOpen} onOpenChange={setIsCardModalOpen} />
		</>
	);
}

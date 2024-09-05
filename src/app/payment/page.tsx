"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import OrderSummary from "@/features/Payment/components/OrderSummary/OrderSummary";
import clsx from "clsx";
import Input from "@/components/ui/Form/Input/Input";
import Button from "@/components/ui/Button/Button";
import PlusIcon from "@/../public/svg/plus_2.svg";
import { useForm } from "react-hook-form";
import PaymentOptionList from "@/features/Payment/components/PaymentOptionList/PaymentOptionList";
import SuccessModal from "@/features/Payment/components/SuccessModal/SuccessModal";
import { useCartQuery } from "@/services/cart.service";
interface PurchaseCourseFormData {
	courseName: string;
	coursePrice: number;
	courseDiscount: number;
	coursePromoCode: string;
	courseFriendEmail: string;
	courseFriendEmails: string[];
}
function PaymentPage() {
	const [numberOfInvites, setNumberOfInvites] = useState(2);
	const { handleSubmit } = useForm<PurchaseCourseFormData>();
	const [isSuccesModalOpen, setIsSuccesModalOpen] = useState(false);
	const { data } = useCartQuery();

	const switchSuccessModal = () => {
		setIsSuccesModalOpen((prev) => !prev);
	};
	const onSubmit = (data: PurchaseCourseFormData) => {
		console.log("New password form data: ", data);
	};
	return (
		<main className="container">
			<h1 className={styles["heading"]}>
				Checkout <span>({data?.items.length} courses)</span>
			</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ol className={styles["steps-list"]}>
					<li className={styles["step-item"]}>
						<h2 className={styles["step-heading"]}>Choose Payment Options</h2>
						<div
							className={clsx(
								styles["step-container"],
								styles["payment-options"]
							)}
						>
							<PaymentOptionList />
							<OrderSummary
								className={styles["order-summary"]}
								price={data?.totalPrice!}
								discount={200}
							/>
						</div>
					</li>
					<li className={styles["step-item"]}>
						<h2 className={styles["step-heading"]}>offers</h2>
						<div
							className={clsx(
								styles["step-container"],
								styles["offers-options"]
							)}
						>
							<div>
								<h3 className={styles["offers-heading"]}>promocode</h3>
								<Input
									label="Write the Promocode"
									id="promocode"
									name="promocode"
									onChange={(e) => console.log(e.target.value)}
								/>
							</div>
							<div>
								<h3 className={styles["offers-heading"]}>Recommend A Friend</h3>
								<div className={styles["recommend-friend"]}>
									<div className={clsx(styles["recommend-friend-container"])}>
										{Array.from({ length: numberOfInvites }).map((_, index) => (
											<Input
												key={index}
												label={`Write your Friends Email`}
												id={`promocode-${index}`}
												name={`promocode-${index}`}
												onChange={(e) => console.log(e.target.value)}
											/>
										))}
									</div>
									<Button
										className={styles["add-friend-btn"]}
										variant="transparent"
										size="medium"
										onClick={() => setNumberOfInvites(numberOfInvites + 1)}
									>
										<PlusIcon />
									</Button>
								</div>
							</div>
						</div>
					</li>
				</ol>
				<Button
					onClick={() => {
						switchSuccessModal();
						// navigation.push("/");
					}}
					type="submit"
					variant="danger"
					className={styles["payment-btn"]}
				>
					use this Payment method
				</Button>
			</form>
			<SuccessModal
				open={isSuccesModalOpen}
				onOpenChange={setIsSuccesModalOpen}
			/>
		</main>
	);
}

export default PaymentPage;

"use client";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/Form/Input/Input";
import Button from "@/components/ui/Button/Button";
import TextArea from "@/components/ui/Form/Textarea/TextArea";
import FileUploader from "@/components/ui/Form/FileUploader/FileUploader";
import styles from "./HelpCenter.module.css";

interface HelpCenterFormData {
	fullName: string;
	email: string;
	message: string;
	attachment?: string;
}

const HelpCenterPage = () => {
	const {
		register,
		//  handleSubmit
	} = useForm<HelpCenterFormData>();

	// const onSubmit = (data: HelpCenterFormData) => {
	// 	console.log("Signin form data: ", data);
	// };

	return (
		<div className={styles["help-center-page"]}>
			<div className={styles["help-center-page__content"]}>
				<div className={styles["help-center-page__text-wrapper"]}>
					<div className={styles["help-center-page__text-wrapper__text"]}>
						<h1> Help Center</h1>
						<p>
							Your satisfaction is our top priority. We're dedicated to
							providing you with the assistance you need to make the most of our
							products and services.
						</p>
					</div>
				</div>
				<div className={styles["help-center-page__form-wrapper"]}>
					<form>
						<div className={styles["help-center__form-group"]}>
							<Input
								label={"Full name"}
								{...register("fullName", { required: "Full name is required" })}
							/>
							<Input
								label={"Enter your Email"}
								{...register("email", {
									required: "Email is required",
								})}
							/>
						</div>
						<div className={styles["help-center__form-group"]}>
							<TextArea
								label={"How can we help you?"}
								{...register("message", {
									required: "Message is required",
								})}
							/>
						</div>
						<div className={styles["help-center__form-group"]}>
							<FileUploader
								label={"Attachment"}
								// {...register("attachment")}
							/>
						</div>
						<div className={styles["help-center__button-wrapper"]}>
							<Button variant="primary" size="large">
								Send
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default HelpCenterPage;

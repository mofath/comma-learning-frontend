"use client";
import React from "module";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { generateValidationSchema } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useResetPasswordMutation } from "@/services";
import Input from "@/components/ui/Form/Input/Input";
import Button from "@/components/ui/Button/Button";
import ROUTES from "@/constants/routes";
import styles from "./NewPasswordForm.module.css";

interface NewPasswordFormData {
	password: string;
	confirmPassword: string;
}

interface NewPasswordFormProps {
	email: string;
}

const schema = generateValidationSchema(["password", "confirmPassword"]);

const NewPasswordForm: React.FC<NewPasswordFormProps> = ({ email }) => {
	const router = useRouter();

	const [resetPassword, { isLoading }] = useResetPasswordMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewPasswordFormData>({
		resolver: yupResolver(schema) as any,
	});

	const onSubmit = async (data: NewPasswordFormData) => {
		try {
			await resetPassword({
				newPassword: data.password,
				email,
			}).unwrap();
			toast.success("Password updated successfully.");
			localStorage.removeItem("resetToken");
			router.push(ROUTES.SIGNIN);
		} catch (error) {
			toast.error("Failed to reset password.");
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles["new-password-form__form"]}
		>
			<div>
				<Input
					type="password"
					label={"Enter your new password"}
					{...register("password")}
					error={errors.password}
				/>
				<Input
					type="password"
					label={"Confirm password"}
					{...register("confirmPassword")}
					error={errors.confirmPassword}
				/>
			</div>
			<div className={styles["new-password-form__button-wrapper"]}>
				<Button
					type="submit"
					variant="primary"
					size="large"
					isLoading={isLoading}
				>
					Confirm
				</Button>
			</div>
		</form>
	);
};

export default NewPasswordForm;

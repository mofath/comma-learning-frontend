"use client";
import styles from "./Button.module.css";
import { ReactNode, ButtonHTMLAttributes, MouseEventHandler } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| "primary"
		| "secondary"
		| "danger"
		| "transparent"
		| "outline"
		| "primary-outline"
		| "accent";
	children: ReactNode;
	className?: string;
	radius?: "large" | "full";
	size?: "small" | "medium" | "large" | "full" | "fit";
	fullWidth?: boolean;
	isLoading?: boolean;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
	variant,
	children,
	className,
	radius,
	size,
	fullWidth = false,
	isLoading = false,
	disabled = false,
	onClick = () => {},
	type = "button",
	...props
}: Readonly<ButtonProps>) {
	return (
		<button
			type={type}
			className={`${styles.button} ${styles[`button--${variant}`]} ${className}
            ${styles[`button--rounded-${radius}`] || ""}
            ${styles[`button--${size}`] || ""}
            `}
			onClick={onClick}
			disabled={disabled}
			{...props}
		>
			{isLoading ? "Loading..." : children}
		</button>
	);
}

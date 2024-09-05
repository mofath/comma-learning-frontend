import React, { useState } from "react";
import styles from "./Collapsible.module.css";
import Image from "next/image";

interface CollapsibleProps {
	children: React.ReactNode;
	title: string;
	subtitle?: string;
	className?: string;
}

const Collapsible: React.FC<CollapsibleProps> = ({
	children,
	title,
	subtitle,
	className = "",
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (event.keyCode === 40) {
			event.preventDefault();
			setIsExpanded(true);
		}

		if (event.keyCode === 38) {
			event.preventDefault();
			setIsExpanded(false);
		}
	};

	return (
		<div className={`${className} ${styles["collapsible"]}`}>
			<button
				className={styles["collapsible__header"]}
				onClick={handleToggle}
				onKeyDown={handleKeyDown}
				aria-expanded={isExpanded}
			>
				<div className={styles["collapsible__header__content"]}>
					<div>
						<p className={styles["collapsible__header-content__title"]}>
							{title}
						</p>
						{subtitle && (
							<p className={styles["collapsible__header-content__subtitle"]}>
								{subtitle}
							</p>
						)}
					</div>
					<i className={styles["collapsible__header-content__icon"]}>
						{isExpanded ? (
							<Image
								src="/svg/arrow-chevron-right.svg"
								alt="Arrow icon"
								width={30}
								height={30}
								priority
							/>
						) : (
							<Image
								src="/svg/arrow-chevron-down.svg"
								alt="Arrow icon"
								width={30}
								height={30}
								priority
							/>
						)}
					</i>
				</div>
			</button>
			<div className={styles["collapsible__body"]} aria-hidden={!isExpanded}>
				{children}
			</div>
		</div>
	);
};

export default Collapsible;

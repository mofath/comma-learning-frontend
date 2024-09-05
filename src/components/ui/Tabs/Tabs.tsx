import React, { useState, ReactElement } from "react";
import styles from "./Tabs.module.css";

interface TabProps {
	children: React.ReactNode;
	title: string;
}

interface TabsProps {
	children: ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
	const [selectedTab, setSelectedTab] = useState<number>(0);

	const handleTabClick = (index: number) => {
		setSelectedTab(index);
	};

	return (
		<div className={styles["tab-container"]}>
			<div className={styles["tabs"]}>
				{children.map((child, index) => (
					<div
						key={index}
						onClick={() => handleTabClick(index)}
						className={`${styles["tabs__tab"]} ${selectedTab === index ? styles["tabs__tab--active"] : ""}`}
					>
						{child.props.title}
					</div>
				))}
			</div>
			<div className={styles["tabs__tab-content"]}>
				{children[selectedTab].props.children}
			</div>
		</div>
	);
};

export default Tabs;

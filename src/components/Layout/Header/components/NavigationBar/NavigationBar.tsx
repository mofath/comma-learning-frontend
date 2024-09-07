import React from "react";
// import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styles from "./NavigationBar.module.css";
import Link from "next/link";

export default function NavigationBar() {
	const navigationLinks = [
		{ name: "Offline Course", url: "/courses/offline" },
		{ name: "Online Course", url: "/courses/online" },
		{ name: "Recorded Course", url: "/courses/recorded" },
		{ name: "Learning Path", url: "/learning-path" },
		{ name: "Podcasts", url: "/podcasts" },
	];
	return (
		<nav className={styles["main-nav"]} aria-label="Main">
			<ul className={styles["main-nav__list"]}>
				{navigationLinks.map((link) => (
					<li key={link.name} className={styles["main-nav__item"]}>
						<Link href={link.url}>{link.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

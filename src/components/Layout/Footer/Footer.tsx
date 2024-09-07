import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
	const footerLinks = [
		{
			items: [
				"Comma",
				{ text: "Comma", href: "/" },
				{ text: "About Comma", href: "/about" },
				{ text: "Comma Experts", href: "/experts" },
				{ text: "Vacancies", href: "/vacancies" },
				{ text: "Help Center", href: "/help" },
			],
		},
		{
			items: [
				{ text: "Discover", href: "" },
				{ text: "Recorded courses", href: "/courses/recorded" },
				{ text: "Interactive courses", href: "/courses/interactive" },
				{ text: "Offline courses", href: "/courses/offline" },
				{ text: "Podcasts", href: "podcasts" },
				{ text: "Learning Paths", href: "paths" },
			],
		},
		{
			items: [
				"Help Center",
				"FAQs",
				"Contact Us",
				"20 st-Nasr city -behind el shohadaa mosque",
			],
		},
	];
	return (
		<footer className={styles["footer"]}>
			<div className={`container ${styles["container"]}`}>
				<div className={styles["left"]}>
					<div>
						<h3 className={styles["footer__heading"]}>Ready to get started?</h3>
						<Button variant="danger" size="medium">
							Get Started
						</Button>
					</div>
					<div>
						<ul className={styles["footer__rules"]}>
							<li>
								<Link href="terms">Terms of Service</Link>
							</li>
							<li>
								<Link href="policy">Privacy Policy</Link>
							</li>
						</ul>
						<p className={styles["footer__copy-rights"]}>
							Copyright © 2020. LogoIpsum. All rights reserved.
						</p>
					</div>
				</div>
				<div className={styles["right"]}>
					{footerLinks.map((section, index) => (
						<ul key={index} className={styles["footer__links"]}>
							{section.items.map((item, idx) => (
								<li key={idx}>
									{typeof item === "string" ? (
										<p>{item}</p>
									) : (
										<Link href={item.href}>{item.text}</Link>
									)}
								</li>
							))}
						</ul>
					))}
				</div>
			</div>
		</footer>
	);
}

import React from "react";
import type { Metadata } from "next";
import { Aclonica, Nunito_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Providers } from "../store/provider";
import "react-toastify/dist/ReactToastify.css";

const aclonica = Aclonica({
	weight: "400",
	variable: "--font-aclonica",
	subsets: ["latin"],
	display: "swap",
});

const nunito = Nunito_Sans({
	weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
	variable: "--font-nunito-sans",
	subsets: ["latin"],
	display: "swap",
});
import "@/styles/index.css";
import Header from "@/components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

export const metadata: Metadata = {
	title: "Comma | Online Courses",
	description: "Unlock Your Potential with Anytime, Anywhere Learning",
	icons: "/favicon.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${aclonica.variable} ${nunito.variable}`}>
			<body>
				<Providers>
					<Header />
					{children}
					<Footer />
					<ToastContainer />
				</Providers>
			</body>
		</html>
	);
}

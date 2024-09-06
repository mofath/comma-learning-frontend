import React from "react";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Providers } from "../store/provider";
import Header from "@/components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/index.css";

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
		<html lang="en">
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

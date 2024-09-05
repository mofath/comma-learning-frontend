"use client";
import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Button from "@/components/ui/Button/Button";
import styles from "./Header.module.css";
import CartButton from "@/features/Cart/components/CartButton/CartButton";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import { useAuthUser } from "@/hooks/useAuthUser";
import { logout } from "@/store";
import { useAppDispatch } from "@/store/hooks";
// import UserAvatarCard from "@/components/User/UserAvatarCard/UserAvatarCard";
export default function Header() {
	const { isAuthenticated } = useAuthUser();
	const dispatch = useAppDispatch();
	return (
		<nav>
			<div className={`${styles["main-nav"]} container`}>
				<Link href="/">
					<Image
						className="main-nav__logo"
						src={"/images/logo.svg"}
						alt="Logo"
						width={100}
						height={100}
					/>
				</Link>
				<NavigationBar />
				<div className={styles["nav__button-group"]}>
					<LanguageSelector />
					{isAuthenticated ? (
						<>
							<CartButton />
							<Button
								onClick={() => {
									dispatch(logout());
								}}
								variant="secondary"
								className={styles["logout-btn"]}
							>
								Logout
							</Button>
						</>
					) : (
						<div className="nav__button-group">
							{/* <Link href="/auth/sign-up">
								<Button variant="secondary" className={styles["register-btn"]}>
									Register
								</Button>
							</Link> */}
							<Link href="/auth/sign-in">
								<Button variant="secondary" className={styles["register-btn"]}>
									login
								</Button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

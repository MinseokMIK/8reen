import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import styles from "./layout.module.css";
import backArrow from "../../public/icons/back_light_Arrow.png";
import Navbar from "./components/navbar/navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "8REEN",
  description: "친환경 우산 공유 8REEN",
};

export const viewport = {
  themeColor: "#11ff58",
  content: "width=device-width, initial- scale=1.0, user - scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <body className={inter.className}>
        <header className={styles.header}>
          <Link href="/">
            <Image src={backArrow} alt={"뒤로가기"}></Image>
          </Link>
          <Link href="/">
            <infoNav>홈</infoNav>
          </Link>
        </header>
        <mainContents className={styles.mainContents}>{children}</mainContents>
        <footer className={styles.footer}>
          <Navbar></Navbar>
        </footer>
      </body>
    </html>
  );
}

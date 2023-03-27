import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import ArticleSection from "@/components/ArticleSection";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container-sm mx-auto">
      <HeroSection />
      <ArticleSection />
    </main>
  );
}

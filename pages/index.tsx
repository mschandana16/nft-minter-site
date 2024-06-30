import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import styles2 from "./globals.css";
// import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MintingSection from "../components/MintingSection";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import { Archivo_Black } from "next/font/google";

const archivoB = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
});

const Home: NextPage = () => {
  return (
    <main className={archivoB.className}>
      {/* <Navbar /> navbar not added purposefully, to maintain flow of UI*/}
      <div>
        <HeroSection />
        <MintingSection />
        <Gallery />
      </div>
      <Footer />
    </main>
  );
};

export default Home;

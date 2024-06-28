import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import styles2 from "./globals.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MintingSection from "../components/MintingSection";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MintingSection />
      <ConnectButton />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";

import { CgMail } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

import logo from "../assets/logoFull2.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-screen bg-black h-52 flex justify-center items-center border-t-2 border-green-300">
      <footer className="footer footer-center text-white/70">
        <aside>
          <Image src={logo} className="w-52 h-14" />
          <p className="font-bold">Minting your NFTs since 2023</p>
          <p>Copyright © ${new Date().getFullYear()} - All rights reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://mail.google.com/mail/">
              <CgMail size={30} />
            </a>
            <a href="https://twitter.com/?lang=en">
              <BsTwitterX size={23} />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram size={26} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

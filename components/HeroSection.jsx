"use client";
import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 0,
        delay: 0.3,
      })
        .from(["#msg-1", "#msg-2", "#msg-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#msg-1", "#msg-2", "#msg-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#main-msg", {
          opacity: 0,
          duration: 0.3,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="h-screen p-10 bg-[#171717] absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight text-white/70"
        >
          <h1 className="text-6xl" id="msg-1">
            Let's mint
          </h1>
          <h1 className="text-6xl" id="msg-2">
            some NFTs,
          </h1>
          <h1 className="text-6xl" id="msg-3">
            shall we?
          </h1>
        </div>
      </div>

      <div className="w-screen h-screen bg-black text-white flex flex-col lg:flex-row items-center lg:justify-around sticky top-0 overflow-x-hidden p-5">
        <div id="main-msg" className="text-center lg:text-left mb-5 lg:mb-0">
          <h1 className="text-7xl leading-tight mb-2">Create.</h1>
          <h1 className="text-7xl leading-tight text-green-400 mb-2 animate-pulse animate-once animate-duration-[3000ms]">
            Mint.
          </h1>
          <h1 className="text-7xl leading-tight mb-2">Showcase.</h1>
        </div>
        <div className="max-w-xs max-h-xs text-left">
          <p className="font-mono text-xl text-white/30">
            Transform your creative visions into unique digital assets with
            ease. Join a community of innovators and leave your mark in the
            digital art world. All this and more at{" "}
            <span className="text-green-400">Mintory.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

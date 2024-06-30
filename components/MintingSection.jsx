"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const MintingSection = () => {
  const [status, setStatus] = useState("idle"); // 'idle', 'minting', 'minted'

  const handleMintClick = () => {
    setStatus("minting");
    setTimeout(() => {
      setStatus("minted");
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  useEffect(() => {
    let timeout1, timeout2;

    if (status === "minted") {
      timeout1 = setTimeout(() => {
        setStatus("mint");
      }, 3000); // 5000 milliseconds = 5 seconds
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [status]);

  return (
    <div className="w-screen h-screen bg-black text-white flex items-center justify-center sticky top-0 border-t-2 border-green-300">
      {/* <div className="bg-opacity-30 bg-gradient-to-r from-[#ffffff1a] to-[#ffffff00] backdrop-blur-md w-4/5 h-4/5 rounded-2xl border-[#ffffff2e] shadow-2xl"></div> */}

      <div className="flex flex-col md:flex-row bg-white/5 z-10 backdrop-filter backdrop-blur-xl shadow-inner shadow-white/30 rounded-2xl lg:w-[58%] w-3/5 lg:h-[70%]   h-[85%]  border-white/40">
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 p-4">
              <div className="mt-2 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-5">
                {/* <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row"> */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="nftName"
                    className="block text-green-400 text-md font-mono font-medium leading-6"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <div className=" w-[350px] flex rounded-md shadow-sm ring-1 ring-gray-400 sm:max-w-md mb--1">
                      <input
                        type="text"
                        name="nftName"
                        id="nftName"
                        autoComplete="nftName"
                        className=" block flex-1 border-0 font-mono bg-transparent py-1.5 pl-1 text-gray placeholder:text-gray focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Name your NFT"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="nftDesc"
                    className="block mt--1 text-green-400 text-md font-mono font-medium leading-6 "
                  >
                    Description
                  </label>
                  <div className="mt-1 w-[350px]">
                    <textarea
                      id="nftDesc"
                      name="nftDesc"
                      rows={2}
                      maxLength={150}
                      className="block w-full font-mono rounded-md border-0 py-1.5 bg-transparent ring-1 ring-gray-400 text-gray sm:text-sm sm:leading-6"
                      defaultValue={""}
                      placeholder="Describe your NFT"
                    />
                  </div>
                </div>

                <div className="col-span-full mt--1">
                  <label
                    htmlFor="nftText"
                    className=" text-green-400 text-md font-mono font-medium leading-6 text-center items-center justify-center"
                  >
                    Your NFT goes below
                  </label>
                  <div className="mt-2 flex justify-start rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="nftUpload"
                          className="relative cursor-pointer rounded-md  text-md font-mono font-medium text-green-400  hover:text-white/50 transition duration-200"
                        >
                          <span>Upload your NFT</span>
                          <input
                            id="nftUpload"
                            name="nftUpload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1 text-md font-mono font-medium text-white/50">
                          or drag and drop
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-md font-mono font-medium text-white/50">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-row justify-center items-center lg:mr-10 lg:ml-10 lg:mb-10 lg:mt-5 md:flex-col gap-20">
          <button
            className="w-32 h-[38px] mb md:gap-2 font-mono text-green-400 bg-[#242424] rounded-md hover:text-white/30 transition-duration-200 transform hover:scale-105 transition-transform duration-300"
            onClick={handleMintClick}
            disabled={status === "minting"}
          >
            {status === "minting"
              ? "Minting..."
              : status === "minted"
              ? "Minted!"
              : "Mint"}
          </button>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default MintingSection;

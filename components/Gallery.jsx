import React from "react";
import Image from "next/image";

import nft1 from "../assets/nft1.jpg";
import nft2 from "../assets/nft2.jpg";
import nft3 from "../assets/nft3.jpg";
import nft4 from "../assets/nft4.jpg";
import nft5 from "../assets/nft5.jpg";
import nft6 from "../assets/nft6.jpg";
import nft7 from "../assets/nft7.jpg";
import nft8 from "../assets/nft8.jpg";
import nft9 from "../assets/nft9.jpg";
import nft10 from "../assets/nft10.jpg";

import styles from "./Slider.module.css";

const Gallery = () => {
  return (
    <div className="w-screen h-screen bg-black text-white flex s-center justify-center sticky top-0 border-t-2 border-green-300">
      <h1 className="text-2xl pt-3 text-white/50 md:ml-2 -z-10">Gallery </h1>
      <div className={styles.slider}>
        <div className={styles.list}>
          <div className={styles.item} style={{ "--position": 1 }}>
            <Image src={nft1} alt="" className={styles.imge} />
          </div>
          <div className={styles.item} style={{ "--position": 2 }}>
            <Image src={nft2} alt="" className={styles.imge} />
          </div>
          <div className={styles.item} style={{ "--position": 3 }}>
            <Image src={nft3} alt="" className={styles.imge} />
          </div>
          <div className={styles.item} style={{ "--position": 4 }}>
            <Image src={nft4} alt="" className={styles.imge} />
          </div>
          <div className={styles.item} style={{ "--position": 5 }}>
            <Image src={nft5} alt="" className={styles.imge} />
          </div>
          <div className={styles.item} style={{ "--position": 6 }}>
            <Image src={nft6} alt="" className={styles.imge} />
          </div>
          <div className={styles.item} style={{ "--position": 7 }}>
            <Image src={nft7} alt="" className={styles.imge} />
          </div>
          <div className={styles.item} style={{ "--position": 8 }}>
            <Image src={nft8} alt="" className={styles.imge} />
          </div>
          <div className={styles.item} style={{ "--position": 9 }}>
            <Image src={nft9} alt="" className={styles.imge} />
          </div>
          <div className={styles.item} style={{ "--position": 10 }}>
            <Image src={nft10} alt="" className={styles.imge} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// .slider {
//   width: 100%;
//   height: var(--height);
//   overflow: hidden;
//   mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
// }
// .slider .list {
//   display: flex;
//   width: 100%;
//   min-width: calc(var(--width) * var(--quantity));
//   position: relative;
// }
// .slider .list .item {
//   width: var(--width);
//   height: var(--height);
//   position: absolute;
//   left: 100%;
//   animation: autoRun 10s linear infinite;
//   transition: filter 0.5s;
//   animation-delay: calc(
//     (10s / var(--quantity)) * (var(--position) - 1)
//   ) !important;
// }
// .slider .list .item img {
//   width: 100%;
// }
// @keyframes autoRun {
//   from {
//     left: 100%;
//   }
//   to {
//     left: calc(var(--width) * -1);
//   }
// }
// .slider:hover .item {
//   animation-play-state: paused !important;
//   filter: grayscale(1);
// }
// .slider .item:hover {
//   filter: grayscale(0);
// }
// .slider[reverse="true"] .item {
//   animation: reversePlay 10s linear infinite;
// }
// @keyframes reversePlay {
//   from {
//     left: calc(var(--width) * -1);
//   }
//   to {
//     left: 100%;
//   }
// }

"use client";
import Image from "next/image";
import { merriweather700 } from "./fonts";
import { merriweather300 } from "./fonts";
import { useEffect, useState } from "react";

const img1 =
  "/images/Liverpool_Biennial_2021_6.jpg";
const img2 =
  "/images/Liverpool_Biennial_2021_15.jpg";
const img3 =
  "/images/Liverpool_Biennial_2021_25.jpg";
const img4 = "/images/1932753_10152784105652188_8026870824301859032_o.jpg";
const img5 = "/images/20211025_世界不隨人類生滅_0362_Small.jpg";
const img6 = "/images/20211025_世界不隨人類生滅_0400_Small.jpg";
const img7 = "/images/260206712_4869562623062814_13764506233909917_n.jpg";
const img8 = "/images/261044331_4869562289729514_4129391925890837253_n.jpg";
const img9 = "/images/210913160704.jpg";
const img10 = "/images/210913172042.jpg";
const img11 = "/images/card02_crop.png";
const img12 = "/images/cat_litter_cat.jpg";
const img13 = "/images/DSCF1747.jpg";
const img14 = "/images/small_演算法拷貝.png";
const img15 = "/images/Urinal-green_png-01.png";
const img16 = "/images/去背_6000px_2C5A6042-1.png";

const allsrc = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];
const mysrc = allsrc.map((src) => src);

export default function Home() {

  /*** Get window width and height on resize ***/
  
  // const [windowSize, setWindowSize] = useState([
  //   window.innerWidth,
  //   window.innerHeight,
  // ]);
  
  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize([window.innerWidth, window.innerHeight]);
  //   };

  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);
  let myw
  let myh
  if (typeof window !== "undefined") {
    //This code is executed in the browser
     myw = window.innerWidth
     myh = window.innerHeight
 }
  const [windowSize, setWindowSize] = useState([
    myw,
    myh,
  ]);
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  /*** Get mouse position ***/
  const [mousePos, setMousePos] = useState({});
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('pointermove', handleMouseMove);

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  /*** window width ***/
  const mywindowX = windowSize[0];
  /*** mouse x position ***/
  const mymousex = mousePos.x;
  /*** image src variable ***/
  let renderSrc;

  if (mymousex > 0 && mymousex < mywindowX * 0.06) {
    renderSrc = mysrc[0];
  } else if (mymousex > mywindowX * 0.06 && mymousex < mywindowX * 0.12) {
    renderSrc = mysrc[1];
  } else if (mymousex > mywindowX * 0.12 && mymousex < mywindowX * 0.18) {
    renderSrc = mysrc[2];
  } else if (mymousex > mywindowX * 0.18 && mymousex < mywindowX * 0.24) {
    renderSrc = mysrc[3];
  } else if (mymousex > mywindowX * 0.24 && mymousex < mywindowX * 0.3) {
    renderSrc = mysrc[4];
  } else if (mymousex > mywindowX * 0.3 && mymousex < mywindowX * 0.36) {
    renderSrc = mysrc[5];
  } else if (mymousex > mywindowX * 0.36 && mymousex < mywindowX * 0.42) {
    renderSrc = mysrc[6];
  } else if (mymousex > mywindowX * 0.42 && mymousex < mywindowX * 0.48) {
    renderSrc = mysrc[7];
  } else if (mymousex > mywindowX * 0.48 && mymousex < mywindowX * 0.54) {
    renderSrc = mysrc[8];
  } else if (mymousex > mywindowX * 0.54 && mymousex < mywindowX * 0.6) {
    renderSrc = mysrc[9];
  } else if (mymousex > mywindowX * 0.6 && mymousex < mywindowX * 0.66) {
    renderSrc = mysrc[10];
  } else if (mymousex > mywindowX * 0.66 && mymousex < mywindowX * 0.72) {
    renderSrc = mysrc[11];
  } else if (mymousex > mywindowX * 0.72 && mymousex < mywindowX * 0.78) {
    renderSrc = mysrc[12];
  } else if (mymousex > mywindowX * 0.78 && mymousex < mywindowX * 0.84) {
    renderSrc = mysrc[13];
  } else if (mymousex > mywindowX * 0.84 && mymousex < mywindowX * 0.9) {
    renderSrc = mysrc[14];
  } else if (mymousex > mywindowX * 0.96 && mymousex < mywindowX * 1) {
    renderSrc = mysrc[15];
  } else {
    renderSrc = mysrc[0];
  }

  return (
    <>
      {/* <div>
        The mouse is at position{" "}
        <b>
          ({mousePos.x}, {mousePos.y})
        </b>
      </div> */}
      {/* <div>{renderSrc}</div>
      <div>{mywindowX}</div>
      <div>{mywindowX * 0.2}</div> */}

      <div className="container h100 p">
        {/* text */}
        <div className={`w1-3`}>
          {/* tw text */}
          <div>
            <div className={`${merriweather700.className} fontPara pb15`}>
              不好意思這裡有些工事
            </div>
            <div className={"pb15"}>
              <div className={`${merriweather300.className} fontPara`}>
                CV、簡歷與作品請見：
              </div>
              <div className={`${merriweather300.className} fontPara`}>
                <a
                  target="_blank"
                  href="https://www.dropbox.com/sh/p1rjd4z2re0qo2d/AAAACleJsXc4AlzfdYvKS2Nxa?dl=0"
                >
                  這裡
                </a>
              </div>
            </div>
            <div>
              <div className={`${merriweather300.className} fontPara`}>
                更多個人素材：
              </div>
              <div className={`${merriweather300.className} fontPara`}>
                <a target="_blank" href="https://www.instagram.com/luojrshin/">
                  https://www.instagram.com/luojrshin/
                </a>
              </div>
            </div>
          </div>
          {/* en text */}
          <div className="bottom">
            <div className={`${merriweather700.className} fontPara pb15`}>
            Sorry, there is some construction going on here...
            </div>
            <div className={"pb15"}>
              <div className={`${merriweather300.className} fontPara`}>
              For CV, Bio, and projects you could visit:
              </div>
              <div className={`${merriweather300.className} fontPara`}>
                <a
                  target="_blank"
                  href="https://www.dropbox.com/sh/p1rjd4z2re0qo2d/AAAACleJsXc4AlzfdYvKS2Nxa?dl=0"
                >
                  Here
                </a>
              </div>
            </div>
            <div>
              <div className={`${merriweather300.className} fontPara`}>
              More personal material:
              </div>
              <div className={`${merriweather300.className} fontPara`}>
                <a target="_blank" href="https://www.instagram.com/luojrshin/">
                  https://www.instagram.com/luojrshin/
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className={`w2-3`}>
          <Image
            // priority
            className={`floatR`}
            src={renderSrc}
            width={500}
            height={500}
            alt="Picture of the author"
            sizes="50vw"
          />
        </div>
        <div className={`mobile`}>
          <Image
            // priority
            // className={`w100`}
            fill
            src={mysrc[0]}
            // width={200}
            // height={200}
            alt="Picture of the author"
            style={{objectFit:"cover"}}
            sizes="100vw"
          />
        </div>
      </div>
    </>
  );
}

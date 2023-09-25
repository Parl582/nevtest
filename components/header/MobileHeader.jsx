"use client";
import { NutOffIcon, User2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Headroom from "react-headroom";
import { useScrollHeight } from "./hooks";

const MobileHeader = () => {
  //   const [show, setShow] = useState(false);
  //   const [lastScrollY, setLastScrollY] = useState(0);

  //   const controlNavbar = () => {
  //     if (typeof window !== "undefined") {
  //       if (window.scrollY > lastScrollY) {
  //         // if scroll down hide the navbar
  //         setShow(false);
  //       } else {
  //         // if scroll up show the navbar
  //         setShow(true);
  //       }

  //       // remember current page location to use in the next move
  //       setLastScrollY(window.scrollY);
  //     }
  //   };

  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       window.addEventListener("scroll", controlNavbar);

  //       // cleanup function
  //       return () => {
  //         window.removeEventListener("scroll", controlNavbar);
  //       };
  //     }
  //   }, [lastScrollY]);

  //   new approce

  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true)

  // const handleScroll = () => {
  //     const currentScrollPos = window.scrollY

  //     if(currentScrollPos > prevScrollPos){
  //         setVisible(false)
  //     }else{
  //         setVisible(true)
  //     }

  //     setPrevScrollPos(currentScrollPos)
  // }

  // useEffect( () => {
  //     window.addEventListener('scroll', handleScroll);

  //     return () => window.removeEventListener('scroll', handleScroll)
  // })
  const show = useScrollHeight();

  return (
    <div className="top-0 sticky">
      {/* <Headroom> */}
      <div
        className={`flex items-center justify-between border-2 border-red-600  ${
          show ? "flex" : "hidden"
        } `}
      >
        <h1> Logo </h1>
        <div className="flex gap-2">
          <Link href={"/"}> Chat </Link>
          <Link href={"/"}> Help </Link>
          <Link href={"/"}>
            {" "}
            <NutOffIcon />{" "}
          </Link>
          <Link href={"/"}>
            {" "}
            <User2 />{" "}
          </Link>
        </div>
      </div>

      {/* </Headroom> */}
      <div className="w-full flex top-0 sticky  bg-green-300 py-1 h-[40px]">
        <input type="text" className="w-full py-2 border-2" />
      </div>

      {/* search   */}
    </div>
  );
};

export default MobileHeader;

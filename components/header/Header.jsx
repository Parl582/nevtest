"use client";
import {
  BellRing,
  MessageCircle,
  HelpCircle,
  Globe,
  PackageOpen,
  User2,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PopOver from "@/components/PopOver/LanguagePopOver";
import NotificationPopOver from "@/components/PopOver/NotificationPopOver";
import { useSearchParams } from "next/navigation";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const searchParams = useSearchParams();
  const selectedLanguage = searchParams.get("lang");

  console.log();
  return (
    <>
      <div className="w-full h-[80px] bg-white z-50 sticky top-0 items-center justify-between px-4 overflow-hidden text-black  shadow-lg gap-3 hidden ">
        <Image
          src={"/logo.jpg"}
          alt=""
          width={100}
          height={70}
          className="px-3"
        />
        <div className="flex-1 border flex items-center gap-2 px-3 rounded-2xl overflow-hidden bg-slate-100 ">
          <span className="border-r-2 px-2 border-s-teal-500 cursor-pointer bg-transparent">
            {" "}
            All{" "}
          </span>
          <input
            type="text"
            className="w-full px-2 py-2 bg-transparent"
            placeholder="Search Something"
          />
          <Search strokeWidth={0.75} className="bg-transparent" />
        </div>
        <div className="flex items-center h-full py-3  gap-3">
          <Link
            href={"/"}
            className=" rounded-full px-2 py-2   flex gap-1 items-center"
          >
            <MessageCircle strokeWidth={0.8} />
            <span> Chat</span>
          </Link>
          <Link
            href={"/"}
            className=" rounded-full px-2 py-2   flex gap-1 items-center"
          >
            <HelpCircle strokeWidth={0.8} />
            <span> Help</span>
          </Link>

          <Link
            href={"/"}
            className=" rounded-full px-2 py-2    flex gap-1 items-center"
          >
            <PackageOpen strokeWidth={0.8} />
            <span>Become a seller </span>
          </Link>
          <Link
            href={"/"}
            className="border-2 rounded-full px-6 py-1   border-pink-300 flex  items-center gap-2"
          >
            <User2 strokeWidth={0.8} />
            <span> Login </span>
          </Link>

          <NotificationPopOver />

          <PopOver selectedLanguage={selectedLanguage} />
        </div>
      </div>

      <MobileHeader />
    </>
  );
};

export default Header;

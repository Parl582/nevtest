import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Globe } from "lucide-react";
import Link from "next/link";

const PopOver = ({ selectedLanguage }) => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-1 cursor-pointer">
            <Globe strokeWidth={0.8} />
            <span> {selectedLanguage ? selectedLanguage : "EN"} </span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-max mt-5 mx-0 p-0 ">
          <div className="flex flex-col w-full  ">
            <Link
              href={"?lang=EN"}
              className="py-2 px-3 hover:bg-slate-200 w-full"
            >
              ENGLISH
            </Link>
            <Link href={"?lang=HI"} className="py-2 px-3 hover:bg-slate-200">
              {" "}
              HINDI{" "}
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PopOver;

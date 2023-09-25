import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AlarmCheck, BellRing, Globe } from "lucide-react";
import Link from "next/link";

const NotificationPopOver = ({ selectedLanguage }) => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div className="relative">
            <BellRing strokeWidth={0.9} className="mx-2 cursor-pointer" />
            <div className="absolute -top-3 right-0  w-5 h-5 bg-red-300 rounded-full overflow-hidden text-sm text-center">
              {" "}
              10{" "}
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] max-h-96  overflow-y-auto  mt-5 mx-0 p-0 rounded-md overflow-x-hidden shadow-lg ">
          <h2 className="text-lg font-bold py-3 top-0 sticky px-3">
            {" "}
            Notification{" "}
          </h2>
          <div className="flex flex-col w-full  ring-offset-yellow-100 ">
            <div className="w-full ">
              <div className=" flex px-3 gap-2 py-2 ">
                <div className="w-[60px]">
                  <AlarmCheck strokeWidth={0.75} />
                </div>
                <p className="line-clamp-3 text-sm text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  dicta aspernatur, tempora hic sequi aliquam quisquam officia
                  veritatis vel nulla dolore? Voluptatibus accusantium,
                  molestias natus esse tenetur ipsa aliquam quia?{" "}
                </p>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NotificationPopOver;

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import dogmaLogo from "../../../public/dogma-logo.svg";
import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";
import { menuOptions } from "@/lib/constant";
import { Tooltip, TooltipTrigger } from "../ui/tooltip";
import clsx from "clsx";
import { Separator } from "../ui/separator";
import {
  DatabaseIcon,
  GitBranchIcon,
  LucideMousePointerClick,
  UploadCloudIcon,
} from "lucide-react";
import { ModeToggle } from "../global/mode-toggle";

type Props = {};

const Sidebar = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav className="dark:bg-black h-screen overflow-scroll flex flex-col items-center justify-between gap-10 py-6 px-3 z-50">
      <div className="flex flex-col justify-center items-center gap-8">
        <Link className="flex font-bold text-lg" href="/">
          <Image
            width={18}
            height={0}
            src={dogmaLogo}
            className="mr-1"
            alt="dogma logo"
          />
          Dogma
        </Link>
        <TooltipProvider>
          {menuOptions.map((option, idx) => (
            <ul key={option.name}>
              <Tooltip delayDuration={0.5}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={option.href}
                      className={clsx(
                        "group size-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                        {
                          "dark:bg-slate-900 bg-slate-200 border-[1px] border-slate-100":
                            pathname === option.href,
                        }
                      )}
                    >
                      <option.Component selected={pathname === option.href} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="ml-4 bg-black/10 backdrop-blur-xl text-xs"
                >
                  {option.name}
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator />
        <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <LucideMousePointerClick className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranchIcon className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <DatabaseIcon className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <UploadCloudIcon className="dark:text-white" size={18} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Sidebar;

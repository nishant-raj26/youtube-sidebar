"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";

import { cn } from "../utils/cn";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import SidebarItem from "./SidebarItem";
import Link from "next/link";

type Props = {};

const Sidebar = (props: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [animationParent] = useAutoAnimate();
  return (
    <div
      className={cn(
        "bg-gray-700 text-white min-h-screen p-6 ",
        isSidebarOpen ? "w-[250px]" : "w-[65px]"
      )}
    >
      <AiOutlineMenu
        className="text-2xl mb-10 cursor-pointer"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <section className="flex flex-col gap-8 cursor-pointer">
        <SidebarItem
          isSidebarOpen={isSidebarOpen}
          icon={<GoHomeFill />}
          label="Home"
          href="/"
        />
        <SidebarItem
          isSidebarOpen={isSidebarOpen}
          icon={<FaYoutube />}
          label="Shorts"
          href="/Shorts"
        />
        <SidebarItem
          isSidebarOpen={isSidebarOpen}
          icon={<GoHomeFill />}
          label="Subscription"
          href="/Subscription"
        />
      </section>
    </div>
  );
};

export default Sidebar;

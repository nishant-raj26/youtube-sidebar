import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import React from "react";

type Props = {};

const SidebarItem = ({
  isSidebarOpen,
  icon,
  label,
  href
}: {
  isSidebarOpen: boolean;
  icon: React.ReactNode;
  label: string;
  href: string;

}) => {
  const [animationParent] = useAutoAnimate();
  return (
    <>
      <Link href={href} ref={animationParent} className="flex items-center">
        {/* icon */}
        <div className="w-[50px] h-auto text-2xl ">{icon}</div>
        {/* label */}
        {isSidebarOpen && <p>{label}</p>}
      </Link>
    </>
  );
};

export default SidebarItem;

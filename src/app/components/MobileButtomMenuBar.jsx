"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { RxDashboard } from "react-icons/rx";
import { FiMessageCircle } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

const MobileButtonMenuBar = () => {
  const pathname = usePathname() || "";

  const items = [
    { id: "dashboard", icon: RxDashboard, path: "/" },
    { id: "post", icon: HiOutlinePlus, path: "/create" },
    // { id: "search", icon: FiSearch, path: "/search" },
    { id: "message", icon: FiMessageCircle, path: "/messages" },
    { id: "setting", icon: CiSettings, path: "/settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 md:hidden">
      <div className="flex items-center justify-between px-6 py-3">

        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <Link
              key={item.id}
              href={item.path}
              className="flex flex-col items-center justify-center gap-1"
            >
              <Icon
                className={`text-[22px] ${
                  active
                    ? "text-black dark:text-white"
                    : "text-neutral-500"
                }`}
              />
            </Link>
          );
        })}

      </div>
    </div>
  );
};

export default MobileButtonMenuBar;
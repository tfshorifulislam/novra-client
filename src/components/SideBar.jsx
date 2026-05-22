"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { RxDashboard } from "react-icons/rx";
import { FiMessageCircle, FiBell } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi2";

const SideBar = () => {
    const pathname = usePathname() || "";

    const items = [
        { id: "dashboard", label: "Dashboard", icon: RxDashboard, path: "/dashboard" },
        { id: "post", label: "Post", icon: HiOutlinePlus, path: "/create" },
        { id: "notification", label: "Notification", icon: FiBell, path: "/notification" },
        { id: "message", label: "Message", icon: FiMessageCircle, path: "/messages" },
        { id: "setting", label: "Setting", icon: CiSettings, path: "/settings" },
    ];

    return (
        <aside className="sticky top-0 hidden md:flex h-screen md:w-55 lg:w-65 flex-col border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-6">

            {/* USER CARD */}
            <Link href='/profile' className="mb-6 cursor-pointer flex items-center gap-3 border-b  py-3">

                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                        alt="user"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Tf Shoriful Islam
                    </span>
                    <span className="text-xs text-neutral-500">
                        tfshoriful@gmail.com
                    </span>
                </div>
            </Link>

            {/* MENU */}
            <nav className="w-full space-y-1.5">
                {items.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.path;

                    return (
                        <Link
                            key={item.id}
                            href={item.path}
                            className={[
                                "group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200",
                                active
                                    ? "bg-black text-white dark:bg-white dark:text-black"
                                    : "hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300",
                            ].join(" ")}
                        >
                            <Icon
                                className={[
                                    "text-[20px] shrink-0 transition-colors",
                                    active
                                        ? "text-white dark:text-black"
                                        : "text-neutral-500 dark:text-neutral-400",
                                ].join(" ")}
                            />

                            <span className="text-[15px] font-medium">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

        </aside>
    );
};

export default SideBar;
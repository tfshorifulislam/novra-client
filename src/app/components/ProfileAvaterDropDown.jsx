"use client";

import { usePathname, useRouter } from "next/navigation";

import { Avatar, Dropdown, Label } from "@heroui/react";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { RxDashboard, RxAvatar } from "react-icons/rx";
import { FiMessageCircle } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";

export function ProfileAvaterDropDownMenu() {
  const pathname = usePathname();
  const router = useRouter();

  const items = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: RxDashboard,
      path: "/",
    },
    {
      id: "profile",
      label: "Profile",
      icon: RxAvatar,
      path: "/profile",
    },
    {
      id: "message",
      label: "Message",
      icon: FiMessageCircle,
      path: "/messages",
    },
    {
      id: "setting",
      label: "Setting",
      icon: CiSettings,
      path: "/settings",
    },
  ];

  return (
    <Dropdown placement="bottom-end">
      {/* TRIGGER */}
      <Dropdown.Trigger className="rounded-full cursor-pointer">
        <Avatar>
          <Avatar.Image
            alt="User"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
          />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>

      {/* POPOVER */}
      <Dropdown.Popover className="min-w-[240px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-xl">
        
        {/* USER INFO */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center gap-3">
            <Avatar size="sm">
              <Avatar.Image
                alt="User"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>

            <div className="leading-tight">
              <p className="text-sm font-semibold text-black dark:text-white">
                Jane Doe
              </p>

              <p className="text-xs text-neutral-500">
                jane@example.com
              </p>
            </div>
          </div>
        </div>

        {/* MENU */}
        <Dropdown.Menu
          aria-label="Profile Actions"
          className="p-2"
        >
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.path;

            return (
              <Dropdown.Item
                key={item.id}
                textValue={item.label}
                onClick={() => router.push(item.path)}
                className={`
                  mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5
                  transition-all duration-200 cursor-pointer
                  ${
                    active
                      ? "bg-neutral-900 dark:bg-white"
                      : "hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  }
                `}
              >
                <Icon
                  className={`size-4 shrink-0 ${
                    active
                      ? "text-white dark:text-black"
                      : "text-neutral-500"
                  }`}
                />

                <Label
                  className={`flex-1 ${
                    active
                      ? "text-white dark:text-black"
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {item.label}
                </Label>
              </Dropdown.Item>
            );
          })}

          {/* LOGOUT */}
          <Dropdown.Item
            key="logout"
            textValue="Logout"
            color="danger"
            onClick={() => {
              console.log("logout");
            }}
            className="
              mt-2 flex items-center justify-between
              rounded-xl px-3 py-2.5
              hover:bg-red-50 dark:hover:bg-red-950/20
              transition-all duration-200
            "
          >
            <div className="flex items-center justify-between w-full">
              <Label className="text-red-500 font-medium">
                Log Out
              </Label>

              <FaArrowUpRightFromSquare className="size-3.5 text-red-500" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
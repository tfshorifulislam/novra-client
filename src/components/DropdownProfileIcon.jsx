"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function DropdownProfileIcon({ user }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    setOpen(false);
    router.refresh();
    router.push("/");
  };

  return (
    <Dropdown placement="bottom-end" isOpen={open} onOpenChange={setOpen}>

      {/* Trigger */}
      <Dropdown.Trigger>
        <Avatar
          size="sm"
          className="h-9 w-9 cursor-pointer"
        >
          <Avatar.Image src={user?.image} alt={user?.name} />
          <Avatar.Fallback>
            {user?.name?.charAt(0)?.toUpperCase()}
          </Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>

      {/* Panel */}
      <Dropdown.Popover
        className="
          w-72
          rounded-2xl
          border border-neutral-200 dark:border-neutral-800
          bg-white dark:bg-neutral-950
          p-2
        "
      >

        {/* Profile */}
        <div className="px-3 py-3 border-b border-neutral-100 dark:border-neutral-800">

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <Avatar size="md" className="h-10 w-10">
              <Avatar.Image src={user?.image} alt={user?.name} />
              <Avatar.Fallback>
                {user?.name?.charAt(0)?.toUpperCase()}
              </Avatar.Fallback>
            </Avatar>

            <div className="min-w-0">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                {user?.name}
              </p>
              <p className="text-xs text-neutral-500 truncate">
                {user?.email}
              </p>
            </div>
          </Link>
        </div>

        {/* Menu */}
        <div className="py-2">

          {[
            { href: "/", label: "Dashboard" },
            { href: "/profile", label: "Profile" },
            { href: "/message", label: "Message" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                block
                px-3 py-2
                text-sm
                text-neutral-700 dark:text-neutral-300
                rounded-lg
                hover:bg-neutral-100 dark:hover:bg-neutral-900
              "
            >
              {item.label}
            </Link>
          ))}

          <div className="my-2 h-px bg-neutral-200 dark:bg-neutral-800" />

          <button
            onClick={handleSignOut}
            className="
              w-full text-left
              px-3 py-2
              text-sm
              text-red-500
              rounded-lg
              hover:bg-red-50 dark:hover:bg-red-500/10
            "
          >
            Log out
          </button>

        </div>
      </Dropdown.Popover>
    </Dropdown>
  );
}
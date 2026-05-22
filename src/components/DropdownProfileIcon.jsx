'use client'
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
    router.push('/')
  };

  return (
    <Dropdown
      placement="bottom-end"
      isOpen={open}
      onOpenChange={setOpen}
    >

      {/* Trigger */}
      <Dropdown.Trigger>

        <div className="outline-none">

          <Avatar
            size="md"
            className="h-11 w-11 cursor-pointer border border-slate-200 transition hover:opacity-90 sm:h-10 sm:w-10">
            <Avatar.Image
              alt={user?.name}
              src={user?.image}
            />

            <Avatar.Fallback className="bg-slate-900 text-sm font-semibold text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </Avatar.Fallback>
          </Avatar>
        </div>
      </Dropdown.Trigger>

      {/* Dropdown */}
      <Dropdown.Popover
        className="
                    w-[92vw] max-w-[340px]
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-0
                    shadow-2xl
                    sm:w-72
                "
      >

        {/* Profile */}
        <div className="border-b border-slate-100 px-5 py-5">

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 rounded-2xl transition hover:bg-slate-50"
          >

            <Avatar
              size="lg"
              className="border border-slate-200"
            >
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
              />

              <Avatar.Fallback className="bg-slate-900 text-white">
                {user?.name?.charAt(0).toUpperCase()}
              </Avatar.Fallback>
            </Avatar>

            <div className="min-w-0">

              <h3 className="truncate text-base font-semibold text-slate-900">
                {user?.name}
              </h3>

              <p className="truncate text-sm text-slate-500">
                {user?.email}
              </p>
            </div>
          </Link>
        </div>

        {/* Menu */}
        <div className="p-2">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="
                            flex
                            items-center
                            rounded-2xl
                            px-4
                            py-3.5
                            text-sm
                            font-medium
                            text-slate-700
                            transition
                            hover:bg-slate-100
                        "
          >
            Dashboard
          </Link>

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="
                            flex
                            items-center
                            rounded-2xl
                            px-4
                            py-3.5
                            text-sm
                            font-medium
                            text-slate-700
                            transition
                            hover:bg-slate-100
                        "
          >
            Profile
          </Link>

          <Link
            href="/message"
            onClick={() => setOpen(false)}
            className="
                            flex
                            items-center
                            rounded-2xl
                            px-4
                            py-3.5
                            text-sm
                            font-medium
                            text-slate-700
                            transition
                            hover:bg-slate-100
                        "
          >
            Message
          </Link>

          <div className="my-2 h-px bg-slate-100"></div>

          {/* Logout */}
          <button
            onClick={handleSignOut}
            className="
                            flex
                            w-full
                            items-center
                            rounded-2xl
                            px-4
                            py-3.5
                            text-sm
                            font-medium
                            text-red-500
                            transition
                            hover:bg-red-50
                        "
          >
            Log Out
          </button>
        </div>
      </Dropdown.Popover>
    </Dropdown>
  );
}
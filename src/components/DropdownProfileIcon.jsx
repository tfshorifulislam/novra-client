'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { BsPersonSlash } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { GiEarbuds } from "react-icons/gi";

export function DropdownProfileIcon() {

  const { data: session } = authClient.useSession()
  // console.log('session', session)
  const user = session?.user
  console.log(user)

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt="Junior Garcia"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
          />
          <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt="Jane"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
              />
              <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">Jane Doe</p>
              <p className="text-xs leading-none text-muted">jane@example.com</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" textValue="Dashboard">
            <Label>Dashboard</Label>
          </Dropdown.Item>
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>
          <Dropdown.Item id="settings" textValue="Settings">
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Settings</Label>
              <GiEarbuds className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          <Dropdown.Item id="new-project" textValue="New project">
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Create Team</Label>
              <BsPersonSlash className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Log Out</Label>
              <FaArrowUpRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
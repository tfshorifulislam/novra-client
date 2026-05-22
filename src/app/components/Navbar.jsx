"use client"

import { useState } from "react"
import Link from "next/link"
import ToggleTheme from "./ToggleTheam"
import { ProfileAvaterDropDownMenu } from "./ProfileAvaterDropDown"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-black/60 backdrop-blur-xl">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight font-sora"
        >
          Novra
        </Link>

       

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-3 py-1.5 text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600"
          />

          {/* Theme */}
          <ToggleTheme />

          {/* Profile */}
          <ProfileAvaterDropDownMenu />

        </div>
      </div>

     
    </header>
  )
}
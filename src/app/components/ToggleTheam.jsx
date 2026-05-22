"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaMoon } from "react-icons/fa";
import { LuSunDim } from "react-icons/lu";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 cursor-pointer py-3 rounded-full 
      text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
    >
      {theme === "dark" ? <LuSunDim /> : <FaMoon />}
    </button>
  )
}
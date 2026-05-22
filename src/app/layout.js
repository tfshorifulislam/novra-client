import "./globals.css"
import Navbar from "./components/Navbar"
import Providers from "./providers"

import { Geist, Geist_Mono } from "next/font/google"
import SideBar from "./components/SideBar"
import MobileButtonMenuBar from "./components/MobileButtomMenuBar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <Providers>
          <Navbar />

          {/* MAIN LAYOUT WRAPPER */}
          <div className="flex">

            {/* SIDEBAR (fixed left column) */}
            <SideBar />

            {/* PAGE CONTENT */}
            <main className="flex-1 min-h-screen">
              {children}
            </main>
            <MobileButtonMenuBar />
          </div>

        </Providers>

      </body>
    </html>
  );
}
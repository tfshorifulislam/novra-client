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

    {/* MAIN WRAPPER */}
    <div className="max-w-7xl mx-auto grid grid-cols-12">

      {/* LEFT SIDEBAR */}
      <div className="hidden md:block md:col-span-3">
        <SideBar />
      </div>

      {/* CENTER FEED */}
      <main className="col-span-12 md:col-span-9 lg:col-span-6 min-h-screen">
        {children}
      </main>

      {/* RIGHT EMPTY SIDEBAR */}
      <div className="hidden lg:block lg:col-span-3">
      </div>

    </div>

    {/* MOBILE NAV */}
    <MobileButtonMenuBar />

  </Providers>
</body>
    </html>
  );
}
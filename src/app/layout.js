import "./globals.css"
import Navbar from "../components/Navbar"
import Providers from "./providers"

import { IBM_Plex_Serif } from "next/font/google"
import SideBar from "../components/SideBar"
import MobileButtonMenuBar from "@/components/MobileButtomMenuBar"
import { Toaster } from "react-hot-toast"


const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // ✅ ADD THIS
  variable: "--font-ibm-plex-serif",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSerif.className}`}>
        <Providers>
          <Navbar />
          {/* <SideBar /> */}

          <main className="min-h-screen">
            {children}
          </main>

          <MobileButtonMenuBar />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
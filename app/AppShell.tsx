"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = pathname === "/invitaciones";

  return (
    <div className={!isStandalone ? "bg-white text-[#00023f] min-h-screen" : "min-h-screen"}>
      {!isStandalone && <Navbar />}
      <main className={!isStandalone ? "pt-20" : ""}>
        {children}
      </main>
      {!isStandalone && <Footer />}
    </div>
  );
}
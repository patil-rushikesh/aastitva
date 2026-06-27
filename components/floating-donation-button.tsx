"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplet } from "lucide-react";

export default function FloatingDonationButton() {
  const pathname = usePathname();

  if (pathname === "/form/interest") {
    return null;
  }

  return (
    <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
      <Link
        href="/form/interest"
        className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 sm:py-4 rounded-full shadow-2xl hover:bg-red-700 hover:scale-105 hover:shadow-red-600/50 transition-all duration-300 ring-4 ring-white/90 w-max"
      >
        <Droplet className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
        <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
          Register for Blood Camp
        </span>
      </Link>
    </div>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Users } from "lucide-react";

export default function FloatingDonationButton() {
  const pathname = usePathname();

  // Hide the bar on the registration page
  if (pathname === "/form/blooddonationcamp" || pathname === "/form/hostblooddonationcamp") {
    return null;
  }

  return (
    <div className="fixed bottom-6 inset-x-4 z-[9999] mx-auto max-w-md sm:max-w-xl">
      <div className="grid grid-cols-2 gap-2 sm:gap-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-1.5 rounded-full border border-border shadow-2xl">
        <Link
          href="/form/blooddonationcamp"
          className="flex items-center justify-center gap-1.5 bg-red-600 text-white px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-red-700 hover:scale-105 active:scale-95 transition-all duration-200 text-center whitespace-nowrap shadow-sm"
        >
          <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span>Join as Donor</span>
        </Link>
        <Link
          href="/form/hostblooddonationcamp" // <-- Update this route to your host camp form path
          className="flex items-center justify-center gap-1.5 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 text-center whitespace-nowrap shadow-sm"
        >
          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span>Host a Camp</span>
        </Link>

      </div>
    </div>
  );
}
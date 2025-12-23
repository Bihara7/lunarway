"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/lun-logo.png"
          alt="logo"
          width={150}
          height={150}
          className=""
        />

        
        <button
          className="sm:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <ul
          className={`sm:flex sm:space-x-8 sm:text-black text-white absolute sm:static left-0 w-full sm:w-auto bg-black sm:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0 sm:opacity-100"
          }`}
        >
          <li className="px-6 py-2 sm:p-0">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "" : ""
              } hover:cursor-pointer`}
            >
              Home
            </Link>
          </li>
          <li className="px-6 py-2 sm:p-0">
            <Link
              href="/about"
              className={`${
                pathname === "/" ? "" : ""
              } hover:cursor-pointer`}
            >
              About
            </Link>
          </li>
          <li className="px-6 py-2 sm:p-0">
            <Link
              href="/about"
              className={`${
                pathname === "/" ? "" : ""
              } hover:cursor-pointer`}
            >
              Destination
            </Link>
          </li>
          <li className="px-6 py-2 sm:p-0">
            <Link
              href="/shop"
              className={`${
                pathname === "/" ? "" : ""
              } hover:cursor-pointer`}
            >
              Page
            </Link>
          </li>
          <li className="px-6 py-2 sm:p-0">
            <Link
              href="/contact"
              className={`${
                pathname === "/" ? "" : ""
              } hover:cursor-pointer`}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

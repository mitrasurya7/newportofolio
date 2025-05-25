"use client";

import Link from "next/link";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
// import useTheme from "@/hooks/useTheme";


export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
//   const { theme, toggleTheme } = useTheme();
console.log(showSidebar);
  const menu = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "#blogs" },
    { name: "Services", href: "#services" },
  ];

  return (
    <div>
      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-2/3 md:w-1/2 h-full dark:bg-stone-800 bg-stone-100 z-[999] p-4 transform transition-all duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end text-3xl p-3 text-vscode-text">
          <RiCloseFill
            onClick={() => setShowSidebar(false)}
            className="cursor-pointer"
          />
        </div>
        <ul className="p-10">
          {menu.map((item, index) => (
            <li
              key={index}
              className="text-lg my-2  hover:text-blue-400 cursor-pointer"
              onClick={() => setShowSidebar(false)}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden lg:block mx-auto rounded-full shadow-md dark:bg-stone-800 bg-stone-100 sticky top-0 z-50">
        <ul className="flex justify-between items-center p-5 py-1">
          <li>
            <Link href="https://github.com/mitrasurya7" target="_blank">
              <Image
                src="https://avatars.githubusercontent.com/u/62651166?v=4"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full border hover:border-vscode-modified hover:shadow-md hover:shadow-vscode-modified"
              />
            </Link>
          </li>
          <li className="flex gap-1">
            {menu.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="p-5 hover:text-blue-400  cursor-pointer transition-all duration-500"
              >
                {item.name}
              </Link>
            ))}
          </li>
          <li className="flex gap-2 items-center">
            <div className="flex gap-1 items-center border rounded-lg p-2 border-[#3a3a3a]">
              <FaEye />
            </div>
          </li>
        </ul>
      </nav>

      {/* Mobile Topbar */}
      <nav className="block lg:hidden sticky top-0 z-50 dark:bg-stone-800 bg-stone-100 rounded-full p-3 shadow-md">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="https://github.com/mitrasurya7" target="_blank">
              <Image
                src="https://avatars.githubusercontent.com/u/62651166?v=4"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full border hover:border-vscode-modified hover:shadow-md hover:shadow-vscode-modified"
              />
            </Link>
          </li>
          <li className="flex gap-2 items-center">
            <button
            //   onClick={toggleTheme}
              className="text-vscode-text p-2 rounded-lg"
              aria-label="Toggle Theme"
            >
              {/* <FaMoon /> */}
            </button>
            <button
              className="text-vscode-text p-2 rounded-lg"
              aria-label="Toggle Sidebar"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <GiHamburgerMenu />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/quiz", label: "Test osobowości" },
  { href: "/types", label: "Typy osobowości" },
  { href: "/stats", label: "Statystyki" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");

  return (
    <header className="bg-black border-b border-gray-800 px-6 py-4">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-4xl font-bold text-white hover:text-blue-500"
        >
          <img
            src="/logo-icon.png"
            alt="Ikona MBTI"
            className="h-8 w-8 object-contain -translate-y-1"
          />
          MBTI
        </Link>

        {/* Nawigacja desktopowa */}
        <div className="hidden md:flex gap-14 ml-auto items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-3 rounded-xl text-center text-[15px] font-semibold transition duration-200
        ${
          pathname === link.href
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-200 hover:bg-blue-700 hover:text-white"
        }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-3 ml-[360px]">
            <input
              type="text"
              value={code}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 10) setCode(value);
              }}
              placeholder="Wpisz kod"
              className="w-[130px] pl-3 pr-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 text-[16px] outline-none"
            />
            <button
              onClick={() => {
                if (code.trim().length === 10) {
                  window.location.href = `/result/${code.trim()}`;
                }
              }}
              className={`px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg ${
                code.trim().length === 10
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
            >
              Sprawdź wynik
            </button>
          </div>
        </div>

        {/* Ikona menu na mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Rozwijane menu mobilne */}
      {open && (
        <nav className="md:hidden mt-4 flex flex-col gap-2 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block w-full px-6 py-3 rounded-xl text-center text-sm font-semibold transition
        ${
          pathname === link.href
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-200 hover:bg-blue-700 hover:text-white"
        }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-4">
            <input
              type="text"
              value={code}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 10) setCode(value);
              }}
              placeholder="Wpisz kod"
              className="w-full pl-3 pr-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 text-[16px] outline-none"
            />
            <button
              onClick={() => {
                if (code.trim().length === 10) {
                  setOpen(false);
                  window.location.href = `/result/${code.trim()}`;
                }
              }}
              className={`px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-semibold rounded-lg ${
                code.trim().length === 10
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
            >
              Sprawdź wynik
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

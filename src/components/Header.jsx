"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/quiz", label: "Test osobowości" },
  { href: "/types", label: "Typy osobowości" },
  { href: "/stats", label: "Statystyki" },
  { href: "/check", label: "Sprawdź wynik" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-black border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-start gap-6">
        <Link
          href="/"
          className="ml-[-30px] flex items-center gap-2 text-4xl font-bold text-white hover:text-blue-500"
        >
          <img
            src="/logo-icon.png"
            alt="Ikona MBTI"
            className="h-8 w-8 object-contain -translate-y-1"
          />
          MBTI
        </Link>

        <nav className="ml-auto flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-3 rounded-xl text-center text-sm font-semibold transition duration-200
        ${
          pathname === link.href
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-200 hover:bg-blue-700 hover:text-white"
        }
      `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

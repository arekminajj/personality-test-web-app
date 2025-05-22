import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sprawdź jaki jest twój typ osobowości!",
  description: "Z pośród 16 typów osobowości odnajź swój.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-black border-b border-gray-800 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-500">
              MBTI
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

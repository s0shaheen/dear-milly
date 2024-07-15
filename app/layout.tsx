// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import { Cormorant_Garamond, Poppins } from "next/font/google"

const cormorantGarammond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400"]
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Dear Milly</title>
      </head>
      <body className={`${cormorantGarammond.variable} ${poppins.variable} bg-pink text-black`}>
        <nav className="p-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <p>home</p>
              </Link>
            </li>
            <li>
              <Link href="/diary">
              <p>diary</p>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

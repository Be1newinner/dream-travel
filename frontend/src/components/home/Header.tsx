"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Search } from "lucide-react"
import { User } from "lucide-react"

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu)
  }

  return (
    <header className="w-full border-b bg-black text-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image src="/header-logo3.svg" alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">

          {/* Home */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("home")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1">
              Home <ChevronDown size={16} />
            </button>

            {dropdown === "home" && (
              <div className="absolute top-8 bg-white text-black shadow-lg rounded p-4 w-40">
                <Link href="#" className="block py-1">Home 01</Link>
                <Link href="#" className="block py-1">Home 02</Link>
              </div>
            )}
          </div>

          <Link href="#">Destinations</Link>

          {/* Travel Package */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("package")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1">
              Travel Package <ChevronDown size={16} />
            </button>

            {dropdown === "package" && (
              <div className="absolute top-8 bg-white text-black shadow-lg rounded p-4 w-44">
                <Link href="#" className="block py-1">Tour Package</Link>
                <Link href="#" className="block py-1">Package Details</Link>
              </div>
            )}
          </div>

          <Link href="#">Visa</Link>

          {/* Pages */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("pages")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1">
              Pages <ChevronDown size={16} />
            </button>

            {dropdown === "pages" && (
              <div className="absolute top-8 bg-white text-black shadow-lg rounded p-4 w-44">
                <Link href="#" className="block py-1">About</Link>
                <Link href="#" className="block py-1">Team</Link>
                <Link href="#" className="block py-1">FAQ</Link>
              </div>
            )}
          </div>

          <Link href="#">Contact</Link>

        </nav>
        

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-4">
           <button className="border p-2 rounded-full">
          <Phone />
          </button>
          <div>
            <p>Need Help?</p>
            <Link href="tel:+91 345 533 865" className="font-bold hover:text-blue-700 duration-300">+91 345 533 865</Link>
          </div>
          <button className="border p-2 rounded-full">
            <Search />
          </button>

          <button className="bg-blue-700 flex items-center justify-center gap-2 text-white px-5 py-2 rounded">
           <User />
           Login
          </button>
        </div>

        {/* Mobile Icon */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden border-t bg-white text-black px-6 py-4 space-y-4">

          <Link href="#" className="block">Home</Link>
          <Link href="#" className="block">Destinations</Link>
          <Link href="#" className="block">Travel Package</Link>
          <Link href="#" className="block">Visa</Link>
          <Link href="#" className="block">Pages</Link>
          <Link href="#" className="block">Contact</Link>

          <button className="w-full bg-blue-700 flex items-center justify-center gap-2 text-white py-2 rounded">
            <User />
            Login
          </button>

        </div>
      )}

    </header>
  )
}
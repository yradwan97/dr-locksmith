"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Phone, MapPin, Clock, ChevronDown } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Residential", href: "/residential" },
    { name: "Commercial", href: "/commercial" },
    { name: "Automotive", href: "/automotive" },
    {
      name: "Locations",
      href: "/locations",
      hasDropdown: true,
      dropdownItems: [
        { name: "Greenville, SC", href: "/locations/greenville-sc", isMain: true },
        { name: "Raleigh, NC", href: "/locations/raleigh-nc" },
        { name: "Columbia, SC", href: "/locations/columbia-sc" },
        { name: "Delaware", href: "/locations/delaware" },
        { name: "Clearwater, FL", href: "/locations/clearwater-fl" },
        { name: "Charlotte, NC", href: "/locations/charlotte-nc" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">(864) 203-4390</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>24/7 Expert Diagnosis</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Expert Solutions • Serving Multiple States</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative">
                {/* Main logo container with expert theme */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-bold text-2xl relative overflow-hidden">
                  Dr
                  {/* Stethoscope-like curve effect */}
                  <div className="absolute top-1 right-1 w-3 h-3 border-2 border-white/30 rounded-full"></div>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full"></div>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-blue-600 font-bold text-xl">24/7 DR. LOCKSMITH</div>
                <div className="text-gray-600 text-xs">EXPERT DIAGNOSIS • 24/7 SOLUTIONS</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <DropdownMenuItem key={dropdownItem.name} asChild>
                            <Link
                              href={dropdownItem.href}
                              className={`w-full ${dropdownItem.isMain ? "font-semibold text-blue-600" : ""}`}
                            >
                              {dropdownItem.name}
                              {dropdownItem.isMain && (
                                <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Main</span>
                              )}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                <Link href="tel:8642034390">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <div className="text-lg font-medium text-gray-700 mb-2">{item.name}</div>
                          <div className="ml-4 space-y-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className={`block text-sm text-gray-600 hover:text-blue-600 transition-colors ${
                                  dropdownItem.isMain ? "font-semibold text-blue-600" : ""
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                                {dropdownItem.isMain && <span className="ml-2 text-xs">(Main)</span>}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white mt-4">
                    <Link href="tel:8642034390">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

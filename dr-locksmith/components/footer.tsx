import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Residential Locksmith", href: "/residential" },
    { name: "Commercial Locksmith", href: "/commercial" },
    { name: "Automotive Locksmith", href: "/automotive" },
    { name: "Emergency Services", href: "/emergency" },
    { name: "Lock Installation", href: "/services/installation" },
    { name: "Key Replacement", href: "/services/keys" },
  ]

  const areas = ["Greenville, SC", "Spartanburg, SC", "Anderson, SC", "Greer, SC", "Mauldin, SC", "Simpsonville, SC"]

  const brands = [
    { name: "Master Lock", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Schlage", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Ademco", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Kwikset", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Medeco", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Mul-T-Lock", logo: "/placeholder.svg?height=40&width=80" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-lg font-bold text-xl relative overflow-hidden">
                Dr
                <div className="absolute top-1 right-1 w-2 h-2 border border-white/30 rounded-full"></div>
                <div className="absolute bottom-1 right-0.5 w-3 h-0.5 bg-white/25 transform rotate-12"></div>
              </div>
              <div className="ml-3">
                <div className="text-blue-400 font-bold text-lg">24/7 DR. LOCKSMITH</div>
                <div className="text-gray-400 text-xs">EXPERT DIAGNOSIS • 24/7 SOLUTIONS</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We provide high-quality expert locksmith services in Greenville South Carolina & surrounding areas.
              Whether you are locked out of your automobile, home or business, our expert locksmith specialists will
              come to you with professional diagnosis and solutions in your hour of need.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {areas.map((area, index) => (
                <li key={index} className="text-gray-300">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  1200 Woodruff Rd, Building A - 3<br />
                  Greenville, South Carolina, 29607
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <Link href="tel:8642034390" className="text-gray-300 hover:text-blue-400 transition-colors">
                  (864) 203-4390
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <Link href="tel:3023097932" className="text-gray-300 hover:text-blue-400 transition-colors">
                  (302) 309-7932
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <Link
                  href="mailto:info@joylocksmith.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  info@joylocksmith.com
                </Link>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-2">Expert Hours</h4>
              <p className="text-gray-300 text-sm">
                Mon - Sun: 24/7 Expert Service
                <br />
                <span className="text-blue-400">Emergency Response Available</span>
              </p>
              <p className="text-gray-400 text-xs mt-2">LIC# 2018 - 42000</p>
            </div>
          </div>
        </div>

        {/* Trusted Brands */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h3 className="text-center text-lg font-semibold mb-6">Trusted Brands We Work With</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={80}
                  height={40}
                  className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} 24/7 Dr. Locksmith. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="bg-blue-600 py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-semibold">24/7 Dr. Locksmith - Expert Emergency Service Available 24 Hours</p>
        </div>
      </div>
    </footer>
  )
}

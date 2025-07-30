import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Service Locations - 24/7 Dr. Locksmith Expert Services",
  description:
    "24/7 Dr. Locksmith serves multiple locations including Greenville SC, Raleigh NC, Columbia SC, Delaware, Clearwater FL, and Charlotte NC. Expert locksmith services available 24/7.",
  keywords:
    "locksmith locations, Greenville locksmith, Raleigh locksmith, Columbia locksmith, Delaware locksmith, Clearwater locksmith, Charlotte locksmith",
}

export default function LocationsPage() {
  const mainLocation = {
    name: "Greenville, South Carolina",
    state: "SC",
    description: "Our main headquarters and primary service area with full 24/7 expert locksmith services.",
    phone: "(864) 203-4390",
    address: "1200 Woodruff Rd, Building A - 3, Greenville, SC 29607",
    services: ["Residential", "Commercial", "Automotive", "Emergency"],
    responseTime: "15-30 minutes",
    coverage: "50+ mile radius",
    href: "/locations/greenville-sc",
    isMain: true,
  }

  const otherLocations = [
    {
      name: "Raleigh, North Carolina",
      state: "NC",
      description: "Expert locksmith services for the Research Triangle area with rapid response times.",
      phone: "(864) 203-4390",
      services: ["Residential", "Commercial", "Automotive", "Emergency"],
      href: "/locations/raleigh-nc",
    },
    {
      name: "Columbia, South Carolina",
      state: "SC",
      description: "Professional locksmith services for South Carolina's capital city and surrounding areas.",
      phone: "(864) 203-4390",
      services: ["Residential", "Commercial", "Automotive", "Emergency"],
      href: "/locations/columbia-sc",
    },
    {
      name: "Delaware",
      state: "DE",
      description: "Comprehensive locksmith services throughout the First State with expert diagnosis.",
      phone: "(864) 203-4390",
      services: ["Residential", "Commercial", "Automotive", "Emergency"],
      href: "/locations/delaware",
    },
    {
      name: "Clearwater, Florida",
      state: "FL",
      description: "Expert locksmith services for the Tampa Bay area with 24/7 emergency response.",
      phone: "(864) 203-4390",
      services: ["Residential", "Commercial", "Automotive", "Emergency"],
      href: "/locations/clearwater-fl",
    },
    {
      name: "Charlotte, North Carolina",
      state: "NC",
      description: "Professional locksmith services for the Queen City and greater Charlotte metro area.",
      phone: "(864) 203-4390",
      services: ["Residential", "Commercial", "Automotive", "Emergency"],
      href: "/locations/charlotte-nc",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">24/7 Dr. Locksmith</span>
                <br />
                Service Locations
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Expert locksmith services available across multiple states. Our licensed specialists provide 24/7
                emergency response and professional diagnosis wherever you need us.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <Link href="tel:8642034390">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (864) 203-4390
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg bg-transparent"
                >
                  <Link href="/contact">Find Your Location</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Location */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Main Location</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Headquartered in Greenville, South Carolina, our main facility provides comprehensive expert locksmith
                services with the fastest response times.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto border-2 border-blue-200 shadow-xl">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      {mainLocation.name}
                      <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full ml-2">Main HQ</span>
                    </CardTitle>
                    <p className="text-gray-600 mt-2">{mainLocation.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-blue-600" />
                        Contact Information
                      </h4>
                      <p className="text-gray-700">Phone: {mainLocation.phone}</p>
                      <p className="text-gray-700">Address: {mainLocation.address}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        Response Details
                      </h4>
                      <p className="text-gray-700">Response Time: {mainLocation.responseTime}</p>
                      <p className="text-gray-700">Coverage Area: {mainLocation.coverage}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Services Available</h4>
                      <div className="flex flex-wrap gap-2">
                        {mainLocation.services.map((service, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Link href={mainLocation.href}>
                        View Greenville Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Other Locations */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Service Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've expanded our expert locksmith services to serve customers across multiple states with the same
                professional diagnosis and rapid response.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherLocations.map((location, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      {location.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">{location.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-700">
                          <Phone className="h-4 w-4 inline mr-1 text-blue-600" />
                          {location.phone}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Services</h5>
                        <div className="flex flex-wrap gap-1">
                          {location.services.map((service, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                      >
                        <Link href={location.href}>
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Map Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Multi-State Coverage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert locksmith specialists provide professional services across multiple states with consistent
                quality and rapid response times.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">States We Serve</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>South Carolina</strong> - Greenville (HQ), Columbia
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>North Carolina</strong> - Raleigh, Charlotte
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>Delaware</strong> - Statewide coverage
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>Florida</strong> - Clearwater, Tampa Bay area
                    </span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">24/7 Emergency Response</h4>
                  <p className="text-gray-600 mb-4">
                    No matter which location you're in, our expert locksmith specialists are available 24/7 for
                    emergency services with rapid response times.
                  </p>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="tel:8642034390">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (864) 203-4390
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder-map.png"
                  alt="Service coverage map showing all locations"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Expert Locksmith Service?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              No matter where you are in our service area, our expert locksmith specialists are ready to provide
              professional diagnosis and solutions 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="tel:8642034390">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (864) 203-4390
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/contact">Find Your Location</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Home, Building, Car } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Greenville, SC Locksmith - 24/7 Dr. Locksmith Expert Services",
  description:
    "Expert locksmith services in Greenville, South Carolina. 24/7 emergency response, residential, commercial, and automotive locksmith solutions. Licensed & insured. Call (864) 203-4390.",
  keywords:
    "Greenville locksmith, Greenville SC locksmith, emergency locksmith Greenville, residential locksmith, commercial locksmith, automotive locksmith",
}

export default function GreenvillePage() {
  const serviceAreas = [
    "Greenville",
    "Spartanburg",
    "Anderson",
    "Greer",
    "Mauldin",
    "Simpsonville",
    "Fountain Inn",
    "Taylors",
    "Travelers Rest",
    "Easley",
    "Pickens",
    "Liberty",
  ]

  const services = [
    {
      icon: Home,
      title: "Residential Locksmith Services",
      description:
        "Complete home locksmith solutions including lockouts, high-security locks, keyless entry, and deadbolt installation.",
      features: [
        "Emergency Home Lockouts",
        "High-Security Lock Installation",
        "Keyless Entry Systems",
        "Lock Replacement & Repair",
      ],
    },
    {
      icon: Building,
      title: "Commercial Locksmith Services",
      description:
        "Professional business security solutions including access control systems, master key systems, and commercial lock installation.",
      features: [
        "Access Control Systems",
        "Master Key Systems",
        "Commercial Lock Installation",
        "Security Consultation",
      ],
    },
    {
      icon: Car,
      title: "Automotive Locksmith Services",
      description:
        "Expert vehicle locksmith services including car lockouts, key programming, ignition repair, and transponder key services.",
      features: ["Car Lockout Services", "Key Programming", "Ignition Repair", "Transponder Keys"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-blue-600">Greenville, SC</span>
                  <br />
                  Expert Locksmith Services
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our main headquarters in Greenville, South Carolina provides comprehensive expert locksmith services
                  with the fastest response times. Licensed, insured, and available 24/7 for all your locksmith needs.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">15-30 Min Response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">50+ Mile Coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">24/7 Availability</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    <Link href="tel:8642034390">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (864) 203-4390
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg bg-transparent"
                  >
                    <Link href="/contact">Get Free Quote</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder-greenville.png"
                  alt="Greenville SC locksmith services"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                  priority
                />
                <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">HQ</div>
                      <div className="text-sm text-gray-600">Main Location</div>
                      <div className="text-sm font-semibold text-gray-900 mt-1">Greenville, SC</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Business Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Greenville Location</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Located in the heart of Greenville, South Carolina, our main facility serves as headquarters for our
                  expert locksmith operations throughout the region.
                </p>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                      <p className="text-gray-700">
                        1200 Woodruff Rd, Building A - 3<br />
                        Greenville, South Carolina, 29607
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phone Numbers</h4>
                      <p className="text-gray-700">
                        Primary: (864) 203-4390
                        <br />
                        Alternative: (302) 309-7932
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                      <p className="text-gray-700">info@joylocksmith.com</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">License</h4>
                      <p className="text-gray-700">LIC# 2018 - 42000</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Coverage Area</h3>
                <p className="text-gray-600 mb-6">
                  From our Greenville headquarters, we provide expert locksmith services throughout the greater
                  Greenville area and surrounding communities.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                  <p className="text-gray-600 mb-4">
                    Our Greenville location provides the fastest response times in our network, typically arriving
                    within 15-30 minutes of your call.
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Clock className="h-5 w-5" />
                    <span>Average Response: 15-30 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Locksmith Services in Greenville</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Greenville location offers comprehensive locksmith services for residential, commercial, and
                automotive needs with expert diagnosis and professional solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Greenville Location */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Greenville Location?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As our main headquarters, our Greenville location offers the most comprehensive services and fastest
                response times in our network.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Main Headquarters</h3>
                <p className="text-gray-600">Our primary facility with full resources and expert staff</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fastest Response</h3>
                <p className="text-gray-600">15-30 minute average response time throughout the area</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wide Coverage</h3>
                <p className="text-gray-600">50+ mile service radius covering the entire region</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Round-the-clock expert service and emergency response</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Expert Locksmith Service in Greenville?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our Greenville headquarters is ready to provide rapid response and expert locksmith solutions 24/7.
              Contact us now for immediate assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="tel:8642034390">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (864) 203-4390 Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">Licensed & Insured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">24/7 Expert Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">Rapid Response Time</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

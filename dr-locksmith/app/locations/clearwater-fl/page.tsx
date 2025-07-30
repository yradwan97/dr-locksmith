import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Home, Building, Car, Sun } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Clearwater, FL Locksmith - 24/7 Dr. Locksmith Expert Services",
  description:
    "Expert locksmith services in Clearwater, Florida. 24/7 emergency response for residential, commercial, and automotive locksmith needs. Licensed & insured. Call (864) 203-4390.",
  keywords:
    "Clearwater locksmith, Clearwater FL locksmith, Tampa Bay locksmith, St. Petersburg locksmith, beach locksmith, Florida locksmith",
}

export default function ClearwaterPage() {
  const serviceAreas = [
    "Clearwater",
    "St. Petersburg",
    "Tampa",
    "Largo",
    "Pinellas Park",
    "Dunedin",
    "Belcher",
    "Safety Harbor",
    "Indian Rocks Beach",
    "Redington Beach",
    "Madeira Beach",
    "Treasure Island",
  ]

  const services = [
    {
      icon: Home,
      title: "Residential Locksmith Services",
      description:
        "Complete home locksmith solutions for Clearwater area residents including beachfront properties and coastal communities.",
      features: [
        "Emergency Home Lockouts",
        "Hurricane-Resistant Locks",
        "Beach House Security",
        "Vacation Rental Solutions",
      ],
    },
    {
      icon: Building,
      title: "Commercial Locksmith Services",
      description: "Professional business security solutions for Tampa Bay area hotels, restaurants, and businesses.",
      features: [
        "Hotel & Resort Security",
        "Restaurant Access Control",
        "Retail Security Systems",
        "Tourism Industry Solutions",
      ],
    },
    {
      icon: Car,
      title: "Automotive Locksmith Services",
      description: "Expert vehicle locksmith services throughout the Tampa Bay area with beach and highway coverage.",
      features: ["Beach Parking Lockouts", "Key Programming", "Ignition Repair", "Tourist Vehicle Services"],
    },
  ]

  const localFeatures = [
    {
      icon: Sun,
      title: "Beach Community Specialist",
      description: "Specialized security solutions for Clearwater's beachfront properties and coastal communities.",
    },
    {
      icon: Building,
      title: "Tourism Industry Expert",
      description:
        "Expert locksmith services for hotels, resorts, and vacation rental properties in the Tampa Bay area.",
    },
    {
      icon: Home,
      title: "Hurricane-Ready Security",
      description: "Weather-resistant locks and security systems designed for Florida's coastal climate.",
    },
    {
      icon: Car,
      title: "Tourist Vehicle Services",
      description: "Specialized automotive services for visitors and tourists throughout the Tampa Bay region.",
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
                  <span className="text-blue-600">Clearwater, FL</span>
                  <br />
                  Expert Locksmith Services
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Professional locksmith services for the Tampa Bay area. Our expert specialists provide 24/7 emergency
                  response and comprehensive security solutions throughout Clearwater, St. Petersburg, and the beautiful
                  Gulf Coast.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Beach Area Response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Tampa Bay Coverage</span>
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
                  src="/placeholder-clearwater.png"
                  alt="Clearwater FL locksmith services"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                  priority
                />
                <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">FL</div>
                      <div className="text-sm text-gray-600">Gulf Coast</div>
                      <div className="text-sm font-semibold text-gray-900 mt-1">Clearwater</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Serving the Tampa Bay Area</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our Clearwater location provides expert locksmith services throughout the Tampa Bay region, from
                  beachfront properties to downtown business districts and everything in between.
                </p>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                      <Phone className="h-6 w-6 text-blue-600" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                      <p className="text-gray-700">(864) 203-4390</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Service Area</h4>
                      <p className="text-gray-700">Tampa Bay Metropolitan Area</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                      <p className="text-gray-700">24/7 Emergency Service Available</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                      <p className="text-gray-700">Beach Properties, Hotels, Tourism Industry</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas We Serve</h3>
                <p className="text-gray-600 mb-6">
                  From Clearwater Beach to downtown Tampa, we provide comprehensive locksmith services throughout the
                  Tampa Bay area's diverse communities and business districts.
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
                  <h4 className="font-semibold text-gray-900 mb-2">Gulf Coast Expertise</h4>
                  <p className="text-gray-600 mb-4">
                    We understand the unique security needs of Florida's Gulf Coast, from hurricane-resistant locks to
                    vacation rental security and tourism industry requirements.
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Sun className="h-5 w-5" />
                    <span>Beach & Tourism Specialist</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Locksmith Services in Clearwater</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive locksmith services for the Tampa Bay area with expert diagnosis and professional solutions
                for coastal properties, tourism businesses, and residential communities.
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

        {/* Local Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us in Clearwater?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide specialized locksmith services tailored to Florida's Gulf Coast lifestyle and the unique
                needs of the Tampa Bay tourism industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {localFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Expert Locksmith Service in Clearwater?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our Tampa Bay specialists are ready to provide expert locksmith solutions 24/7. Contact us now for
              immediate assistance throughout the Clearwater and Gulf Coast area.
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
                <div className="text-blue-100">Licensed in Florida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">24/7 Beach Area Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">Tourism Industry Expertise</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

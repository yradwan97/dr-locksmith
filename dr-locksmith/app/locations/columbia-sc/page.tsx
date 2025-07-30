import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Home, Building, Car, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Columbia, SC Locksmith - 24/7 Dr. Locksmith Expert Services",
  description:
    "Expert locksmith services in Columbia, South Carolina. 24/7 emergency response for residential, commercial, and automotive locksmith needs. Licensed & insured. Call (864) 203-4390.",
  keywords:
    "Columbia locksmith, Columbia SC locksmith, emergency locksmith Columbia, USC locksmith, downtown Columbia locksmith, Midlands locksmith",
}

export default function ColumbiaPage() {
  const serviceAreas = [
    "Columbia",
    "West Columbia",
    "Cayce",
    "Forest Acres",
    "Irmo",
    "Lexington",
    "Blythewood",
    "Elgin",
    "Camden",
    "Sumter",
    "Orangeburg",
    "Newberry",
  ]

  const services = [
    {
      icon: Home,
      title: "Residential Locksmith Services",
      description:
        "Complete home locksmith solutions for Columbia area residents including historic downtown homes and modern suburban communities.",
      features: [
        "Emergency Home Lockouts",
        "Historic Home Lock Restoration",
        "Smart Lock Installation",
        "Security System Integration",
      ],
    },
    {
      icon: Building,
      title: "Commercial Locksmith Services",
      description:
        "Professional business security solutions for Columbia's government buildings, businesses, and institutions.",
      features: [
        "Government Building Security",
        "Office Complex Access Control",
        "Retail Security Systems",
        "Educational Institution Locks",
      ],
    },
    {
      icon: Car,
      title: "Automotive Locksmith Services",
      description: "Expert vehicle locksmith services throughout the Columbia metropolitan area and Midlands region.",
      features: ["Car Lockout Services", "Key Programming", "Ignition Repair", "Fleet Vehicle Services"],
    },
  ]

  const localFeatures = [
    {
      icon: Shield,
      title: "State Capital Expertise",
      description: "Specialized security solutions for government buildings and state facilities in Columbia.",
    },
    {
      icon: Building,
      title: "USC Campus Services",
      description: "Expert locksmith services for University of South Carolina campus and student housing.",
    },
    {
      icon: Home,
      title: "Historic District Specialist",
      description: "Specialized services for Columbia's historic downtown and preservation district properties.",
    },
    {
      icon: Car,
      title: "Midlands Coverage",
      description: "Comprehensive automotive services throughout the greater Columbia and Midlands region.",
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
                  <span className="text-blue-600">Columbia, SC</span>
                  <br />
                  Expert Locksmith Services
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Professional locksmith services for South Carolina's capital city. Our expert specialists provide 24/7
                  emergency response and comprehensive security solutions throughout Columbia and the Midlands region.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Capital City Response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Midlands Coverage</span>
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
                  src="/placeholder-columbia.png"
                  alt="Columbia SC locksmith services"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                  priority
                />
                <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">SC</div>
                      <div className="text-sm text-gray-600">State Capital</div>
                      <div className="text-sm font-semibold text-gray-900 mt-1">Columbia</div>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Serving Columbia & the Midlands</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our Columbia location provides expert locksmith services throughout South Carolina's capital city and
                  the greater Midlands region, including government facilities, USC campus, and historic districts.
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
                      <p className="text-gray-700">Columbia Metropolitan Area & Midlands Region</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                      <p className="text-gray-700">24/7 Emergency Service Available</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                      <p className="text-gray-700">Government Buildings, USC Campus, Historic Properties</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas We Serve</h3>
                <p className="text-gray-600 mb-6">
                  From downtown Columbia to the surrounding Midlands communities, we provide comprehensive locksmith
                  services throughout the capital region.
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
                  <h4 className="font-semibold text-gray-900 mb-2">Capital City Expertise</h4>
                  <p className="text-gray-600 mb-4">
                    We understand the unique security requirements of South Carolina's capital city, from state
                    government facilities to university campuses and historic preservation districts.
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Shield className="h-5 w-5" />
                    <span>Government & Institutional Specialist</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Locksmith Services in Columbia</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive locksmith services for South Carolina's capital city with expert diagnosis and
                professional solutions for government, educational, and residential needs.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us in Columbia?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide specialized locksmith services tailored to Columbia's unique needs as South Carolina's
                capital city and educational center.
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
            <h2 className="text-4xl font-bold text-white mb-6">Need Expert Locksmith Service in Columbia?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our Columbia specialists are ready to provide expert locksmith solutions 24/7. Contact us now for
              immediate assistance throughout the capital city and Midlands region.
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
                <div className="text-blue-100">Government Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">24/7 Capital Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">USC Campus Expertise</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

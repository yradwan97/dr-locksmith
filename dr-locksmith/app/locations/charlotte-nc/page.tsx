import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Home, Building, Car, Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Charlotte, NC Locksmith - 24/7 Dr. Locksmith Expert Services",
  description:
    "Expert locksmith services in Charlotte, North Carolina. 24/7 emergency response for residential, commercial, and automotive locksmith needs. Licensed & insured. Call (864) 203-4390.",
  keywords:
    "Charlotte locksmith, Charlotte NC locksmith, Queen City locksmith, emergency locksmith Charlotte, uptown Charlotte locksmith, banking locksmith",
}

export default function CharlottePage() {
  const serviceAreas = [
    "Charlotte",
    "Concord",
    "Gastonia",
    "Rock Hill",
    "Huntersville",
    "Matthews",
    "Mint Hill",
    "Pineville",
    "Cornelius",
    "Davidson",
    "Mooresville",
    "Kannapolis",
  ]

  const services = [
    {
      icon: Home,
      title: "Residential Locksmith Services",
      description:
        "Complete home locksmith solutions for Charlotte area residents from uptown condos to suburban neighborhoods.",
      features: [
        "Emergency Home Lockouts",
        "High-Rise Security Systems",
        "Neighborhood Watch Integration",
        "Smart Home Solutions",
      ],
    },
    {
      icon: Building,
      title: "Commercial Locksmith Services",
      description:
        "Professional business security solutions for Charlotte's banking district and corporate headquarters.",
      features: [
        "Banking Security Systems",
        "Corporate Headquarters",
        "High-Rise Office Buildings",
        "Financial Institution Services",
      ],
    },
    {
      icon: Car,
      title: "Automotive Locksmith Services",
      description:
        "Expert vehicle locksmith services throughout the Queen City with NASCAR and racing industry expertise.",
      features: ["Racing Industry Services", "Key Programming", "Ignition Repair", "Fleet Management"],
    },
  ]

  const localFeatures = [
    {
      icon: Crown,
      title: "Queen City Expertise",
      description: "Specialized security solutions for Charlotte's unique urban landscape and business environment.",
    },
    {
      icon: Building,
      title: "Banking District Specialist",
      description: "Expert locksmith services for Charlotte's major banking and financial institutions.",
    },
    {
      icon: Home,
      title: "Urban Living Solutions",
      description: "Security solutions tailored for Charlotte's high-rise living and urban communities.",
    },
    {
      icon: Car,
      title: "NASCAR Industry Services",
      description: "Specialized automotive services for Charlotte's racing industry and motorsports facilities.",
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
                  <span className="text-blue-600">Charlotte, NC</span>
                  <br />
                  Expert Locksmith Services
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Professional locksmith services for the Queen City. Our expert specialists provide 24/7 emergency
                  response and comprehensive security solutions throughout Charlotte's banking district, uptown, and
                  surrounding communities.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Queen City Response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Metro Coverage</span>
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
                  src="/placeholder-charlotte.png"
                  alt="Charlotte NC locksmith services"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                  priority
                />
                <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">NC</div>
                      <div className="text-sm text-gray-600">Queen City</div>
                      <div className="text-sm font-semibold text-gray-900 mt-1">Charlotte</div>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Serving the Queen City Metro</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our Charlotte location provides expert locksmith services throughout the greater Charlotte
                  metropolitan area, from the banking district uptown to the suburban communities and racing facilities.
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
                      <p className="text-gray-700">Charlotte Metropolitan Area</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                      <p className="text-gray-700">24/7 Emergency Service Available</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                      <p className="text-gray-700">Banking District, Corporate, Racing Industry</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas We Serve</h3>
                <p className="text-gray-600 mb-6">
                  From uptown Charlotte's banking district to the surrounding communities and racing facilities, we
                  provide comprehensive locksmith services throughout the Queen City metro area.
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
                  <h4 className="font-semibold text-gray-900 mb-2">Queen City Advantage</h4>
                  <p className="text-gray-600 mb-4">
                    We understand Charlotte's unique business environment as a major banking center and provide
                    specialized security solutions for financial institutions, corporate headquarters, and racing
                    industry facilities.
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Crown className="h-5 w-5" />
                    <span>Banking & Corporate Specialist</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Locksmith Services in Charlotte</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive locksmith services for the Queen City with expert diagnosis and professional solutions for
                banking, corporate, and residential needs.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us in Charlotte?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide specialized locksmith services tailored to Charlotte's unique position as a major banking
                center and motorsports hub.
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
            <h2 className="text-4xl font-bold text-white mb-6">Need Expert Locksmith Service in Charlotte?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our Queen City specialists are ready to provide expert locksmith solutions 24/7. Contact us now for
              immediate assistance throughout the Charlotte metropolitan area.
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
                <div className="text-blue-100">Licensed in North Carolina</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">24/7 Queen City Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">Banking & Racing Expertise</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

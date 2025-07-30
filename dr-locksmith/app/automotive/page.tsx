import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Car, Key, Settings, Shield, Clock, CheckCircle, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Automotive Locksmith Services - 24/7 Dr. Locksmith Greenville, SC",
  description:
    "Expert automotive locksmith services in Greenville, SC. Car lockouts, key programming, ignition repair, transponder keys, and vehicle locksmith solutions. 24/7 emergency service. Call (864) 203-4390.",
  keywords:
    "automotive locksmith, car locksmith, car lockout, key programming, ignition repair, transponder keys, vehicle locksmith, Greenville SC",
}

export default function AutomotivePage() {
  const services = [
    {
      icon: Car,
      title: "Car Lockout Services",
      description:
        "Car lockouts are one of the most common reasons people call a locksmith. Whether you've locked your keys in the car or lost them entirely, we can help you get back into your vehicle quickly and safely.",
      features: ["Non-Destructive Entry", "All Vehicle Makes", "24/7 Availability", "Rapid Response"],
    },
    {
      icon: Key,
      title: "Key Programming and Replacement",
      description:
        "Modern cars use sophisticated key systems that require programming to work properly. If you need a new key or your existing key isn't working, we can program it for you. We work with all major car manufacturers and can program keys for most vehicles.",
      features: ["Transponder Programming", "Smart Key Programming", "Key Fob Replacement", "All Vehicle Brands"],
    },
    {
      icon: Settings,
      title: "Ignition Repair and Replacement",
      description:
        "If your car's ignition is giving you trouble, we can help. We can repair or replace ignitions for all makes and models of vehicles. Our technicians are experienced with all types of ignition systems and can get your car running again.",
      features: ["Ignition Cylinder Repair", "Complete Replacement", "All Vehicle Types", "Expert Diagnosis"],
    },
    {
      icon: Wrench,
      title: "Vehicle Security Systems",
      description:
        "We regularly receive calls for automotive locksmith services and can help with anything from car lockouts to key programming. Our expert diagnosis helps identify vehicle security issues and provides comprehensive solutions.",
      features: ["Security Assessment", "Anti-Theft Systems", "Remote Programming", "System Diagnostics"],
    },
  ]

  const benefits = [
    "Licensed & Insured Technicians",
    "24/7 Emergency Vehicle Service",
    "Expert Automotive Diagnosis",
    "Rapid Response Time",
    "All Vehicle Makes & Models",
    "Satisfaction Guaranteed",
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
                  <span className="text-blue-600">Expert Automotive</span>
                  <br />
                  Locksmith Services
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We regularly receive calls for automotive locksmith services and can help with anything from car
                  lockouts to key programming. Our expert locksmith specialists provide professional diagnosis and
                  solutions for all your vehicle security needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                    <Link href="/contact">Get Vehicle Assessment</Link>
                  </Button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder-f76je.png"
                  alt="Professional automotive locksmith programming car keys"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                  priority
                />
                <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Vehicle Service</div>
                      <div className="text-sm font-semibold text-gray-900 mt-1">Always Available</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Automotive Locksmith Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From car lockouts to key programming and ignition repair, our expert locksmith specialists provide
                comprehensive automotive locksmith services for all vehicle types in Greenville, SC.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900 mb-3">{service.title}</CardTitle>
                      </div>
                    </div>
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

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Why Choose 24/7 Dr. Locksmith for Your Vehicle?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">24/7 Vehicle Support</h4>
                  <p className="text-sm text-gray-600">
                    Our expert locksmith specialists are available around the clock for emergency automotive services.
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Technology</h4>
                  <p className="text-sm text-gray-600">
                    Latest equipment and technology for modern vehicle security systems and key programming.
                  </p>
                </div>
                <div className="text-center">
                  <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Vehicle Security Experts</h4>
                  <p className="text-sm text-gray-600">
                    Specialized expertise in automotive security systems and vehicle locksmith solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="text-center mt-12">
              <div className="bg-blue-600 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Need Emergency Automotive Locksmith Service?</h3>
                <p className="text-blue-100 mb-6">
                  Our expert locksmith specialists are available 24/7 for all your vehicle emergency needs in
                  Greenville, SC
                </p>
                <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="tel:8642034390">Call (864) 203-4390 Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

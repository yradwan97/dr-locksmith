import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Shield, Clock, Users, Award, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us - 24/7 Dr. Locksmith Expert Services in Greenville, SC",
  description:
    "Learn about 24/7 Dr. Locksmith - Greenville's trusted expert locksmith specialists. Licensed, insured, and available 24/7 for residential, commercial, and automotive locksmith services. LIC# 2018-42000.",
  keywords:
    "about Dr Locksmith, locksmith company, Greenville locksmith, expert locksmith, licensed locksmith, professional locksmith services",
}

export default function AboutPage() {
  const stats = [
    { number: "24/7", label: "Expert Availability" },
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Satisfied Customers" },
    { number: "15min", label: "Average Response" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Expert Diagnosis",
      description:
        "Our expert locksmith specialists provide professional diagnosis and solutions for all your security needs.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Available around the clock, 365 days a year for emergency locksmith services when you need us most.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description:
        "Licensed and insured locksmith specialists with years of experience in residential, commercial, and automotive services.",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description:
        "We stand behind our work with a 100% satisfaction guarantee and use only the highest quality hardware.",
    },
  ]

  const certifications = [
    "Licensed Locksmith Services (LIC# 2018-42000)",
    "Fully Insured & Bonded",
    "Better Business Bureau Member",
    "Certified Security Professionals",
    "Manufacturer Authorized Dealer",
    "Emergency Response Certified",
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
                  About <span className="text-blue-600">24/7 Dr. Locksmith</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We provide high-quality expert locksmith services in Greenville South Carolina & surrounding areas.
                  Whether you are locked out of your automobile, home or business, our expert locksmith specialists will
                  come to you in your hour of need with professional diagnosis and solutions.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">24/7 Expert Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Expert Specialists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Quality Guaranteed</span>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <Link href="tel:8642034390">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (864) 203-4390
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="/locksmith-team.png"
                  alt="24/7 Dr. Locksmith professional team"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose 24/7 Dr. Locksmith?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're Greenville's trusted expert locksmith specialists, committed to delivering professional, reliable,
                and expert locksmith solutions with rapid response times for all your security needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Locksmith Services</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our expert locksmith specialists provide comprehensive services for residential, commercial, and
                  automotive needs. From emergency lockouts to security system installations, we have the expertise and
                  tools to handle any locksmith challenge.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Residential locksmith services and home security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Commercial locksmith and business security solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Automotive locksmith and vehicle security services</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Emergency lockout services available 24/7</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    <Link href="/residential">Residential Services</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    <Link href="/commercial">Commercial Services</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    <Link href="/automotive">Automotive Services</Link>
                  </Button>
                </div>
              </div>

              <div>
                <Image
                  src="/placeholder-849hx.png"
                  alt="Professional locksmith tools and equipment"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Licensed & Certified Professionals</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert locksmith specialists are fully licensed, insured, and certified to provide professional
                locksmith services in Greenville, SC and surrounding areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Expert Locksmith Service?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact 24/7 Dr. Locksmith today for professional diagnosis and expert solutions. Our licensed specialists
              are available 24/7 for all your locksmith needs in Greenville, SC.
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
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

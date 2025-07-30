import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Building, Key, Lock, Shield, Clock, CheckCircle, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Commercial Locksmith Services - 24/7 Dr. Locksmith Greenville, SC",
  description:
    "Expert commercial locksmith services in Greenville, SC. Access control systems, master key systems, commercial lock installation, and business security solutions. 24/7 emergency service. Call (864) 203-4390.",
  keywords:
    "commercial locksmith, business locksmith, access control, master key systems, commercial locks, office locksmith, Greenville SC",
}

export default function CommercialPage() {
  const services = [
    {
      icon: Shield,
      title: "Access Control Systems",
      description:
        "Access control systems are the future of business security. These systems allow you to control who has access to your building and when they have access. You can set up different access levels for different employees and track who enters and exits your building.",
      features: [
        "Electronic Access Control",
        "Employee Access Management",
        "Entry/Exit Tracking",
        "Multi-Level Security",
      ],
    },
    {
      icon: Key,
      title: "Master Key Systems",
      description:
        "Master key systems are perfect for businesses that need to give different levels of access to different employees. With a master key system, you can have one key that opens all locks, while individual keys only open specific locks.",
      features: ["Hierarchical Access", "Single Master Key", "Individual Employee Keys", "Flexible Security Levels"],
    },
    {
      icon: Lock,
      title: "Commercial Lock Installation",
      description:
        "Commercial lock installation is one of our most popular services. We can install any type of commercial lock, from simple deadbolts to high-security electronic locks. We work with all major lock manufacturers and can recommend the best locks for your business.",
      features: ["High-Security Locks", "Electronic Locks", "Deadbolt Systems", "Brand Compatibility"],
    },
    {
      icon: Building,
      title: "Business Security Solutions",
      description:
        "We regularly receive calls to businesses and perform anything from re-entry to security system installation. Our expert diagnosis helps identify security vulnerabilities and provides comprehensive solutions for your business.",
      features: ["Security Assessment", "Emergency Re-entry", "System Installation", "Ongoing Maintenance"],
    },
  ]

  const benefits = [
    "Licensed & Insured Technicians",
    "24/7 Emergency Business Service",
    "Expert Security Diagnosis",
    "Rapid Response Time",
    "Commercial Grade Hardware",
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
                  <span className="text-blue-600">Expert Commercial</span>
                  <br />
                  Locksmith Services
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We regularly receive calls to businesses and perform anything from re-entry to security system
                  installation. Our expert locksmith specialists provide professional diagnosis and solutions for all
                  your business security needs.
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
                    <Link href="/contact">Get Security Assessment</Link>
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
                  src="/placeholder-1rkbg.png"
                  alt="Professional commercial locksmith installing access control system"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                  priority
                />
                <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Business Service</div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Commercial Locksmith Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From access control systems to master key installations, our expert locksmith specialists provide
                comprehensive commercial locksmith services for businesses in Greenville, SC.
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
                Why Choose 24/7 Dr. Locksmith for Your Business?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">24/7 Business Support</h4>
                  <p className="text-sm text-gray-600">
                    Our expert locksmith specialists are available around the clock for emergency commercial services.
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Commercial Grade Security</h4>
                  <p className="text-sm text-gray-600">
                    High-security commercial locks and systems designed for business environments.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Business Security Experts</h4>
                  <p className="text-sm text-gray-600">
                    Specialized expertise in commercial security systems and business locksmith solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="text-center mt-12">
              <div className="bg-blue-600 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Need Emergency Commercial Locksmith Service?</h3>
                <p className="text-blue-100 mb-6">
                  Our expert locksmith specialists are available 24/7 for all your business emergency needs in
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

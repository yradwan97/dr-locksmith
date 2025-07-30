import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Home, Key, Lock, Shield, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Residential Locksmith Services - 24/7 Dr. Locksmith Greenville, SC",
  description:
    "Expert residential locksmith services in Greenville, SC. Home lockouts, high-security locks, keyless entry, deadbolt installation, and lock replacement. 24/7 emergency service. Call (864) 203-4390.",
  keywords:
    "residential locksmith, home locksmith, house lockout, deadbolt installation, keyless entry, high security locks, lock replacement, Greenville SC",
}

export default function ResidentialPage() {
  const services = [
    {
      icon: Key,
      title: "High-Security Locks and Keyless Entry",
      description:
        "If you are among many homeowners, then it is time to update the locks you have in your home. We can install high-security locks and keyless entry systems that will give you peace of mind and enhanced home security.",
      features: [
        "Smart Lock Installation",
        "Keyless Entry Systems",
        "High-Security Deadbolts",
        "Security Consultation",
      ],
    },
    {
      icon: Home,
      title: "Home Lockout Services",
      description:
        "Most people aren't aware of the security flaws in their own home. If you are looking for a better way to feel more secure and safe in your home, our expert diagnosis can identify vulnerabilities and provide solutions.",
      features: ["Emergency Re-entry", "Non-Destructive Entry", "24/7 Availability", "Rapid Response"],
    },
    {
      icon: Lock,
      title: "Fresh Installation Deadbolt",
      description:
        "Professional deadbolt installation by our expert locksmiths. We provide fresh installation deadbolt services to enhance your home's security with the latest locking technology.",
      features: ["Grade 1 Deadbolts", "Professional Installation", "Security Assessment", "Warranty Included"],
    },
    {
      icon: Shield,
      title: "Lock Replacement",
      description:
        "Numerous things will wear a lock to nothing. Environmental effects from water, rain, debris, and dirt; to the persistent grating of the key against the grain of the lock mechanism. If your lock is worn out, we can replace it with a new one.",
      features: ["All Lock Types", "Same-Day Service", "Quality Hardware", "Expert Installation"],
    },
  ]

  const benefits = [
    "Licensed & Insured Technicians",
    "24/7 Emergency Response",
    "Expert Diagnosis & Solutions",
    "Rapid Response Time",
    "Quality Hardware & Installation",
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
                  <span className="text-blue-600">Expert Residential</span>
                  <br />
                  Locksmith Services
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We regularly receive calls to people's homes and perform anything from re-entry to key duplication.
                  Our expert locksmith specialists provide professional diagnosis and solutions for all your home
                  security needs.
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
                    <Link href="/contact">Get Expert Consultation</Link>
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
                  src="/placeholder-uhyda.png"
                  alt="Professional residential locksmith working on door lock"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                  priority
                />
                <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Expert Service</div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Residential Locksmith Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From emergency lockouts to security system installations, our expert locksmith specialists provide
                comprehensive residential locksmith services in Greenville, SC.
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
                Why Choose 24/7 Dr. Locksmith for Your Home?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">24/7 Expert Availability</h4>
                  <p className="text-sm text-gray-600">
                    Our expert locksmith specialists are available around the clock for emergency residential services.
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
                  <p className="text-sm text-gray-600">
                    Fully licensed and insured residential locksmith services for your peace of mind.
                  </p>
                </div>
                <div className="text-center">
                  <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Home Security Experts</h4>
                  <p className="text-sm text-gray-600">
                    Specialized expertise in residential security systems and home locksmith solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="text-center mt-12">
              <div className="bg-blue-600 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Need Emergency Residential Locksmith Service?</h3>
                <p className="text-blue-100 mb-6">
                  Our expert locksmith specialists are available 24/7 for all your residential emergency needs in
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

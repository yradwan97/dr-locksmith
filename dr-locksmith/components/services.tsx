import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, Car, Key, Lock, Shield } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Locksmith",
      description:
        "Home lockouts, high-security locks, keyless entry, deadbolt installation, and emergency residential locksmith services with expert diagnosis.",
      features: ["High-Security Locks", "Home Lockouts", "Keyless Entry", "Lock Replacement"],
      href: "/residential",
    },
    {
      icon: Building,
      title: "Commercial Locksmith",
      description:
        "Business security solutions, access control systems, master key systems, and commercial lock services with expert consultation.",
      features: ["Access Control", "Master Key Systems", "Security Consultation", "Lock Installation"],
      href: "/commercial",
    },
    {
      icon: Car,
      title: "Automotive Locksmith",
      description:
        "Car lockouts, key programming, ignition repair, and automotive security solutions with expert diagnosis.",
      features: ["Car Lockouts", "Key Programming", "Ignition Repair", "Transponder Keys"],
      href: "/automotive",
    },
  ]

  const additionalServices = [
    {
      icon: Key,
      title: "Key Services",
      description: "Key cutting, duplication, and replacement for all types of keys.",
    },
    {
      icon: Lock,
      title: "Lock Repair",
      description: "Professional lock repair and maintenance for all lock types.",
    },
    {
      icon: Shield,
      title: "Security Consultation",
      description: "Expert advice on improving your property's security systems.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Locksmith Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency lockouts to security system installations, our expert locksmith specialists provide
            comprehensive locksmith services for residential, commercial, and automotive needs in Greenville, SC.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center justify-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need Expert Emergency Service?</h3>
            <p className="text-blue-100 mb-6">
              Our expert locksmith specialists are available 24/7 for all your emergency locksmith needs in Greenville,
              SC
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="tel:8642034390">Call (864) 203-4390 Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

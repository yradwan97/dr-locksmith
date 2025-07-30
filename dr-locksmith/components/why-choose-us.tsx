import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Users, Wrench, MapPin, Star } from "lucide-react"
import Image from "next/image"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Mobile fleet available around the clock, 365 days a year for emergency response.",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured locksmith technicians for your peace of mind.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Professional locksmith technicians with years of experience in the field.",
    },
    {
      icon: Wrench,
      title: "Quality Equipment",
      description: "State-of-the-art tools and equipment for efficient and reliable service.",
    },
    {
      icon: MapPin,
      title: "Mobile Fleet Service",
      description: "Professional mobile units strategically positioned throughout Greenville, SC for fastest response.",
    },
    {
      icon: Star,
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work with a 100% customer satisfaction guarantee.",
    },
  ]

  const brands = [
    { name: "Master Lock", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Schlage", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Ademco", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Kwikset", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Medeco", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Mul-T-Lock", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Fleet Locksmith?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're Greenville's trusted mobile locksmith fleet, committed to delivering fast, reliable, and professional
            locksmith solutions with rapid response times for all your security needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trusted Brands */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">We Work With Trusted Brands</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={60}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Fleet Response</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Mobile Units</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Rapid Responses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15min</div>
            <div className="text-gray-600">Average Response</div>
          </div>
        </div>
      </div>
    </section>
  )
}

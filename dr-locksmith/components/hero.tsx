import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Shield, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Expert Diagnosis</span>
              <br />
              24/7 Locksmith Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Locked out? Need expert diagnosis? Our professional locksmith specialists in Greenville, SC provide expert
              solutions 24/7 for all your residential, commercial, and automotive locksmith needs. Licensed & insured
              with rapid response.
            </p>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">24/7 Expert Diagnosis</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Mobile Expert Service</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Rapid Response</span>
              </div>
            </div>

            {/* CTA Buttons */}
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

          {/* Image/Visual */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Professional locksmith working on door lock"
              width={600}
              height={500}
              className="rounded-lg shadow-2xl"
              priority
            />

            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Expert Diagnosis</div>
                  <div className="text-sm font-semibold text-gray-900 mt-1">Always Available</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

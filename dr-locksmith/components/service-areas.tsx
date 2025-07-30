import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServiceAreas() {
  const areas = [
    "Greenville",
    "Spartanburg",
    "Anderson",
    "Greer",
    "Mauldin",
    "Simpsonville",
    "Fountain Inn",
    "Taylors",
    "Travelers Rest",
    "Easley",
    "Pickens",
    "Liberty",
    "Clemson",
    "Seneca",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Fleet Coverage: Greenville, SC & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our professional mobile locksmith fleet provides fast, reliable service throughout Greenville County and
              the surrounding Upstate South Carolina region.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Areas Include:</h3>
              <div className="grid grid-cols-2 gap-2">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Rapid Fleet Response</h4>
              <p className="text-gray-600">
                We understand that locksmith emergencies can't wait. Our mobile fleet units are strategically positioned
                throughout the Greenville area to provide the fastest possible response times, typically arriving within
                15 minutes of your call.
              </p>
            </div>

            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="tel:8642034390">
                <Phone className="h-5 w-5 mr-2" />
                Call (864) 203-4390
              </Link>
            </Button>
          </div>

          {/* Map/Contact Card */}
          <div>
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    1200 Woodruff Rd, Building A - 3<br />
                    Greenville, South Carolina, 29607
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">(864) 203-4390</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">info@joylocksmith.com</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Mon - Sun: Open 24 Hours
                    <br />
                    <span className="text-blue-600 font-semibold">24/7 Fleet Response Available</span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">License</h4>
                  <p className="text-gray-600">LIC# 2018 - 42000</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

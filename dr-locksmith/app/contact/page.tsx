import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us - 24/7 Dr. Locksmith Expert Services in Greenville, SC",
  description:
    "Contact 24/7 Dr. Locksmith for expert locksmith services in Greenville, SC. Call (864) 203-4390 for 24/7 emergency service. Located at 1200 Woodruff Rd, Building A-3, Greenville, SC 29607.",
  keywords:
    "contact Dr Locksmith, Greenville locksmith, emergency locksmith, locksmith phone number, locksmith address, 24/7 locksmith contact",
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["(864) 203-4390", "(302) 309-7932"],
      description: "Call us 24/7 for emergency locksmith services",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@joylocksmith.com"],
      description: "Send us a message for non-emergency inquiries",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["1200 Woodruff Rd, Building A - 3", "Greenville, South Carolina, 29607"],
      description: "Our main office location",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["24/7 Emergency Service", "Mon - Sun: Always Available"],
      description: "Expert diagnosis available around the clock",
    },
  ]

  const serviceAreas = [
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
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Contact <span className="text-blue-600">24/7 Dr. Locksmith</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Need expert locksmith services? Our licensed specialists are available 24/7 for emergency and scheduled
                services in Greenville, SC and surrounding areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <Link href="tel:8642034390">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (864) 203-4390
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg bg-transparent"
                >
                  <Link href="mailto:info@joylocksmith.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <info.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-semibold mb-1">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-gray-600 mt-3">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                    Get Expert Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and our expert locksmith specialists will contact you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" name="firstName" required className="w-full" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" name="lastName" required className="w-full" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input id="phone" name="phone" type="tel" required className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input id="email" name="email" type="email" className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Locksmith</option>
                        <option value="commercial">Commercial Locksmith</option>
                        <option value="automotive">Automotive Locksmith</option>
                        <option value="emergency">Emergency Lockout</option>
                        <option value="installation">Lock Installation</option>
                        <option value="repair">Lock Repair</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full"
                        placeholder="Please describe your locksmith needs..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Business Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                      <Shield className="h-6 w-6 text-blue-600" />
                      Business Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">License Information</h4>
                      <p className="text-gray-600">LIC# 2018 - 42000</p>
                      <p className="text-sm text-gray-500">Licensed & Insured in South Carolina</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Service Coverage</h4>
                      <p className="text-gray-600">Greenville, SC & Surrounding Areas</p>
                      <p className="text-sm text-gray-500">50+ mile service radius</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                      <p className="text-gray-600">15-30 minutes average</p>
                      <p className="text-sm text-gray-500">24/7 emergency response available</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Methods</h4>
                      <p className="text-gray-600">Cash, Credit Cards, Checks</p>
                      <p className="text-sm text-gray-500">Insurance claims accepted</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">Service Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <span className="text-gray-700 text-sm">{area}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Emergency Locksmith Service?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't wait when you're locked out or need urgent locksmith services. Our expert specialists are standing
              by 24/7 to provide rapid response and professional solutions.
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
                <Link href="tel:3023097932">
                  <Phone className="h-5 w-5 mr-2" />
                  Alternative: (302) 309-7932
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">Licensed & Insured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">24/7 Expert Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">✓</div>
                <div className="text-blue-100">Rapid Response Time</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

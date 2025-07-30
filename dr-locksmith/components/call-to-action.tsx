import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Need Our Mobile Fleet Right Now?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Don't wait when you're locked out or need emergency locksmith services. Our professional mobile fleet is
          standing by 24/7 to provide rapid response and get you back inside safely and quickly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
          >
            <Link href="tel:8642034390">
              <Phone className="h-5 w-5 mr-2" />
              Call (864) 203-4390
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
          >
            <Link href="/contact">
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Free Quote
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">✓</div>
            <div className="text-blue-100">Licensed & Insured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">✓</div>
            <div className="text-blue-100">24/7 Emergency Service</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">✓</div>
            <div className="text-blue-100">Fast Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}

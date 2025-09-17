import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Connecting You
            <span className="text-blue-600 dark:text-blue-400"> to the Digital World</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 text-pretty">
            Digilink IT Solutions provides a comprehensive suite of managed IT services designed to enhance productivity, fortify security, and streamline operations for modern businesses. By leveraging industry leading technologies and a client-centric approach, we deliver tailored solutions that allow you to focus on your core business objectives. Our offerings span cloud integration, advanced security, seamless data migration, robust backup and fully outsourced IT support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4">
              Discover Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
               Get Free Consultation
            </Button>
          </div>
         
          </div>
        </div>
      </div>
    </section>
  )
}

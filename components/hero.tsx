import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

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
            Digilink IT Solutions provides managed IT services that boost efficiency, improve security, and streamline business operations. 
            Our services include cloud integration, data migration, backup, robust security, and full IT support designed for your needs.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#services">
              <Button size="lg" className="text-lg px-8 py-4">
                Discover Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                Get Free Consultation
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Code className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Technology</h3>              
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Smartphone className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connected</h3>              
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>                           
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

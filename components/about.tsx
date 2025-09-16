import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Target } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    number: "100+",
    label: "Projects Completed",
  },
  {
    icon: Clock,
    number: "5+",
    label: "Years Experience",
  },
  {
    icon: Target,
    number: "99%",
    label: "Success Rate",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
              About Digilink IT
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-pretty">
              We are a forward-thinking digital agency specializing in creating innovative solutions that bridge the gap
              between technology and business success. Our team of experienced developers and designers work
              collaboratively to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-pretty">
              From startups to enterprise clients, we've helped businesses across various industries transform their
              digital presence and achieve their goals through cutting-edge technology and strategic thinking.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="/modern-office-team-working-on-computers.jpg"
              alt="Digilink IT team working"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

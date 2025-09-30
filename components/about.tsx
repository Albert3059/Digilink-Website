import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Target , Cloud} from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "3+",
    label: "Happy Clients",
  },
  {
      icon: Cloud,
    number: "3+",
    label: "Cloud Migrations Completed"
  },
  {
  icon: Clock,
  number: "13+",
  label: "Years Engineering Experience"
  },
  {
     icon: Target,
  number: "100%",
  label: "Commitment to Client Success"
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
              About Digilink IT Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-pretty">
              Digilink IT Solutions is a South African IT support and consulting company dedicated to helping individuals, 
              home users, and small businesses navigate the digital world with clarity and confidence
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-pretty">
              Whether working remotely, managing a growing business, or seeking dependable technical assistance, 
              Digilink IT Solutions provides the expertise and support you can trust. Our solutions are designed to simplify technology, 
              allowing you to focus on what truly matters.
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
              alt="Modern team working"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

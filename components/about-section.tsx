import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering businesses through innovative technology solutions that drive real results.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Building lasting partnerships by understanding and exceeding client expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Staying ahead of technology trends to deliver cutting-edge solutions.",
  },
]

const achievements = [
  "500+ Successful Projects",
  "98% Client Satisfaction Rate",
  "10+ Years of Experience",
  "24/7 Support Available",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">About Digilink IT Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a vision to bridge the gap between businesses and technology, Digilink IT Solutions has
                been at the forefront of digital transformation for over a decade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of expert consultants specializes in AI integration, cloud solutions, and strategic IT
                planning. We believe that technology should empower, not complicate, which is why we focus on delivering
                solutions that are both innovative and practical.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="group hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">{value.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

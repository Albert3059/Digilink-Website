import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom web applications using React, Next.js, and modern frameworks",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS and Android apps, plus cross-platform solutions",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust APIs and database solutions for your applications",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security and compliance solutions",
    technologies: ["OAuth", "JWT", "GDPR", "SOC 2"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization and performance monitoring",
    technologies: ["CDN", "Caching", "Analytics", "Monitoring"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cloud, Shield, Smartphone, Database, Settings, Users, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Integration & Consulting",
    description: "Implement cutting-edge AI solutions to automate processes and enhance decision-making capabilities.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Management",
    description: "Seamlessly transition to cloud infrastructure with ongoing support and optimization.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with comprehensive security audits and implementation.",
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Modernize your business processes with digital tools and strategic technology adoption.",
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    description: "Transform raw data into actionable insights with advanced analytics and reporting.",
  },
  {
    icon: Settings,
    title: "IT Infrastructure Setup",
    description: "Design and implement robust IT systems tailored to your business requirements.",
  },
  {
    icon: Users,
    title: "Team Training & Support",
    description: "Empower your team with comprehensive training on new technologies and systems.",
  },
  {
    icon: TrendingUp,
    title: "Strategic IT Planning",
    description: "Develop long-term technology roadmaps aligned with your business objectives.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>

      <div className="absolute top-10 right-10 h-20 w-20 rounded-full border border-primary/20 animate-float animate-circuit"></div>
      <div className="absolute bottom-20 left-10 h-16 w-16 rounded-full border border-primary/30 animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 h-12 w-12 rounded-full border border-primary/25 animate-circuit delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">Our IT Consulting Services</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive innovation and growth for individuals and businesses of
            all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden border-primary/10 hover:border-primary/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 animate-circuit group-hover:animate-glow">
                    <Icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Cloud, Database, Shield, Zap, Headset } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Modern Work (Microsoft 365)",
    description: "We help organizations boost productivity and collaboration with expert Microsoft 365 implementation and management. Your team benefits from essential apps like Teams, Word, Excel, and OneDrive, while AI-powered tools such as Copilot streamline workflows with intelligent assistance.",
    technologies: ["Outlook", "Word", "OneDrive", "Excel", "Copilot"],
  },
  {
    icon: Smartphone,
    title: "Voice on Teams",
    description: "We turn Microsoft Teams into a full VoIP phone system, letting users call, receive, transfer, and manage voicemail within Teams. With features like auto-attendants, call history, and custom hold music, your business gains a seamless and professional telephony solution.",
    technologies: ["Teams Calling", "Auto-Attendants", "Call Queues"],
  },
  {
    icon: Shield,
    title: "Mimecast Email Security",
    description: "Mimecast delivers advanced email security, blocking phishing and other threats before they reach your network. Protecting this critical channel creates a strong first line of defense against malware, ransomware, and cyber attacks.",
      technologies: ["Anti-Phishing", "Malware Protection", "Ransomware Defense","DMARC", "DKIM", "SPF"],
  },
  {
    icon: Cloud,
    title: "Migration: A Seamless Transition to the Cloud",
    description: "Our migration strategy leverages BitTitan MigrationWiz to ensure smooth email and data transfers across platforms. It handles mailboxes, documents, archives, shared drives, and Teams, providing secure, efficient, and scalable migration tailored to your business needs.",
    technologies: ["BitTitan MigrationWiz"],
  },
  {
    icon: Shield,
    title: "Cloud Backup Solutions",
    description: "Cloud Backup Solutions secure and protect data across virtual, physical, and cloud environments. With flexible pay-as-you-grow pricing and customizable schedules, businesses gain reliable backup and recovery using leading technologies like Acronis and Dropsuite.",
    technologies: ["Acronis", "Dropsuite"],
  },
  {
    icon: Headset,
    title: "Outsourced IT Support",
    description: "Our Outsourced IT Support service delivers the expertise of a full IT department with the benefits of outsourcing. It reduces operational burdens, lowers costs, provides access to the latest technology, and ensures experts manage your IT infrastructure.",
    technologies: ["AnyDesk", "Teams Support"],

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
            Our cloud solutions are engineered to create flexible, collaborative, and secure work environment. We focus on integrating powerful tools that empower your team and drive business efficiency.
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

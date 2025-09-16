"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      // Use environment variable for API endpoint and append /sendEmail
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sendEmail`
      if (!process.env.NEXT_PUBLIC_API_URL) throw new Error("API URL is not configured")

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        e.currentTarget.reset()
      } else {
        const errorData = await response.json().catch(() => null)
        throw new Error(errorData?.error || "Failed to send message")
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>hello@digilinkict.co.za</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>123 Tech Street, Digital City, DC 12345</span>
                </div>
              </CardContent>
            </Card>

            <div className="prose dark:prose-invert">
              <h3 className="text-xl font-semibold mb-4">Why Choose Digilink IT?</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Expert team with 5+ years of experience</li>
                <li>• Cutting-edge technology stack</li>
                <li>• Agile development methodology</li>
                <li>• 24/7 support and maintenance</li>
                <li>• Competitive pricing and flexible packages</li>
              </ul>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" placeholder="Your Name" required className="w-full" />
                <Input name="email" type="email" placeholder="Your Email" required className="w-full" />
                <Textarea name="message" placeholder="Your Message" required rows={5} className="w-full" />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

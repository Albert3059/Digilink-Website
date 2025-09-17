"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      to: "info@digilinkict.co.za",
      subject: `Message from ${formData.get("name")}`,
      html: `
        <p><strong>Name:</strong> ${formData.get("name")}</p>
        <p><strong>Email:</strong> ${formData.get("email")}</p>
        <p><strong>Message:</strong> ${formData.get("message")}</p>
      `,
    }

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sendEmail`
      if (!process.env.NEXT_PUBLIC_API_URL) throw new Error("API URL is not configured")

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSuccessMessage("✅ Your message has been sent successfully! We'll get back to you shortly.")
        e.currentTarget.reset()
      } else {
        const errorData = await response.json().catch(() => null)
        throw new Error(errorData?.error || "Failed to send message")
      }
    } catch (error: any) {
      setSuccessMessage(`❌ ${error.message || "Failed to send message. Please try again."}`)
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
              {successMessage && (
                <p className={`mt-4 font-medium ${successMessage.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                  {successMessage}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

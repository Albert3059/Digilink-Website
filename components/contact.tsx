"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")

    const formData = new FormData(e.currentTarget)
   const data = {
  subject: `📩 Service Inquiry from ${formData.get("name")}`,
  html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #1e3a8a;">New Service Inquiry</h2>
      <p>You have received a new service inquiry through your website contact form:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr>
          <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Name:</td>
          <td style="padding: 6px; border: 1px solid #ddd;">${formData.get("name")}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Email:</td>
          <td style="padding: 6px; border: 1px solid #ddd;">${formData.get("email")}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Message:</td>
          <td style="padding: 6px; border: 1px solid #ddd;">${formData.get("message")}</td>
        </tr>
      </table>
      <p style="margin-top: 20px;">💡 Please respond to this inquiry as soon as possible.</p>
      <p style="font-size: 12px; color: #888;">Sent from Digilink IT Solutions website contact form.</p>
    </div>
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
        setSuccessMessage("Your message has been sent successfully! We'll get back to you within 24 hours.")
        formRef.current?.reset()
      } else {
        const errorData = await response.json().catch(() => null)
        throw new Error(errorData?.error || "Failed to send message")
      }
    } catch (error: any) {
      setSuccessMessage(`${error.message || "Failed to send message. Please try again."}`)
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
          {/* Contact Info */}
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

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" placeholder="Your Name" required className="w-full" />
                <Input name="email" type="email" placeholder="Your Email" required className="w-full" />
                <Textarea name="message" placeholder="Your Message" required rows={5} className="w-full" />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>

              {/* Inline success/error message */}
              {successMessage && (
                <p className="mt-4 text-center text-lg font-medium">
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

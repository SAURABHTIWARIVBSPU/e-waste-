"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "64b39555-007f-43d0-927d-24af2542086b");
  
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
      } else {
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-emerald-100/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or feedback? We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-background via-emerald-50/30 to-teal-50/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card className="bg-background/95 backdrop-blur-lg shadow-2xl border border-emerald-100/20">
                <CardContent className="p-6">
                  {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-emerald-800">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="focus:ring-2 focus:ring-emerald-500 border-emerald-100/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-emerald-800">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="focus:ring-2 focus:ring-emerald-500 border-emerald-100/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-emerald-800">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(123) 456-7890"
                          className="focus:ring-2 focus:ring-emerald-500 border-emerald-100/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-emerald-800">Subject</Label>
                        <Select onValueChange={handleSelectChange}>
                          <SelectTrigger className="focus:ring-2 focus:ring-emerald-500 border-emerald-100/50">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent className="border-emerald-100/50">
                            {["General Inquiry", "Pickup Information", "Donation Question", 
                              "Partnership Opportunity", "Feedback", "Other"].map((subject) => (
                              <SelectItem 
                                key={subject} 
                                value={subject.toLowerCase()}
                                className="focus:bg-emerald-50/50"
                              >
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-emerald-800">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="How can we help you?"
                          className="min-h-[150px] focus:ring-2 focus:ring-emerald-500 border-emerald-100/50"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-emerald-200/50 transition-all"
                      >
                        Send Message
                      </Button>
                    </form>
                  ) : (
                    <div className="space-y-4 text-center">
                      <div className="flex justify-center animate-bounce">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 flex items-center justify-center shadow-lg">
                          <CheckCircle className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-emerald-800">Message Sent!</h3>
                        <p className="text-emerald-600/90">
                          Thank you for contacting us. We've received your message and will get back to you shortly.
                        </p>
                      </div>
                      <Button
                        onClick={() => {
                          setFormSubmitted(false)
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            subject: "",
                            message: "",
                          })
                        }}
                        className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-md"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <p className="text-emerald-600/90">You can also reach us using the information below.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: MapPin,
                    title: "Our Location",
                    content: `123 Green Street\nEco City, EC 12345\nUnited States`,
                    color: "from-emerald-500 to-teal-500"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: `Main: (123) 456-7890\nToll-Free: (800) 123-4567`,
                    color: "from-cyan-500 to-emerald-500"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: `General: info@ecorecycle.com\nSupport: support@ecorecycle.com\nDonations: donate@ecorecycle.com`,
                    color: "from-teal-500 to-cyan-500"
                  },
                  {
                    icon: Clock,
                    title: "Hours",
                    content: `Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 3:00 PM\nSunday: Closed`,
                    color: "from-emerald-400 to-cyan-400"
                  }
                ].map((item, index) => (
                  <Card 
                    key={index} 
                    className="bg-background/95 backdrop-blur-lg border border-emerald-100/20 hover:shadow-xl transition-all"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-md`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium text-emerald-800">{item.title}</h3>
                        <p className="text-sm text-emerald-600/90 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-emerald-50/60 to-cyan-50/60">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-emerald-600/90">
                Find answers to common questions about our services and processes.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-8 space-y-4">
            {[
              {
                question: "How quickly will I receive a response to my inquiry?",
                answer: "We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please call our customer service line."
              },
              {
                question: "Do you offer pickup services nationwide?",
                answer: "Currently, we offer pickup services in select metropolitan areas and surrounding suburbs. Please contact us to confirm service availability in your location."
              },
              {
                question: "How can I partner with EcoRecycle for my business?",
                answer: "We offer corporate partnership programs for businesses of all sizes. Please contact our partnership team at partnerships@ecorecycle.com to discuss opportunities."
              },
              {
                question: "Can I drop off my e-waste instead of scheduling a pickup?",
                answer: "Yes, we have drop-off locations in several cities. Please contact us for the nearest drop-off point to your location."
              }
            ].map((faq, index) => (
              <Card 
                key={index} 
                className="bg-background/95 backdrop-blur-lg border border-emerald-100/20 hover:shadow-xl transition-all"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-emerald-800">{faq.question}</h3>
                  <p className="text-emerald-600/90">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Users, School, Leaf, ArrowRight } from "lucide-react";

export default function DonatePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const file = formData.get("screenshot") as File;
    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64File = reader.result?.toString().split(',')[1];
      
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
            subject: `New Donation from ${formData.get("name")}`,
            template_id: process.env.NEXT_PUBLIC_WEB3FORMS_TEMPLATE_ID,
            name: formData.get("name"),
            email: formData.get("email"),
            amount: `₹${formData.get("amount")}`,
            date: new Date().toLocaleDateString('en-IN', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            receipt_id: `ECO-${Math.floor(100000 + Math.random() * 900000)}`,
            attachments: base64File ? [{
              filename: file.name,
              content: base64File,
              type: file.type
            }] : [],
            cc_emails: [
              "stw284702@gmail.com", 
              formData.get("email")?.toString() || ""
            ],
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
          (e.target as HTMLFormElement).reset();
        }
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                Join the E-Waste Revolution
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-green-700 to-cyan-600 bg-clip-text text-transparent">
                Your Donation Matters
              </h1>
              <p className="text-gray-600 md:text-xl/relaxed">
                Support responsible e-waste management and help create a cleaner, greener planet for future generations.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#donation-section">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Donate Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#impact">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                    See Impact
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/donation-hero.jpg"
                alt="E-waste recycling"
                width={550}
                height={550}
                className="rounded-lg object-cover shadow-xl border-4 border-white"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                Measurable Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-green-700 to-cyan-600 bg-clip-text text-transparent">
                Every Rupee Makes a Difference
              </h2>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <School className="h-8 w-8 text-green-600" />
                <CardTitle className="text-green-800">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  ₹500 funds a school workshop on e-waste management
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Leaf className="h-8 w-8 text-green-600" />
                <CardTitle className="text-green-800">Recycling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  ₹1000 recycles 50kg of electronic waste safely
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-green-600" />
                <CardTitle className="text-green-800">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  ₹2500 sponsors a community collection drive
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation-section" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                Secure UPI Payment
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-green-700 to-cyan-600 bg-clip-text text-transparent">
                Make Your Contribution
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-8">
            <Card className="bg-white">
              <CardContent className="p-6 space-y-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-green-100">
                    <Image
                      src="/qr.jpg"
                      alt="UPI QR Code"
                      width={300}
                      height={300}
                      className="rounded-lg"
                      priority
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="font-mono text-lg font-bold text-green-700">UPI ID: stw284701-1@okicici</p>
                    <p className="text-sm text-gray-600">Scan or send directly via UPI apps</p>
                    <div className="pt-4">
                      <a
                        href={`upi://pay?pa=stw284701-1@okicici&pn=E-Waste&tn=${encodeURIComponent('Donation for E-Waste Management')}&cu=INR`}
                      >
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M10.7 15.3l4.6-4.6c.2-.2.2-.5 0-.7l-4.6-4.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l4 4-4 4c-.2.2-.2.5 0 .7.2.2.5.2.7 0z"/>
                          </svg>
                          Open UPI App
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="text-xl font-bold text-green-700">Thank you for your donation! 🎉</h3>
                    <p className="text-green-600 mt-2">
                      We've sent a confirmation to your email with:
                    </p>
                    <ul className="mt-2 text-sm text-green-700 list-disc list-inside">
                      <li>Payment receipt (80G Tax Benefits)</li>
                      <li>Donation impact summary</li>
                      <li>Recycling certificate</li>
                    </ul>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                    >
                      Make Another Donation
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="John Doe" 
                            required 
                            className="focus:ring-green-500 border-gray-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="focus:ring-green-500 border-gray-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="amount" className="text-gray-700">Amount (₹) *</Label>
                        <Input
                          id="amount"
                          name="amount"
                          type="number"
                          min="100"
                          step="100"
                          placeholder="500"
                          required
                          className="focus:ring-green-500 border-gray-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="screenshot" className="text-gray-700">Payment Proof *</Label>
                        <Input
                          id="screenshot"
                          name="screenshot"
                          type="file"
                          accept="image/*,.pdf"
                          required
                          className="file:bg-green-50 file:text-green-700 file:border-0 file:rounded-md file:px-4 file:py-2 cursor-pointer border-gray-300"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Upload screenshot/PDF of successful UPI payment
                        </p>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span>Confirm Donation <ArrowRight className="ml-2 h-4 w-4" /></span>
                      )}
                    </Button>
                  </form>
                )}

                <div className="text-center text-sm text-gray-600 space-y-2">
                  <p>✓ 80G Tax Benefits Available</p>
                  <p>✓ Secure & Encrypted Transaction</p>
                  <p>✓ Instant Payment Confirmation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                Donor Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-green-700 to-cyan-600 bg-clip-text text-transparent">
                Why People Support Us
              </h2>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Monthly Supporter",
                quote: "Knowing my contribution directly funds community recycling drives gives me hope for a cleaner future.",
                image: "/placeholder-user.jpg",
              },
              {
                name: "Priya Patel",
                role: "Corporate Partner",
                quote: "EcoRecycle's transparent process made our company's CSR initiative impactful and measurable.",
                image: "/placeholder-user.jpg",
              },
              {
                name: "Arjun Mehta",
                role: "Environmentalist",
                quote: "The educational programs they run in schools are creating real change in how we handle e-waste.",
                image: "/placeholder-user.jpg",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="rounded-full border-2 border-green-100"
                    />
                    <div className="space-y-2">
                      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                      <div>
                        <h3 className="font-medium text-green-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-700 to-green-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Make a Difference?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed text-green-50">
                Join thousands of conscious citizens and businesses building a sustainable future
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#donation-section">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-blue-700 hover:bg-green-50"
                >
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Truck, BarChart, Leaf, Award, Recycle, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-500 to-red-600/30 shadow-[inset_0_-20px_50px_-30px_rgba(6,182,212,0.3)]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-emerald-400/20 px-3 py-1 text-sm text-cyan-100 shadow-lg shadow-emerald-500/20">
                Responsible E-Waste Recycling
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                Recycle Your E-Waste for a Greener Future
              </h1>
              <p className="text-cyan-50/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We make it easy to dispose of your electronic waste responsibly. Schedule a pickup today and contribute
                to a more sustainable planet.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/pickup">
                  <Button size="lg" className="w-full min-[400px]:w-auto bg-gradient-to-r from-emerald-600 to-cyan-600 shadow-lg shadow-emerald-500/30 hover:shadow-cyan-500/40">
                    Schedule Pickup
                    <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto border-white/30 text-black hover:bg-white/10 hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder-logo.png?height=450&width=500"
                alt="E-waste recycling"
                width={550}
                height={550}
                className="rounded-lg object-cover border-4 border-cyan-100/50 shadow-2xl shadow-emerald-500/30"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-500/20 px-3 py-1 text-sm text-cyan-800 shadow-md shadow-cyan-200/50">
                Simple Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-emerald-700 to-cyan-700 bg-clip-text text-transparent">
                How Our E-Waste Recycling Works
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed">
                Our streamlined process makes recycling your electronic waste easy and convenient.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 pt-8">
            <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-lg shadow-cyan-100/50 hover:shadow-emerald-100/60 transition-shadow">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 shadow-inner shadow-cyan-200/30">
                  <Clock className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800">Schedule</h3>
                <p className="text-slate-600">
                  Book a convenient pickup time through our easy-to-use online form.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-lg shadow-cyan-100/50 hover:shadow-emerald-100/60 transition-shadow">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 shadow-inner shadow-cyan-200/30">
                  <Truck className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800">Pickup</h3>
                <p className="text-slate-600">Our team arrives at your location to collect your e-waste items.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-lg shadow-cyan-100/50 hover:shadow-emerald-100/60 transition-shadow">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 shadow-inner shadow-cyan-200/30">
                  <Recycle className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800">Recycle</h3>
                <p className="text-slate-600">
                  We responsibly recycle your e-waste, ensuring materials are properly processed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/pickup">
              <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/30 hover:shadow-cyan-500/40">
                Schedule Your Pickup
                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-sky-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-emerald-500/20 px-3 py-1 text-sm text-emerald-800 shadow-md shadow-emerald-200/50">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-cyan-700 to-emerald-700 bg-clip-text text-transparent">
                Features That Make Us Different
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed">
                We're committed to making e-waste recycling accessible, transparent, and impactful.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
            <Card className="bg-white border-2 border-emerald-100 shadow-lg shadow-cyan-100/30 hover:shadow-emerald-100/40">
              <CardHeader className="pb-2">
                <Leaf className="h-6 w-6 text-cyan-600" />
                <CardTitle className="text-emerald-800">Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Our recycling processes adhere to the highest environmental standards, minimizing the impact on our
                  planet.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 border-emerald-100 shadow-lg shadow-cyan-100/30 hover:shadow-emerald-100/40">
              <CardHeader className="pb-2">
                <Truck className="h-6 w-6 text-cyan-600" />
                <CardTitle className="text-emerald-800">Free Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  We offer free pickup services for your convenience, making it easier to recycle your e-waste.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 border-emerald-100 shadow-lg shadow-cyan-100/30 hover:shadow-emerald-100/40">
              <CardHeader className="pb-2">
                <BarChart className="h-6 w-6 text-cyan-600" />
                <CardTitle className="text-emerald-800">Impact Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Track the positive environmental impact of your recycling efforts with our detailed reports.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 border-emerald-100 shadow-lg shadow-cyan-100/30 hover:shadow-emerald-100/40">
              <CardHeader className="pb-2">
                <Award className="h-6 w-6 text-cyan-600" />
                <CardTitle className="text-emerald-800">Certified Process</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Our recycling processes are certified by leading environmental organizations, ensuring proper
                  handling.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 border-emerald-100 shadow-lg shadow-cyan-100/30 hover:shadow-emerald-100/40">
              <CardHeader className="pb-2">
                <Clock className="h-6 w-6 text-cyan-600" />
                <CardTitle className="text-emerald-800">Convenient Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Choose a pickup time that works for you with our flexible scheduling system.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 border-emerald-100 shadow-lg shadow-cyan-100/30 hover:shadow-emerald-100/40">
              <CardHeader className="pb-2">
                <Recycle className="h-6 w-6 text-cyan-600" />
                <CardTitle className="text-emerald-800">Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  We ensure complete data destruction for all devices, protecting your privacy and security.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-600 to-cyan-600 shadow-[inset_0_-20px_50px_-30px_rgba(6,182,212,0.3)]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Ready to Recycle Your E-Waste?
              </h2>
              <p className="mx-auto max-w-[700px] text-cyan-50/90 md:text-xl/relaxed">
                Join thousands of environmentally conscious individuals and businesses who trust us with their e-waste
                recycling needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/pickup">
                <Button size="lg" className="bg-white text-emerald-700 shadow-lg shadow-black/20 hover:bg-cyan-50 hover:text-emerald-800">
                  Schedule Pickup
                  <ArrowRight className="ml-2 h-4 w-4 text-emerald-700" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 hover:text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
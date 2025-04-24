import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Award, Recycle, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 px-3 py-1 text-sm text-white">
                Our Mission
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                About EcoRecycle
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're on a mission to create a sustainable future by making e-waste recycling accessible, convenient,
                and impactful for everyone.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <Image
                src="/output.jpg"
                alt="Our team recycling e-waste"
                width={550}
                height={550}
                className="rounded-lg object-cover relative transform transition duration-300 hover:scale-102"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-emerald-50/50 to-cyan-50/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-lg blur-xl opacity-30"></div>
              <Image
                src="/about.jpg?height=550&width=550"
                alt="Our journey"
                width={550}
                height={550}
                className="rounded-lg object-cover shadow-xl transform transition duration-300 hover:scale-102"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2 bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 px-3 py-1 text-sm text-white">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                How We Started
              </h2>
              <p className="text-muted-foreground">
                Founded in 2015, EcoRecycle began with a simple observation: electronic waste was becoming one of the
                fastest-growing waste streams, yet recycling options were limited and inconvenient.
              </p>
              <p className="text-muted-foreground">
                Our founders, a group of environmental engineers and tech enthusiasts, set out to create a solution that
                would make e-waste recycling accessible to everyone. They built EcoRecycle with a vision of combining
                technology and sustainability to address the growing e-waste crisis.
              </p>
              <p className="text-muted-foreground">
                Today, we've grown into a nationwide service with a network of certified recycling facilities, but our
                mission remains the same: to protect our planet by ensuring electronic waste is recycled responsibly.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-100/50 via-cyan-100/50 to-teal-100/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 px-3 py-1 text-sm text-white">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                What Drives Us
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values guide everything we do at EcoRecycle.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
            {[
              {
                icon: Leaf,
                title: "Environmental Stewardship",
                content: "We're committed to protecting our planet through responsible recycling practices and minimizing waste."
              },
              {
                icon: Users,
                title: "Community Focus",
                content: "We believe in building strong relationships with the communities we serve and making a positive local impact."
              },
              {
                icon: Award,
                title: "Excellence",
                content: "We strive for excellence in all aspects of our service, from customer experience to recycling processes."
              },
              {
                icon: Target,
                title: "Innovation",
                content: "We continuously seek innovative solutions to improve our services and maximize environmental impact."
              },
              {
                icon: Recycle,
                title: "Transparency",
                content: "We believe in being open about our processes and the impact of our recycling efforts."
              },
              {
                icon: Heart,
                title: "Passion",
                content: "We're passionate about creating a sustainable future and inspiring others to join our mission."
              },
            ].map((value, index) => (
              <Card key={index} className="bg-background/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-white">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
                  <p className="text-muted-foreground">{value.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-emerald-50/50 to-cyan-50/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 px-3 py-1 text-sm text-white">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Meet the People Behind EcoRecycle
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our diverse team of experts is united by a shared commitment to environmental sustainability.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "/placeholder1.jpg?height=300&width=300",
                bio: "Environmental engineer with 15+ years of experience in waste management.",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                image: "/placeholder2.jpg?height=300&width=300",
                bio: "Tech innovator focused on creating digital solutions for environmental challenges.",
              },
              {
                name: "David Rodriguez",
                role: "Sustainability Manager",
                image: "/placeholder3.jpg?height=300&width=300",
                bio: "Environmental scientist specializing in circular economy principles.",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden bg-background/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-primary font-medium bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mt-2">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-100/50 via-emerald-100/50 to-cyan-100/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 px-3 py-1 text-sm text-white">
                Our Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Making a Difference
              </h2>
              <p className="text-muted-foreground">
                Since our founding, we've made significant strides in reducing e-waste and its environmental impact:
              </p>
              <ul className="space-y-2">
                {[
                  "Recycled over 5 million pounds of electronic waste",
                  "Prevented 2.5 million pounds of CO2 emissions",
                  "Recovered valuable materials for reuse in manufacturing",
                  "Served over 100,000 customers nationwide",
                  "Partnered with 50+ businesses for corporate recycling programs",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/donate">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  Support Our Mission
                </Button>
              </Link>
            </div>
            <div className="mx-auto lg:ml-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <Image
                src="/placeholder4.jpg?height=550&width=550"
                alt="Environmental impact"
                width={550}
                height={550}
                className="rounded-lg object-cover shadow-xl transform transition duration-300 hover:scale-102"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Join Us in Creating a Sustainable Future
              </h2>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're looking to recycle your e-waste or support our mission, there are many ways to get
                involved.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/pickup">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-white/90 hover:text-emerald-700 shadow-lg"
                >
                  Schedule a Pickup
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-blue hover:bg-white/10 hover:text-white"
                >
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
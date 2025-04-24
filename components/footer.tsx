import Link from "next/link"
import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-[500px] w-[500px] -top-20 -left-20 bg-gradient-to-r from-green-200 to-transparent rounded-full blur-xl animate-[gradient-rotate_20s_linear_infinite]" />
        <div className="absolute h-[500px] w-[500px] -bottom-20 -right-20 bg-gradient-to-l from-purple-200 to-transparent rounded-full blur-xl animate-[gradient-rotate_20s_linear_infinite_-10s]" />
      </div>

      <div className="container relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Recycle className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              EcoRecycle
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Responsible e-waste recycling for a greener future. We make it easy to dispose of electronic waste safely
            and sustainably.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pickup" className="text-gray-600 hover:text-primary transition-colors">
                Schedule Pickup
              </Link>
            </li>
            <li>
              <Link href="/track" className="text-gray-600 hover:text-primary transition-colors">
                Track Pickup
              </Link>
            </li>
            <li>
              <Link href="/donate" className="text-gray-600 hover:text-primary transition-colors">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span className="text-gray-600">123 Green Street, Eco City, EC 12345</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span className="text-gray-600">(123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span className="text-gray-600">info@ecorecycle.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
          <p className="text-sm text-gray-600">
            Subscribe to our newsletter for updates on our services and environmental tips.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-primary/50"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-green-600 to-blue-600 px-3 py-2 text-sm font-medium text-white shadow-lg hover:from-green-700 hover:to-blue-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mt-8 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} EcoRecycle. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
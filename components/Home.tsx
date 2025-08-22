"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Truck,
  Award,
  Headphones,
  CheckCircle,
  Settings,
  Wrench,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#111827]">
      {/* Header */}
      <header className="bg-[#000000] py-4 sticky top-0 z-50">
             <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative w-[100px] h-12"> {/* Adjust width and height as needed */}
          <Image
            src="/navlogo.png"
            alt="Manal Abed Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
              Home
            </a>
            <a href="#about-us" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
              About Us
            </a>
            <a href="/products" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
              Products
            </a>
            <a href="#contact-us" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1f2937] border-t border-[#374151]">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a href="#" className="block text-[#ffffff] hover:text-[#ff0000] transition-colors">
                Home
              </a>
              <a href="#about-us" className="block text-[#ffffff] hover:text-[#ff0000] transition-colors">
                About Us
              </a>
              <a href="/products" className="block text-[#ffffff] hover:text-[#ff0000] transition-colors">
                Products
              </a>
              <a href="#contact-us" className="block text-[#ffffff] hover:text-[#ff0000] transition-colors">
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
<section className="relative py-12 md:py-28 bg-no-repeat bg-cover bg-center w-full" style={{ backgroundImage: "url('/div.png')" }}>
  {/* Dark overlay for better text readability */}
  <div className="absolute inset-0 bg-black/01"></div>

<div className="container mx-auto relative z-10">
  <div className="grid lg:grid-cols-2 gap-8 md:gap-8 items-center">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 lg:mx-10">
        Reliable <span className="text-[#ff0000]">Scaffolding</span> Solutions
      </h1>
        <p className="text-[#9ca3af] text-base md:text-lg mb-6 md:mb-8 max-w-md mx-auto lg:mx-10">
          Supplying durable and safe scaffolding materials for your projects. Premium quality that meets
          international safety standards.
        </p>
        <Button className="bg-[#ff0000] hover:bg-[#ff0000]/90 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg w-full sm:w-auto lg:mx-10">
          <a href="/products">Explore Products</a>
        </Button>
      </div>
      <div className="relative order-first lg:order-last">
        {/* <Image
          src="/div.png?height=400&width=600"
          alt="Scaffolding structure"
          width={600}
          height={400}
          className="rounded-lg w-full h-auto"
        /> */}
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about-us" className="bg-[#1f2937] py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-last lg:order-first">
              <Image
                src="/img.png?height=400&width=500"
                alt="Construction workers on scaffolding"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center lg:text-left">
                About Manal Abed
              </h2>
              <p className="text-[#9ca3af] mb-4 text-center lg:text-left">
                As a growing startup in the construction industry, Manal Abed is dedicated 
                to providing dependable scaffolding materials and thermal testing services.
              </p>
              <p className="text-[#9ca3af] mb-6 md:mb-8 text-center lg:text-left">
                 Our vision is to bring innovative, safe, and cost-effective scaffolding solutions
                 to construction projects of all sizes, while building a strong reputation for quality
                 and reliability from the very beginning of our journey.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#ff0000] p-2 rounded flex-shrink-0">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Safety First</h3>
                    <p className="text-[#9ca3af] text-xs md:text-sm">
                      All products meet international safety standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-[#ff0000] p-2 rounded flex-shrink-0">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Certified Quality</h3>
                    <p className="text-[#9ca3af] text-xs md:text-sm">ISO certified materials and processes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-[#ff0000] p-2 rounded flex-shrink-0">
                    <Truck className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Fast Delivery</h3>
                    <p className="text-[#9ca3af] text-xs md:text-sm">Quick delivery to your construction site</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-[#ff0000] p-2 rounded flex-shrink-0">
                    <Headphones className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Expert Support</h3>
                    <p className="text-[#9ca3af] text-xs md:text-sm">24/7 technical and consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-[#111827] py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Premium Products</h2>
            <p className="text-[#9ca3af] max-w-2xl mx-auto text-sm md:text-base">
              We offer a comprehensive range of high-quality scaffolding materials and accessories to meet all your
              construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <a href="/products/steel-pipes" className="h-full">
              <Card className="bg-[#1f2937] border-[#374151] h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <Image
                      src="/product-1.png?height=200&width=300"
                      alt="Steel Pipes & Tubes"
                      width={300}
                      height={200}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="bg-[#ff0000] p-2 rounded mr-3">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Steel Pipes & Tubes</h3>
                  </div>
                  <p className="text-[#9ca3af] mb-4">
                    High-strength galvanized steel pipes designed for durability and load-bearing capacity in various
                    construction environments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-[#9ca3af]">
                      <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
                      Multiple sizes available
                    </li>
                    <li className="flex items-center text-[#9ca3af]">
                      <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
                      Corrosion resistant
                    </li>
                    <li className="flex items-center text-[#9ca3af]">
                      <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
                      High load capacity
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </a>

            <a href="/products/couplers" className="h-full">
              <Card className="bg-[#1f2937] border-[#374151] h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <Image
                      src="/product-2.png?height=200&width=300"
                      alt="Couplers & Clamps"
                      width={300}
                      height={200}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="bg-[#ff0000] p-2 rounded mr-3">
                      <Wrench className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Couplers & Clamps</h3>
                  </div>
                  <p className="text-[#9ca3af] mb-4">
                    Precision-engineered connectors that ensure secure and stable scaffold structures for maximum
                    safety.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-[#9ca3af]">
                      <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
                      Fixed and swivel types
                    </li>
                    <li className="flex items-center text-[#9ca3af]">
                      <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
                      Drop-forged steel
                    </li>
                    <li className="flex items-center text-[#9ca3af]">
                      <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
                      Easy installation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </a>

            <a href="/products/scaffolding-frames" className="h-full">
              <Card className="bg-[#1f2937] border-[#374151] h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <Image
                      src="/product-3.png?height=200&width=300"
                      alt="Scaffolding Frames"
                      width={300}
                      height={200}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="bg-[#ff0000] p-2 rounded mr-3">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Scaffolding Frames</h3>
                  </div>
                  <p className="text-[#9ca3af] mb-4">
                    Complete frame systems designed for quick assembly and disassembly while maintaining structural
                    integrity.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-[#9ca3af]">
                      <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
                      Modular design
                    </li>
                    <li className="flex items-center text-[#9ca3af]">
                      <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
                      Heavy-duty construction
                    </li>
                    <li className="flex items-center text-[#9ca3af]">
                      <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
                      Multiple configurations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </a>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button
              variant="outline"
              className="border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000] hover:text-white px-6 md:px-8 py-2 md:py-3 bg-transparent w-full sm:w-auto"
            >
              Request Product Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact-us" className="bg-[#1f2937] py-12 md:py-16 px-4">
  <div className="container mx-auto">
    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get In Touch</h2>
      <p className="text-[#9ca3af] text-sm md:text-base max-w-2xl mx-auto">
        Have questions about our products or need a quote? Reach out to our team.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Contact Form Column */}
      <div className="space-y-6">
        <h3 className="text-lg md:text-xl font-bold text-white">Send Us a Message</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-[#9ca3af] mb-2 text-sm md:text-base">Full Name</label>
            <Input className="bg-[#374151] border-[#6b7280] text-white h-10 md:h-12 w-full" />
          </div>
          <div>
            <label className="block text-[#9ca3af] mb-2 text-sm md:text-base">Email Address</label>
            <Input type="email" className="bg-[#374151] border-[#6b7280] text-white h-10 md:h-12 w-full" />
          </div>
          <div>
            <label className="block text-[#9ca3af] mb-2 text-sm md:text-base">Phone Number</label>
            <Input className="bg-[#374151] border-[#6b7280] text-white h-10 md:h-12 w-full" />
          </div>
          <div>
            <label className="block text-[#9ca3af] mb-2 text-sm md:text-base">Your Message</label>
            <Textarea className="bg-[#374151] border-[#6b7280] text-white h-24 md:h-32 w-full" />
          </div>
          <Button className="w-full bg-[#ff0000] hover:bg-[#ff0000]/90 text-white py-2 md:py-3">
            Send Message
          </Button>
        </form>
      </div>

      {/* Map and Contact Info Column */}
      <div className="space-y-6">
       
        {/* Contact Information */}
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Contact Information</h3>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start space-x-3">
              <div className="bg-[#ff0000] p-2 rounded flex-shrink-0">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm md:text-base">Our Location</h4>
                <p className="text-[#9ca3af] text-xs md:text-sm">The Metropolis-Business Bay, Floor 15 / Office 1516 Dubai, UAE</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-[#ff0000] p-2 rounded flex-shrink-0">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm md:text-base">Phone Number</h4>
                <p className="text-[#9ca3af] text-xs md:text-sm">+971 50 740 4196 | +971 55 509 2976</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-[#ff0000] p-2 rounded flex-shrink-0">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm md:text-base">Email Address</h4>
                <p className="text-[#9ca3af] text-xs md:text-sm">manalabedgt@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-[#ff0000] p-2 rounded flex-shrink-0">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm md:text-base">Working Hours</h4>
                <p className="text-[#9ca3af] text-xs md:text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="bg-[#1f2937] rounded-lg overflow-hidden h-64 md:h-80">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.542434611731!2d55.274327774470805!3d25.18492347771877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f68319169f881%3A0x69266793dd38e629!2sThe%20Metropolis%20Tower%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1755861289468!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-300"
          ></iframe>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-[#000000] py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-[42px] md:text-[50px] font-bold text-white mb-4">Manal Abed</h3>
              <p className="text-[#9ca3af] mb-4 text-sm md:text-base">
                Your trusted partner for high-quality scaffolding materials and systems solutions. Building safety into
                every project.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
              <a
              href="https://www.instagram.com/magtradingdxb?igsh=MTd1eDE3emh3bW5tMQ=="
              target="_blank"
              rel="noopener noreferrer">
              <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-white text-sm">ig</span>
              </div>
              </a>
              <a
              href="https://x.com/ManalAbedllc"
              target="_blank"
              rel="noopener noreferrer" >
              <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-white text-sm">X</span>
              </div>
              </a>




                {/* <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">x</span>
                </div>
                <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
                <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">ig</span>
                </div> */}
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#9ca3af] hover:text-white text-sm md:text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="text-[#9ca3af] hover:text-white text-sm md:text-base">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-[#9ca3af] hover:text-white text-sm md:text-base">
                    Products
                  </a>
                </li>
                <li>
                 
                </li>
                <li>
                  <a href="#contact-us" className="text-[#9ca3af] hover:text-white text-sm md:text-base">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Newsletter</h3>
              <p className="text-[#9ca3af] mb-4 text-sm md:text-base">
                Subscribe to our newsletter for the latest product updates and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row">
                <Input
                  placeholder="Your email address"
                  className="bg-[#374151] border-[#6b7280] text-white sm:rounded-r-none mb-2 sm:mb-0"
                />
                <Button className="bg-[#ff0000] hover:bg-[#ff0000]/90 sm:rounded-l-none">→</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-[#374151] mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-[#9ca3af] text-xs md:text-sm">
              © 2024 Manal Abed Scaffolding & General Trading. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

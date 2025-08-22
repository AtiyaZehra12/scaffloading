"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import {Menu} from "lucide-react"
import Link from "next/link"


export default function ProductPage() {
  const products = [
 {
  id: 1,
  name: "Adjustable Telescopic Props",
  description: "Strong, adjustable steel props used for supporting slabs, beams, and formwork.",
  image: "/Adjustable Telescopic Props.jpg",
},
{
  id: 2,
  name: "Cuplock Scaffolding System",
  description: "Quick-lock modular system for safe, versatile, and efficient scaffolding structures.",
  image: "/Cuplock Scaffolding System.jpeg",
},
{
  id: 3,
  name: "Cuplock Vertical Standards (Red Painted)",
  description: "Vertical load-bearing posts with cups for secure ledger connections.",
  image: "/Cuplock Vertical Standards (Red Painted).jpeg",
},
{
  id: 4,
  name: "Platform Decks",
  description: "Durable anti-slip working platforms ensuring safe access on scaffolding.",
  image: "/Platform Deck.jpeg",
},
{
  id: 5,
  name: "Cuplock Vertical Standards (Blue Painted)",
  description: "High-strength steel standards designed for vertical support in scaffolding.",
  image: "/Cuplock Vertical Standards (Blue Painted).png",
},
{
  id: 6,
  name: "Base Plates",
  description: "Heavy-duty base plates providing stable foundations for scaffolding setups.",
  image: "/p-product-6.png",
},
{
  id: 7,
  name: "Scaffolding Double Coupler",
  description: "Right-angle coupler for connecting two scaffolding tubes at 90° securely.",
  image: "/Scaffolding Double Coupler.jpeg",
},  
{
  id: 8,
  name: "Scaffolding Sleeve Coupler",
  description: "Joint coupler for connecting scaffolding tubes end-to-end in alignment.",
  image: "/Scaffolding Sleeve Coupler.jpg",
},  
{
  id: 9,
  name: "Scaffolding Wing Nut",
  description: "Formwork accessory used with tie rods for strong and easy tightening.",
  image: "/Scaffolding Wing Nut-Picsart-AiImageEnhancer.jpg",
},  
{
  id: 10,
  name: "Steel Pipes",
  description: "High-quality steel pipes widely used as the backbone of scaffolding structures.",
  image: "/Steel Pipes.jpeg",
},  

  ]
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff]">
       {/* Header */}
      <header className="bg-[#000000] py-4 sticky top-0 z-50">
             <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative w-[200px] h-12"> {/* Adjust width and height as needed */}
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
              <Link href="/" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
                Home
              </Link>
              <Link href="/#about-us" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
                Products
              </Link>
              <Link href="/#contact-us" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
                Contact
              </Link>

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
      <div className="text-center">
      {/* Products Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-[#9ca3af] text-lg">Professional scaffolding solutions for industrial projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-[#111827] border border-[#6b7280] overflow-hidden">
                {/* Product Image */}
                <div className="relative aspect-video">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Card Content */}
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                  <p className="text-[#9ca3af] text-sm mb-4 leading-relaxed">{product.description}</p>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Custom Solutions Section */}
      <div className="bg-[#111827] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-[#9ca3af] text-lg mb-8">Contact our experts for tailored scaffolding solutions</p>
          <Button className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-medium px-8 py-3 text-lg">
            Get Quote Now
          </Button>
        </div>
      </div>
    </div>
  )
}

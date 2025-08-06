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
      name: "Heavy Duty Pipes",
      description: "Durable galvanized steel for industrial scaffolding applications",
      price: "$45.30/unit",
      image: "/image1.png?height=100&width=100",
      icon: "/product-1 Frame.png",
      action: "View Details",
    },
    {
      id: 2,
      name: "Steel Couplers",
      description: "High-strength clamps for secure pipe connections and joints",
      price: "$12.50/unit",
      image: "/image2.png?height=200&width=300",
      icon: "/product-2 Frame.png",
      action: "Add to Cart",
    },
    {
      id: 3,
      name: "Mobile Wheels",
      description: "Heavy-duty casters for mobile scaffolding platforms",
      price: "$28.75/set",
      image: "/image3.png?height=200&width=300",
      icon: "/product-3 Frame.png",
      action: "View Details",
    },
    {
      id: 4,
      name: "Platform Decks",
      description: "Anti-slip aluminum platforms for safe working surfaces",
      price: "$89.90/unit",
      image: "/image4.png?height=200&width=300",
      icon: "/product-4 Frame.png",
      action: "Add to Cart",
    },
    {
      id: 5,
      name: "Safety Rails",
      description: "Protective guardrails for enhanced workplace safety",
      price: "$34.25/unit",
      image: "/image5.png?height=100&width=200",
      icon: "/product-5 Frame.png",
      action: "View Details",
    },
    {
      id: 6,
      name: "Base Plates",
      description: "Sturdy foundation plates for stable scaffolding setup",
      price: "$18.50/unit",
      image: "/p-product-6.png?height=200&width=300",
      icon: "/product-6 Frame.png",
      action: "Add to Cart",
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
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                  <p className="text-[#9ca3af] text-sm mb-4 leading-relaxed">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-[#ff0000]">{product.price}</span>
                  </div>

                  {/* Icon above the action button */}
                  {product.icon && (
                    <div className="absolute right-2 bottom-20 w-6 h-6">
                      <Image src={product.icon} alt="icon" fill className="object-contain" />
                    </div>
                  )}

                  <Button className="w-full bg-[#ff0000] hover:bg-[#cc0000] text-white font-medium py-2">
                    {product.action}
                  </Button>
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

// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Star, Shield, Truck, Award, CheckCircle, Settings, Wrench, Download, Phone, Mail, Menu, X } from "lucide-react"
// import { useState } from "react"

// export default function ProductsPage() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   return (
//     <div className="min-h-screen bg-[#111827]">
//       {/* Header */}
//       <header className="bg-[#000000] py-4">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <Link href="/" className="text-white font-bold text-xl">
//             Manal Abed
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <Link href="/" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
//               Home
//             </Link>
//             <a href="#" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
//               About Us
//             </a>
//             <a href="#" className="text-[#ff0000] font-semibold">
//               Products
//             </a>
//             <a href="#" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
//               Contact
//             </a>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-[#1f2937] border-t border-[#374151]">
//             <nav className="container mx-auto px-4 py-4 space-y-4">
//               <Link href="/" className="block text-[#ffffff] hover:text-[#ff0000] transition-colors">
//                 Home
//               </Link>
//               <a href="#" className="block text-[#ffffff] hover:text-[#ff0000] transition-colors">
//                 About Us
//               </a>
//               <a href="#" className="block text-[#ff0000] font-semibold">
//                 Products
//               </a>
//               <a href="#" className="block text-[#ffffff] hover:text-[#ff0000] transition-colors">
//                 Contact
//               </a>
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Breadcrumb */}
//       <div className="bg-[#1f2937] py-4">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center space-x-2 text-[#9ca3af]">
//             <Link href="/" className="hover:text-white">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="text-white">Products</span>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//             Premium <span className="text-[#ff0000]">Scaffolding</span> Products
//           </h1>
//           <p className="text-[#9ca3af] text-lg max-w-3xl mx-auto mb-8">
//             Discover our comprehensive range of high-quality scaffolding materials and accessories. Each product is
//             engineered for safety, durability, and compliance with international standards.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Badge className="bg-[#ff0000] text-white px-4 py-2">ISO Certified</Badge>
//             <Badge className="bg-[#ff0000] text-white px-4 py-2">Safety Tested</Badge>
//             <Badge className="bg-[#ff0000] text-white px-4 py-2">Premium Quality</Badge>
//           </div>
//         </div>
//       </section>

//       {/* Featured Product */}
//       <section className="bg-[#1f2937] py-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="relative">
//                 <Image
//                   src="/placeholder.svg?height=500&width=600"
//                   alt="Featured Steel Pipes & Tubes"
//                   width={600}
//                   height={500}
//                   className="rounded-lg"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <Badge className="bg-[#ff0000] text-white">Featured Product</Badge>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-white mb-4">Professional Steel Pipes & Tubes</h2>
//               <div className="flex items-center mb-4">
//                 <div className="flex text-yellow-400">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-current" />
//                   ))}
//                 </div>
//                 <span className="text-[#9ca3af] ml-2">(4.9/5 - 127 reviews)</span>
//               </div>
//               <p className="text-[#9ca3af] mb-6">
//                 Our premium steel pipes and tubes are manufactured from high-grade galvanized steel, designed to
//                 withstand heavy loads and harsh weather conditions. Perfect for all types of construction projects.
//               </p>

//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="flex items-center space-x-2">
//                   <Shield className="w-5 h-5 text-[#ff0000]" />
//                   <span className="text-white">Load Capacity: 2500kg</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Award className="w-5 h-5 text-[#ff0000]" />
//                   <span className="text-white">ISO 9001 Certified</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Settings className="w-5 h-5 text-[#ff0000]" />
//                   <span className="text-white">Multiple Sizes</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Truck className="w-5 h-5 text-[#ff0000]" />
//                   <span className="text-white">Fast Delivery</span>
//                 </div>
//               </div>

//               <div className="flex space-x-4">
//                 <Button className="bg-[#ff0000] hover:bg-[#ff0000]/90 text-white px-8 py-3">Request Quote</Button>
//                 <Button
//                   variant="outline"
//                   className="border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000] hover:text-white px-8 py-3 bg-transparent"
//                 >
//                   <Download className="w-4 h-4 mr-2" />
//                   Download Specs
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Categories */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-white text-center mb-12">Product Categories</h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="bg-[#1f2937] border-[#374151] hover:border-[#ff0000] transition-colors">
//               <CardContent className="p-6">
//                 <div className="mb-4">
//                   <Image
//                     src="/placeholder.svg?height=250&width=350"
//                     alt="Steel Pipes & Tubes"
//                     width={350}
//                     height={250}
//                     className="rounded-lg w-full"
//                   />
//                 </div>
//                 <div className="flex items-center mb-3">
//                   <div className="bg-[#ff0000] p-2 rounded mr-3">
//                     <Settings className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white">Steel Pipes & Tubes</h3>
//                 </div>
//                 <p className="text-[#9ca3af] mb-4">
//                   High-strength galvanized steel pipes in various diameters and lengths. Perfect for vertical and
//                   horizontal scaffolding structures.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-center text-[#9ca3af]">
//                     <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
//                     Diameters: 48mm, 60mm
//                   </li>
//                   <li className="flex items-center text-[#9ca3af]">
//                     <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
//                     Lengths: 1m to 6m
//                   </li>
//                   <li className="flex items-center text-[#9ca3af]">
//                     <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
//                     Wall thickness: 3.2mm
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-[#ff0000] hover:bg-[#ff0000]/90 text-white">View Details</Button>
//               </CardContent>
//             </Card>

//             <Card className="bg-[#1f2937] border-[#374151] hover:border-[#ff0000] transition-colors">
//               <CardContent className="p-6">
//                 <div className="mb-4">
//                   <Image
//                     src="/placeholder.svg?height=250&width=350"
//                     alt="Couplers & Clamps"
//                     width={350}
//                     height={250}
//                     className="rounded-lg w-full"
//                   />
//                 </div>
//                 <div className="flex items-center mb-3">
//                   <div className="bg-[#ff0000] p-2 rounded mr-3">
//                     <Wrench className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white">Couplers & Clamps</h3>
//                 </div>
//                 <p className="text-[#9ca3af] mb-4">
//                   Precision-engineered couplers and clamps for secure connections. Available in fixed, swivel, and
//                   putlog configurations.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-center text-[#9ca3af]">
//                     <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
//                     Fixed & Swivel types
//                   </li>
//                   <li className="flex items-center text-[#9ca3af]">
//                     <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
//                     Drop-forged steel
//                   </li>
//                   <li className="flex items-center text-[#9ca3af]">
//                     <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
//                     Load capacity: 2500kg
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-[#ff0000] hover:bg-[#ff0000]/90 text-white">View Details</Button>
//               </CardContent>
//             </Card>

//             <Card className="bg-[#1f2937] border-[#374151] hover:border-[#ff0000] transition-colors">
//               <CardContent className="p-6">
//                 <div className="mb-4">
//                   <Image
//                     src="/placeholder.svg?height=250&width=350"
//                     alt="Scaffolding Frames"
//                     width={350}
//                     height={250}
//                     className="rounded-lg w-full"
//                   />
//                 </div>
//                 <div className="flex items-center mb-3">
//                   <div className="bg-[#ff0000] p-2 rounded mr-3">
//                     <Shield className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white">Scaffolding Frames</h3>
//                 </div>
//                 <p className="text-[#9ca3af] mb-4">
//                   Complete modular frame systems for quick assembly. Ideal for residential and commercial construction
//                   projects.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-center text-[#9ca3af]">
//                     <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
//                     Modular design
//                   </li>
//                   <li className="flex items-center text-[#9ca3af]">
//                     <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
//                     Quick assembly
//                   </li>
//                   <li className="flex items-center text-[#9ca3af]">
//                     <CheckCircle className="w-4 h-4 text-[#ff0000] mr-2" />
//                     Multiple heights
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-[#ff0000] hover:bg-[#ff0000]/90 text-white">View Details</Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Accessories Section */}
//       <section className="bg-[#1f2937] py-16 px-4">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-white text-center mb-12">Scaffolding Accessories</h2>

//           <div className="grid md:grid-cols-4 gap-6">
//             <Card className="bg-[#111827] border-[#374151]">
//               <CardContent className="p-4 text-center">
//                 <Image
//                   src="/placeholder.svg?height=150&width=200"
//                   alt="Scaffolding Boards"
//                   width={200}
//                   height={150}
//                   className="rounded-lg w-full mb-3"
//                 />
//                 <h4 className="text-white font-semibold mb-2">Scaffolding Boards</h4>
//                 <p className="text-[#9ca3af] text-sm">High-quality wooden and steel planks</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-[#111827] border-[#374151]">
//               <CardContent className="p-4 text-center">
//                 <Image
//                   src="/placeholder.svg?height=150&width=200"
//                   alt="Base Plates"
//                   width={200}
//                   height={150}
//                   className="rounded-lg w-full mb-3"
//                 />
//                 <h4 className="text-white font-semibold mb-2">Base Plates</h4>
//                 <p className="text-[#9ca3af] text-sm">Adjustable base plates and feet</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-[#111827] border-[#374151]">
//               <CardContent className="p-4 text-center">
//                 <Image
//                   src="/placeholder.svg?height=150&width=200"
//                   alt="Guardrails"
//                   width={200}
//                   height={150}
//                   className="rounded-lg w-full mb-3"
//                 />
//                 <h4 className="text-white font-semibold mb-2">Guardrails</h4>
//                 <p className="text-[#9ca3af] text-sm">Safety guardrails and barriers</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-[#111827] border-[#374151]">
//               <CardContent className="p-4 text-center">
//                 <Image
//                   src="/placeholder.svg?height=150&width=200"
//                   alt="Access Ladders"
//                   width={200}
//                   height={150}
//                   className="rounded-lg w-full mb-3"
//                 />
//                 <h4 className="text-white font-semibold mb-2">Access Ladders</h4>
//                 <p className="text-[#9ca3af] text-sm">Ladders and stair access systems</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
//           <p className="text-[#9ca3af] text-lg mb-8 max-w-2xl mx-auto">
//             Our team of experts can help you design and supply the perfect scaffolding solution for your specific
//             project requirements.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-[#ff0000] hover:bg-[#ff0000]/90 text-white px-8 py-3">
//               <Phone className="w-4 h-4 mr-2" />
//               Call Now: +971 4 XXX XXXX
//             </Button>
//             <Button
//               variant="outline"
//               className="border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000] hover:text-white px-8 py-3 bg-transparent"
//             >
//               <Mail className="w-4 h-4 mr-2" />
//               Email Quote Request
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#000000] py-12 px-4">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Manal Abed</h3>
//               <p className="text-[#9ca3af] mb-4">
//                 Your trusted partner for high-quality scaffolding materials and systems solutions. Building safety into
//                 every project.
//               </p>
//               <div className="flex space-x-4">
//                 <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
//                   <span className="text-white text-sm">f</span>
//                 </div>
//                 <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
//                   <span className="text-white text-sm">t</span>
//                 </div>
//                 <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
//                   <span className="text-white text-sm">in</span>
//                 </div>
//                 <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
//                   <span className="text-white text-sm">ig</span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/" className="text-[#9ca3af] hover:text-white">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <a href="#" className="text-[#9ca3af] hover:text-white">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-[#ff0000]">
//                     Products
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-[#9ca3af] hover:text-white">
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-[#9ca3af] hover:text-white">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
//               <div className="space-y-3">
//                 <p className="text-[#9ca3af]">123 Industrial Street, Dubai, UAE</p>
//                 <p className="text-[#9ca3af]">+971 4 XXX XXXX</p>
//                 <p className="text-[#9ca3af]">info@manalabed.com</p>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-[#374151] mt-8 pt-8 text-center">
//             <p className="text-[#9ca3af]">© 2024 Manal Abed Scaffolding & General Trading. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Menu, X, Box, Package, ShoppingCart, Info } from "lucide-react"
// import { useState } from "react"

// const products = [
//   {
//     name: "Heavy Duty Pipes",
//     description: "Developed mineral steel for industrial scaffolding applications",
//     price: "$24.99",
//     unit: "Unit",
//     quantity: "2/2",
//     buttonText: "View Details",
//     buttonVariant: "default",
//     image: "/images/pipes.jpg",
//     icon: <Box className="w-5 h-5 text-[#ff0000]" />
//   },
//   {
//     name: "Steel Couplers",
//     description: "High strength cement for steak-pipe connections and paint",
//     price: "$32.50",
//     unit: "Set",
//     quantity: "3 pieces",
//     buttonText: "Add to Cart",
//     buttonVariant: "default",
//     image: "/images/couplers.jpg",
//     icon: <Package className="w-5 h-5 text-[#ff0000]" />
//   },
//   {
//     name: "Mollie Wheels",
//     description: "Heavy-duty cream for mobile scaffolding platforms",
//     price: "$20.79",
//     unit: "Unit",
//     quantity: "4/4",
//     buttonText: "View Details",
//     buttonVariant: "default",
//     image: "/images/wheels.jpg",
//     icon: <Box className="w-5 h-5 text-[#ff0000]" />
//   },
//   {
//     name: "Platform Desks",
//     description: "Anti-dig aluminum platform for self-wetting surfaces",
//     price: "$30.00",
//     unit: "Set",
//     quantity: "2 pieces",
//     buttonText: "Add to Cart",
//     buttonVariant: "default",
//     image: "/images/platforms.jpg",
//     icon: <Package className="w-5 h-5 text-[#ff0000]" />
//   },
//   {
//     name: "Safety Rolls",
//     description: "Protection materials for extended roughness safety",
//     price: "$34.39",
//     unit: "Unit",
//     quantity: "1/1",
//     buttonText: "View Details",
//     buttonVariant: "default",
//     image: "/images/safety.jpg",
//     icon: <Box className="w-5 h-5 text-[#ff0000]" />
//   },
//   {
//     name: "Base Plates",
//     description: "Built in connection spaces for steel-in-certified lighting",
//     price: "$18.80",
//     unit: "Set",
//     quantity: "5 pieces",
//     buttonText: "Add to Cart",
//     buttonVariant: "default",
//     image: "/images/baseplates.jpg",
//     icon: <Package className="w-5 h-5 text-[#ff0000]" />
//   }
// ]

// export default function ProductsPage() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   return (
//     <div className="min-h-screen bg-[#111827]">
//       {/* Header */}
//       <header className="bg-[#000000] py-4 sticky top-0 z-50">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <Link href="/" className="text-white font-bold text-xl">
//             Manal Abed
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <Link href="/" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
//               Home
//             </Link>
//             <Link href="/about" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
//               About Us
//             </Link>
//             <Link href="/products" className="text-[#ff0000] font-semibold">
//               Products
//             </Link>
//             <Link href="/contact" className="text-[#ffffff] hover:text-[#ff0000] transition-colors">
//               Contact
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-white" 
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-[#1f2937] border-t border-[#374151]">
//             <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//               <Link 
//                 href="/" 
//                 className="text-[#ffffff] hover:text-[#ff0000] transition-colors"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link 
//                 href="/about" 
//                 className="text-[#ffffff] hover:text-[#ff0000] transition-colors"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 About Us
//               </Link>
//               <Link 
//                 href="/products" 
//                 className="text-[#ff0000] font-semibold"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Products
//               </Link>
//               <Link 
//                 href="/contact" 
//                 className="text-[#ffffff] hover:text-[#ff0000] transition-colors"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Contact
//               </Link>
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section className="py-16 px-4 bg-[#1f2937]">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
//             Industrial <span className="text-[#ff0000]">Scaffolding</span>
//           </h1>
//           <p className="text-[#9ca3af] text-lg mb-6">
//             Premium Quality Materials & Equipment
//           </p>
//           <div className="w-24 h-1 bg-[#ff0000] mx-auto"></div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-white mb-2">Our Products</h2>
//             <p className="text-[#9ca3af]">
//               Professional scaffolding solutions for industrial projects
//             </p>
//             <div className="w-24 h-1 bg-[#ff0000] mx-auto mt-4"></div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <Card key={index} className="bg-[#1f2937] border-[#374151] hover:border-[#ff0000] transition-colors h-full flex flex-col group">
//                 <CardContent className="p-6 flex flex-col flex-grow">
//                   <div className="relative h-48 mb-4 bg-[#111827] rounded-lg overflow-hidden">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-300"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                   </div>
                  
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-bold text-white">{product.name}</h3>
//                     <div className="flex items-center space-x-1">
//                       {product.icon}
//                       <span className="text-[#9ca3af] text-sm">{product.unit}</span>
//                     </div>
//                   </div>
                  
//                   <p className="text-[#9ca3af] mb-4 flex-grow">{product.description}</p>
                  
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center space-x-2">
//                       <Info className="w-4 h-4 text-[#ff0000]" />
//                       <span className="text-[#9ca3af] text-sm">{product.quantity}</span>
//                     </div>
//                     <span className="text-white font-bold">{product.price}</span>
//                   </div>
                  
//                   <Button 
//                     variant={product.buttonVariant as "default" | "outline"} 
//                     className={`w-full mt-auto flex items-center justify-center gap-2 ${
//                       product.buttonVariant === 'default' 
//                         ? 'bg-[#ff0000] hover:bg-[#ff0000]/90 text-white' 
//                         : 'border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000] hover:text-white'
//                     }`}
//                   >
//                     {product.buttonText === "Add to Cart" && <ShoppingCart className="w-4 h-4" />}
//                     {product.buttonText}
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Custom Solutions CTA */}
//       <section className="py-16 px-4 bg-[#1f2937]">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Need Custom Solutions?</h2>
//           <p className="text-[#9ca3af] text-lg mb-8 max-w-2xl mx-auto">
//             Contact our experts for technical scaffolding solutions
//           </p>
//           <Button className="bg-[#ff0000] hover:bg-[#ff0000]/90 text-white px-8 py-3">
//             Get Quotes Now
//           </Button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#000000] py-12 px-4">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Manal Abed</h3>
//               <p className="text-[#9ca3af] mb-4">
//                 Your trusted partner for high-quality scaffolding solutions.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/" className="text-[#9ca3af] hover:text-white transition-colors">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/about" className="text-[#9ca3af] hover:text-white transition-colors">
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/products" className="text-[#ff0000] hover:text-[#ff0000]/90 transition-colors">
//                     Products
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/contact" className="text-[#9ca3af] hover:text-white transition-colors">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
//               <div className="space-y-3">
//                 <p className="text-[#9ca3af]">123 Industrial Zone, Dubai, UAE</p>
//                 <p className="text-[#9ca3af]">+971 4 123 4567</p>
//                 <p className="text-[#9ca3af]">info@manalabed.com</p>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-[#374151] mt-8 pt-8 text-center">
//             <p className="text-[#9ca3af]">© {new Date().getFullYear()} Manal Abed Scaffolding. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

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

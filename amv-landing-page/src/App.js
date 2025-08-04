import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AMVLandingPage() {
  return (
    <div className="bg-white text-neutral-900 font-sans">
      {/* Navigation Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/image001.png" alt="AM&V Logo" className="h-12 w-auto" />
          <nav className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#partners" className="hover:text-blue-700">Partners</a>
            <a href="#benefits" className="hover:text-blue-700">Why AM&V</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white py-36 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <img
            src="/image001.png"
            alt="AM&V Logo"
            className="mx-auto w-60 mb-8"
          />
          <h1 className="text-5xl font-bold mb-4">Alliance Markets & Vending</h1>
          <p className="text-xl max-w-2xl mx-auto text-neutral-300">
            Building America's premier network of micro market and vending companies—where local entrepreneurs thrive with national support.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            At AM&V, we partner with exceptional vending operators nationwide, combining their local expertise with our scalable platform. We’re creating a collaborative, high-performance network where everyone wins.
          </p>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partners" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-sm border border-neutral-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Premier Vending, Inc.</h3>
                <p className="text-sm text-neutral-600 mb-2">
                  Serving the Chicagoland and Northwest Indiana region since 1988, Premier is known for reliable, high-quality breakroom services.
                </p>
                <p className="text-xs text-neutral-500">
                  Based in Skokie, IL | Over 400 accounts served
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm border border-neutral-200 flex items-center justify-center text-center">
              <CardContent className="p-6 text-neutral-400">More partners coming soon...</CardContent>
            </Card>
            <Card className="shadow-sm border border-neutral-200 flex items-center justify-center text-center">
              <CardContent className="p-6 text-neutral-400">Your company here?</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Partner With AM&V</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold mb-2">Scalable Infrastructure</h3>
              <p className="text-sm text-neutral-700">
                Access advanced logistics, technology systems, and purchasing power without giving up local control.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold mb-2">Entrepreneurial Agility</h3>
              <p className="text-sm text-neutral-700">
                Founders stay in the driver’s seat—bringing their vision to life with our platform behind them.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold mb-2">Shared Success</h3>
              <p className="text-sm text-neutral-700">
                Grow within a high-performance network that shares knowledge, resources, and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-900 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Partner With AM&V</h2>
          <p className="mb-6 text-lg text-blue-100">
            Let’s explore how we can build the future of vending together.
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white text-black" />
            <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white text-black" />
            <textarea placeholder="Message" className="w-full p-3 rounded bg-white text-black h-32" />
            <Button className="bg-white text-blue-900 hover:bg-blue-100 font-semibold px-6 py-3 rounded">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-sm text-center py-6">
        <p>&copy; {new Date().getFullYear()} Alliance Markets & Vending. All rights reserved.</p>
      </footer>
    </div>
  );
}
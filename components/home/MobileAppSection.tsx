"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import MobileAppFeatures from "./MobileAppFeatures"
import Image from 'next/image';

export default function MobileAppSection() {
  return (
    <section className="py-20 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Innovative <span className="text-blue-500">Mobile Applications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create engaging mobile experiences that connect with your audience on the go
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MobileAppFeatures />
            <div className="mt-8">
              <Button variant="neon">
                Start Developing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-xl overflow-hidden border border-blue-500/30 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 z-0"></div>
            <Image 
                src="./mobap.png" 
                alt="Web Application Showcase" 
                layout="responsive"  // Ensures responsiveness
                width={800}         // Set the width (adjust as needed)
                height={800}         // Set the height (adjust as needed)
                className="relative z-10" 
              />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent opacity-50 z-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Network, Zap, Brain } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32"
    >
      <div className="absolute inset-0 neural-grid opacity-30"></div>
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full border-2 border-primary/30 animate-pulse animate-float"></div>
        <div className="absolute top-40 right-20 h-24 w-24 rounded-full border border-primary/40 animate-pulse animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 h-16 w-16 rounded-full border border-primary/50 animate-pulse animate-float delay-500"></div>
        <div className="absolute top-1/3 right-1/3 h-20 w-20 rounded-full border border-primary/20 animate-circuit"></div>

        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-data-flow"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-data-flow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Connecting You to the <span className="text-primary animate-glow">Digital World</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Expert IT consulting services powered by cutting-edge AI solutions. We help individuals and businesses
                navigate the digital transformation with confidence and innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                Discover Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                Get Free Consultation
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors animate-circuit">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">AI-Powered</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors animate-circuit delay-300">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Connected</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors animate-circuit delay-700">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Innovative</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto h-96 w-96 lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow animate-glow"></div>
              <div className="absolute inset-4 rounded-full border border-primary/40 animate-spin-reverse-slow"></div>
              <div className="absolute inset-8 rounded-full border border-primary/50 animate-spin-slow"></div>
              <div className="absolute inset-12 rounded-full border border-primary/30"></div>

              <div className="absolute inset-1/3 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center animate-glow shadow-2xl">
                <Cpu className="h-16 w-16 text-primary-foreground animate-pulse" />
              </div>

              <div className="absolute top-4 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary animate-pulse animate-float"></div>
              <div className="absolute bottom-4 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary animate-pulse animate-float delay-300"></div>
              <div className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-primary animate-pulse animate-float delay-700"></div>
              <div className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-primary animate-pulse animate-float delay-1000"></div>

              <div className="absolute top-16 right-16 h-3 w-3 rounded-full bg-primary/70 animate-circuit"></div>
              <div className="absolute bottom-16 left-16 h-3 w-3 rounded-full bg-primary/70 animate-circuit delay-500"></div>
              <div className="absolute top-16 left-16 h-3 w-3 rounded-full bg-primary/70 animate-circuit delay-1000"></div>
              <div className="absolute bottom-16 right-16 h-3 w-3 rounded-full bg-primary/70 animate-circuit delay-1500"></div>

              <div className="absolute inset-20 rounded-full">
                <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary/60 animate-spin-slow"></div>
                <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary/60 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

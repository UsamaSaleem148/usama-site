"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-32 bg-background overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, var(--foreground) 0 1px, transparent 1px 60px), repeating-linear-gradient(to bottom, var(--foreground) 0 1px, transparent 1px 60px)",
            opacity: 0.04,
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[repeating-linear-gradient(45deg,var(--primary)_0_2px,transparent_2px_12px)] opacity-[0.06]" />
      </div>

      <div className="mx-auto max-w-5xl text-center px-6 relative z-10">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm text-muted-foreground shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.08]"
        >
          Custom Web Development for{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Businesses & Startups
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          I build custom web applications, SaaS platforms, and business software
          using React, Next.js, Node.js, Java, and Spring Boot.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:opacity-90"
          >
            Start a Project
          </a>
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl border-2 border-primary text-lg font-semibold text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-[1.03]"
          >
            View My Work
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 pt-10 border-t border-border"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-medium">
            Clients & Projects
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
            {[
              "Novus Health",
              "Booltec",
              "DaoSeeder",
              "Heerekar",
              "Martian Marketing",
              "ClickThrive",
            ].map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-muted-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <motion.div className="w-1 h-2 bg-foreground/40 rounded-full mt-1.5" />
      </motion.div>
    </section>
  );
}

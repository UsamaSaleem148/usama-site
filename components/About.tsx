"use client";

import { motion } from "framer-motion";
import { Code, Users, Award, CheckCircle } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Code className="w-6 h-6" />,
      label: "Projects Completed",
      value: "50+",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Happy Clients",
      value: "30+",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Years Experience",
      value: "5+",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      label: "On-time Delivery Rate",
      value: "95%",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
              About
            </p>

            <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              Full-Stack Software Development for Businesses
            </h2>

            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              I&apos;m Muhammad Usama, a full-stack software engineer with 5+
              years of experience building web applications, SaaS platforms, and
              custom business software.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I work across the full development lifecycle — from architecture
              and backend development to frontend applications, cloud
              infrastructure, and deployment. My goal is to build reliable
              software that solves real business problems and can grow with your
              business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-border p-10 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Technical Capabilities
              </h3>

              <div className="space-y-5">
                {[
                  ["Frontend", "React, Next.js, Angular, TypeScript"],
                  ["Backend", "Node.js, NestJS, Java, Spring Boot"],
                  ["Databases", "PostgreSQL, MySQL, MongoDB, Redis"],
                  [
                    "Cloud & Infrastructure",
                    "AWS, GCP, Docker, Terraform, Cloudflare",
                  ],
                ].map(([label, technologies]) => (
                  <div key={label}>
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {label}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {technologies}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-2xl bg-primary/8 border border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;I treat every project like it&apos;s my own business —
                  because your success is my success.&rdquo;
                </p>
                <p className="text-sm font-semibold text-foreground mt-2">
                  — Muhammad Usama Saleem
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

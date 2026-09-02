"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Brain, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Web Development",
    tagline: "Web Application Development",
    description:
      "Custom web applications built for business workflows, customer platforms, and internal tools using React, Next.js, Angular, Node.js, and Spring Boot.",
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    title: "SaaS Development",
    tagline: "SaaS & Business Software",
    description:
      "SaaS products with modern frontend applications, backend APIs, databases, authentication, and cloud infrastructure.",
    icon: <Code className="h-8 w-8 text-green-500 dark:text-green-400" />,
  },
  {
    title: "Custom Software Development",
    tagline: "Business Software",
    description:
      "Software tailored to your business processes, from internal platforms and dashboards to customer-facing applications and API integrations.",
    icon: <Brain className="h-8 w-8 text-pink-500 dark:text-pink-400" />,
  },
  {
    title: "Cloud Development",
    tagline: "Cloud & Infrastructure",
    description:
      "Deploy and manage reliable cloud applications using AWS, GCP, Docker, Terraform, CI/CD, and modern infrastructure practices.",
    icon: <Cloud className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
  },
  {
    title: "AI Integration",
    tagline: "AI-Powered Applications",
    description:
      "Integrate AI capabilities into existing or new applications, including AI-powered workflows, APIs, automation, and intelligent product features.",
    icon: <Brain className="h-8 w-8 text-orange-500 dark:text-orange-400" />,
  },
  {
    title: "API & Backend Development",
    tagline: "Backend Engineering",
    description:
      "Design and develop secure, maintainable backend services and REST APIs using Node.js, NestJS, Java, Spring Boot, PostgreSQL, and other relational databases.",
    icon: <Code className="h-8 w-8 text-rose-500 dark:text-rose-400" />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Services
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mb-5 text-foreground">
            Custom Software Development Services
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build web applications, SaaS products, and custom business
            software for startups and businesses.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="group relative"
            >
              <Card className="relative h-full rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-400 overflow-hidden group-hover:border-primary/40">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        {service.tagline}
                      </p>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-6 pr-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

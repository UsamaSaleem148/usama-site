"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ikechukwu Mezu",
    company: "Novus Consulting LLC",
    feedback:
      "Muhammad has been an outstanding full-stack developer for our SaaS platform, Novus Health. His expertise was crucial in bringing our EMR platform to market. He is highly responsive, consistently delivers top-quality work, and has also supported our DevOps and GCP development with exceptional skill. His contributions have been invaluable to our success.",
  },
  {
    name: "Kel Win",
    company: "Upwork Client",
    feedback:
      "Working with Muhammad was a great experience. His communication was clear and professional, and he delivered every module exactly as discussed — on time and with excellent quality. Even when we added extra features, he implemented them seamlessly. I am very satisfied with the results and look forward to working with him on future projects.",
  },
  {
    name: "Rutul Sheladiya",
    company: "Upwork Client",
    feedback:
      "Muhammad is a highly skilled and efficient developer. He understood my requirements quickly, delivered ahead of schedule, and ensured everything worked perfectly. I really appreciate his professionalism and speed.",
  },
  {
    name: "Haris Aftab",
    company: "Booltec",
    feedback:
      "Muhammad is an exceptional developer who goes above and beyond to ensure project success. His ability to understand complex requirements and turn them into reliable, scalable solutions is impressive. He has been a true partner in our development journey.",
  },
  {
    name: "Godwin Woo",
    company: "Upwork Client",
    feedback:
      "Muhammad exceeded expectations with his expertise and commitment. He not only delivered exactly what was needed but also suggested improvements that made the final product even better. I highly recommend him for any development work.",
  },
  {
    name: "Muhammad Umer",
    company: "Upwork Client",
    feedback:
      "I had a fantastic experience working with Muhammad. He is reliable, detail-oriented, and delivered my project with great precision. His professionalism and problem-solving mindset make him one of the best developers I've worked with.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 text-amber-400 mb-3">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const getItemsPerView = () => {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };
    setItemsPerView(getItemsPerView());
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Client Testimonials
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            What Clients Say About Working With Me
          </h2>
        </motion.div>

        <div className="relative group">
          {/* Prev arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card border border-border shadow-lg hover:bg-muted transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Next arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card border border-border shadow-lg hover:bg-muted transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div ref={scrollContainerRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="h-full relative rounded-2xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300 p-6 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col h-full">
                      <Stars />
                      <svg
                        className="w-7 h-7 text-primary/40 mb-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm">
                        &quot;{testimonial.feedback}&quot;
                      </p>
                      <div className="mt-auto border-t border-border pt-4">
                        <div className="font-bold text-card-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-primary text-sm font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Post-testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Join{" "}
            <span className="font-semibold text-foreground">
              30+ happy clients
            </span>{" "}
            who&apos;ve shipped with me
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 hover:scale-[1.03] transition-all duration-300 shadow-md"
          >
            Book a Discovery Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

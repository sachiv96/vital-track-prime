import { motion } from "framer-motion";
import { GraduationCap, Code, Trophy, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const audiences = [
  {
    icon: GraduationCap,
    title: "IIT JEE Aspirants",
    description: "Master time management and stay consistent through rigorous exam prep",
    stats: "3K+ Students",
  },
  {
    icon: Trophy,
    title: "NEET Students",
    description: "Balance studies, health tracking, and maintain peak performance",
    stats: "2.5K+ Users",
  },
  {
    icon: Target,
    title: "Gov Exam Prep",
    description: "Long-term goal tracking for competitive government examinations",
    stats: "4K+ Aspirants",
  },
  {
    icon: Code,
    title: "Developers",
    description: "Track coding sessions, build learning habits, and maintain productivity",
    stats: "1.5K+ Devs",
  },
];

export const TargetAudience = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Built for <span className="gradient-text">Achievers</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Whether you're preparing for competitive exams or building your career, we've got you covered
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all group hover:glow-primary text-center active:scale-95 touch-manipulation">
                <CardContent className="p-5 md:p-6 space-y-3 md:space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <audience.icon className="h-7 w-7 md:h-8 md:w-8" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1.5 md:mb-2">{audience.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">
                      {audience.description}
                    </p>
                    <div className="text-xs md:text-sm font-semibold text-accent">
                      {audience.stats}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

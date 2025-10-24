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
        <div className="absolute top-1/4 left-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-primary/12 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-accent/12 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 tracking-tight">
            Built for <span className="gradient-text">Achievers</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground/80 max-w-2xl mx-auto px-4 leading-relaxed">
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
              <Card className="h-full glass-card hover:scale-[1.03] transition-all duration-500 group text-center border-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 md:p-7 space-y-4 md:space-y-5 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl frosted text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <audience.icon className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-2.5 group-hover:gradient-text transition-all">{audience.title}</h3>
                    <p className="text-muted-foreground/80 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                      {audience.description}
                    </p>
                    <div className="inline-block px-3 py-1.5 rounded-full frosted text-xs md:text-sm font-semibold gradient-text border border-primary/20">
                      {audience.stats}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

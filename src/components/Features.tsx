import { motion } from "framer-motion";
import {
  Timer,
  BookOpen,
  Target,
  Heart,
  TrendingUp,
  Users,
  Calendar,
  Zap,
  Brain,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Timer,
    title: "Smart Time Tracking",
    description: "Track productive time, phone usage, and get real-time productivity scores.",
    color: "text-primary",
  },
  {
    icon: BookOpen,
    title: "AI-Powered Journal",
    description: "Daily reflections with intelligent recommendations for continuous improvement.",
    color: "text-accent",
  },
  {
    icon: Target,
    title: "Habit Builder",
    description: "Create good habits, break bad ones. Maintain your streak or lose it all.",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "Health Tracking",
    description: "Log meals, water intake, calories, protein, and exercise routines.",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Visualize your journey with detailed charts and insights on all metrics.",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Accountability Community",
    description: "Share daily progress or lose premium access. Stay motivated together.",
    color: "text-accent",
  },
  {
    icon: Calendar,
    title: "Daily Streaks",
    description: "Build momentum across all activities. Miss a day, lose your streak.",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Todo with Timers",
    description: "Task management integrated with time tracking for maximum efficiency.",
    color: "text-accent",
  },
  {
    icon: Brain,
    title: "Goal Setting",
    description: "Set 6-month or 12-month goals. Perfect for exam prep and career growth.",
    color: "text-primary",
  },
];

export const Features = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 tracking-tight">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground/80 max-w-2xl mx-auto px-4 leading-relaxed">
            A complete ecosystem for productivity, health, and personal growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full glass-card hover:scale-[1.02] transition-all duration-500 group overflow-hidden border-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-5 md:p-7 relative z-10">
                  <div className={`${feature.color} mb-4 md:mb-5 p-4 rounded-2xl frosted group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 w-fit shadow-lg`}>
                    <feature.icon className="h-7 w-7 md:h-9 md:w-9" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:gradient-text transition-all">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed">{feature.description}</p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

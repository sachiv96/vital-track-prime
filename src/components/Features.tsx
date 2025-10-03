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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
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
              <Card className="h-full bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all group hover:glow-primary active:scale-95 touch-manipulation">
                <CardContent className="p-4 md:p-6">
                  <div className={`${feature.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1.5 md:mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

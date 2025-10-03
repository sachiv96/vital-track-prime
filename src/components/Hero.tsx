import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Timer, Target } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary/50 border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">Launching Soon</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Transform</span> Your Life,
              <br className="hidden sm:block" />
              <span className="block sm:inline"> One Day at a Time</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              The ultimate productivity platform designed for students and achievers. Track time, build habits, and reach your goals with AI-powered insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 glow-primary group w-full sm:w-auto touch-manipulation active:scale-95 transition-transform">
                Join Waitlist
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto touch-manipulation active:scale-95 transition-transform">
                <Timer className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 pt-2 md:pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Early Users</div>
              </div>
              <div className="h-10 md:h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-primary/20 glow-primary">
              <img
                src={heroImage}
                alt="Productivity Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating elements - mobile optimized */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-card/90 backdrop-blur border border-primary/20 rounded-lg md:rounded-xl p-2 md:p-4 glow-primary"
            >
              <Target className="h-5 w-5 md:h-8 md:w-8 text-primary mb-1 md:mb-2" />
              <div className="text-xs md:text-sm font-semibold">Goal Tracking</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-card/90 backdrop-blur border border-accent/20 rounded-lg md:rounded-xl p-2 md:p-4 glow-accent"
            >
              <div className="text-xl md:text-2xl font-bold text-accent">92%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Daily Streak</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

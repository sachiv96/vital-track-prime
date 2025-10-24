import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when we launch. Get ready to transform your life.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217_91%_60%/0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(0_84%_60%/0.15),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4 md:mb-6"
          >
            <Sparkles className="h-10 w-10 md:h-12 md:w-12 text-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
            Ready to Transform
            <br />
            Your <span className="gradient-text">Productivity?</span>
          </h2>

          <p className="text-base md:text-xl text-muted-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Join thousands of students and professionals who are already on their journey to success. Limited spots available for early access.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4 max-w-md mx-auto mb-6 md:mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="frosted border-primary/30 hover:border-primary/50 focus:border-primary h-12 md:h-14 text-base rounded-2xl px-5 transition-all shadow-lg focus:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.5)]"
              required
            />
            <Button type="submit" size="lg" className="gap-2 group w-full touch-manipulation h-12 md:h-14 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.7)] relative overflow-hidden">
              <span className="relative z-10">Get Early Access</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span>Free for first 1000 users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

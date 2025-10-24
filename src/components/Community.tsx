import { motion } from "framer-motion";
import { Users, Shield, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Community = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 md:space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Join a Community of
              <br />
              <span className="gradient-text">Committed Achievers</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground/80 leading-relaxed">
              Our unique accountability system ensures you stay on track. Share your daily progress or risk losing premium access. No excuses, just results.
            </p>

            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-4 md:gap-5 group/item">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl frosted flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1.5 md:mb-2 text-base md:text-lg group-hover/item:gradient-text transition-all">Daily Accountability</h3>
                  <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed">
                    Post your progress daily or lose premium features. Stay committed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5 group/item">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl frosted flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 md:h-7 md:w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1.5 md:mb-2 text-base md:text-lg group-hover/item:gradient-text transition-all">Peer Motivation</h3>
                  <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed">
                    See others' progress, celebrate wins, and stay inspired together.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5 group/item">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl frosted flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1.5 md:mb-2 text-base md:text-lg group-hover/item:gradient-text transition-all">Recognition System</h3>
                  <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed">
                    Earn badges, climb leaderboards, and showcase your achievements.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="gap-2 w-full sm:w-auto touch-manipulation shadow-[0_0_30px_-10px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_40px_-5px_hsl(var(--accent)/0.7)] hover:scale-105 transition-all">
              <Users className="h-4 w-4" />
              Join the Community
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative glass-card p-6 md:p-10 shadow-[0_20px_70px_-20px_hsl(var(--primary)/0.5)] hover:shadow-[0_20px_90px_-15px_hsl(var(--primary)/0.7)] transition-all duration-500 group/container">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover/container:opacity-100 rounded-3xl transition-opacity duration-500" />
              <div className="space-y-4 md:space-y-5 relative z-10">
                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl frosted border border-primary/20 hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 group/user">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl frosted flex items-center justify-center text-xl md:text-2xl flex-shrink-0 shadow-lg group-hover/user:scale-110 transition-transform">
                    🔥
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm md:text-base truncate group-hover/user:gradient-text transition-all">@rajesh_iit_aspirant</div>
                    <div className="text-xs md:text-sm text-muted-foreground/80">
                      125-day streak • 94% productivity
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl frosted border border-accent/20 hover:border-accent/40 hover:scale-[1.02] transition-all duration-300 group/user">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl frosted flex items-center justify-center text-xl md:text-2xl flex-shrink-0 shadow-lg group-hover/user:scale-110 transition-transform">
                    ⚡
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm md:text-base truncate group-hover/user:gradient-text transition-all">@priya_neet_2025</div>
                    <div className="text-xs md:text-sm text-muted-foreground/80">
                      89-day streak • All goals hit
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl frosted border border-primary/20 hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 group/user">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl frosted flex items-center justify-center text-xl md:text-2xl flex-shrink-0 shadow-lg group-hover/user:scale-110 transition-transform">
                    🎯
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm md:text-base truncate group-hover/user:gradient-text transition-all">@dev_arjun</div>
                    <div className="text-xs md:text-sm text-muted-foreground/80">
                      200+ day streak • Leader
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-32 h-32 border border-primary/20 rounded-full hidden lg:block"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-24 h-24 border border-accent/20 rounded-full hidden lg:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

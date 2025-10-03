import { motion } from "framer-motion";
import { Users, Shield, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Community = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 md:space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Join a Community of
              <br />
              <span className="gradient-text">Committed Achievers</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Our unique accountability system ensures you stay on track. Share your daily progress or risk losing premium access. No excuses, just results.
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5 md:mb-1 text-sm md:text-base">Daily Accountability</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Post your progress daily or lose premium features. Stay committed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5 md:mb-1 text-sm md:text-base">Peer Motivation</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    See others' progress, celebrate wins, and stay inspired together.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5 md:mb-1 text-sm md:text-base">Recognition System</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Earn badges, climb leaderboards, and showcase your achievements.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="gap-2 glow-accent w-full sm:w-auto touch-manipulation active:scale-95 transition-transform">
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
            <div className="relative rounded-xl md:rounded-2xl border border-primary/20 bg-card/50 backdrop-blur p-5 md:p-8 glow-primary">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-secondary/50 border border-primary/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                    🔥
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm md:text-base truncate">@rajesh_iit_aspirant</div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      125-day streak • 94% productivity
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-secondary/50 border border-accent/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                    ⚡
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm md:text-base truncate">@priya_neet_2025</div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      89-day streak • All goals hit
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-secondary/50 border border-primary/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                    🎯
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm md:text-base truncate">@dev_arjun</div>
                    <div className="text-xs md:text-sm text-muted-foreground">
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

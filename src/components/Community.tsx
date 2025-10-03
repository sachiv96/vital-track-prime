import { motion } from "framer-motion";
import { Users, Shield, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Community = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Join a Community of
              <br />
              <span className="gradient-text">Committed Achievers</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our unique accountability system ensures you stay on track. Share your daily progress or risk losing premium access. No excuses, just results.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Daily Accountability</h3>
                  <p className="text-muted-foreground text-sm">
                    Post your progress daily or lose premium features. Stay committed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Peer Motivation</h3>
                  <p className="text-muted-foreground text-sm">
                    See others' progress, celebrate wins, and stay inspired together.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Recognition System</h3>
                  <p className="text-muted-foreground text-sm">
                    Earn badges, climb leaderboards, and showcase your achievements.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="gap-2 glow-accent">
              <Users className="h-4 w-4" />
              Join the Community
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-primary/20 bg-card/50 backdrop-blur p-8 glow-primary">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-primary/10">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    🔥
                  </div>
                  <div>
                    <div className="font-semibold">@rajesh_iit_aspirant</div>
                    <div className="text-sm text-muted-foreground">
                      125-day streak • 94% productivity score
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-accent/10">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <div className="font-semibold">@priya_neet_2025</div>
                    <div className="text-sm text-muted-foreground">
                      89-day streak • Hit all goals today
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-primary/10">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <div className="font-semibold">@dev_arjun</div>
                    <div className="text-sm text-muted-foreground">
                      200+ day streak • Community leader
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

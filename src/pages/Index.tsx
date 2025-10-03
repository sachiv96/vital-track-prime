import { MouseFollower } from "@/components/MouseFollower";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { TargetAudience } from "@/components/TargetAudience";
import { Community } from "@/components/Community";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MouseFollower />
      <Hero />
      <Features />
      <TargetAudience />
      <Community />
      <CTA />
    </div>
  );
};

export default Index;

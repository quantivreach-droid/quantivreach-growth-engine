import { Card } from "@/components/ui/card";
import { Zap, Award, Target, Users } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Results From Day One",
    description:
      "We don't waste time ramping up. Our battle-tested processes and experienced team start delivering qualified leads and actionable insights immediately.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "We've worked with startups across diverse industries. This deep experience gives us a 'secret source'—proven strategies tailored to your specific market.",
  },
  {
    icon: Target,
    title: "Strategic Focus",
    description:
      "We combine cutting-edge sales automation tools with human expertise and strategic thinking—setting us apart from competitors who rely solely on technology.",
  },
  {
    icon: Users,
    title: "Full-Cycle Support",
    description:
      "From lead generation to deal closing, we handle the entire business development cycle—or just the pieces you need. Your pipeline stays full, guaranteed.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose QuantivReach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another lead gen agency. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-glow transition-all duration-500 border-2 hover:border-primary hover:scale-105 animate-fade-in bg-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-6 shadow-md group-hover:shadow-glow transition-all duration-300">
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-accent border-2 border-accent-foreground/10">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Focus on What You Do Best
            </h3>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              You focus on building exceptional products and delivering value to your customers. We'll take care of your go-to-market strategy, business development, and keeping your sales pipeline alive. It's that simple.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

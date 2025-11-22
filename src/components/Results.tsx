import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "200+",
    label: "Qualified Leads Generated",
    description: "Per month on average for our clients",
  },
  {
    icon: Users,
    value: "50+",
    label: "Startups Accelerated",
    description: "Across various industries",
  },
  {
    icon: Calendar,
    value: "Day 1",
    label: "Results Begin",
    description: "See measurable outcomes immediately",
  },
  {
    icon: Award,
    value: "95%",
    label: "Client Retention",
    description: "Our partners stay with us long-term",
  },
];

const Results = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Real numbers from real partnerships. Here's what we've achieved together with our clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 bg-primary-foreground text-foreground hover:shadow-xl transition-all duration-300 animate-fade-in border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;

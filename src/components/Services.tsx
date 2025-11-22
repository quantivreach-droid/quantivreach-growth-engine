import { Card } from "@/components/ui/card";
import { Target, Mail, Linkedin } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Business Development",
    description:
      "Outbound outreach that delivers results. We generate qualified leads, set up calls, and close deals—letting you focus on what you do best.",
    features: [
      "Targeted outbound campaigns",
      "Lead qualification & nurturing",
      "Meeting scheduling & follow-ups",
      "Deal closing support",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing Campaigns",
    description:
      "Custom email campaigns that convert. Combining Apollo, Instantly, ZoomInfo, and proven human expertise to stand out in crowded inboxes.",
    features: [
      "Multi-platform automation (Apollo, Instantly, ZoomInfo)",
      "Personalized messaging at scale",
      "A/B testing & optimization",
      "Campaign analytics & reporting",
    ],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Personal Branding",
    description:
      "Build your founder brand on LinkedIn. From profile optimization to content strategy, we position you as an industry thought leader.",
    features: [
      "Profile optimization & setup",
      "Content marketing strategy",
      "Thought leadership positioning",
      "Founder-focused lead generation",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three powerful services designed to accelerate your startup's growth and keep your pipeline flowing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-foreground">
                    <span className="text-secondary mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

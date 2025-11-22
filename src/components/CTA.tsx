import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, currentColor 0%, transparent 50%), radial-gradient(circle at 80% 80%, currentColor 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="max-w-4xl mx-auto p-12 bg-primary-foreground text-foreground border-0 shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop struggling with business development and focus on what you do best. Let's discuss how QuantivReach can keep your pipeline full and your business growing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-2" size={20} />
                Schedule a Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <p className="text-sm text-muted-foreground">
                Free 30-minute strategy session • No commitment required
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                Join the growing list of startups that trust QuantivReach
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Results from day one</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Industry expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Full-cycle support</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;

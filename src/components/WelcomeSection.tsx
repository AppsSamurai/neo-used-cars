import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Direct export from Japan",
  "Competitive pricing",
  "Quality inspection guarantee",
  "Worldwide shipping",
];

const WelcomeSection = () => {
  return (
    <section className="py-12 bg-secondary/50 -mx-4 px-4 lg:-mx-8 lg:px-8 rounded-xl" id="about">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Welcome to</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Neo <span className="text-primary">Trading</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Neo Trading Co., Ltd is responding to the increasing demand for Japanese used cars in many countries 
            all over the world, and will export high-quality used cars directly from Japan. Our company operates 
            a franchise of the largest Japanese used car acquisition franchises in Japan.
          </p>
          <ul className="space-y-3 mb-6">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Read More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl overflow-hidden card-shadow">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop"
              alt="Japanese car auction"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-6">
              <div className="text-primary-foreground">
                <p className="font-display font-bold text-xl">Official Partner</p>
                <p className="text-sm opacity-80">Japanese Auction Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

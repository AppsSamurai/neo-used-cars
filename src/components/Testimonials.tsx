import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Muchira",
    location: "Kenya",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "We are glad to receive this Peugeot 2008 from Neo Trading Company. Their units are clean and shipping process very fast and efficient!",
  },
  {
    name: "Sarah Johnson",
    location: "New Zealand",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Excellent service from start to finish. The Toyota Hilux arrived in perfect condition. Highly recommend Neo Trading!",
  },
  {
    name: "Mohammed Ali",
    location: "UAE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Professional team, competitive prices, and genuine vehicles. This is my third purchase and I'll keep coming back.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
          Customer <span className="text-primary">Testimonials</span>
        </h2>
        <p className="text-muted-foreground mt-2">What our customers say about us</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-card card-shadow hover:card-shadow-hover transition-all">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

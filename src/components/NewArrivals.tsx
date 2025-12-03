import CarCard from "./CarCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const cars = [
  {
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
    title: "Toyota Land Cruiser Prado TX",
    price: "$28,500",
    year: 2020,
    mileage: "45,000 km",
    fuel: "Diesel",
    transmission: "Auto",
    isNew: true,
  },
  {
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
    title: "Honda CR-V EX Masterpiece",
    price: "$19,800",
    year: 2019,
    mileage: "62,000 km",
    fuel: "Petrol",
    transmission: "Auto",
    isNew: true,
  },
  {
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
    title: "Nissan X-Trail Hybrid 4WD",
    price: "$22,300",
    year: 2021,
    mileage: "32,000 km",
    fuel: "Hybrid",
    transmission: "CVT",
    isNew: true,
  },
  {
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=400&h=300&fit=crop",
    title: "Mazda CX-5 25S L Package",
    price: "$24,900",
    year: 2020,
    mileage: "38,000 km",
    fuel: "Petrol",
    transmission: "Auto",
    isNew: false,
  },
];

const NewArrivals = () => {
  return (
    <section className="py-12" id="stock">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
            New <span className="text-primary">Arrivals</span>
          </h2>
          <p className="text-muted-foreground mt-1">Fresh stock added daily</p>
        </div>
        <Button variant="ghost" className="text-primary hover:text-primary/90 gap-2">
          View All
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CarCard {...car} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;

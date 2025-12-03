import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Gauge, Fuel, Settings } from "lucide-react";

interface CarCardProps {
  image: string;
  title: string;
  price: string;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  isNew?: boolean;
}

const CarCard = ({ image, title, price, year, mileage, fuel, transmission, isNew }: CarCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card card-shadow hover:card-shadow-hover transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isNew && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            NEW
          </Badge>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
          <p className="text-primary-foreground font-display font-bold text-xl">{price}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-display font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="h-4 w-4" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="h-4 w-4" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings className="h-4 w-4" />
            <span>{transmission}</span>
          </div>
        </div>
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarCard;

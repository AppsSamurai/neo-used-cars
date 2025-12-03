import { Car } from "lucide-react";

const japaneseMakers = [
  "Toyota", "Nissan", "Honda", "Mitsubishi", "Mazda", 
  "Subaru", "Suzuki", "Isuzu", "Hino", "Lexus", "Daihatsu"
];

const globalMakers = [
  "Volkswagen", "Mercedes", "BMW", "Audi", "Land Rover",
  "Ford", "Chevrolet", "Volvo", "Jaguar", "Hyundai"
];

const MakersSidebar = () => {
  return (
    <aside className="space-y-6">
      {/* Japanese Makers */}
      <div className="bg-card rounded-lg card-shadow p-4">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          <div className="w-6 h-6 rounded-full bg-destructive flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-card" />
          </div>
          <h3 className="font-display font-semibold text-foreground">
            Japanese <span className="text-primary">Maker</span>
          </h3>
        </div>
        <ul className="space-y-1">
          {japaneseMakers.map((maker) => (
            <li key={maker}>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md transition-all"
              >
                <Car className="h-4 w-4 text-muted-foreground" />
                {maker}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Global Makers */}
      <div className="bg-card rounded-lg card-shadow p-4">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs">🌍</span>
          </div>
          <h3 className="font-display font-semibold text-foreground">
            Global <span className="text-primary">Maker</span>
          </h3>
        </div>
        <ul className="space-y-1">
          {globalMakers.map((maker) => (
            <li key={maker}>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md transition-all"
              >
                <Car className="h-4 w-4 text-muted-foreground" />
                {maker}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default MakersSidebar;

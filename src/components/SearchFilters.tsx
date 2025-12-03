import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const makes = ["Toyota", "Nissan", "Honda", "Mazda", "Subaru", "Mitsubishi", "Suzuki", "Lexus", "BMW", "Mercedes"];
const years = Array.from({ length: 25 }, (_, i) => (2024 - i).toString());
const priceRanges = ["Under $5,000", "$5,000 - $10,000", "$10,000 - $20,000", "$20,000 - $30,000", "Over $30,000"];

const SearchFilters = () => {
  return (
    <section className="py-8 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Make" />
            </SelectTrigger>
            <SelectContent>
              {makes.map((make) => (
                <SelectItem key={make} value={make.toLowerCase()}>
                  {make}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Models</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Year From" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Year To" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range} value={range.toLowerCase().replace(/\s/g, "-")}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="mt-4">
          <Input placeholder="Search by Stock ID or Keywords..." className="max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;

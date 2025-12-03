import { Clock, Mail, Phone, User } from "lucide-react";
import { useState, useEffect } from "react";

const TopBar = () => {
  const [japanTime, setJapanTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Tokyo",
        hour: "numeric",
        minute: "2-digit",
        weekday: "long",
        hour12: true,
      };
      setJapanTime(now.toLocaleString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-gradient text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Japan Time: {japanTime}</span>
          </div>
          <a href="mailto:info@neo-cars.jp" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Send Email</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+81-3-1234-5678" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="h-4 w-4" />
            <span>+81-3-1234-5678</span>
          </a>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <a href="#" className="hover:text-accent transition-colors">Register</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

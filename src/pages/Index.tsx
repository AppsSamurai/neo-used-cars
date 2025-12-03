import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchFilters from "@/components/SearchFilters";
import MakersSidebar from "@/components/MakersSidebar";
import NewArrivals from "@/components/NewArrivals";
import WelcomeSection from "@/components/WelcomeSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <HeroSection />
      <SearchFilters />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <div className="hidden lg:block">
            <MakersSidebar />
          </div>
          <div>
            <NewArrivals />
            <WelcomeSection />
            <Testimonials />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

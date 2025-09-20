import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Plan Your Dream
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Holiday
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Discover amazing destinations, plan activities, and create unforgettable memories
          </p>
        </div>

        {/* Search Card */}
        <Card className="max-w-4xl mx-auto p-6 bg-white/95 backdrop-blur-sm shadow-large">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Where to go?" 
                className="pl-10 h-12 bg-background/50"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                type="date" 
                className="pl-10 h-12 bg-background/50"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                type="date" 
                className="pl-10 h-12 bg-background/50"
              />
            </div>
            
            <Button variant="default" size="lg" className="h-12 bg-gradient-ocean hover:shadow-glow transition-all duration-300">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/80">Activities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-white/80">Happy Travelers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
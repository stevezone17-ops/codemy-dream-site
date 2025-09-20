import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock } from "lucide-react";
import beachImage from "@/assets/destination-beach.jpg";
import mountainImage from "@/assets/destination-mountains.jpg";
import cityImage from "@/assets/destination-city.jpg";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    type: "Beach",
    image: beachImage,
    rating: 4.8,
    duration: "7-14 days",
    price: "$1,200",
    description: "Tropical paradise with stunning beaches and rich culture",
    activities: ["Beach", "Temple Tours", "Surfing", "Spa"]
  },
  {
    id: 2,
    name: "Swiss Alps",
    type: "Mountain",
    image: mountainImage,
    rating: 4.9,
    duration: "5-10 days",
    price: "$2,100",
    description: "Breathtaking mountain views and adventure activities",
    activities: ["Hiking", "Skiing", "Photography", "Cable Car"]
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    type: "City",
    image: cityImage,
    rating: 4.7,
    duration: "4-8 days",
    price: "$1,800",
    description: "Modern metropolis with traditional charm",
    activities: ["Sightseeing", "Food Tours", "Shopping", "Culture"]
  }
];

interface DestinationSearchProps {
  onSelectDestination: (destination: any) => void;
}

const DestinationSearch = ({ onSelectDestination }: DestinationSearchProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our handpicked destinations for your perfect getaway
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="default" className="bg-gradient-ocean">All</Button>
          <Button variant="outline">Beach</Button>
          <Button variant="outline">Mountain</Button>
          <Button variant="outline">City</Button>
          <Button variant="outline">Adventure</Button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                  {destination.type}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{destination.name}</span>
                  <span className="text-sunset font-bold">{destination.price}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{destination.description}</p>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {destination.duration}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {destination.activities.map((activity, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {activity}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-gradient-ocean hover:shadow-glow transition-all duration-300"
                  onClick={() => onSelectDestination(destination)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSearch;
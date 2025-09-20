import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Clock, Users, Thermometer, Plane, Hotel, Camera, Activity } from "lucide-react";
import beachImage from "@/assets/destination-beach.jpg";
import mountainImage from "@/assets/destination-mountains.jpg";
import cityImage from "@/assets/destination-city.jpg";

interface DestinationModalProps {
  destination: any;
  isOpen: boolean;
  onClose: () => void;
  onBookDestination: (destination: any) => void;
}

const destinationDetails: { [key: number]: any } = {
  1: {
    gallery: [beachImage, beachImage, beachImage],
    fullDescription: "Bali is a tropical paradise that offers the perfect blend of stunning natural beauty, rich cultural heritage, and modern amenities. From pristine beaches with crystal-clear waters to ancient temples nestled in lush jungles, Bali provides an unforgettable experience for every type of traveler.",
    weather: { temp: "28°C", season: "Dry Season", rainfall: "Low" },
    bestTime: "April - October",
    language: "Indonesian, English widely spoken",
    currency: "Indonesian Rupiah (IDR)",
    timeZone: "WITA (UTC+8)",
    highlights: [
      "UNESCO World Heritage Temples",
      "Pristine Beaches & Coral Reefs", 
      "Traditional Balinese Culture",
      "Volcanic Landscapes",
      "World-Class Spas & Wellness"
    ],
    activities: [
      { name: "Temple Hopping Tour", duration: "Full Day", price: 45, description: "Visit iconic temples including Tanah Lot and Uluwatu" },
      { name: "Surfing Lessons", duration: "2 hours", price: 35, description: "Learn to surf at beginner-friendly beaches" },
      { name: "Rice Terrace Trek", duration: "Half Day", price: 30, description: "Explore the famous Jatiluwih rice terraces" },
      { name: "Cooking Class", duration: "4 hours", price: 55, description: "Learn to cook authentic Balinese cuisine" },
      { name: "Volcano Sunrise Hike", duration: "Full Day", price: 80, description: "Hike Mount Batur for spectacular sunrise views" }
    ],
    accommodation: [
      { name: "Luxury Beach Resort", type: "5-Star", price: 280, amenities: ["Ocean View", "Spa", "Pool", "Fine Dining"] },
      { name: "Boutique Villa", type: "4-Star", price: 150, amenities: ["Private Pool", "Garden View", "Breakfast"] },
      { name: "Beach Hostel", type: "Budget", price: 25, amenities: ["Shared Kitchen", "WiFi", "AC"] }
    ]
  },
  2: {
    gallery: [mountainImage, mountainImage, mountainImage],
    fullDescription: "The Swiss Alps offer some of the most breathtaking mountain scenery in the world. Whether you're seeking adventure through hiking and skiing or simply want to relax in charming alpine villages, Switzerland delivers unparalleled natural beauty and outdoor experiences.",
    weather: { temp: "15°C", season: "Mountain Climate", rainfall: "Moderate" },
    bestTime: "June - September (Summer), December - March (Winter Sports)",
    language: "German, French, Italian, English",
    currency: "Swiss Franc (CHF)",
    timeZone: "CET (UTC+1)",
    highlights: [
      "Matterhorn & Jungfraujoch",
      "Scenic Train Journeys",
      "Alpine Lakes & Valleys",
      "Charming Mountain Villages",
      "World-Class Skiing"
    ],
    activities: [
      { name: "Cable Car to Matterhorn", duration: "Full Day", price: 120, description: "Take scenic cable cars to see the iconic Matterhorn peak" },
      { name: "Alpine Hiking", duration: "6 hours", price: 60, description: "Guided hike through pristine mountain trails" },
      { name: "Scenic Train Ride", duration: "8 hours", price: 200, description: "Journey on the famous Glacier Express" },
      { name: "Mountain Biking", duration: "4 hours", price: 75, description: "Explore mountain trails on guided bike tour" },
      { name: "Paragliding", duration: "3 hours", price: 180, description: "Soar above the Alps with professional instructor" }
    ],
    accommodation: [
      { name: "Alpine Luxury Hotel", type: "5-Star", price: 450, amenities: ["Mountain View", "Spa", "Fine Dining", "Concierge"] },
      { name: "Mountain Chalet", type: "4-Star", price: 220, amenities: ["Fireplace", "Balcony", "Breakfast", "Sauna"] },
      { name: "Hostel in Village", type: "Budget", price: 45, amenities: ["Mountain View", "Kitchen", "WiFi"] }
    ]
  },
  3: {
    gallery: [cityImage, cityImage, cityImage],
    fullDescription: "Tokyo is a vibrant metropolis where ultra-modern skyscrapers stand alongside traditional temples and shrines. This fascinating city offers an incredible mix of cutting-edge technology, rich cultural traditions, world-renowned cuisine, and unique experiences you won't find anywhere else.",
    weather: { temp: "22°C", season: "Temperate", rainfall: "Moderate" },
    bestTime: "March - May, September - November",
    language: "Japanese, English in tourist areas",
    currency: "Japanese Yen (JPY)",
    timeZone: "JST (UTC+9)",
    highlights: [
      "Traditional Temples & Gardens",
      "Modern Skyscrapers & Technology",
      "World's Best Cuisine Scene",
      "Unique Pop Culture",
      "Efficient Public Transport"
    ],
    activities: [
      { name: "Sushi Making Class", duration: "3 hours", price: 85, description: "Learn from master sushi chef in traditional setting" },
      { name: "Temple & Garden Tour", duration: "6 hours", price: 65, description: "Visit Senso-ji, Meiji Shrine and traditional gardens" },
      { name: "Tokyo Skyline Tour", duration: "4 hours", price: 75, description: "Visit Tokyo Skytree and observation decks" },
      { name: "Street Food Walking Tour", duration: "4 hours", price: 55, description: "Explore local markets and street food culture" },
      { name: "Anime & Manga Tour", duration: "5 hours", price: 70, description: "Dive into Japan's pop culture in Akihabara and Harajuku" }
    ],
    accommodation: [
      { name: "Luxury City Hotel", type: "5-Star", price: 380, amenities: ["City View", "Multiple Restaurants", "Spa", "Business Center"] },
      { name: "Boutique Ryokan", type: "4-Star", price: 180, amenities: ["Traditional Style", "Hot Springs", "Kaiseki Dinner"] },
      { name: "Capsule Hotel", type: "Budget", price: 35, amenities: ["Modern Pods", "Shared Bath", "WiFi"] }
    ]
  }
};

const DestinationModal = ({ destination, isOpen, onClose, onBookDestination }: DestinationModalProps) => {
  if (!destination) return null;

  const details = destinationDetails[destination.id];
  if (!details) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-2xl">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-primary" />
              {destination.name}
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <span className="text-lg">{destination.rating}</span>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {details.gallery.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt={`${destination.name} ${index + 1}`}
                  className={`rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity ${
                    index === 0 ? 'col-span-2 row-span-2 h-64' : 'h-20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-sunset">{destination.price}</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Thermometer className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{details.weather.temp} - {details.weather.season}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Best time: {details.bestTime}</span>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4 bg-gradient-ocean hover:shadow-glow transition-all duration-300"
                  onClick={() => onBookDestination(destination)}
                >
                  Book This Destination
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Key Highlights</h4>
                <div className="space-y-1">
                  {details.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="accommodation">Hotels</TabsTrigger>
            <TabsTrigger value="practical">Travel Info</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">About {destination.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {details.fullDescription}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-card rounded-lg">
                    <Plane className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">Flight Time</div>
                    <div className="text-sm text-muted-foreground">8-12 hours average</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-card rounded-lg">
                    <Hotel className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">Accommodation</div>
                    <div className="text-sm text-muted-foreground">All budgets available</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-card rounded-lg">
                    <Camera className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">Photography</div>
                    <div className="text-sm text-muted-foreground">Instagram-worthy spots</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.activities.map((activity: any, index: number) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{activity.name}</h4>
                      <span className="text-sunset font-bold">${activity.price}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.duration}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      <Activity className="h-3 w-3 mr-1" />
                      Add to Trip
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accommodation" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {details.accommodation.map((hotel: any, index: number) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{hotel.name}</h4>
                      <Badge variant="secondary">{hotel.type}</Badge>
                    </div>
                    <div className="text-2xl font-bold text-sunset mb-2">${hotel.price}</div>
                    <div className="text-sm text-muted-foreground mb-3">per night</div>
                    
                    <div className="space-y-1 mb-4">
                      {hotel.amenities.map((amenity: string, i: number) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full">
                      <Hotel className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practical" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Essential Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Language:</strong> {details.language}</div>
                      <div><strong>Currency:</strong> {details.currency}</div>
                      <div><strong>Time Zone:</strong> {details.timeZone}</div>
                      <div><strong>Best Season:</strong> {details.bestTime}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Weather & Climate</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Average Temp:</strong> {details.weather.temp}</div>
                      <div><strong>Climate:</strong> {details.weather.season}</div>
                      <div><strong>Rainfall:</strong> {details.weather.rainfall}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationModal;
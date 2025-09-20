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
  },
  4: {
    gallery: [beachImage, beachImage, beachImage],
    fullDescription: "The Maldives represents the ultimate luxury beach destination with its pristine white sand beaches, crystal-clear turquoise waters, and overwater bungalows. This tropical paradise offers unparalleled relaxation and world-class diving experiences.",
    weather: { temp: "30°C", season: "Tropical", rainfall: "Low" },
    bestTime: "November - April",
    language: "Dhivehi, English widely spoken",
    currency: "Maldivian Rufiyaa (MVR), USD accepted",
    timeZone: "MVT (UTC+5)",
    highlights: [
      "Overwater Bungalows",
      "World-Class Diving Sites",
      "Private Island Resorts",
      "Coral Reef Conservation",
      "Luxury Spa Treatments"
    ],
    activities: [
      { name: "Sunset Dolphin Cruise", duration: "3 hours", price: 120, description: "Watch dolphins play in the golden sunset" },
      { name: "Scuba Diving", duration: "Half Day", price: 150, description: "Explore vibrant coral reefs and marine life" },
      { name: "Private Island Picnic", duration: "Full Day", price: 200, description: "Exclusive day on your own private island" },
      { name: "Underwater Restaurant", duration: "2 hours", price: 300, description: "Dine surrounded by marine life" },
      { name: "Seaplane Tour", duration: "1 hour", price: 180, description: "Aerial views of the atolls" }
    ],
    accommodation: [
      { name: "Overwater Villa Resort", type: "5-Star", price: 800, amenities: ["Private Pool", "Butler Service", "Water Villa", "Spa"] },
      { name: "Beach Resort", type: "4-Star", price: 400, amenities: ["Beach Access", "All-Inclusive", "Snorkeling"] },
      { name: "Guesthouse", type: "Budget", price: 80, amenities: ["Local Island", "Authentic Experience", "Meals"] }
    ]
  },
  5: {
    gallery: [mountainImage, mountainImage, mountainImage],
    fullDescription: "The Canadian Rockies offer some of North America's most spectacular mountain scenery with pristine lakes, glaciers, and abundant wildlife. This natural wonderland provides endless opportunities for outdoor adventure and breathtaking photography.",
    weather: { temp: "18°C", season: "Mountain", rainfall: "Moderate" },
    bestTime: "June - September",
    language: "English, French",
    currency: "Canadian Dollar (CAD)",
    timeZone: "MST (UTC-7)",
    highlights: [
      "Banff & Jasper National Parks",
      "Lake Louise & Moraine Lake",
      "Glacier-Fed Lakes",
      "Wildlife Watching",
      "Mountain Railway"
    ],
    activities: [
      { name: "Lake Louise Canoeing", duration: "3 hours", price: 75, description: "Paddle on the famous turquoise lake" },
      { name: "Wildlife Safari", duration: "Full Day", price: 140, description: "Spot bears, elk, and mountain goats" },
      { name: "Glacier Walk", duration: "6 hours", price: 160, description: "Walk on ancient glaciers with expert guides" },
      { name: "Mountain Railway", duration: "4 hours", price: 95, description: "Scenic train through the Rockies" },
      { name: "Helicopter Tour", duration: "45 minutes", price: 350, description: "Aerial views of peaks and glaciers" }
    ],
    accommodation: [
      { name: "Mountain Lodge", type: "5-Star", price: 320, amenities: ["Mountain View", "Spa", "Fine Dining", "Guided Tours"] },
      { name: "Lakeside Hotel", type: "4-Star", price: 180, amenities: ["Lake View", "Restaurant", "Activities"] },
      { name: "Mountain Hostel", type: "Budget", price: 40, amenities: ["Shared Facilities", "Kitchen", "WiFi"] }
    ]
  },
  6: {
    gallery: [cityImage, cityImage, cityImage],
    fullDescription: "New York City is the ultimate urban experience with its iconic skyline, world-class museums, Broadway shows, and diverse neighborhoods. From Central Park to Times Square, NYC offers endless entertainment and cultural experiences.",
    weather: { temp: "20°C", season: "Continental", rainfall: "Moderate" },
    bestTime: "April - June, September - November",
    language: "English",
    currency: "US Dollar (USD)",
    timeZone: "EST (UTC-5)",
    highlights: [
      "Statue of Liberty",
      "Broadway Shows",
      "Central Park",
      "9/11 Memorial",
      "Brooklyn Bridge"
    ],
    activities: [
      { name: "Broadway Show", duration: "3 hours", price: 150, description: "Watch a world-class musical or play" },
      { name: "Statue of Liberty Tour", duration: "4 hours", price: 85, description: "Visit the iconic symbol of freedom" },
      { name: "Central Park Bike Tour", duration: "3 hours", price: 45, description: "Explore the famous park on two wheels" },
      { name: "Food Tour", duration: "4 hours", price: 95, description: "Taste NYC's diverse culinary scene" },
      { name: "Empire State Building", duration: "2 hours", price: 75, description: "Iconic city views from the top" }
    ],
    accommodation: [
      { name: "Luxury Manhattan Hotel", type: "5-Star", price: 450, amenities: ["Central Location", "Concierge", "Rooftop Bar", "Spa"] },
      { name: "Boutique Hotel", type: "4-Star", price: 250, amenities: ["Stylish Rooms", "Restaurant", "Gym"] },
      { name: "Hostel NYC", type: "Budget", price: 60, amenities: ["Shared Rooms", "Kitchen", "Common Area"] }
    ]
  },
  7: {
    gallery: [beachImage, beachImage, beachImage],
    fullDescription: "Costa Rica offers an incredible eco-adventure with pristine beaches, lush rainforests, and abundant wildlife. This Central American paradise is perfect for those seeking both relaxation and adventure in a sustainable environment.",
    weather: { temp: "26°C", season: "Tropical", rainfall: "Seasonal" },
    bestTime: "December - April",
    language: "Spanish, English widely spoken",
    currency: "Costa Rican Colón (CRC), USD accepted",
    timeZone: "CST (UTC-6)",
    highlights: [
      "Manuel Antonio National Park",
      "Arenal Volcano",
      "Cloud Forests",
      "Wildlife Sanctuaries",
      "Sustainable Tourism"
    ],
    activities: [
      { name: "Zip-lining Adventure", duration: "4 hours", price: 85, description: "Soar through the rainforest canopy" },
      { name: "Wildlife Watching", duration: "Full Day", price: 120, description: "Spot sloths, monkeys, and exotic birds" },
      { name: "Volcano Hike", duration: "6 hours", price: 95, description: "Hike around the active Arenal Volcano" },
      { name: "Beach Horseback Riding", duration: "3 hours", price: 75, description: "Ride along pristine beaches" },
      { name: "Coffee Plantation Tour", duration: "Half Day", price: 55, description: "Learn about Costa Rican coffee culture" }
    ],
    accommodation: [
      { name: "Eco-Luxury Resort", type: "5-Star", price: 300, amenities: ["Rainforest View", "Spa", "Sustainability Focus", "Wildlife"] },
      { name: "Beach Hotel", type: "4-Star", price: 150, amenities: ["Beach Access", "Pool", "Restaurant"] },
      { name: "Eco-Lodge", type: "Budget", price: 45, amenities: ["Shared Facilities", "Nature Immersion", "Local Culture"] }
    ]
  },
  8: {
    gallery: [mountainImage, mountainImage, mountainImage],
    fullDescription: "The Himalayas of Nepal offer the world's most spectacular mountain trekking with views of Everest, rich Buddhist culture, and spiritual experiences. This is the ultimate destination for adventurers seeking high-altitude challenges and cultural immersion.",
    weather: { temp: "12°C", season: "Mountain", rainfall: "Monsoon Season" },
    bestTime: "September - November, March - May",
    language: "Nepali, English",
    currency: "Nepalese Rupee (NPR)",
    timeZone: "NPT (UTC+5:45)",
    highlights: [
      "Mount Everest Base Camp",
      "Ancient Monasteries",
      "Sherpa Culture",
      "Annapurna Circuit",
      "Kathmandu Valley"
    ],
    activities: [
      { name: "Everest Base Camp Trek", duration: "14 days", price: 1200, description: "Trek to the base of the world's highest peak" },
      { name: "Monastery Visit", duration: "Full Day", price: 65, description: "Experience Buddhist monastery life" },
      { name: "Mountain Flight", duration: "1 hour", price: 180, description: "Scenic flight viewing Everest" },
      { name: "Cultural Tour Kathmandu", duration: "2 days", price: 150, description: "Explore UNESCO World Heritage sites" },
      { name: "Short Trek Nagarkot", duration: "3 days", price: 200, description: "Gentle trek with Himalayan views" }
    ],
    accommodation: [
      { name: "Luxury Hotel Kathmandu", type: "5-Star", price: 180, amenities: ["City Center", "Spa", "Mountain Views", "Cultural Tours"] },
      { name: "Mountain Lodge", type: "4-Star", price: 80, amenities: ["Trekking Base", "Local Cuisine", "Guides"] },
      { name: "Teahouse", type: "Budget", price: 15, amenities: ["Basic Accommodation", "Local Experience", "Trekking Route"] }
    ]
  },
  9: {
    gallery: [cityImage, cityImage, cityImage],
    fullDescription: "Dubai is a futuristic city that combines luxury shopping, modern architecture, and traditional Arabian culture. This cosmopolitan destination offers world-class amenities, from indoor skiing to underwater hotels and desert adventures.",
    weather: { temp: "32°C", season: "Desert", rainfall: "Very Low" },
    bestTime: "November - March",
    language: "Arabic, English widely spoken",
    currency: "UAE Dirham (AED)",
    timeZone: "GST (UTC+4)",
    highlights: [
      "Burj Khalifa",
      "Dubai Mall",
      "Palm Jumeirah",
      "Desert Safaris",
      "Luxury Shopping"
    ],
    activities: [
      { name: "Burj Khalifa Visit", duration: "2 hours", price: 120, description: "Visit the world's tallest building" },
      { name: "Desert Safari", duration: "6 hours", price: 95, description: "Dune bashing and Bedouin dinner" },
      { name: "Dubai Mall Tour", duration: "4 hours", price: 60, description: "World's largest shopping and entertainment destination" },
      { name: "Luxury Yacht Charter", duration: "4 hours", price: 300, description: "Cruise along Dubai's coastline" },
      { name: "Skydiving", duration: "3 hours", price: 400, description: "Tandem jump over Palm Jumeirah" }
    ],
    accommodation: [
      { name: "Burj Al Arab", type: "7-Star", price: 1200, amenities: ["Luxury Suite", "Butler Service", "Helicopter Transfer", "Private Beach"] },
      { name: "Downtown Hotel", type: "5-Star", price: 350, amenities: ["Burj Khalifa View", "Multiple Restaurants", "Spa", "Pool"] },
      { name: "City Hotel", type: "4-Star", price: 120, amenities: ["Central Location", "Pool", "Restaurant"] }
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
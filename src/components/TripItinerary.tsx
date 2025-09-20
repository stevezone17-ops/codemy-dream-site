import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Edit3, Trash2 } from "lucide-react";

const itineraryData = [
  {
    id: 1,
    day: 1,
    date: "2024-07-15",
    activities: [
      {
        id: 1,
        time: "09:00",
        name: "Hotel Check-in",
        duration: "1 hour",
        type: "Accommodation",
        location: "Beachfront Resort",
        cost: 0
      },
      {
        id: 2,
        time: "11:00",
        name: "Beach Volleyball",
        duration: "2 hours",
        type: "Sports",
        location: "Main Beach",
        cost: 25
      },
      {
        id: 3,
        time: "14:00",
        name: "Local Food Tour",
        duration: "3 hours",
        type: "Culinary",
        location: "City Center",
        cost: 45
      },
      {
        id: 4,
        time: "19:00",
        name: "Sunset Cruise",
        duration: "3 hours",
        type: "Relaxation",
        location: "Harbor",
        cost: 89
      }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "2024-07-16",
    activities: [
      {
        id: 5,
        time: "08:00",
        name: "Snorkeling Adventure",
        duration: "4 hours",
        type: "Water Sports",
        location: "Coral Bay",
        cost: 65
      },
      {
        id: 6,
        time: "14:00",
        name: "Cultural Temple Visit",
        duration: "2 hours",
        type: "Culture",
        location: "Temple Complex",
        cost: 30
      },
      {
        id: 7,
        time: "17:00",
        name: "Adventure Hiking",
        duration: "3 hours",
        type: "Adventure",
        location: "Mountain Trail",
        cost: 55
      }
    ]
  }
];

const getActivityColor = (type: string) => {
  const colors: { [key: string]: string } = {
    'Accommodation': 'bg-blue-100 text-blue-800',
    'Sports': 'bg-green-100 text-green-800',
    'Culinary': 'bg-orange-100 text-orange-800',
    'Relaxation': 'bg-purple-100 text-purple-800',
    'Water Sports': 'bg-cyan-100 text-cyan-800',
    'Culture': 'bg-yellow-100 text-yellow-800',
    'Adventure': 'bg-red-100 text-red-800'
  };
  return colors[type] || 'bg-gray-100 text-gray-800';
};

const TripItinerary = () => {
  const totalCost = itineraryData.reduce((total, day) => 
    total + day.activities.reduce((dayTotal, activity) => dayTotal + activity.cost, 0), 0
  );

  return (
    <section className="py-16 bg-sand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Trip Itinerary
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            View and manage your complete travel schedule
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Itinerary Timeline */}
          <div className="lg:col-span-3 space-y-8">
            {itineraryData.map((day) => (
              <Card key={day.id} className="shadow-medium">
                <CardHeader className="bg-gradient-ocean text-white">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Day {day.day} - {new Date(day.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Edit3 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {day.activities.map((activity, index) => (
                      <div key={activity.id} className={`p-6 border-l-4 border-primary/20 ${index !== day.activities.length - 1 ? 'border-b' : ''}`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-medium mr-3">
                                {activity.time}
                              </div>
                              <Badge className={getActivityColor(activity.type)}>
                                {activity.type}
                              </Badge>
                            </div>
                            
                            <h3 className="text-lg font-semibold mb-2">{activity.name}</h3>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {activity.duration}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {activity.location}
                              </div>
                              {activity.cost > 0 && (
                                <div className="text-sunset font-medium">
                                  ${activity.cost}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Itinerary Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Trip Summary
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-card rounded-lg">
                  <div className="text-2xl font-bold text-sunset">${totalCost}</div>
                  <div className="text-sm text-muted-foreground">Total Activities Cost</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Trip Duration</span>
                    <span className="text-sm font-medium">2 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Total Activities</span>
                    <span className="text-sm font-medium">
                      {itineraryData.reduce((total, day) => total + day.activities.length, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Start Date</span>
                    <span className="text-sm font-medium">Jul 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">End Date</span>
                    <span className="text-sm font-medium">Jul 16, 2024</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-ocean hover:shadow-glow transition-all duration-300">
                  Export Itinerary
                </Button>
                
                <Button variant="outline" className="w-full">
                  Share Trip
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripItinerary;
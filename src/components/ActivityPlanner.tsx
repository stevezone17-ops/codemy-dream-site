import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, Users, DollarSign, MapPin } from "lucide-react";

const activities = [
  {
    id: 1,
    name: "Beach Volleyball",
    category: "Sports",
    duration: "2 hours",
    price: 25,
    groupSize: "4-8 people",
    description: "Fun beach volleyball game with equipment included"
  },
  {
    id: 2,
    name: "Sunset Cruise",
    category: "Relaxation",
    duration: "3 hours",
    price: 89,
    groupSize: "2-20 people",
    description: "Romantic sunset cruise with dinner and drinks"
  },
  {
    id: 3,
    name: "Snorkeling Adventure",
    category: "Water Sports",
    duration: "4 hours",
    price: 65,
    groupSize: "1-10 people",
    description: "Explore underwater world with guide and equipment"
  },
  {
    id: 4,
    name: "Local Food Tour",
    category: "Culinary",
    duration: "3 hours",
    price: 45,
    groupSize: "1-12 people",
    description: "Taste authentic local cuisine with expert guide"
  },
  {
    id: 5,
    name: "Cultural Temple Visit",
    category: "Culture",
    duration: "2 hours",
    price: 30,
    groupSize: "1-15 people",
    description: "Visit ancient temples and learn about local history"
  },
  {
    id: 6,
    name: "Adventure Hiking",
    category: "Adventure",
    duration: "5 hours",
    price: 55,
    groupSize: "2-8 people",
    description: "Challenging hike with breathtaking mountain views"
  }
];

interface ActivityPlannerProps {
  selectedActivities: number[];
  onToggleActivity: (activityId: number) => void;
}

const ActivityPlanner = ({ selectedActivities, onToggleActivity }: ActivityPlannerProps) => {
  const totalCost = activities
    .filter(activity => selectedActivities.includes(activity.id))
    .reduce((sum, activity) => sum + activity.price, 0);

  return (
    <section className="py-16 bg-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plan Your Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select activities that match your interests and create the perfect itinerary
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Activities List */}
          <div className="lg:col-span-3">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="default" className="bg-gradient-ocean">All</Button>
              <Button variant="outline">Sports</Button>
              <Button variant="outline">Relaxation</Button>
              <Button variant="outline">Water Sports</Button>
              <Button variant="outline">Culinary</Button>
              <Button variant="outline">Culture</Button>
              <Button variant="outline">Adventure</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity) => (
                <Card key={activity.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={selectedActivities.includes(activity.id)}
                          onCheckedChange={() => onToggleActivity(activity.id)}
                          className="mt-1"
                        />
                        <div>
                          <CardTitle className="text-lg">{activity.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {activity.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-sunset">${activity.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">{activity.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {activity.groupSize}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Activity Summary
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-card rounded-lg">
                  <div className="text-2xl font-bold text-sunset">${totalCost}</div>
                  <div className="text-sm text-muted-foreground">Total Cost</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium">Selected Activities:</div>
                  {selectedActivities.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No activities selected</p>
                  ) : (
                    activities
                      .filter(activity => selectedActivities.includes(activity.id))
                      .map(activity => (
                        <div key={activity.id} className="flex justify-between text-sm">
                          <span>{activity.name}</span>
                          <span className="font-medium">${activity.price}</span>
                        </div>
                      ))
                  )}
                </div>
                
                <Button 
                  className="w-full bg-gradient-ocean hover:shadow-glow transition-all duration-300"
                  disabled={selectedActivities.length === 0}
                >
                  Add to Itinerary
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPlanner;
import { useState } from "react";
import Hero from "@/components/Hero";
import DestinationSearch from "@/components/DestinationSearch";
import ActivityPlanner from "@/components/ActivityPlanner";
import TripItinerary from "@/components/TripItinerary";
import BudgetTracker from "@/components/BudgetTracker";

const Index = () => {
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const [selectedActivities, setSelectedActivities] = useState<number[]>([]);

  const handleSelectDestination = (destination: any) => {
    setSelectedDestination(destination);
  };

  const handleToggleActivity = (activityId: number) => {
    setSelectedActivities(prev => 
      prev.includes(activityId) 
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  return (
    <main className="min-h-screen">
      <Hero />
      <DestinationSearch onSelectDestination={handleSelectDestination} />
      <ActivityPlanner 
        selectedActivities={selectedActivities}
        onToggleActivity={handleToggleActivity}
      />
      <TripItinerary />
      <BudgetTracker />
    </main>
  );
};

export default Index;
import { useState } from "react";
import Hero from "@/components/Hero";
import DestinationSearch from "@/components/DestinationSearch";
import DestinationModal from "@/components/DestinationModal";
import ActivityPlanner from "@/components/ActivityPlanner";
import TripItinerary from "@/components/TripItinerary";
import BudgetTracker from "@/components/BudgetTracker";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
  const [isDestinationModalOpen, setIsDestinationModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSelectDestination = (destination: any) => {
    setSelectedDestination(destination);
    setIsDestinationModalOpen(true);
  };

  const handleCloseDestinationModal = () => {
    setIsDestinationModalOpen(false);
  };

  const handleBookDestination = (destination: any) => {
    toast({
      title: "Destination Booked!",
      description: `${destination.name} has been added to your trip planning.`,
    });
    setIsDestinationModalOpen(false);
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
      <DestinationModal
        destination={selectedDestination}
        isOpen={isDestinationModalOpen}
        onClose={handleCloseDestinationModal}
        onBookDestination={handleBookDestination}
      />
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
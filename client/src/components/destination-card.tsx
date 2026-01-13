import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface DestinationCardProps {
  name: string;
  image: string;
  description?: string; // Optional if not used in current card design but available in data
  onClick?: () => void;
  index: number;
  testIdPrefix?: string;
}

export function DestinationCard({ 
  name, 
  image, 
  onClick, 
  index,
  testIdPrefix = "destination" 
}: DestinationCardProps) {
  return (
    <Card 
      className="group overflow-visible transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover-elevate active-elevate-2 cursor-pointer h-full"
      data-testid={`card-${testIdPrefix}-${index}`}
      onClick={onClick}
    >
      <div className="relative h-64 sm:h-56 md:h-64 overflow-hidden rounded-t-md">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-testid={`img-${testIdPrefix}-${index}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
          <h3 className="mb-2 text-xl font-bold text-white sm:text-l md:text-2xl" data-testid={`text-${testIdPrefix}-name-${index}`}>
            {name}
          </h3>
        </div>
      </div>
      <CardContent className="p-4 sm:p-6 pb-2">
        {/* Placeholder for description if we want to add it back */}
      </CardContent>
    </Card>
  );
}

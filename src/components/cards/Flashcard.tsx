
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface FlashcardItem {
  id: string;
  front: string;
  back: string;
}

interface FlashcardProps {
  cards: FlashcardItem[];
  subjectTitle: string;
}

export default function Flashcard({ cards, subjectTitle }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [cardAnimation, setCardAnimation] = useState("");

  if (cards.length === 0) {
    return <div>No flashcards available for this subject.</div>;
  }

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setFlipped(false);
      setCardAnimation("animate-fade-out");
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setCardAnimation("animate-fade-in");
      }, 200);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setFlipped(false);
      setCardAnimation("animate-fade-out");
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setCardAnimation("animate-fade-in");
      }, 200);
    }
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8 gradient-text">{subjectTitle} Flashcards</h2>
      
      <div 
        className={`relative w-full max-w-md h-80 rounded-xl perspective cursor-pointer ${cardAnimation}`}
        onClick={toggleFlip}
      >
        <div className={`w-full h-full duration-500 preserve-3d ${flipped ? "rotate-y-180" : ""}`}>
          {/* Front of card */}
          <div className="absolute w-full h-full bg-card/80 glass-card rounded-xl p-8 flex items-center justify-center backface-hidden border-2 border-spark/20">
            <p className="text-xl font-medium text-center">{currentCard.front}</p>
          </div>
          
          {/* Back of card */}
          <div className="absolute w-full h-full bg-black/40 glass-card rounded-xl p-8 flex items-center justify-center rotate-y-180 backface-hidden border-2 border-spark/20">
            <p className="text-xl font-medium text-center">{currentCard.back}</p>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mt-4 mb-6">
        {flipped ? "Click to see question" : "Click to see answer"} • Card {currentIndex + 1} of {cards.length}
      </p>
      
      <div className="flex space-x-4">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

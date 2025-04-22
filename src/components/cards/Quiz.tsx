
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
}

export default function Quiz({ title, questions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) {
      toast({
        description: "Please select an answer",
        variant: "destructive",
      });
      return;
    }

    setIsAnswered(true);
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectAnswers(0);
    setShowResults(false);
  };

  if (showResults) {
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    return (
      <div className="w-full max-w-2xl mx-auto">
        <Card className="neumorphic-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2 gradient-text">Quiz Results</h2>
              <div className="text-6xl font-bold my-6 gradient-text">{percentage}%</div>
              <p className="text-xl mb-4">
                You got <span className="text-spark font-medium">{correctAnswers}</span> out of{" "}
                <span className="text-spark font-medium">{questions.length}</span> questions correct!
              </p>
              
              {percentage >= 80 ? (
                <p className="text-green-400 flex items-center justify-center gap-2 mb-6">
                  <CheckCircle className="h-5 w-5" /> Excellent work!
                </p>
              ) : percentage >= 60 ? (
                <p className="text-yellow-400 flex items-center justify-center gap-2 mb-6">
                  Good effort! Keep studying.
                </p>
              ) : (
                <p className="text-red-400 flex items-center justify-center gap-2 mb-6">
                  <XCircle className="h-5 w-5" /> Keep practicing!
                </p>
              )}
              
              <Button 
                onClick={handleRestartQuiz}
                className="mt-4 w-full"
              >
                Restart Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2 gradient-text">{title}</h2>
        <div className="flex items-center gap-2 justify-center">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="mt-2 h-2 bg-secondary" />
      </div>

      <Card className="neumorphic-card">
        <CardContent className="pt-6">
          <h3 className="text-xl font-medium mb-6">{currentQuestion.question}</h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedOption === index 
                    ? isAnswered
                      ? index === currentQuestion.correctAnswer
                        ? "border-green-500 bg-green-500/10"
                        : "border-red-500 bg-red-500/10"
                      : "border-spark bg-spark/5"
                    : "border-border bg-card/40 hover:border-spark/50"
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                <div className="flex items-center">
                  <div className="flex-1">{option}</div>
                  {isAnswered && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                  {isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {isAnswered && (
            <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
              <p className="text-sm">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="mt-6">
            {!isAnswered ? (
              <Button onClick={handleCheckAnswer} className="w-full">
                Check Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="w-full">
                {currentQuestionIndex < questions.length - 1 ? (
                  <>Next Question <ArrowRight className="ml-2 h-4 w-4" /></>
                ) : (
                  "View Results"
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

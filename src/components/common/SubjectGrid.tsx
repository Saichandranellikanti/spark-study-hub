
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface Subject {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  itemCount: number;
  type: 'flashcards' | 'cheatsheets' | 'quizzes';
}

interface SubjectGridProps {
  subjects: Subject[];
  type: 'flashcards' | 'cheatsheets' | 'quizzes';
}

export default function SubjectGrid({ subjects, type }: SubjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {subjects.map((subject) => (
        <Link key={subject.id} to={`/${type}/${subject.id}`} className="group">
          <Card className="h-full neumorphic-card hover:border-spark/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg group-hover:text-spark transition-colors">
                  {subject.title}
                </CardTitle>
                <div className="text-spark">{subject.icon}</div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-muted-foreground text-sm">{subject.description}</p>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                {subject.itemCount} {type === 'flashcards' ? 'cards' : 
                   type === 'cheatsheets' ? 'sheets' : 'questions'}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}

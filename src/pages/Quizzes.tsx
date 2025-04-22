import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SubjectGrid from "@/components/common/SubjectGrid";
import Quiz from "@/components/cards/Quiz";
import { subjectsMock, quizzesMock } from "@/data/mockData";

export default function Quizzes() {
  const { subjectId } = useParams();
  
  // If we're viewing a specific subject
  if (subjectId) {
    const subject = subjectsMock.quizzes.find(s => s.id === subjectId);
    const quiz = quizzesMock[subjectId as string];
    
    return (
      <PageLayout>
        {subject && quiz ? (
          <Quiz title={quiz.title} questions={quiz.questions} />
        ) : (
          <div>Quiz not found</div>
        )}
      </PageLayout>
    );
  }
  
  // Otherwise, show the list of subjects
  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Quizzes</h1>
          <p className="text-muted-foreground mt-2">
            Test your knowledge with interactive quizzes.
          </p>
        </div>
        
        <SubjectGrid subjects={subjectsMock.quizzes} type="quizzes" />
      </div>
    </PageLayout>
  );
}

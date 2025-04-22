import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SubjectGrid from "@/components/common/SubjectGrid";
import Flashcard from "@/components/cards/Flashcard";
import { subjectsMock, flashcardsMock } from "@/data/mockData";

export default function Flashcards() {
  const { subjectId } = useParams();
  
  // If we're viewing a specific subject
  if (subjectId) {
    const subject = subjectsMock.flashcards.find(s => s.id === subjectId);
    const flashcards = flashcardsMock[subjectId as string] || [];
    
    return (
      <PageLayout>
        {subject ? (
          <Flashcard cards={flashcards} subjectTitle={subject.title} />
        ) : (
          <div>Subject not found</div>
        )}
      </PageLayout>
    );
  }
  
  // Otherwise, show the list of subjects
  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Flashcards</h1>
          <p className="text-muted-foreground mt-2">
            Select a subject to practice with interactive flashcards.
          </p>
        </div>
        
        <SubjectGrid subjects={subjectsMock.flashcards} type="flashcards" />
      </div>
    </PageLayout>
  );
}

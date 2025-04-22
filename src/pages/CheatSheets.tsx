import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SubjectGrid from "@/components/common/SubjectGrid";
import CheatSheet from "@/components/cards/CheatSheet";
import { subjectsMock, cheatSheetsMock } from "@/data/mockData";

export default function CheatSheets() {
  const { subjectId } = useParams();
  
  // If we're viewing a specific subject
  if (subjectId) {
    const subject = subjectsMock.cheatsheets.find(s => s.id === subjectId);
    const cheatSheet = cheatSheetsMock[subjectId as string];
    
    return (
      <PageLayout>
        {subject && cheatSheet ? (
          <CheatSheet 
            title={cheatSheet.title} 
            description={cheatSheet.description} 
            sections={cheatSheet.sections} 
          />
        ) : (
          <div>Cheat sheet not found</div>
        )}
      </PageLayout>
    );
  }
  
  // Otherwise, show the list of subjects
  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Cheat Sheets</h1>
          <p className="text-muted-foreground mt-2">
            Quick reference guides for important concepts.
          </p>
        </div>
        
        <SubjectGrid subjects={subjectsMock.cheatsheets} type="cheatsheets" />
      </div>
    </PageLayout>
  );
}

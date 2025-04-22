
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export interface CheatSheetSection {
  id: string;
  title: string;
  content: string;
}

interface CheatSheetProps {
  title: string;
  description: string;
  sections: CheatSheetSection[];
}

export default function CheatSheet({ title, description, sections }: CheatSheetProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 gradient-text">{title}</h1>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="neumorphic-card p-6 rounded-xl">
        <ScrollArea className="h-[60vh]">
          <div className="pr-4">
            {sections.map((section, index) => (
              <div key={section.id} className="mb-6">
                <h3 className="text-lg font-semibold text-spark mb-2">{section.title}</h3>
                <div className="text-sm text-muted-foreground whitespace-pre-line">
                  {section.content}
                </div>
                {index < sections.length - 1 && (
                  <Separator className="my-4 bg-border/50" />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

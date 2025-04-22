
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, FileText, BookOpen, User, TrendingUp, Zap } from "lucide-react";
import { userProgressMock } from "@/data/mockData";

export default function Dashboard() {
  const { flashcardsCompleted, quizzesCompleted, averageScore, streak } = userProgressMock;

  const resources = [
    {
      title: "Flashcards",
      description: "Review key concepts with interactive flashcards",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/flashcards",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Cheat Sheets",
      description: "Quick reference guides for important topics",
      icon: <FileText className="h-6 w-6" />,
      link: "/cheatsheets",
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Quizzes",
      description: "Test your knowledge with practice quizzes",
      icon: <BookText className="h-6 w-6" />,
      link: "/quizzes",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "My Profile",
      description: "View your progress and settings",
      icon: <User className="h-6 w-6" />,
      link: "/profile",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold gradient-text">Welcome back!</h1>
          <p className="text-muted-foreground">Continue your learning journey with StudySpark.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Flashcards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-spark" />
                  <span className="text-2xl font-bold">{flashcardsCompleted}</span>
                </div>
                <span className="text-xs text-muted-foreground">completed</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Quizzes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BookText className="h-5 w-5 text-spark" />
                  <span className="text-2xl font-bold">{quizzesCompleted}</span>
                </div>
                <span className="text-xs text-muted-foreground">completed</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-spark" />
                  <span className="text-2xl font-bold">{averageScore}%</span>
                </div>
                <span className="text-xs text-muted-foreground">on quizzes</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-spark" />
                  <span className="text-2xl font-bold">{streak}</span>
                </div>
                <span className="text-xs text-muted-foreground">days</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-semibold mt-4">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource) => (
            <Link key={resource.title} to={resource.link}>
              <Card className="h-full neumorphic-card hover:border-spark/30 transition-all group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${resource.color} mb-2 group-hover:scale-110 transition-transform`}>
                    {resource.icon}
                  </div>
                  <CardTitle className="group-hover:text-spark transition-colors">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="ghost" className="w-full group-hover:bg-spark/10 group-hover:text-spark transition-all">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">Daily Challenge</h2>
          <Card className="neumorphic-card overflow-hidden">
            <div className="bg-spark p-1">
              <div className="h-1 w-1/3 bg-white/30 rounded-full"></div>
            </div>
            <CardHeader>
              <CardTitle>Science Challenge</CardTitle>
              <CardDescription>Test your knowledge about the solar system</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Complete this challenge to earn bonus points and extend your streak!
              </p>
              <Button>Start Challenge</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}

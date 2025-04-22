
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { BookText, Menu, User, LogOut } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, we would handle the logout logic
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="flex items-center gap-2">
            <BookText className="h-6 w-6 text-spark" />
            <span className="text-xl font-bold gradient-text">StudySpark</span>
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-card">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/dashboard" 
                  className="text-lg font-medium hover:text-spark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/flashcards" 
                  className="text-lg font-medium hover:text-spark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Flashcards
                </Link>
                <Link 
                  to="/cheatsheets" 
                  className="text-lg font-medium hover:text-spark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cheat Sheets
                </Link>
                <Link 
                  to="/quizzes" 
                  className="text-lg font-medium hover:text-spark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Quizzes
                </Link>
                <Link 
                  to="/profile" 
                  className="text-lg font-medium hover:text-spark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Button 
                  variant="destructive" 
                  className="mt-4"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                >
                  Log Out
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-sm font-medium hover:text-spark transition-colors">
            Dashboard
          </Link>
          <Link to="/flashcards" className="text-sm font-medium hover:text-spark transition-colors">
            Flashcards
          </Link>
          <Link to="/cheatsheets" className="text-sm font-medium hover:text-spark transition-colors">
            Cheat Sheets
          </Link>
          <Link to="/quizzes" className="text-sm font-medium hover:text-spark transition-colors">
            Quizzes
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={() => navigate("/profile")}
                className="cursor-pointer"
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={handleLogout}
                className="cursor-pointer text-destructive"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}

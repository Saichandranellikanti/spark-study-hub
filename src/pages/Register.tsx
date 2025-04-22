
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { BookText } from "lucide-react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords are the same.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    // Simulate registration delay
    setTimeout(() => {
      setIsLoading(false);
      
      // This is just a placeholder for demo purposes
      if (email && password && fullName) {
        toast({
          title: "Account created",
          description: "You have successfully registered for StudySpark.",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Registration failed",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#e3f6fa] to-[#f6fbff]">
      <Card className="w-full max-w-md glass-card">
        <CardHeader className="space-y-1 flex flex-col items-center justify-center">
          <div className="logo-halo w-24 h-24 flex items-center justify-center mb-4 animation-glow bg-[#f6fbff]">
            <img
              src="/lovable-uploads/608d8366-5f7c-47cf-ae1f-f6a8ee62603c.png"
              alt="StudySpark New Logo"
              className="max-w-full max-h-full object-contain rounded-full"
              style={{ filter: "drop-shadow(0 0 12px #10C3E6)" }}
            />
          </div>
          <CardTitle className="text-2xl text-center gradient-text font-bold">Create an Account</CardTitle>
          <CardDescription className="text-center">
            Sign up for StudySpark to start learning
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={handleRegister}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input
                  id="fullName"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="bg-background border-secondary"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background border-secondary"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-background border-secondary"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-background border-secondary"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <div className="text-center w-full text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-spark hover:text-spark-light">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);

      // Placeholder for demo purposes
      if (email && password) {
        toast({
          title: "Login successful",
          description: "Welcome to StudySpark!",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Login failed",
          description: "Please check your credentials and try again.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md glass-card shadow-xl">
      <CardHeader className="space-y-1 flex items-center justify-center">
        <div className="logo-halo w-36 h-36 flex items-center justify-center mb-2 drop-shadow-xl animation-glow bg-[#f6fbff]">
          <img 
            src="/lovable-uploads/608d8366-5f7c-47cf-ae1f-f6a8ee62603c.png"
            alt="StudySpark New Logo"
            className="max-w-full max-h-full object-contain rounded-full"
            style={{ filter: "drop-shadow(0 0 18px #10C3E6)" }}
          />
        </div>
        <CardTitle className="text-3xl text-center gradient-text font-bold drop-shadow transition-all">
          StudySpark
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Enter your email to sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form onSubmit={handleLogin}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-accent/30 focus-visible:ring-spark"
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
                className="bg-background border-accent/30 focus-visible:ring-spark"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-spark-light to-spark text-white font-semibold shadow-lg hover:from-spark hover:to-spark-light hover:scale-[1.01] transition-all"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="text-center text-sm">
          <Link to="/forgot-password" className="text-spark hover:text-spark-light underline">
            Forgot password?
          </Link>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-spark hover:text-spark-light underline">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

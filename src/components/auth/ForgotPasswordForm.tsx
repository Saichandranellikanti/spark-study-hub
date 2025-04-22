
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate request delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      toast({
        title: "Reset link sent",
        description: "Check your email for the password reset link.",
      });
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md glass-card">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center gradient-text font-bold">
          Reset Password
        </CardTitle>
        <CardDescription className="text-center">
          {!isSubmitted 
            ? "Enter your email address and we'll send you a link to reset your password." 
            : "Check your email for a link to reset your password."}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
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
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center p-4">
            <p className="text-muted-foreground mb-4">
              We've sent a password reset link to <span className="font-medium text-foreground">{email}</span>
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mb-2">
              Try another email
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link to="/login" className="flex items-center text-sm text-spark hover:text-spark-light">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to login
        </Link>
      </CardFooter>
    </Card>
  );
}

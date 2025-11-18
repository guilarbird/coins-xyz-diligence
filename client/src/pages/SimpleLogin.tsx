import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useLocation } from "wouter";
import { AlertCircle } from "lucide-react";
import { APP_LOGO_LIGHT, APP_TITLE } from "@/const";

const FIXED_PASSWORD = "CoinsXYZ2025!InvestorDD";

export default function SimpleLogin() {
  const [, setLocation] = useLocation();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password === FIXED_PASSWORD) {
      // Save to localStorage
      localStorage.setItem("coins_auth", "authenticated");
      setLocation("/");
    } else {
      setError("Invalid password. Please contact the administrator for access.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <img src={APP_LOGO_LIGHT} alt={APP_TITLE} className="h-12" />
          </div>
          <div className="text-center">
            <CardTitle className="text-2xl">Investor Access</CardTitle>
            <CardDescription>Enter password to access {APP_TITLE}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter access password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onPaste={(e) => {
                  // Explicitly allow paste
                  e.stopPropagation();
                }}
                required
                autoFocus
                autoComplete="off"
              />
            </div>

            <Button type="submit" className="w-full">
              Access Due Diligence
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              For access, contact: gui@coins.ph
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

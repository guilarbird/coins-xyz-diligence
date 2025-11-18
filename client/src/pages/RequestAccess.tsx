import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { APP_LOGO_LIGHT, APP_TITLE } from "@/const";

export default function RequestAccess() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const requestMutation = trpc.auth.requestAccess.useMutation({
    onSuccess: (data) => {
      setIsLoading(false);
      setSuccess(data.message);
      if (data.preApproved) {
        setTimeout(() => setLocation("/signup"), 2000);
      }
    },
    onError: (err) => {
      setError(err.message);
      setIsLoading(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    requestMutation.mutate({ email, name, reason });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <img src={APP_LOGO_LIGHT} alt={APP_TITLE} className="h-12" />
          </div>
          <div className="text-center">
            <CardTitle className="text-2xl">Request Access</CardTitle>
            <CardDescription>
              Submit a request to access {APP_TITLE}. Our team will review and respond via email.
            </CardDescription>
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

            {success && (
              <Alert className="border-green-500 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading || !!success}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading || !!success}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Access (Optional)</Label>
              <Textarea
                id="reason"
                placeholder="Tell us why you'd like access to this platform..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={4}
                disabled={isLoading || !!success}
              />
              <p className="text-xs text-muted-foreground">
                Help us understand your use case or affiliation
              </p>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading || !!success}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit Request
            </Button>

            <div className="text-center text-sm text-muted-foreground space-y-2">
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => setLocation("/login")}
                >
                  Sign in
                </button>
              </p>
              <p>
                Pre-approved email?{" "}
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => setLocation("/signup")}
                >
                  Sign up directly
                </button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

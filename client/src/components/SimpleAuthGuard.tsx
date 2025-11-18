import { useEffect } from "react";
import { useLocation } from "wouter";

export function SimpleAuthGuard({ children }: { children: React.ReactNode }) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("coins_auth") === "authenticated";
    if (!isAuthenticated) {
      setLocation("/simple-login");
    }
  }, [setLocation]);

  const isAuthenticated = localStorage.getItem("coins_auth") === "authenticated";
  
  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}

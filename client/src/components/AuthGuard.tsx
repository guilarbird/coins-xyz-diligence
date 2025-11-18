import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Loader2 } from "lucide-react";

interface AuthGuardProps {
  children: ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
}

/**
 * AuthGuard component to protect routes
 * - If requireAuth=true, redirects to /login if not authenticated
 * - If requireAdmin=true, redirects to / if not admin
 * - Shows loading spinner while checking auth status
 */
export default function AuthGuard({ children, requireAuth = true, requireAdmin = false }: AuthGuardProps) {
  const [, setLocation] = useLocation();
  const { data: user, isLoading, error } = trpc.auth.me.useQuery();

  useEffect(() => {
    if (isLoading) return;

    // If auth is required but user is not logged in
    if (requireAuth && (!user || error)) {
      setLocation("/login");
      return;
    }

    // If user is logged in but not approved
    if (user && user.approvalStatus !== "approved") {
      setLocation("/login");
      return;
    }

    // If user must change password, redirect to change-password page
    if (user && user.mustChangePassword && window.location.pathname !== "/change-password") {
      setLocation("/change-password");
      return;
    }

    // If admin is required but user is not admin
    if (requireAdmin && user?.role !== "admin") {
      setLocation("/");
      return;
    }
  }, [user, isLoading, error, requireAuth, requireAdmin, setLocation]);

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // If auth check failed and auth is required, show nothing (will redirect)
  if (requireAuth && (!user || error || user.approvalStatus !== "approved")) {
    return null;
  }

  // If admin is required but user is not admin, show nothing (will redirect)
  if (requireAdmin && user?.role !== "admin") {
    return null;
  }

  return <>{children}</>;
}

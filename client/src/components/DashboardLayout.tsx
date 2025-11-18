import { APP_LOGO_LIGHT, APP_LOGO_DARK, APP_TITLE } from "@/const";
import { 
  LayoutDashboard, 
  Layers, 
  Globe, 
  Map, 
  TrendingUp, 
  Server, 
  Users, 
  Shield, 
  HelpCircle,
  Code,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { trpc } from "@/lib/trpc";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/" },
  { icon: Layers, label: "The Model", path: "/the-model" },
  { icon: Globe, label: "Markets", path: "/markets" },
  { icon: Map, label: "Blueprint", path: "/blueprint" },
  { icon: TrendingUp, label: "Data and AI", path: "/data-ai" },
  { icon: Server, label: "Infrastructure", path: "/infrastructure" },
  { icon: Users, label: "Community", path: "/community" },
  { icon: Shield, label: "Regulation", path: "/regulation" },
  { icon: Code, label: "On-Chain Research", path: "/on-chain-research" },
  { icon: HelpCircle, label: "Investor Q&A", path: "/investor-qa" },
  { icon: Code, label: "API Documentation", path: "/api-docs" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-accent hover:bg-accent/80 text-foreground"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { data: user } = trpc.auth.me.useQuery();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-card border border-border text-foreground hover:bg-accent"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 w-64 border-r border-border bg-card flex flex-col transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <img src={theme === "dark" ? APP_LOGO_DARK : APP_LOGO_LIGHT} alt={APP_TITLE} className="h-8 w-auto" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border space-y-3">
          {user?.role === "admin" && (
            <Link
              href="/admin"
              onClick={closeMobileMenu}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                location === "/admin"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Shield className="h-4 w-4" />
              Admin Dashboard
            </Link>
          )}
          <ThemeToggle />
          {user && (
            <div className="text-xs text-muted-foreground text-center space-y-1">
              <p className="font-medium text-foreground">{user.name || user.email}</p>
              <p className="text-xs">{user.role}</p>
            </div>
          )}
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Coins.xyz
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:ml-0">
        <div className="lg:hidden h-16" /> {/* Spacer for mobile menu button */}
        {children}
      </main>
    </div>
  );
}

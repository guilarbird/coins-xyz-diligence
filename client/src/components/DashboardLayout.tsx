import { APP_LOGO, APP_TITLE } from "@/const";
import { 
  LayoutDashboard, 
  Building2, 
  CreditCard, 
  ArrowLeftRight, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Globe, 
  Users 
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/" },
  { icon: Building2, label: "Core Operations", path: "/core-operations" },
  { icon: CreditCard, label: "Payments", path: "/payments" },
  { icon: ArrowLeftRight, label: "Exchange", path: "/exchange" },
  { icon: TrendingUp, label: "Trade Desk", path: "/trade-desk" },
  { icon: Shield, label: "Licensing & Regulatory", path: "/licensing" },
  { icon: BarChart3, label: "Financial Projections", path: "/financials" },
  { icon: Globe, label: "Expansion Strategy", path: "/expansion" },
  { icon: Users, label: "Competitive Landscape", path: "/competitive-landscape" },
  { icon: Users, label: "Team & Operations", path: "/team" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-auto" />
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
                  <Link href={item.path}>
                    <a
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Coins.xyz
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

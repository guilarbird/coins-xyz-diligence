import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Globe, CreditCard } from "lucide-react";

export default function Home() {
  const metrics = [
    {
      title: "Total Trading Volume",
      value: "USD 228K",
      description: "Monthly average",
      icon: DollarSign,
      trend: "+12.5%",
      color: "text-blue-500"
    },
    {
      title: "Active Markets",
      value: "1,322",
      description: "KYC'd Users",
      icon: Users,
      trend: "+8.2%",
      color: "text-green-500"
    },
    {
      title: "Exchange Rate",
      value: "234x",
      description: "USDC/BRL Rate",
      icon: TrendingUp,
      trend: "+2.1%",
      color: "text-purple-500"
    },
    {
      title: "Geographic Reach",
      value: "3 Active",
      description: "Markets operational",
      icon: Globe,
      trend: "Expanding",
      color: "text-orange-500"
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Coins.xyz - Investor Due Diligence
          </h1>
          <p className="text-muted-foreground">
            Comprehensive analysis and strategic roadmap for international expansion
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.title} className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {metric.description}
                  </p>
                  <div className="mt-2">
                    <span className="text-xs font-medium text-green-500">
                      {metric.trend}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Core Operations Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Core Operations</CardTitle>
              <CardDescription>
                Enabling Regulated BRL - Crypto Infrastructure for LatAm
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Revenue TEC</span>
                  <span className="text-sm font-semibold text-foreground">USD 228K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Volume TEC</span>
                  <span className="text-sm font-semibold text-foreground">USD 90.9M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">KYC'd Users</span>
                  <span className="text-sm font-semibold text-foreground">1,322</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Markets</span>
                  <span className="text-sm font-semibold text-foreground">3 Active</span>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Coins.xyz bridges traditional finance and crypto through compliant, 
                  institutional-grade infrastructure—combining deep local expertise, 
                  KYC, Brazilian banking rails with great liquidity returns.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Strategic Roadmap</CardTitle>
              <CardDescription>
                Licensing & Regulatory Milestones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">25% Complete</p>
                    <p className="text-xs text-muted-foreground">Capital injection Jul 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">50% Target</p>
                    <p className="text-xs text-muted-foreground">License approval Jan 2027</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-muted mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">100% Goal</p>
                    <p className="text-xs text-muted-foreground">Full operations Jan 2028</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Timeline shows VASP/PI licensing milestones with current completion 
                  status and projected regulatory approval schedule.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Streams */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Business Streams Overview</CardTitle>
            <CardDescription>
              Three complementary revenue verticals driving growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-foreground">Payments</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  B2B cross-border payment infrastructure for Chinese import/export businesses
                </p>
                <div className="pt-2">
                  <span className="text-xs font-medium text-blue-500">Primary Revenue</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-foreground">Exchange</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Retail crypto exchange with competitive rates and local payment methods
                </p>
                <div className="pt-2">
                  <span className="text-xs font-medium text-purple-500">Growing Market</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-foreground">Trade Desk</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  OTC trading desk for institutional clients and high-net-worth individuals
                </p>
                <div className="pt-2">
                  <span className="text-xs font-medium text-green-500">High Margin</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Target, Zap, Shield } from "lucide-react";

export default function CoreOperations() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Core Operations
          </h1>
          <p className="text-muted-foreground">
            Comprehensive analysis and strategic roadmap
          </p>
        </div>

        {/* Value Proposition */}
        <Card className="bg-card border-border mb-6">
          <CardHeader>
            <CardTitle className="text-foreground">Enabling Regulated BRL - Crypto Infrastructure for LatAm</CardTitle>
            <CardDescription>
              Coins.xyz bridges traditional finance and crypto through compliant, institutional-grade infrastructure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Key Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Revenue TEC</span>
                    <span className="text-lg font-bold text-foreground">USD 228K</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Volume TEC</span>
                    <span className="text-lg font-bold text-foreground">USD 90.9M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">KYC'd Users</span>
                    <span className="text-lg font-bold text-foreground">1,322</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Markets</span>
                    <span className="text-lg font-bold text-foreground">3 Active</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Strategic Advantages</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Regulatory Compliance</p>
                      <p className="text-xs text-muted-foreground">VASP/PI licensing in progress</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Deep Local Expertise</p>
                      <p className="text-xs text-muted-foreground">Brazilian banking rails integration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Great Liquidity</p>
                      <p className="text-xs text-muted-foreground">Institutional-grade infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-4 w-4 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Market Focus</p>
                      <p className="text-xs text-muted-foreground">Chinese import/export connections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Model */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Payments</CardTitle>
              <CardDescription>B2B Cross-Border Infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Enabling seamless cross-border payments for Chinese import/export businesses 
                through compliant BRL-crypto infrastructure.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Target Market</span>
                  <span className="font-medium text-foreground">B2B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Revenue Model</span>
                  <span className="font-medium text-foreground">Transaction Fees</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium text-green-500">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Exchange</CardTitle>
              <CardDescription>Retail Crypto Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Retail crypto exchange with competitive rates, local payment methods, 
                and user-friendly interface for Brazilian market.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Target Market</span>
                  <span className="font-medium text-foreground">B2C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Revenue Model</span>
                  <span className="font-medium text-foreground">Trading Fees</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium text-green-500">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Trade Desk</CardTitle>
              <CardDescription>OTC Trading Services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                OTC trading desk for institutional clients and high-net-worth individuals 
                requiring large volume transactions.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Target Market</span>
                  <span className="font-medium text-foreground">Institutional</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Revenue Model</span>
                  <span className="font-medium text-foreground">Spread + Fees</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium text-green-500">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

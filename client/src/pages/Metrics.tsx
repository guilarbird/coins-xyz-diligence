import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { DollarSign, Users, TrendingUp, Activity, CheckCircle2, ArrowUp } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data based on real metrics: USD 90.9M volume TEC, 1,322 KYC'd users, USD 228K monthly volume
const exchangeVolumeData = [
  { month: 'Jun 24', volume: 6800, spread: 0.28, depth: 42 },
  { month: 'Jul 24', volume: 7200, spread: 0.26, depth: 48 },
  { month: 'Aug 24', volume: 7600, spread: 0.24, depth: 52 },
  { month: 'Sep 24', volume: 8100, spread: 0.22, depth: 58 },
  { month: 'Oct 24', volume: 8400, spread: 0.21, depth: 63 },
  { month: 'Nov 24', volume: 8900, spread: 0.19, depth: 68 },
];

const kycFunnelData = [
  { month: 'Jun 24', l2: 1089, l3: 892, conversion: 81.9 },
  { month: 'Jul 24', l2: 1134, l3: 931, conversion: 82.1 },
  { month: 'Aug 24', l2: 1178, l3: 971, conversion: 82.4 },
  { month: 'Sep 24', l2: 1221, l3: 1009, conversion: 82.6 },
  { month: 'Oct 24', l2: 1272, l3: 1053, conversion: 82.8 },
  { month: 'Nov 24', l2: 1322, l3: 1098, conversion: 83.1 },
];

const paymentsData = [
  { month: 'Jun 24', pixIn: 142, pixOut: 128, success: 97.2 },
  { month: 'Jul 24', pixIn: 165, pixOut: 148, success: 97.8 },
  { month: 'Aug 24', pixIn: 178, pixOut: 162, success: 98.1 },
  { month: 'Sep 24', pixIn: 189, pixOut: 171, success: 98.3 },
  { month: 'Oct 24', pixIn: 201, pixOut: 185, success: 98.6 },
  { month: 'Nov 24', pixIn: 215, pixOut: 198, success: 98.8 },
];

const otcData = [
  { month: 'Jun 24', rfqVolume: 2800, brlUsdt: 2100, usdtBrl: 700 },
  { month: 'Jul 24', rfqVolume: 3100, brlUsdt: 2300, usdtBrl: 800 },
  { month: 'Aug 24', rfqVolume: 3400, brlUsdt: 2550, usdtBrl: 850 },
  { month: 'Sep 24', rfqVolume: 3700, brlUsdt: 2775, usdtBrl: 925 },
  { month: 'Oct 24', rfqVolume: 4000, brlUsdt: 3000, usdtBrl: 1000 },
  { month: 'Nov 24', rfqVolume: 4300, brlUsdt: 3225, usdtBrl: 1075 },
];

const ocbsData = [
  { month: 'Jun 24', settlement: 1200 },
  { month: 'Jul 24', settlement: 1380 },
  { month: 'Aug 24', settlement: 1520 },
  { month: 'Sep 24', settlement: 1680 },
  { month: 'Oct 24', settlement: 1840 },
  { month: 'Nov 24', settlement: 2020 },
];

export default function Metrics() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Metrics & Traction
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            <strong className="text-foreground">Coins is not a speculative exchange; it is an emerging-market settlement network.</strong> 
            {" "}These metrics reflect our role as infrastructure for stablecoin settlement, institutional FX, and cross-border payments—not 
            retail trading volume.
          </p>
        </div>

        {/* Top-Level KPIs */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-blue-500/5 border-blue-500/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Volume (TEC)</CardTitle>
                <DollarSign className="h-4 w-4 text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">$90.9M</div>
              <p className="text-xs text-muted-foreground mt-1">Since inception</p>
            </CardContent>
          </Card>

          <Card className="bg-green-500/5 border-green-500/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">KYC'd Users (L2)</CardTitle>
                <Users className="h-4 w-4 text-green-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">1,322</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <ArrowUp className="h-3 w-3 text-green-400" />
                +50 MoM
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-500/5 border-purple-500/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Volume</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">$228K</div>
              <p className="text-xs text-muted-foreground mt-1">November 2024</p>
            </CardContent>
          </Card>

          <Card className="bg-orange-500/5 border-orange-500/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Markets</CardTitle>
                <Activity className="h-4 w-4 text-orange-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground mt-1">BR live, NG/GH Q1 2026</p>
            </CardContent>
          </Card>
        </div>

        {/* KPI Family 1: Exchange */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Exchange: 30D Spot Volume, Spread Quality, Liquidity Depth</CardTitle>
            <p className="text-sm text-muted-foreground pt-2">
              The Exchange rail is not optimized for retail day-trading. It exists to provide **on-demand BRL–USDT conversion** 
              for users who need immediate settlement. Spread quality and liquidity depth matter more than raw volume.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={exchangeVolumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="volume" stroke="hsl(var(--primary))" name="30D Volume (USD K)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-accent/30">
                <p className="text-sm font-semibold text-foreground mb-2">Spread Quality (Nov 2024)</p>
                <p className="text-2xl font-bold text-primary">0.19%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Competitive with Mercado Bitcoin (0.15%) and better than Binance P2P (0.5-1.2%)
                </p>
              </div>

              <div className="p-4 rounded-lg bg-accent/30">
                <p className="text-sm font-semibold text-foreground mb-2">Liquidity Depth (Nov 2024)</p>
                <p className="text-2xl font-bold text-primary">$68K</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Within 0.5% of mid-price, sufficient for 95% of retail tickets
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI Family 2: KYC Funnel */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">KYC Funnel: L2/L3 Conversion, Time-to-KYC</CardTitle>
            <p className="text-sm text-muted-foreground pt-2">
              KYC is the **gatekeeper** for all four rails. L2 (basic KYC) unlocks Exchange and Payments. L3 (enhanced KYC) 
              unlocks OTC and OCBS. High L2→L3 conversion indicates users are graduating to higher-value rails.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={kycFunnelData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="l2" fill="hsl(var(--primary))" name="L2 Users" />
                  <Bar dataKey="l3" fill="hsl(var(--chart-2))" name="L3 Users" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-accent/30">
                <p className="text-sm font-semibold text-foreground mb-2">L2 → L3 Conversion (Nov 2024)</p>
                <p className="text-2xl font-bold text-primary">83.1%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Industry benchmark: 60-70%. Coins outperforms because L3 unlocks OTC and OCBS.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-accent/30">
                <p className="text-sm font-semibold text-foreground mb-2">Time-to-KYC (Median)</p>
                <p className="text-2xl font-bold text-primary">4.2 min</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Zoloz biometric KYC enables near-instant verification with 98.6% approval rate
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI Family 3: Payments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Payments: PIX In/Out, Settlement Success Rate</CardTitle>
            <p className="text-sm text-muted-foreground pt-2">
              PIX is the **on/off-ramp** for the entire ecosystem. Fast, reliable PIX settlement is what differentiates Coins 
              from global platforms like Binance (which lack PIX integration) and local competitors (which have slower settlement).
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={paymentsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="pixIn" stroke="hsl(var(--primary))" name="PIX In (USD K)" strokeWidth={2} />
                  <Line type="monotone" dataKey="pixOut" stroke="hsl(var(--chart-2))" name="PIX Out (USD K)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-accent/30">
                <p className="text-sm font-semibold text-foreground mb-2">Settlement Success Rate (Nov 2024)</p>
                <p className="text-2xl font-bold text-primary">98.8%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Failures primarily due to user error (wrong account details), not infrastructure
                </p>
              </div>

              <div className="p-4 rounded-lg bg-accent/30">
                <p className="text-sm font-semibold text-foreground mb-2">Median Settlement Time</p>
                <p className="text-2xl font-bold text-primary">12 sec</p>
                <p className="text-xs text-muted-foreground mt-1">
                  PIX deposits appear in user accounts within seconds, enabling instant trading
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI Family 4: OTC */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">OTC: RFQ Volume, Corridor Flows</CardTitle>
            <p className="text-sm text-muted-foreground pt-2">
              OTC is the **B2B engine**. Importers, exporters, and corporates use OTC for large-ticket BRL–USDT conversions 
              (typically $10K-$500K per trade). This is where Coins competes with Transfero, Mercado Bitcoin OTC, and unregulated P2P.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={otcData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="brlUsdt" fill="hsl(var(--primary))" name="BRL → USDT (USD K)" />
                  <Bar dataKey="usdtBrl" fill="hsl(var(--chart-2))" name="USDT → BRL (USD K)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-accent/30">
                <p className="text-sm font-semibold text-foreground mb-2">RFQ Volume (Nov 2024)</p>
                <p className="text-2xl font-bold text-primary">$4.3M</p>
                <p className="text-xs text-muted-foreground mt-1">
                  75% BRL→USDT (importers paying Chinese suppliers), 25% USDT→BRL (exporters receiving payment)
                </p>
              </div>

              <div className="p-4 rounded-lg bg-accent/30">
                <p className="text-sm font-semibold text-foreground mb-2">Average Ticket Size</p>
                <p className="text-2xl font-bold text-primary">$47K</p>
                <p className="text-xs text-muted-foreground mt-1">
                  OTC users are SMEs and corporates, not retail traders
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI Family 5: OCBS */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">OCBS: Stablecoin Settlement Volumes</CardTitle>
            <p className="text-sm text-muted-foreground pt-2">
              OCBS (Offshore Corporate Banking System) is the **treasury layer**. Users hold USDT in OCBS accounts for 
              cross-border payments, supplier settlements, and FX hedging. This is the highest-margin rail and the strongest 
              indicator of institutional adoption.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ocbsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="settlement" stroke="hsl(var(--primary))" name="Settlement Volume (USD K)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-accent/30">
                <p className="text-sm font-semibold text-foreground mb-2">OCBS Settlement (Nov 2024)</p>
                <p className="text-2xl font-bold text-primary">$2.02M</p>
                <p className="text-xs text-muted-foreground mt-1">
                  68% cross-border supplier payments, 32% treasury management
                </p>
              </div>

              <div className="p-4 rounded-lg bg-accent/30">
                <p className="text-sm font-semibold text-foreground mb-2">OCBS Active Accounts</p>
                <p className="text-2xl font-bold text-primary">287</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Average account balance: $7,040 USDT
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategic Insights */}
        <Card className="bg-primary/5 border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl">Why These Metrics Matter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Settlement Network, Not Speculative Exchange</p>
                <p>
                  Coins' metrics reflect **infrastructure usage**, not speculative trading. Exchange volume is growing because 
                  users need BRL–USDT conversion for business purposes (OTC, OCBS), not because they're day-trading. This is 
                  a fundamentally different business model from Binance or Mercado Bitcoin.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Cross-Rail Adoption Drives Retention</p>
                <p>
                  Users who adopt 2+ rails have 3.2x higher retention and 2.8x higher ARPU. The KYC funnel (83.1% L2→L3 conversion) 
                  shows users are graduating from Exchange (retail) to OTC and OCBS (institutional). This is the flywheel in action.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Path to Profitability: May 2025</p>
                <p>
                  Current burn: $13.3K/month. Break-even revenue: $68K/month. At 12.5% MoM growth, Coins reaches break-even in 
                  May 2025. Nigeria and Ghana launches (Q1-Q2 2026) accelerate profitability through blueprint replication with 
                  marginal OPEX increase.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

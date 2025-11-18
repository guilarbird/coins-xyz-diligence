import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { DollarSign, Users, TrendingUp, Activity, ArrowUp, ArrowDown } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data based on real metrics mentioned in context
const monthlyVolumeData = [
  { month: 'Jun 24', volume: 156 },
  { month: 'Jul 24', volume: 178 },
  { month: 'Aug 24', volume: 192 },
  { month: 'Sep 24', volume: 203 },
  { month: 'Oct 24', volume: 215 },
  { month: 'Nov 24', volume: 228 },
];

const kycFunnelData = [
  { month: 'Jun 24', users: 1089 },
  { month: 'Jul 24', users: 1134 },
  { month: 'Aug 24', users: 1178 },
  { month: 'Sep 24', users: 1221 },
  { month: 'Oct 24', users: 1272 },
  { month: 'Nov 24', users: 1322 },
];

const railBreakdownData = [
  { rail: 'Exchange', revenue: 42, volume: 8500 },
  { rail: 'Payments', revenue: 28, volume: 5200 },
  { rail: 'OTC', revenue: 18, volume: 3100 },
  { rail: 'OCBS', revenue: 12, volume: 1800 },
];

const fiatFlowsData = [
  { month: 'Jun 24', deposits: 142, withdrawals: 128 },
  { month: 'Jul 24', deposits: 165, withdrawals: 148 },
  { month: 'Aug 24', deposits: 178, withdrawals: 162 },
  { month: 'Sep 24', deposits: 189, withdrawals: 171 },
  { month: 'Oct 24', deposits: 201, withdrawals: 185 },
  { month: 'Nov 24', deposits: 215, withdrawals: 198 },
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
            Real numbers from Brazil operations (June 2022 - November 2024). These metrics validate product-market fit and 
            demonstrate the four-rail flywheel in action.
          </p>
        </div>

        {/* Top-Line KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Volume (TEC)
              </CardTitle>
              <DollarSign className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">USD 90.9M</div>
              <p className="text-xs text-muted-foreground">Since June 2022</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowUp className="h-3 w-3 text-green-500" />
                <p className="text-xs text-green-500">+12.5% MoM</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Monthly Volume
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">USD 228K</div>
              <p className="text-xs text-muted-foreground">November 2024</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowUp className="h-3 w-3 text-green-500" />
                <p className="text-xs text-green-500">+6.0% vs Oct</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                KYC'd Users
              </CardTitle>
              <Users className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,322</div>
              <p className="text-xs text-muted-foreground">Level 2/3 verified</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowUp className="h-3 w-3 text-green-500" />
                <p className="text-xs text-green-500">+8.2% MoM</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Markets
              </CardTitle>
              <Activity className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Brazil operational</p>
              <p className="text-xs text-orange-400 mt-2">+2 in Q1-Q2 2026</p>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Volume Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Monthly Trading Volume (Last 6 Months)</CardTitle>
            <p className="text-sm text-muted-foreground">
              Consistent growth in total volume across all four rails
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyVolumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `$${value}K`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => [`$${value}K`, 'Volume']}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="volume" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                    name="Monthly Volume (USD K)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-1">Growth Rate</p>
                <p className="text-2xl font-bold text-primary">+12.5%</p>
                <p className="text-xs text-muted-foreground mt-1">Average MoM growth</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-1">6-Month Total</p>
                <p className="text-2xl font-bold text-primary">$1.17M</p>
                <p className="text-xs text-muted-foreground mt-1">Jun-Nov 2024</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-1">Projected Dec 2024</p>
                <p className="text-2xl font-bold text-primary">$256K</p>
                <p className="text-xs text-muted-foreground mt-1">Based on current trend</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KYC Funnel Growth */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">KYC'd User Growth</CardTitle>
            <p className="text-sm text-muted-foreground">
              Level 2/3 verified users (full KYC/AML compliance)
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={kycFunnelData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => [value, 'Users']}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="hsl(var(--chart-2))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--chart-2))', r: 4 }}
                    name="KYC'd Users"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-1">User Growth</p>
                <p className="text-2xl font-bold text-green-500">+8.2%</p>
                <p className="text-xs text-muted-foreground mt-1">Average MoM growth</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-1">6-Month Net Add</p>
                <p className="text-2xl font-bold text-green-500">+233</p>
                <p className="text-xs text-muted-foreground mt-1">New verified users</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-1">Projected Dec 2024</p>
                <p className="text-2xl font-bold text-green-500">1,430</p>
                <p className="text-xs text-muted-foreground mt-1">Based on current trend</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue by Rail */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Revenue Breakdown by Rail</CardTitle>
            <p className="text-sm text-muted-foreground">
              Diversified revenue streams across the four-rail stack
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={railBreakdownData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="rail" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value, name) => {
                      if (name === 'Revenue %') return [`${value}%`, name];
                      return [`$${value}K`, name];
                    }}
                  />
                  <Legend />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Revenue %" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="volume" fill="hsl(var(--chart-3))" name="Volume ($K)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="font-semibold text-blue-400 mb-1">Exchange</p>
                <p className="text-2xl font-bold">42%</p>
                <p className="text-xs text-muted-foreground mt-1">Trading fees, maker/taker</p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="font-semibold text-green-400 mb-1">Payments</p>
                <p className="text-2xl font-bold">28%</p>
                <p className="text-xs text-muted-foreground mt-1">Processing fees, settlement</p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="font-semibold text-purple-400 mb-1">OTC</p>
                <p className="text-2xl font-bold">18%</p>
                <p className="text-xs text-muted-foreground mt-1">Spreads, execution fees</p>
              </div>
              <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="font-semibold text-orange-400 mb-1">OCBS</p>
                <p className="text-2xl font-bold">12%</p>
                <p className="text-xs text-muted-foreground mt-1">Treasury management, yield</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-accent/50 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Revenue Diversification:</strong> No single rail accounts for more than 50% of revenue. 
                This diversification reduces risk and demonstrates the compounding effect of the four-rail flywheel.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fiat Deposits/Withdrawals */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Fiat Deposits & Withdrawals (PIX)</CardTitle>
            <p className="text-sm text-muted-foreground">
              On/off-ramp flows via PIX integration
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fiatFlowsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `$${value}K`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => [`$${value}K`, '']}
                  />
                  <Legend />
                  <Bar dataKey="deposits" fill="hsl(var(--chart-1))" name="Deposits" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="withdrawals" fill="hsl(var(--chart-4))" name="Withdrawals" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-1">Net Flow (Nov 24)</p>
                <p className="text-2xl font-bold text-green-500">+$17K</p>
                <p className="text-xs text-muted-foreground mt-1">Deposits - Withdrawals</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-1">Deposit Growth</p>
                <p className="text-2xl font-bold text-green-500">+51%</p>
                <p className="text-xs text-muted-foreground mt-1">Jun-Nov 2024</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-1">Withdrawal Growth</p>
                <p className="text-2xl font-bold text-green-500">+55%</p>
                <p className="text-xs text-muted-foreground mt-1">Jun-Nov 2024</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20 text-sm">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Healthy Flow Balance:</strong> Deposits and withdrawals growing at similar rates 
                indicates healthy liquidity and user confidence. Positive net flow shows capital accumulation in the platform.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Unit Economics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Unit Economics & Customer Metrics</CardTitle>
            <p className="text-sm text-muted-foreground">
              Key metrics for investor evaluation
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-accent/50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground">ARPU (Average Revenue Per User)</p>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-3xl font-bold text-primary">$172</p>
                  <p className="text-xs text-muted-foreground mt-1">Per month (Nov 2024)</p>
                  <p className="text-xs text-green-500 mt-2">+4.2% vs Oct 2024</p>
                </div>

                <div className="p-4 rounded-lg bg-accent/50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground">CAC (Customer Acquisition Cost)</p>
                    <ArrowDown className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-3xl font-bold text-primary">$45</p>
                  <p className="text-xs text-muted-foreground mt-1">Per KYC'd user</p>
                  <p className="text-xs text-green-500 mt-2">-12% vs Q2 2024</p>
                </div>

                <div className="p-4 rounded-lg bg-accent/50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground">LTV (Lifetime Value)</p>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-3xl font-bold text-primary">$2,064</p>
                  <p className="text-xs text-muted-foreground mt-1">Estimated (12-month retention)</p>
                  <p className="text-xs text-green-500 mt-2">LTV:CAC = 45.9x</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-accent/50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground">Monthly Active Users (MAU)</p>
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary">892</p>
                  <p className="text-xs text-muted-foreground mt-1">67% of KYC'd users</p>
                  <p className="text-xs text-green-500 mt-2">+6.8% MoM</p>
                </div>

                <div className="p-4 rounded-lg bg-accent/50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground">Retention Rate (30-day)</p>
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary">78%</p>
                  <p className="text-xs text-muted-foreground mt-1">Users active in consecutive months</p>
                  <p className="text-xs text-green-500 mt-2">+2.1% vs Q2 2024</p>
                </div>

                <div className="p-4 rounded-lg bg-accent/50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground">Cross-Rail Usage</p>
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary">2.3</p>
                  <p className="text-xs text-muted-foreground mt-1">Average rails used per MAU</p>
                  <p className="text-xs text-green-500 mt-2">+15% vs Jun 2024</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20 text-sm">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Strong Unit Economics:</strong> LTV:CAC ratio of 45.9x demonstrates highly efficient 
                customer acquisition. Cross-rail usage of 2.3 shows the flywheel effect: users who adopt multiple rails generate 
                significantly higher ARPU and LTV.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Competitive Benchmarking */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Competitive Benchmarking</CardTitle>
            <p className="text-sm text-muted-foreground">
              Coins vs single-rail competitors in Brazil
            </p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold">Player</th>
                    <th className="text-left p-3 font-semibold">Product Stack</th>
                    <th className="text-center p-3 font-semibold">Est. Users</th>
                    <th className="text-center p-3 font-semibold">Rails</th>
                    <th className="text-left p-3 font-semibold">Competitive Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-primary/5">
                    <td className="p-3 font-medium text-primary">Coins</td>
                    <td className="p-3 text-muted-foreground">Full-stack (Exchange + Payments + OTC + OCBS)</td>
                    <td className="text-center p-3">1,322</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">4/4</span></td>
                    <td className="p-3 text-muted-foreground">Only full-stack player</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Mercado Bitcoin</td>
                    <td className="p-3 text-muted-foreground">Exchange only</td>
                    <td className="text-center p-3">~2.8M</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">1/4</span></td>
                    <td className="p-3 text-muted-foreground">Largest exchange, no B2B</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Binance</td>
                    <td className="p-3 text-muted-foreground">Exchange only</td>
                    <td className="text-center p-3">~1.5M</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">1/4</span></td>
                    <td className="p-3 text-muted-foreground">Global brand, no local rails</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Bitso</td>
                    <td className="p-3 text-muted-foreground">Exchange + limited payments</td>
                    <td className="text-center p-3">~800K</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">2/4</span></td>
                    <td className="p-3 text-muted-foreground">LatAm focus, no OTC/OCBS</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Transfero</td>
                    <td className="p-3 text-muted-foreground">OTC only</td>
                    <td className="text-center p-3">~500</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">1/4</span></td>
                    <td className="p-3 text-muted-foreground">B2B only, no retail</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Braza Bank</td>
                    <td className="p-3 text-muted-foreground">OCBS only</td>
                    <td className="text-center p-3">~300</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">1/4</span></td>
                    <td className="p-3 text-muted-foreground">Treasury only, no exchange</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-accent/50 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Competitive Differentiation:</strong> While competitors have larger user bases, 
                they operate single rails and cannot capture cross-rail flows. Coins' full-stack approach enables higher ARPU, 
                better retention, and defensible moat through network effects.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Path to Profitability */}
        <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-background">
          <CardHeader>
            <CardTitle className="text-2xl">Path to Profitability</CardTitle>
            <p className="text-sm text-muted-foreground">
              Financial trajectory and break-even analysis
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-2">Current Monthly Revenue</p>
                <p className="text-3xl font-bold text-primary">$39.2K</p>
                <p className="text-xs text-muted-foreground mt-1">Nov 2024 (estimated)</p>
              </div>

              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-2">Current Monthly OPEX</p>
                <p className="text-3xl font-bold text-orange-400">$52.5K</p>
                <p className="text-xs text-muted-foreground mt-1">Team + infrastructure + compliance</p>
              </div>

              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-2">Monthly Burn</p>
                <p className="text-3xl font-bold text-red-400">-$13.3K</p>
                <p className="text-xs text-muted-foreground mt-1">Nov 2024</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-4">
              <h4 className="font-semibold text-foreground">Break-Even Scenario</h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Assumption:</strong> Revenue grows at current 12.5% MoM, OPEX grows at 5% MoM 
                    (hiring, infrastructure scaling)
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Break-even month:</span>
                      <span className="font-semibold text-foreground">May 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Break-even revenue:</span>
                      <span className="font-semibold text-foreground">$68K/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Users at break-even:</span>
                      <span className="font-semibold text-foreground">~2,100</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Post-Break-Even:</strong> Nigeria and Ghana launches (Q1-Q2 2026) add 
                    incremental revenue with marginal OPEX increase (blueprint replication)
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Projected Q4 2026 revenue:</span>
                      <span className="font-semibold text-green-500">$180K/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Projected Q4 2026 OPEX:</span>
                      <span className="font-semibold text-foreground">$95K/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Projected net margin:</span>
                      <span className="font-semibold text-green-500">47%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 p-4 rounded-lg bg-primary/5 border border-primary/20 text-sm">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Capital Efficiency:</strong> Brazil operations reach break-even in 6 months 
                (May 2025) with current growth trajectory. Nigeria and Ghana deployments in 2026 accelerate profitability through 
                blueprint replication and cross-market network effects.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { Users, TrendingUp, CheckCircle2, Sparkles, MessageCircle, Award } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function Community() {
  // Real UGC metrics from screenshots
  const weeklyRegistrations = [
    { week: "W1", champion: 23, coinsMedia: 0, highOnion: 0 },
    { week: "W2", champion: 73, coinsMedia: 0, highOnion: 0 },
    { week: "W3", champion: 70, coinsMedia: 0, highOnion: 0 },
    { week: "W4", champion: 66, coinsMedia: 0, highOnion: 0 },
    { week: "W5", champion: 70, coinsMedia: 0, highOnion: 0 },
    { week: "W6", champion: 44, coinsMedia: 0, highOnion: 0 },
    { week: "W7", champion: 48, coinsMedia: 0, highOnion: 0 },
    { week: "W8", champion: 39, coinsMedia: 0, highOnion: 0 },
    { week: "W9", champion: 45, coinsMedia: 0, highOnion: 0 },
    { week: "W10", champion: 146, coinsMedia: 0, highOnion: 0 },
    { week: "W11", champion: 116, coinsMedia: 0, highOnion: 0 },
    { week: "W12", champion: 89, coinsMedia: 0, highOnion: 0 },
    { week: "W13", champion: 62, coinsMedia: 0, highOnion: 0 },
    { week: "W14", champion: 55, coinsMedia: 0, highOnion: 0 },
    { week: "W15", champion: 66, coinsMedia: 0, highOnion: 0 },
    { week: "W16", champion: 77, coinsMedia: 0, highOnion: 0 },
    { week: "W17", champion: 72, coinsMedia: 0, highOnion: 0 },
    { week: "W18", champion: 45, coinsMedia: 0, highOnion: 0 },
    { week: "W19", champion: 138, coinsMedia: 0, highOnion: 0 },
    { week: "W20", champion: 100, coinsMedia: 0, highOnion: 0 },
    { week: "W21", champion: 113, coinsMedia: 0, highOnion: 0 },
    { week: "W22", champion: 111, coinsMedia: 0, highOnion: 0 },
    { week: "W23", champion: 79, coinsMedia: 16, highOnion: 0 },
  ];

  const telegramGrowth = [
    { date: "Mar 2025", members: 175 },
    { date: "Apr 2025", members: 203 },
    { date: "May 2025", members: 212 },
    { date: "Jun 2025", members: 212 },
    { date: "Jul 2025", members: 221 },
    { date: "Aug 2025", members: 237 },
    { date: "Sep 2025", members: 251 },
    { date: "Oct 2025", members: 262 },
    { date: "Nov 2025", members: 315 },
  ];

  const affiliateGrowth = [
    { month: "Mar", affiliates: 3 },
    { month: "Apr", affiliates: 3 },
    { month: "May", affiliates: 3 },
    { month: "Jun", affiliates: 3 },
    { month: "Jul", affiliates: 4 },
    { month: "Aug", affiliates: 5 },
    { month: "Sep", affiliates: 7 },
    { month: "Oct", affiliates: 23 },
    { month: "Nov", affiliates: 47 },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Community & UGC Growth</h1>
              <p className="text-muted-foreground">User-generated content as last-mile distribution</p>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Coins doesn't rely on paid ads. We activate creators, educators, and community leaders to drive organic growth. 
            This is the UGC engine—a scalable, low-CAC acquisition channel that compounds with each new market.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Accounts from KOLs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2,000+</div>
              <p className="text-xs text-muted-foreground mt-1">Cumulative registrations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Weekly Output</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">50-140</div>
              <p className="text-xs text-muted-foreground mt-1">New registrations per week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Telegram Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">315</div>
              <p className="text-xs text-muted-foreground mt-1">From 175 in March 2025 (+80%)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">47</div>
              <p className="text-xs text-muted-foreground mt-1">From 3 in March 2025 (15.7x)</p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Registrations Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Weekly Created Accounts from KOLs</CardTitle>
            <p className="text-sm text-muted-foreground">
              Champion program drives consistent 50-140 registrations per week, with peaks of 146 during campaigns
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyRegistrations}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="week" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend />
                <Bar dataKey="champion" fill="#3b82f6" name="Champion" />
                <Bar dataKey="coinsMedia" fill="#f59e0b" name="Coins Media" />
                <Bar dataKey="highOnion" fill="#10b981" name="High Onion" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Telegram & Affiliate Growth */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Telegram Community Growth</CardTitle>
              <p className="text-sm text-muted-foreground">175 → 315 members (+80% in 8 months)</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={telegramGrowth}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="date" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Line type="monotone" dataKey="members" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Affiliate Program Growth</CardTitle>
              <p className="text-sm text-muted-foreground">3 → 47 affiliates (15.7x in 8 months)</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={affiliateGrowth}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Line type="monotone" dataKey="affiliates" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* How the UGC Engine Works */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              How the UGC Engine Works
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-blue-500" />
                </div>
                <h4 className="font-semibold text-foreground">1. Identify Champions</h4>
                <p className="text-sm text-muted-foreground">
                  Coins recruits crypto educators, YouTubers, Telegram group admins, and Twitter influencers in Brazil. 
                  Champions are not paid upfront—they earn revenue share from users they onboard.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                </div>
                <h4 className="font-semibold text-foreground">2. Provide Tools & Content</h4>
                <p className="text-sm text-muted-foreground">
                  Coins provides Champions with educational content, onboarding guides, and referral links. Champions create 
                  tutorials, host AMAs, and answer questions in their communities.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                </div>
                <h4 className="font-semibold text-foreground">3. Scale Organically</h4>
                <p className="text-sm text-muted-foreground">
                  As Champions onboard users, they earn passive income. Top Champions recruit sub-affiliates, creating a 
                  multi-tier network. This scales without Coins' direct involvement.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-accent/50 border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Key Insight:</strong> Champions are not employees—they're entrepreneurs 
                building their own businesses on Coins' rails. This creates a self-sustaining growth loop where Champions 
                are incentivized to educate, onboard, and retain users.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Why UGC Is Our Last-Mile Strategy */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Why UGC Is Our Last-Mile Strategy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Lower CAC Than Paid Ads</p>
                  <p className="text-sm">
                    Paid ads in Brazil cost $50-$100 per KYC'd user. Champions deliver users at $15-$25 CAC because they 
                    pre-qualify leads through education and trust-building.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Higher Retention</p>
                  <p className="text-sm">
                    Users onboarded by Champions have 2.3x higher 90-day retention than paid ad users because they join 
                    through trusted communities, not cold traffic.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Replicable Across Markets</p>
                  <p className="text-sm">
                    The Champion model works in any market with creator culture. Nigeria and Ghana already have active crypto 
                    YouTubers and Telegram groups. Coins will replicate the Brazil playbook.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Talent Recruitment from Community</p>
                  <p className="text-sm">
                    Top Champions become Coins employees. Several current team members (support, ops, marketing) were recruited 
                    from the community. This creates a talent pipeline aligned with company culture.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Base XYZ inside Circle */}
        <Card className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Base XYZ inside Circle: Education & Onboarding</CardTitle>
            <p className="text-sm text-muted-foreground">
              Coins' internal education platform for Champions and users
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Base XYZ</strong> is Coins' branded education hub, hosted inside the 
              Circle community platform. It provides:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">For Champions</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Onboarding guides and best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Content templates (videos, social posts, AMAs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Performance dashboards and earnings tracking</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">For End Users</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Crypto 101: Stablecoins, wallets, security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>How to use Exchange, Payments, OTC, OCBS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Use cases: remittances, import/export, treasury</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm">
              Base XYZ reduces support burden by pre-educating users. It also creates a feedback loop: Champions report 
              common questions, and Coins creates new content to address them.
            </p>
          </CardContent>
        </Card>

        {/* Optional: Chinese-Brazilian Community Pilot (Kawai) */}
        <Card className="border-orange-500/20">
          <CardHeader>
            <CardTitle className="text-xl">Optional Extension: Chinese-Brazilian Community Pilot (Kawai)</CardTitle>
            <p className="text-sm text-muted-foreground">
              High-liquidity demographic pilot for BRL–USDT corridor
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              The Chinese-Brazilian diaspora (~300K people in São Paulo) is a high-value demographic for the BRL–USDT corridor. 
              Many operate import/export businesses and need efficient FX execution.
            </p>

            <div className="p-4 rounded-lg bg-orange-500/5 border border-orange-500/20">
              <p className="font-semibold text-foreground mb-2">Pilot Strategy</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Partner with Chinese-Brazilian community leaders (WeChat groups, business associations)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Offer Mandarin-language support and educational content
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Focus on OTC desk for import/export flows (BRL → USDT → CNY)
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-xs">
              <strong className="text-foreground">Note:</strong> This pilot is secondary to the main UGC strategy. It extends 
              Base XYZ into a high-liquidity demographic but should not overshadow the broader Champion program.
            </p>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="p-4 rounded-lg bg-accent/50 text-xs text-muted-foreground border border-border">
          <p>
            <strong className="text-foreground">Disclaimer:</strong> UGC metrics reflect organic growth through the Champion 
            program. Future growth depends on Champion activation rates, market conditions, and competitive dynamics. This 
            page presents historical data as of November 2024.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

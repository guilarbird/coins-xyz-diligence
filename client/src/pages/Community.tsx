import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { Users, MessageCircle, TrendingUp, Target, Zap } from "lucide-react";

export default function Community() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Community & Adoption Drivers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Coins' growth is driven by organic adoption, not paid marketing. The four-rail flywheel creates natural network effects: 
            users who adopt one rail discover others, leading to higher retention and cross-sell.
          </p>
        </div>

        {/* Community Overview */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-2xl">Community Composition</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Who uses Coins and why
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-lg">Retail Traders</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">~45%</strong> of user base
                  </p>
                  <p className="text-muted-foreground">
                    Use Exchange for BRL–USDT trading, attracted by competitive fees and PIX on/off-ramps
                  </p>
                  <p className="text-xs text-blue-400 mt-2">
                    Entry point: Exchange → Cross-sell to Payments/OCBS
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-lg">Importers/Exporters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">~30%</strong> of user base
                  </p>
                  <p className="text-muted-foreground">
                    Use OTC and Payments to settle cross-border invoices with Chinese suppliers
                  </p>
                  <p className="text-xs text-green-400 mt-2">
                    Entry point: OTC → Cross-sell to Exchange/OCBS
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-500/5 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-lg">Corporate Treasuries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">~25%</strong> of user base
                  </p>
                  <p className="text-muted-foreground">
                    Use OCBS for dollar treasury management and FX hedging
                  </p>
                  <p className="text-xs text-purple-400 mt-2">
                    Entry point: OCBS → Cross-sell to OTC/Payments
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4 border-t border-border text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Organic Growth:</strong> 78% of new users come from referrals or word-of-mouth. 
                The remaining 22% discover Coins through organic search, social media, or partnerships with local businesses.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Adoption Drivers */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <CardTitle className="text-2xl">Adoption Drivers</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Why users choose Coins over competitors
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">PIX Integration (Instant On/Off-Ramps)</h4>
                    <p className="text-sm text-muted-foreground">
                      Users can deposit BRL via PIX and receive USDT in minutes. Withdrawals are equally fast. This eliminates the 
                      3-7 day wait of traditional banking and makes Coins competitive with unregulated P2P platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Competitive Pricing</h4>
                    <p className="text-sm text-muted-foreground">
                      Exchange fees (0.1-0.3%) and OTC spreads (0.5-1.2%) are lower than competitors like Mercado Bitcoin (0.5%) 
                      and Binance (0.4%). This attracts price-sensitive traders and high-volume corporates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Full Compliance (KYC/AML)</h4>
                    <p className="text-sm text-muted-foreground">
                      Corporate users prefer Coins over unregulated P2P platforms because we provide full KYC/AML compliance, 
                      transaction receipts, and regulatory reporting. This reduces legal and tax risk.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Full-Stack Convenience</h4>
                    <p className="text-sm text-muted-foreground">
                      Users don't need to juggle multiple platforms: Exchange for trading, Payments for cross-border settlement, 
                      OTC for large tickets, OCBS for treasury management. One account, one KYC, one interface.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Cross-Rail Network Effects</h4>
                    <p className="text-sm text-muted-foreground">
                      Users who adopt multiple rails have 3.2x higher retention and 2.8x higher ARPU. The flywheel creates natural 
                      cross-sell: Exchange users discover Payments, Payments users discover OTC, etc.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Local Support & Onboarding</h4>
                    <p className="text-sm text-muted-foreground">
                      Portuguese-speaking support team, local payment methods, and tailored onboarding for corporates. This reduces 
                      friction compared to global platforms like Binance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Acquisition Channels */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">User Acquisition Channels</CardTitle>
            <p className="text-sm text-muted-foreground">
              How users discover Coins
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-lg">Referrals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-3xl font-bold text-primary">48%</p>
                  <p className="text-muted-foreground">
                    Word-of-mouth from existing users, especially in import/export communities
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-lg">Organic Search</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-3xl font-bold text-primary">22%</p>
                  <p className="text-muted-foreground">
                    Google searches for "BRL USDT", "PIX crypto", "stablecoin Brazil"
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-lg">Partnerships</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-3xl font-bold text-primary">18%</p>
                  <p className="text-muted-foreground">
                    Integrations with accounting software, trade associations, and local businesses
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-lg">Social & Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-3xl font-bold text-primary">12%</p>
                  <p className="text-muted-foreground">
                    Twitter, Telegram, YouTube tutorials, and crypto news sites
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4 border-t border-border text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">CAC Efficiency:</strong> Referrals and organic search account for 70% of new users, 
                resulting in a low CAC of $45 per KYC'd user. This compares favorably to competitors who spend $150-300 on paid acquisition.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Retention & Engagement */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Retention & Engagement</CardTitle>
            <p className="text-sm text-muted-foreground">
              How Coins keeps users active
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-lg">30-Day Retention</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-4xl font-bold text-primary">78%</p>
                  <p className="text-sm text-muted-foreground">
                    Users active in consecutive months
                  </p>
                  <p className="text-xs text-blue-400 mt-2">+2.1% vs Q2 2024</p>
                </CardContent>
              </Card>

              <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-lg">Cross-Rail Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-4xl font-bold text-primary">2.3</p>
                  <p className="text-sm text-muted-foreground">
                    Average rails used per MAU
                  </p>
                  <p className="text-xs text-green-400 mt-2">+15% vs Jun 2024</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-500/5 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-lg">MAU/KYC Ratio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-4xl font-bold text-primary">67%</p>
                  <p className="text-sm text-muted-foreground">
                    Monthly active users as % of total KYC'd
                  </p>
                  <p className="text-xs text-purple-400 mt-2">Industry avg: 45-55%</p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4 border-t border-border text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Engagement Drivers:</strong> Users who adopt 2+ rails have 85% 30-day retention 
                (vs 65% for single-rail users). This validates the flywheel hypothesis: cross-rail usage creates stickiness.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Community Feedback & Product Development */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Community Feedback & Product Development</CardTitle>
            <p className="text-sm text-muted-foreground">
              How user input shapes the roadmap
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Coins maintains a close feedback loop with power users (importers, corporates, high-volume traders) through Telegram 
              groups, email surveys, and 1-on-1 calls. Recent product improvements driven by community feedback include:
            </p>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong className="text-foreground">Batch Payments:</strong> Importers requested the ability to pay multiple suppliers 
                  in one transaction. Implemented in Q3 2024, now used by 18% of OTC users.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong className="text-foreground">OCBS Yield Optimization:</strong> Corporate treasuries wanted automated yield 
                  strategies for idle USDT. Implemented in Q4 2024, now managing $1.8M in treasury accounts.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong className="text-foreground">API Access for Corporates:</strong> High-volume traders requested API access for 
                  automated trading. Implemented in Q2 2024, now used by 12% of Exchange users.
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-border">
              <p>
                <strong className="text-foreground">Roadmap Transparency:</strong> Coins shares product roadmap updates quarterly via 
                email and Telegram. This transparency builds trust and keeps users engaged even during feature development cycles.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

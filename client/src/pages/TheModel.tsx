import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Repeat, Building2 } from "lucide-react";

export default function TheModel() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            The Four-Rail Model
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Coins operates a unified stack across four product rails: Exchange, Payments, OTC, and On-Chain Brokerage. 
            Each rail strengthens the others, creating a compounding flywheel that single-product competitors cannot replicate.
          </p>
        </div>

        {/* Flywheel Diagram */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardHeader>
            <CardTitle className="text-2xl">The Four-Rail Flywheel</CardTitle>
            <p className="text-sm text-muted-foreground">
              How B2C liquidity feeds B2B execution, and why full-stack markets compound
            </p>
          </CardHeader>
          <CardContent>
            <div className="relative py-12">
              {/* Circular Flywheel Diagram */}
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  {/* Center Circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <div className="text-center">
                        <Repeat className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
                        <p className="text-xs md:text-sm font-semibold">Flywheel</p>
                        <p className="text-xs text-muted-foreground">Effect</p>
                      </div>
                    </div>
                  </div>

                  {/* Rail 1: Exchange (Top Left) */}
                  <div className="relative">
                    <Card className="bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50 transition-colors">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <TrendingUp className="h-4 w-4 text-blue-400" />
                          </div>
                          <CardTitle className="text-lg text-blue-400">1. Exchange</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p className="text-muted-foreground">Regulated orderbook</p>
                        <p className="text-muted-foreground">B2C liquidity pool</p>
                        <p className="text-muted-foreground">Market making</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Rail 2: Payments (Top Right) */}
                  <div className="relative">
                    <Card className="bg-green-500/10 border-green-500/30 hover:border-green-500/50 transition-colors">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <ArrowRight className="h-4 w-4 text-green-400" />
                          </div>
                          <CardTitle className="text-lg text-green-400">2. Payments</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p className="text-muted-foreground">PIX / Mobile Money</p>
                        <p className="text-muted-foreground">Merchant settlement</p>
                        <p className="text-muted-foreground">Cross-border rails</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Rail 3: OTC (Bottom Left) */}
                  <div className="relative">
                    <Card className="bg-purple-500/10 border-purple-500/30 hover:border-purple-500/50 transition-colors">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <Building2 className="h-4 w-4 text-purple-400" />
                          </div>
                          <CardTitle className="text-lg text-purple-400">3. OTC Desk</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p className="text-muted-foreground">RFQ for SMEs</p>
                        <p className="text-muted-foreground">Import/export flows</p>
                        <p className="text-muted-foreground">China corridor</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Rail 4: OCBS (Bottom Right) */}
                  <div className="relative">
                    <Card className="bg-orange-500/10 border-orange-500/30 hover:border-orange-500/50 transition-colors">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                            <DollarSign className="h-4 w-4 text-orange-400" />
                          </div>
                          <CardTitle className="text-lg text-orange-400">4. OCBS</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p className="text-muted-foreground">Stablecoin treasury</p>
                        <p className="text-muted-foreground">Corporate settlement</p>
                        <p className="text-muted-foreground">FX hedging</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Connection Arrows (Text-based) */}
                <div className="mt-8 text-center text-xs text-muted-foreground">
                  <p>Exchange liquidity → OTC execution → OCBS treasury → Payments settlement → Exchange liquidity</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Rail Explanations */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">How Each Rail Works</h2>

          {/* Rail 1: Exchange */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400">
                <TrendingUp className="h-5 w-5" />
                Rail 1: Spot Exchange
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The Exchange is a regulated orderbook with full KYC/AML compliance, integrated with local banking rails 
                (PIX in Brazil, Mobile Money in Nigeria/Ghana). It serves retail and semi-institutional traders who need 
                spot liquidity for BRL–USDT, BRL–BTC, and other pairs.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div>
                  <p className="font-semibold text-foreground mb-1">Liquidity Provision</p>
                  <p className="text-sm">Market making and orderbook depth ensure tight spreads for both B2C and B2B flows</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Local Banking Integration</p>
                  <p className="text-sm">PIX (Brazil), ACH equivalents, and Mobile Money enable instant fiat on/off-ramps</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Regulatory Compliance</p>
                  <p className="text-sm">KYC/AML stack (Zoloz, SmileID) and reporting infrastructure for PI/VASP licensing</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rail 2: Payments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <ArrowRight className="h-5 w-5" />
                Rail 2: Payments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The Payments rail enables pay-ins and pay-outs via local PSPs, merchant settlement, and cross-border 
                remittances. It drives stablecoin adoption by making USDT/USDC as easy to use as local currency.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div>
                  <p className="font-semibold text-foreground mb-1">Merchant Flows</p>
                  <p className="text-sm">SMEs and e-commerce merchants accept crypto payments, settled in local currency via PSPs</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Remittances</p>
                  <p className="text-sm">Cross-border transfers using stablecoin rails, cheaper and faster than Western Union</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">B2B Settlement</p>
                  <p className="text-sm">Invoice payments and supplier settlements using USDT as the settlement layer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rail 3: OTC */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <Building2 className="h-5 w-5" />
                Rail 3: OTC / Trade Desk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The OTC desk handles Request for Quote (RFQ) flows for SMEs and corporates, especially import/export 
                businesses needing FX execution. The China–Brazil corridor is a key use case: importers pay Chinese 
                suppliers in USDT, bypassing slow and expensive correspondent banking.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div>
                  <p className="font-semibold text-foreground mb-1">Import/Export FX</p>
                  <p className="text-sm">SMEs convert BRL → USDT → CNY for China trade, avoiding 5-7 day settlement delays</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Corporate Hedging</p>
                  <p className="text-sm">Companies hedge FX exposure using stablecoin treasury, locking in rates for future payments</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Institutional Execution</p>
                  <p className="text-sm">Large-ticket trades executed OTC with better pricing than public orderbook</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rail 4: OCBS */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-400">
                <DollarSign className="h-5 w-5" />
                Rail 4: On-Chain Brokerage & Stablecoin Treasury (OCBS)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                OCBS provides stablecoin treasury management, yield optimization, and on-chain settlement for merchants 
                and SMEs. It enables "treasury mobility"—companies can hold dollar-denominated assets (USDT/USDC) and 
                move them globally without touching the legacy banking system.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div>
                  <p className="font-semibold text-foreground mb-1">Treasury Management</p>
                  <p className="text-sm">Corporates hold USDT treasuries, earning yield while maintaining dollar exposure</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Global Settlement</p>
                  <p className="text-sm">Pay suppliers globally using on-chain rails, settling in minutes instead of days</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">FX Hedging</p>
                  <p className="text-sm">Lock in BRL–USD rates by holding stablecoins, protecting against local currency devaluation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Full-Stack Compounds */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Why Full-Stack Compounds</CardTitle>
            <p className="text-sm text-muted-foreground">
              The four rails create network effects that single-product competitors cannot replicate
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Liquidity Flywheel</p>
                    <p className="text-sm text-muted-foreground">
                      B2C Exchange volume creates deep orderbooks → OTC desk can execute large trades with minimal slippage → 
                      institutional clients bring more volume → liquidity compounds
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Compliance Leverage</p>
                    <p className="text-sm text-muted-foreground">
                      Single KYC/AML stack serves all four rails → marginal cost of adding a new customer to OTC or OCBS 
                      is near zero after Exchange onboarding
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Revenue Diversification</p>
                    <p className="text-sm text-muted-foreground">
                      Multiple monetization streams per user: trading fees (Exchange), payment processing fees (Payments), 
                      OTC spreads, and treasury management fees (OCBS)
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Customer Stickiness</p>
                    <p className="text-sm text-muted-foreground">
                      A user who trades on Exchange, pays suppliers via Payments, and holds USDT treasury in OCBS has 
                      3x the switching cost vs a single-product user
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Data & Execution Edge</p>
                    <p className="text-sm text-muted-foreground">
                      Seeing flows across all four rails gives Coins better FX pricing, risk management, and liquidity 
                      forecasting than competitors with partial visibility
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Defensible Moat</p>
                    <p className="text-sm text-muted-foreground">
                      Competitors must replicate all four rails to compete effectively. Partial-stack players (e.g., 
                      payments-only or exchange-only) cannot offer the same value proposition
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Addressing Wei's Question: Why Not B2B-Only? */}
        <Card className="border-orange-500/30 bg-orange-500/5">
          <CardHeader>
            <CardTitle className="text-2xl">Why Not Start B2B-Only with External Liquidity?</CardTitle>
            <p className="text-sm text-muted-foreground">
              Addressing the question: "Why not just do OTC + OCBS and source liquidity from Avenia or other venues?"
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              A B2B-only strategy (OTC + OCBS without Exchange) seems attractive: focus on high-value corporate clients, 
              avoid retail compliance complexity, and source liquidity from external venues like Avenia, Binance, or Kraken.
            </p>
            <p>
              <strong className="text-foreground">This approach fails in Global South markets for three reasons:</strong>
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-orange-400">1</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Liquidity Fragmentation</p>
                  <p className="text-sm">
                    External venues don't have deep BRL–USDT or NGN–USDT orderbooks. Sourcing liquidity externally means 
                    paying wide spreads, which kills margins on OTC trades. The Exchange creates <em>local</em> liquidity 
                    that external venues cannot provide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-orange-400">2</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">No Community Flywheel</p>
                  <p className="text-sm">
                    B2C Exchange users become B2B customers. A retail trader who uses the Exchange for personal trading 
                    later brings their SME to the OTC desk for import/export flows. Without the Exchange, there's no 
                    customer acquisition funnel for B2B.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-orange-400">3</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Regulatory & Settlement Risk</p>
                  <p className="text-sm">
                    Relying on external liquidity means Coins doesn't control the full settlement stack. If Binance or 
                    Avenia has an outage, compliance issue, or liquidity crunch, Coins cannot execute for clients. 
                    Owning the Exchange means owning the settlement layer.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm">
                <strong className="text-foreground">Conclusion:</strong> The Exchange is not a "nice-to-have" for retail revenue. 
                It's the <strong className="text-foreground">foundation</strong> that makes OTC and OCBS viable in Global South markets. 
                B2C liquidity feeds B2B execution. Without the Exchange, Coins would be a fragile, margin-compressed intermediary 
                dependent on external venues.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Unit Economics Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Unit Economics & Monetization</CardTitle>
            <p className="text-sm text-muted-foreground">
              How Coins generates revenue across the four-rail stack
            </p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold">Rail</th>
                    <th className="text-left p-3 font-semibold">Revenue Model</th>
                    <th className="text-left p-3 font-semibold">Typical Fee</th>
                    <th className="text-left p-3 font-semibold">Customer Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Exchange</td>
                    <td className="p-3 text-muted-foreground">Trading fees (maker/taker)</td>
                    <td className="p-3 text-muted-foreground">0.1% - 0.5%</td>
                    <td className="p-3 text-muted-foreground">B2C retail, semi-institutional</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Payments</td>
                    <td className="p-3 text-muted-foreground">Payment processing fees</td>
                    <td className="p-3 text-muted-foreground">1% - 2%</td>
                    <td className="p-3 text-muted-foreground">Merchants, remittance users</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">OTC</td>
                    <td className="p-3 text-muted-foreground">Bid-ask spread + execution fee</td>
                    <td className="p-3 text-muted-foreground">0.3% - 1%</td>
                    <td className="p-3 text-muted-foreground">SMEs, corporates, importers/exporters</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">OCBS</td>
                    <td className="p-3 text-muted-foreground">Treasury management fee + yield share</td>
                    <td className="p-3 text-muted-foreground">0.5% - 1.5%</td>
                    <td className="p-3 text-muted-foreground">Corporates, institutional treasuries</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-accent/50 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Cross-Rail Revenue Multiplier:</strong> A single corporate customer using 
                all four rails generates 3-5x more revenue than a retail-only Exchange user. This is why full-stack markets 
                compound: each additional rail increases ARPU (Average Revenue Per User) and LTV (Lifetime Value).
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

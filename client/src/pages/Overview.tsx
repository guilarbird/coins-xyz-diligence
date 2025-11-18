import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { CheckCircle2, ArrowRight, DollarSign, Users, TrendingUp, Globe } from "lucide-react";

export default function Overview() {
  const scrollToFramework = () => {
    document.getElementById('framework')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <DashboardLayout>
      <div className="space-y-0">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-background/95 px-6 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Eyebrow Label */}
            <div className="inline-block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                Coins Research
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Financial rails for<br />Global South treasuries
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Coins builds regulated infrastructure for stablecoin settlement and institutional FX in emerging markets. 
              Global treasuries use our unified stack—Exchange, Payments, OTC—to move value efficiently through the 
              BRL–USDT corridor and beyond. Brazil is the blueprint; Nigeria and Ghana are scaling now.
            </p>

            {/* Supporting Line - NEW STRATEGIC SENTENCE */}
            <p className="text-sm md:text-base italic text-muted-foreground/60 max-w-2xl mx-auto">
              Coins doesn't compete with traditional rails — it completes them. We operate in the structural gaps 
              where banks, PSPs and single-product crypto platforms cannot reach with speed, compliance or settlement optionality.
            </p>

            {/* Strategic Statement */}
            <div className="pt-4">
              <div className="inline-block p-4 rounded-lg bg-primary/5 border border-primary/20 text-left max-w-2xl">
                <p className="text-sm md:text-base leading-relaxed">
                  <strong className="text-primary">We expand only where the four-rail flywheel can run.</strong>{" "}
                  Brazil proved the model; Nigeria and Ghana can replicate it; Argentina and Mexico remain 
                  selective-entry markets via Alpha & Pay until the competitive advantage becomes clear.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                onClick={scrollToFramework}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Read the Blueprint
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/metrics'}
              >
                View Metrics
              </Button>
            </div>

            {/* Metrics Ticker */}
            <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground/60">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span>USD 90.9M Volume TEC</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>1,322 KYC'd Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>3 Active Markets</span>
              </div>
            </div>
          </div>
        </section>

        {/* Four-Rail Market Readiness Framework */}
        {/* Layer 0: Global South Pre-Selection */}
        <section className="px-6 py-16 bg-gradient-to-b from-background to-accent/20">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">Layer 0</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Global South Pre-Selection
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Before evaluating any market with FRM-R, we filter for structural traits that define the Global South. 
                This is "Layer 0" — the prerequisite conditions that make the four-rail model viable. <strong className="text-primary">Brazil proved all six traits work together.</strong> Now we replicate where these conditions exist.
              </p>
            </div>

            <Card className="bg-orange-500/5 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-xl">Structural Traits Required</CardTitle>
                <p className="text-sm text-muted-foreground pt-2">
                  Markets must exhibit these characteristics to qualify for FRM-R evaluation:
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Young, Digital-Savvy Population</p>
                        <p className="text-sm text-muted-foreground">High smartphone penetration, crypto-native demographics, comfort with digital finance</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Mobile-Money First</p>
                        <p className="text-sm text-muted-foreground">Instant payment rails (PIX, Mobile Money, ACH) that enable zero-friction on/off-ramps</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">High Stablecoin Penetration</p>
                        <p className="text-sm text-muted-foreground">Existing USDT/USDC adoption for remittances, trade settlement, or treasury management</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">FX Volatility & Dollar Restrictions</p>
                        <p className="text-sm text-muted-foreground">Local currency devaluation creates demand for dollar-denominated assets and hedging</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Import/Export Dependency (China Corridor)</p>
                        <p className="text-sm text-muted-foreground">Trade flows with China create natural OTC demand for stablecoin settlement</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Informality & Creator-Driven Economy</p>
                        <p className="text-sm text-muted-foreground">Large informal economy and creator/gig workers who need cross-border payment solutions</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20 text-sm">
                  <p className="text-foreground">
                    <strong className="text-primary">Brazil is the proof:</strong> All six structural traits converged in Brazil, enabling Coins to build and validate the full four-rail model in production. PIX provided instant settlement, high stablecoin adoption created natural demand, FX volatility drove treasury hedging, China trade corridors fueled OTC flows, and a massive creator economy adopted crypto-native payment solutions.
                  </p>
                  <p className="text-muted-foreground mt-3">
                    Nigeria and Ghana replicate these conditions at scale. Argentina and Mexico have partial traits (high FX volatility, China corridors) but lack critical infrastructure (instant payment rails, regulatory clarity), making them selective-entry markets until Layer 0 prerequisites are met.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="framework" className="px-6 py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Framework Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Four-Rail Market Readiness Framework (FRM-R)
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                After passing Layer 0, we evaluate markets using FRM-R. Coins does not prioritize markets by geography — 
                we prioritize by the ability to operate our full four-rail product stack. Full-stack markets compound; partial markets don't.
              </p>
            </div>

            {/* Framework Layers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Layer 1: PRR */}
              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center gap-2">
                    <span className="text-2xl font-bold">1</span>
                    <span>Product Rail Readiness (PRR)</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground pt-2">
                    Can we operate all four rails competitively?
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">OCBS</p>
                      <p className="text-xs text-muted-foreground">Stablecoin treasury & settlement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Spot Exchange</p>
                      <p className="text-xs text-muted-foreground">Orderbook + liquidity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Payments</p>
                      <p className="text-xs text-muted-foreground">PIX / ACH / Mobile Money</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">OTC / Trade Desk</p>
                      <p className="text-xs text-muted-foreground">RFQ for SMEs & corporates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Layer 2: FIR */}
              <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center gap-2">
                    <span className="text-2xl font-bold">2</span>
                    <span>Foundational Infrastructure Replicability (FIR)</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground pt-2">
                    Can we deploy the "Brazil blueprint" with low friction?
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">KYC/AML Stack</p>
                      <p className="text-xs text-muted-foreground">Zoloz, SmileID, local providers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Banking & PSPs</p>
                      <p className="text-xs text-muted-foreground">Bank accounts, settlement rails</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Payment Channels</p>
                      <p className="text-xs text-muted-foreground">Domestic instant payment systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Regulatory Framework</p>
                      <p className="text-xs text-muted-foreground">Clear licensing path & reporting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Layer 3: GSA */}
              <Card className="bg-purple-500/5 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center gap-2">
                    <span className="text-2xl font-bold">3</span>
                    <span>Global South Advantage (GSA)</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground pt-2">
                    Does the country amplify our model?
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">FX Volatility</p>
                      <p className="text-xs text-muted-foreground">High dollar demand & currency pressure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Trade Corridors</p>
                      <p className="text-xs text-muted-foreground">Import/export flows (China, US, EU)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Stablecoin Maturity</p>
                      <p className="text-xs text-muted-foreground">Existing adoption & infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Competitive Landscape</p>
                      <p className="text-xs text-muted-foreground">Fragmented single-rail players</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Market Prioritization Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Market Prioritization Matrix</CardTitle>
                <p className="text-sm text-muted-foreground">
                  FRM-R scoring determines entry strategy and resource allocation
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-semibold">Market</th>
                        <th className="text-center p-3 font-semibold">PRR</th>
                        <th className="text-center p-3 font-semibold">FIR</th>
                        <th className="text-center p-3 font-semibold">GSA</th>
                        <th className="text-left p-3 font-semibold">Priority</th>
                        <th className="text-left p-3 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Brazil */}
                      <tr className="border-b border-border/50 hover:bg-accent/50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🇧🇷</span>
                            <span className="font-medium">Brazil</span>
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                            4/4
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                            High
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                            Very High
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">
                            Priority 1
                          </span>
                        </td>
                        <td className="p-3 text-muted-foreground">
                          Anchor market • Full-stack operational
                        </td>
                      </tr>

                      {/* Nigeria */}
                      <tr className="border-b border-border/50 hover:bg-accent/50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🇳🇬</span>
                            <span className="font-medium">Nigeria</span>
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                            4/4
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                            High
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                            Very High
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">
                            Priority 2
                          </span>
                        </td>
                        <td className="p-3 text-muted-foreground">
                          Secondary anchor • Entry Q1 2026
                        </td>
                      </tr>

                      {/* Ghana */}
                      <tr className="border-b border-border/50 hover:bg-accent/50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🇬🇭</span>
                            <span className="font-medium">Ghana</span>
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                            4/4
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                            High
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                            High
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">
                            Priority 3
                          </span>
                        </td>
                        <td className="p-3 text-muted-foreground">
                          Fast follower • Soft launch Q2 2026
                        </td>
                      </tr>

                      {/* Argentina */}
                      <tr className="border-b border-border/50 hover:bg-accent/50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🇦🇷</span>
                            <span className="font-medium">Argentina</span>
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                            2/4
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                            Medium
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                            Very High
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex px-3 py-1 rounded bg-orange-500/20 text-orange-400 text-xs font-semibold">
                            Selective
                          </span>
                        </td>
                        <td className="p-3 text-muted-foreground">
                          Intel gathering • Alpha & Pay only
                        </td>
                      </tr>

                      {/* Mexico */}
                      <tr className="hover:bg-accent/50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🇲🇽</span>
                            <span className="font-medium">Mexico</span>
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                            2/4
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                            Medium
                          </span>
                        </td>
                        <td className="text-center p-3">
                          <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                            Medium
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex px-3 py-1 rounded bg-orange-500/20 text-orange-400 text-xs font-semibold">
                            Selective
                          </span>
                        </td>
                        <td className="p-3 text-muted-foreground">
                          Intel gathering • Monitoring regulatory evolution
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Framework Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Why This Framework Matters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Traditional expansion strategies prioritize market size or GDP. Coins prioritizes <strong className="text-foreground">operational viability</strong> and <strong className="text-foreground">compounding effects</strong>.
                  </p>
                  <p>
                    A market with 3/4 rails operational generates fragmented revenue and requires custom infrastructure. 
                    A market with 4/4 rails creates a flywheel: Exchange liquidity feeds OTC execution; Payments drive 
                    stablecoin adoption; OCBS enables treasury mobility.
                  </p>
                  <p>
                    FRM-R ensures we deploy capital where it compounds, not where it fragments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Full-Stack vs Partial-Stack Markets</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <p><strong className="text-foreground">Full-Stack (Brazil, Nigeria, Ghana):</strong> All four rails operational, compliance leverage, network effects, defensible moat</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-4 w-4 mt-0.5 flex-shrink-0 rounded-full border-2 border-orange-400" />
                      <p><strong className="text-foreground">Partial-Stack (Argentina, Mexico):</strong> Selective entry via Alpha & Pay, monitor regulatory evolution, deploy full stack only when FRM-R score improves</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


      </div>
    </DashboardLayout>
  );
}

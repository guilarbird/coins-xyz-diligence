import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { DollarSign, Users, TrendingUp, Globe, CheckCircle2, Circle } from "lucide-react";

export default function Home() {
  // Authentication can be added later if needed

  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Coins.xyz - Investor Due Diligence
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive analysis and strategic roadmap for international expansion
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Trading Volume
              </CardTitle>
              <DollarSign className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">USD 228K</div>
              <p className="text-xs text-muted-foreground">Monthly average</p>
              <p className="text-xs text-green-500 mt-1">+12.5%</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Markets
              </CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,322</div>
              <p className="text-xs text-muted-foreground">KYC'd Users</p>
              <p className="text-xs text-green-500 mt-1">+8.2%</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Exchange Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">234x</div>
              <p className="text-xs text-muted-foreground">USDC/BRL Rate</p>
              <p className="text-xs text-green-500 mt-1">+2.1%</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Geographic Reach
              </CardTitle>
              <Globe className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 Active</div>
              <p className="text-xs text-muted-foreground">Markets operational</p>
              <p className="text-xs text-green-500 mt-1">Expanding</p>
            </CardContent>
          </Card>
        </div>

        {/* Four-Rail Market Readiness Framework */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Four-Rail Market Readiness Framework (FRM-R)</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Coins.xyz does not prioritize markets by geography. We prioritize markets by the ability to operate our full four-rail product stack. Full-stack markets compound; partial markets don't.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Framework Layers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <h3 className="font-semibold text-blue-400 mb-2">Layer 1: Product Rail Readiness (PRR)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Can we operate all four rails competitively?
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>OCBS (stablecoin treasury, settlement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Spot Exchange (orderbook + liquidity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Payments (PIX/ACH/Mobile Money)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>OTC / Trade Desk (RFQ for SMEs)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <h3 className="font-semibold text-green-400 mb-2">Layer 2: Foundational Infrastructure Replicability (FIR)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Can we deploy the "Brazil blueprint" with low friction?
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>KYC/AML provider compatible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Bank accounts / PSPs / settlement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Domestic payment channels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Regulatory framework</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <h3 className="font-semibold text-purple-400 mb-2">Layer 3: Global South Advantage (GSA)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Does the country amplify our model?
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>FX volatility & dollar demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Import/export corridors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Stablecoin penetration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Fragmented competition</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Strategic Statement */}
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm leading-relaxed">
                <strong className="text-primary">We expand only where the four-rail flywheel can run.</strong> Brazil proved the model; Nigeria and Ghana can replicate it; Argentina and Mexico remain selective-entry markets via Alpha & Pay until the competitive advantage becomes clear.
              </p>
            </div>

            {/* Market Prioritization Table */}
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
                  <tr className="border-b border-border/50 hover:bg-accent/50">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇧🇷</span>
                        <span className="font-medium">Brazil</span>
                      </div>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        4/4
                      </span>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        High
                      </span>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        Very High
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">
                        Priority 1
                      </span>
                    </td>
                    <td className="p-3 text-muted-foreground">Anchor market • Full stack live</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-accent/50">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇳🇬</span>
                        <span className="font-medium">Nigeria</span>
                      </div>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        4/4
                      </span>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        High
                      </span>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        Very High
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">
                        Priority 2
                      </span>
                    </td>
                    <td className="p-3 text-muted-foreground">Exchange license near approval</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-accent/50">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇬🇭</span>
                        <span className="font-medium">Ghana</span>
                      </div>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        4/4
                      </span>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        High
                      </span>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        High
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">
                        Priority 3
                      </span>
                    </td>
                    <td className="p-3 text-muted-foreground">Soft launch approved • Full stack from day one</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-accent/50">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇦🇷</span>
                        <span className="font-medium">Argentina</span>
                      </div>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                        2/4
                      </span>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                        Medium
                      </span>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        Very High
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-500/20 text-gray-400 text-xs font-semibold">
                        Evaluation
                      </span>
                    </td>
                    <td className="p-3 text-muted-foreground">Alpha & Pay only • Banking friction</td>
                  </tr>
                  <tr className="hover:bg-accent/50">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇲🇽</span>
                        <span className="font-medium">Mexico</span>
                      </div>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                        2/4
                      </span>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                        Medium
                      </span>
                    </td>
                    <td className="text-center p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                        Medium
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-500/20 text-gray-400 text-xs font-semibold">
                        Evaluation
                      </span>
                    </td>
                    <td className="p-3 text-muted-foreground">Alpha & Pay first • Selective entry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Core Operations & Strategic Roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Core Operations</CardTitle>
              <p className="text-sm text-muted-foreground">
                Enabling Regulated BRL - Crypto Infrastructure for LatAm
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Revenue TEC</span>
                <span className="font-semibold">USD 228K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Volume TEC</span>
                <span className="font-semibold">USD 90.9M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">KYC'd Users</span>
                <span className="font-semibold">1,322</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Markets</span>
                <span className="font-semibold">3 Active</span>
              </div>
              <p className="text-sm text-muted-foreground pt-3 border-t border-border">
                Coins.xyz bridges traditional finance and crypto through compliant, institutional-grade infrastructure—combining deep local expertise, KYC, Brazilian banking rails with great liquidity returns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Strategic Roadmap</CardTitle>
              <p className="text-sm text-muted-foreground">
                Licensing & Regulatory Milestones
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">25% Complete</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Capital injection Jul 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">50% Target</span>
                  </div>
                  <p className="text-xs text-muted-foreground">License approval Jan 2027</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">100% Goal</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Full operations Jan 2028</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground pt-3 border-t border-border">
                Timeline shows VASP/PI licensing milestones with current completion status and projected regulatory approval schedule.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

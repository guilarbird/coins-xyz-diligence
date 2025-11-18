import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { CheckCircle2, Circle, AlertCircle, TrendingUp, Building2, Users, Globe } from "lucide-react";

export default function Markets() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Markets & Expansion Strategy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Coins prioritizes markets by operational viability, not geography. The FRM-R framework (Product Rail Readiness + 
            Foundational Infrastructure Replicability + Global South Advantage) determines where we deploy capital and when we enter.
          </p>
        </div>

        {/* FRM-R Framework Overview */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">The FRM-R Framework</CardTitle>
            <p className="text-sm text-muted-foreground">
              A systematic approach to market prioritization based on three layers
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-400">1</span>
                  </div>
                  <p className="font-semibold text-blue-400">PRR</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Product Rail Readiness:</strong> Can we operate all four rails (OCBS, Exchange, Payments, OTC) competitively?
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-green-400">2</span>
                  </div>
                  <p className="font-semibold text-green-400">FIR</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Foundational Infrastructure Replicability:</strong> Can we deploy the Brazil blueprint with low friction?
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-purple-400">3</span>
                  </div>
                  <p className="font-semibold text-purple-400">GSA</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Global South Advantage:</strong> Does the country amplify our model (FX volatility, trade corridors, stablecoin adoption)?
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Scoring Logic:</strong> Markets with 4/4 PRR + High FIR + High/Very High GSA 
                become Priority 1-3 (full-stack deployment). Markets with 2/4 PRR or Medium FIR become "Selective" 
                (Alpha & Pay only, monitor for improvement).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Market Profiles */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Market Profiles</h2>

          {/* Brazil - Priority 1 */}
          <Card className="border-blue-500/30 bg-blue-500/5">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🇧🇷</span>
                    <CardTitle className="text-3xl">Brazil</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-sm font-semibold">
                      Priority 1 - Anchor Market
                    </span>
                    <span className="inline-flex px-3 py-1 rounded bg-green-500/20 text-green-400 text-sm font-semibold">
                      Full-Stack Operational
                    </span>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm text-muted-foreground">FRM-R Score</p>
                  <div className="flex gap-2">
                    <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">PRR: 4/4</span>
                    <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">FIR: High</span>
                    <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">GSA: Very High</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Why This Market?</h4>
                    <p className="text-sm text-muted-foreground">
                      Brazil is the blueprint that proves the four-rail model works in Global South markets. PIX (instant payments), 
                      advanced banking infrastructure, regulatory clarity (PI + VASP licensing), and high stablecoin adoption make 
                      it the ideal anchor market. BRL–USDT corridor enables highly efficient FX structures for global treasuries.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What Rails Are Viable?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">OCBS (convert/swap, stablecoin treasury)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Spot Exchange (orderbook + liquidity)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Payments (PIX integration, PSPs)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">OTC / Trade Desk (China corridor, import/export)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Current Status</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong className="text-foreground">Operational Since:</strong> June 2022</p>
                      <p>• <strong className="text-foreground">Monthly Volume:</strong> USD 228K (TEC)</p>
                      <p>• <strong className="text-foreground">Total Volume:</strong> USD 90.9M (TEC)</p>
                      <p>• <strong className="text-foreground">KYC'd Users:</strong> 1,322</p>
                      <p>• <strong className="text-foreground">Licensing:</strong> PI + VASP in progress (50% complete, approval Jan 2027)</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Next Milestones</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Capital injection: Jul 2026</p>
                      <p>• PI/VASP approval: Jan 2027</p>
                      <p>• Full licensing: Jan 2028</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-2">Competitive Landscape</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Brazil has established players (Mercado Bitcoin, Binance, Bitso) but they operate single rails. Coins is the 
                  only full-stack player combining Exchange + Payments + OTC + OCBS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded bg-accent text-xs">Mercado Bitcoin (Exchange only)</span>
                  <span className="px-2 py-1 rounded bg-accent text-xs">Binance (Exchange only)</span>
                  <span className="px-2 py-1 rounded bg-accent text-xs">Bitso (Exchange + limited payments)</span>
                  <span className="px-2 py-1 rounded bg-accent text-xs">Transfero (OTC only)</span>
                  <span className="px-2 py-1 rounded bg-accent text-xs">Braza Bank (OCBS only)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nigeria - Priority 2 */}
          <Card className="border-blue-500/30 bg-blue-500/5">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🇳🇬</span>
                    <CardTitle className="text-3xl">Nigeria</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-sm font-semibold">
                      Priority 2 - Secondary Anchor
                    </span>
                    <span className="inline-flex px-3 py-1 rounded bg-orange-500/20 text-orange-400 text-sm font-semibold">
                      Entry Q1 2026
                    </span>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm text-muted-foreground">FRM-R Score</p>
                  <div className="flex gap-2">
                    <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">PRR: 4/4</span>
                    <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">FIR: High</span>
                    <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">GSA: Very High</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Why This Market?</h4>
                    <p className="text-sm text-muted-foreground">
                      Nigeria has the highest crypto adoption in Africa, driven by Naira devaluation, capital controls, and 
                      remittance demand. Mobile Money penetration (MTN, Airtel) provides instant payment rails similar to PIX. 
                      Exchange licensing is near approval, enabling full-stack deployment.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What Rails Are Viable?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Exchange (licensing pending, near approval)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Payments (Mobile Money: MTN, Airtel)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">OTC (import/export, China corridor)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">OCBS (convert/swap for Naira hedging)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Current Status</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong className="text-foreground">Licensing:</strong> Exchange license near approval (explicit)</p>
                      <p>• <strong className="text-foreground">Entry Timeline:</strong> Q1 2026</p>
                      <p>• <strong className="text-foreground">Entry Strategy:</strong> Exchange first, expand to Payments + OTC after</p>
                      <p>• <strong className="text-foreground">KYC/AML:</strong> SmileID integration ready</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Why Nigeria Replicates Brazil</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• High FX volatility → stablecoin demand</p>
                      <p>• Mobile Money rails → instant payments</p>
                      <p>• Import/export corridors → OTC flows</p>
                      <p>• Regulatory clarity → licensing path exists</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-2">Competitive Landscape</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Nigeria has P2P platforms (Paxful, LocalBitcoins) and single-rail exchanges (Luno, Quidax) but no full-stack player. 
                  Coins will be first to combine all four rails.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ghana - Priority 3 */}
          <Card className="border-blue-500/30 bg-blue-500/5">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🇬🇭</span>
                    <CardTitle className="text-3xl">Ghana</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-sm font-semibold">
                      Priority 3 - Fast Follower
                    </span>
                    <span className="inline-flex px-3 py-1 rounded bg-green-500/20 text-green-400 text-sm font-semibold">
                      Soft Launch Q2 2026
                    </span>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm text-muted-foreground">FRM-R Score</p>
                  <div className="flex gap-2">
                    <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">PRR: 4/4</span>
                    <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">FIR: High</span>
                    <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">GSA: High</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Why This Market?</h4>
                    <p className="text-sm text-muted-foreground">
                      Ghana offers full-stack deployment from day one with no product restrictions. Soft launch approved (explicit). 
                      China–Ghana trade corridor creates strong OTC demand. Mobile Money penetration and stablecoin maturity make 
                      all four rails viable immediately.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What Rails Are Viable?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Exchange (no restrictions, soft launch approved)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Payments (Mobile Money, ACH equivalent)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">OTC (China–Ghana corridor, import/export)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">OCBS (convert/swap, stablecoin treasury)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Current Status</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong className="text-foreground">Regulatory:</strong> Soft launch approved (explicit)</p>
                      <p>• <strong className="text-foreground">Entry Timeline:</strong> Q2 2026</p>
                      <p>• <strong className="text-foreground">Product Restrictions:</strong> None (4/4 rails from day one)</p>
                      <p>• <strong className="text-foreground">KYC/AML:</strong> SmileID, local partners</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Competitive Edge</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Only full-stack player in market</p>
                      <p>• China–Ghana corridor underserved</p>
                      <p>• Mobile Money rails mature</p>
                      <p>• Regulatory clarity from day one</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Argentina - Selective Entry */}
          <Card className="border-orange-500/30 bg-orange-500/5">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🇦🇷</span>
                    <CardTitle className="text-3xl">Argentina</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex px-3 py-1 rounded bg-orange-500/20 text-orange-400 text-sm font-semibold">
                      Selective Entry - Intel Gathering
                    </span>
                    <span className="inline-flex px-3 py-1 rounded bg-yellow-500/20 text-yellow-400 text-sm font-semibold">
                      Alpha & Pay Only
                    </span>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm text-muted-foreground">FRM-R Score</p>
                  <div className="flex gap-2">
                    <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">PRR: 2/4</span>
                    <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">FIR: Medium</span>
                    <span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">GSA: Very High</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Why Selective Entry?</h4>
                    <p className="text-sm text-muted-foreground">
                      Argentina has extreme FX volatility and dollar demand (Very High GSA) but regulatory uncertainty and banking 
                      friction limit full-stack deployment. Payments work (Alpha & Pay), but Spot Exchange and OTC face restrictions. 
                      We monitor regulatory evolution before committing full capital.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What Rails Are Viable Today?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Payments (Alpha & Pay operational)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">OCBS (limited, monitoring regulatory clarity)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Circle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Exchange (regulatory friction, not deployed)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Circle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">OTC (requires local partner, evaluating)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Current Strategy</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong className="text-foreground">Active Products:</strong> Alpha & Pay (payments only)</p>
                      <p>• <strong className="text-foreground">Approach:</strong> Partner-market, low capital commitment</p>
                      <p>• <strong className="text-foreground">Monitoring:</strong> Regulatory evolution under Milei administration</p>
                      <p>• <strong className="text-foreground">Trigger for Full Entry:</strong> Clear licensing path for Exchange + OTC</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Why Not Full-Stack Yet?</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Banking friction (hard to get accounts)</p>
                      <p>• Regulatory uncertainty (crypto rules unclear)</p>
                      <p>• Capital controls limit FX execution</p>
                      <p>• Competitive advantage not clear vs local players</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Decision Rule:</strong> Argentina remains selective-entry until PRR improves to 
                    4/4 and FIR improves to High. We will not deploy full capital into a 2/4 market regardless of GSA score.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mexico - Selective Entry */}
          <Card className="border-orange-500/30 bg-orange-500/5">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🇲🇽</span>
                    <CardTitle className="text-3xl">Mexico</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex px-3 py-1 rounded bg-orange-500/20 text-orange-400 text-sm font-semibold">
                      Selective Entry - Intel Gathering
                    </span>
                    <span className="inline-flex px-3 py-1 rounded bg-yellow-500/20 text-yellow-400 text-sm font-semibold">
                      Studying Full Deployment
                    </span>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm text-muted-foreground">FRM-R Score</p>
                  <div className="flex gap-2">
                    <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">PRR: 2/4</span>
                    <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">FIR: Medium</span>
                    <span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-medium">GSA: Medium</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Why Selective Entry?</h4>
                    <p className="text-sm text-muted-foreground">
                      Mexico has excellent payment rails (SPEI) and remittance demand, but lower FX volatility vs other LatAm markets 
                      (Medium GSA). Heavy FX regulation limits OTC and Exchange deployment. Alpha & Pay works well; full-stack requires 
                      local partner and regulatory clarity.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What Rails Are Viable Today?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Payments (SPEI excellent, Alpha & Pay operational)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Circle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Exchange (requires local partner, heavy regulation)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Circle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">OTC (FX regulation limits deployment)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Circle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">OCBS (evaluating, not deployed)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Current Strategy</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong className="text-foreground">Active Products:</strong> Alpha & Pay (payments first)</p>
                      <p>• <strong className="text-foreground">Approach:</strong> Monitor regulatory evolution, study full deployment</p>
                      <p>• <strong className="text-foreground">Trigger for Full Entry:</strong> Competitive advantage becomes clear</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Why Not Full-Stack Yet?</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Lower FX volatility vs Brazil/Nigeria/Argentina</p>
                      <p>• Heavy FX regulation (Banxico oversight)</p>
                      <p>• Strong local competitors (Bitso, others)</p>
                      <p>• Competitive advantage not clear yet</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Decision Rule:</strong> Mexico remains selective-entry until competitive advantage 
                    is clear. We will not deploy full capital into a market where we cannot differentiate vs established local players.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Market Prioritization Summary</CardTitle>
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
                    <th className="text-left p-3 font-semibold">Entry Timeline</th>
                    <th className="text-left p-3 font-semibold">Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">🇧🇷 Brazil</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">4/4</span></td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">High</span></td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">Very High</span></td>
                    <td className="p-3"><span className="inline-flex px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">Priority 1</span></td>
                    <td className="p-3 text-muted-foreground">Operational since 2022</td>
                    <td className="p-3 text-muted-foreground">Full-stack anchor</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">🇳🇬 Nigeria</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">4/4</span></td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">High</span></td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">Very High</span></td>
                    <td className="p-3"><span className="inline-flex px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">Priority 2</span></td>
                    <td className="p-3 text-muted-foreground">Q1 2026</td>
                    <td className="p-3 text-muted-foreground">Secondary anchor</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">🇬🇭 Ghana</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">4/4</span></td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">High</span></td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">High</span></td>
                    <td className="p-3"><span className="inline-flex px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-semibold">Priority 3</span></td>
                    <td className="p-3 text-muted-foreground">Q2 2026</td>
                    <td className="p-3 text-muted-foreground">Fast follower</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">🇦🇷 Argentina</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">2/4</span></td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">Medium</span></td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">Very High</span></td>
                    <td className="p-3"><span className="inline-flex px-2 py-1 rounded bg-orange-500/20 text-orange-400 text-xs font-semibold">Selective</span></td>
                    <td className="p-3 text-muted-foreground">TBD (monitoring)</td>
                    <td className="p-3 text-muted-foreground">Alpha & Pay only</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">🇲🇽 Mexico</td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">2/4</span></td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">Medium</span></td>
                    <td className="text-center p-3"><span className="inline-flex px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">Medium</span></td>
                    <td className="p-3"><span className="inline-flex px-2 py-1 rounded bg-orange-500/20 text-orange-400 text-xs font-semibold">Selective</span></td>
                    <td className="p-3 text-muted-foreground">TBD (studying)</td>
                    <td className="p-3 text-muted-foreground">Alpha & Pay first</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

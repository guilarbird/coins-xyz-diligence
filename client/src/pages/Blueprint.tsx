import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { CheckCircle2, ArrowRight, Zap, Shield, Globe, TrendingUp, Building2, Users } from "lucide-react";

export default function Blueprint() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Blueprint: Brazil → Global South
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Brazil is the prototype that proves the four-rail model works in Global South markets. What we built in Brazil 
            from 2022-2025 is now replicating in Nigeria and Ghana. This is the blueprint.
          </p>
        </div>

        {/* Why Brazil is the Blueprint */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">What Makes Brazil the Blueprint?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Brazil wasn't chosen randomly. It has the <strong className="text-foreground">exact conditions</strong> that make 
              the four-rail model viable: advanced payment infrastructure, regulatory clarity, high stablecoin adoption, and 
              dollar demand driven by FX volatility. These conditions exist in other Global South markets—Nigeria, Ghana, and 
              eventually others—which is why the blueprint transfers.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">PIX: Instant Payment Rails</h4>
                    <p className="text-sm text-muted-foreground">
                      Brazil's PIX system (launched 2020) enables instant, 24/7, zero-fee transfers between any bank accounts. 
                      This infrastructure makes fiat on/off-ramps seamless for the Exchange and Payments rails. Nigeria and Ghana 
                      have Mobile Money equivalents (MTN, Airtel) that replicate this.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Regulatory Clarity</h4>
                    <p className="text-sm text-muted-foreground">
                      Brazil's Central Bank (BCB) established clear crypto regulation with PI (Payment Institution) and VASP 
                      (Virtual Asset Service Provider) licensing frameworks. This allows Coins to operate compliantly while 
                      building toward full licensing. Nigeria and Ghana have similar frameworks emerging.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Stablecoin Penetration</h4>
                    <p className="text-sm text-muted-foreground">
                      USDT and USDC are widely adopted in Brazil for remittances, import/export, and treasury management. 
                      This existing adoption means Coins doesn't need to educate the market—users already understand stablecoins. 
                      Nigeria has even higher stablecoin adoption.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">FX Volatility & Dollar Demand</h4>
                    <p className="text-sm text-muted-foreground">
                      BRL devaluation (2020-2024) drove demand for dollar-denominated assets. Importers, exporters, and corporates 
                      use USDT to hedge FX risk and settle cross-border payments. This same dynamic exists in Nigeria (NGN), Ghana (GHS), 
                      and Argentina (ARS).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Import/Export Corridors</h4>
                    <p className="text-sm text-muted-foreground">
                      Brazil–China trade flows create natural OTC demand: importers pay Chinese suppliers in USDT, bypassing slow 
                      correspondent banking. Nigeria and Ghana have similar China corridors, plus intra-Africa trade that benefits 
                      from stablecoin settlement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Fragmented Competition</h4>
                    <p className="text-sm text-muted-foreground">
                      Brazil has single-rail players (Mercado Bitcoin for Exchange, Transfero for OTC, Braza for OCBS) but no 
                      full-stack competitor. This fragmentation creates an opening for Coins to capture cross-rail flows. Nigeria 
                      and Ghana have even less competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* BRL-USDT Corridor Advantage */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">The BRL–USDT Corridor Advantage</CardTitle>
            <p className="text-sm text-muted-foreground">
              How Coins enables highly efficient regulated FX structures for global treasuries
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              The BRL–USDT corridor is the core of Coins' value proposition in Brazil. Global treasuries, importers, and corporates 
              need to move value between Brazilian Reais and US Dollars (or dollar-denominated stablecoins) with minimal friction, 
              cost, and settlement delay. Legacy correspondent banking takes 3-7 days and incurs multiple intermediary fees. 
              Coins compresses this to <strong className="text-foreground">minutes</strong> with <strong className="text-foreground">highly 
              efficient regulated structures</strong>.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-lg">Legacy Banking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• 3-7 day settlement</p>
                  <p>• Multiple intermediary fees</p>
                  <p>• Correspondent banking friction</p>
                  <p>• Limited transparency</p>
                  <p>• High minimum ticket sizes</p>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Coins BRL–USDT</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Minutes to settle</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Transparent pricing</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>No intermediaries</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Full compliance (PI/VASP)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Flexible ticket sizes</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-lg">Unregulated P2P</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Fast settlement</p>
                  <p>• No compliance</p>
                  <p>• Counterparty risk</p>
                  <p>• Opaque pricing</p>
                  <p>• Regulatory exposure</p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4 border-t border-border space-y-4">
              <h4 className="font-semibold text-foreground">How It Works</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">User deposits BRL via PIX</p>
                      <p className="text-sm text-muted-foreground">Instant, zero-fee transfer to Coins' regulated bank account</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Exchange or OTC execution</p>
                      <p className="text-sm text-muted-foreground">BRL converted to USDT at transparent market rates via orderbook or RFQ</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">USDT settled on-chain</p>
                      <p className="text-sm text-muted-foreground">User receives USDT in wallet or OCBS treasury account</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Global settlement</p>
                      <p className="text-sm text-muted-foreground">User can now pay suppliers globally, hold dollar treasury, or convert back to BRL</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">5</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Reverse flow (USDT → BRL)</p>
                      <p className="text-sm text-muted-foreground">Same process in reverse: USDT → BRL → PIX withdrawal to bank account</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">6</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Full compliance</p>
                      <p className="text-sm text-muted-foreground">KYC/AML, transaction monitoring, regulatory reporting all automated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 p-4 rounded-lg bg-accent/50 text-sm">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Why "highly efficient regulated structures" instead of "IOF 0"?</strong> Brazil's 
                IOF (tax on foreign exchange) is a regulatory detail that changes over time. What matters is that Coins' structure 
                enables <em>institutional-grade FX execution</em> with full compliance, transparent pricing, and minimal friction. 
                The exact tax treatment is less important than the fact that global treasuries can move value reliably and legally.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Transferability to Nigeria & Ghana */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Transferability: Nigeria & Ghana</CardTitle>
            <p className="text-sm text-muted-foreground">
              Why the Brazil blueprint replicates in other Global South markets
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              The Brazil blueprint isn't Brazil-specific. It's a <strong className="text-foreground">Global South playbook</strong> 
              that works wherever these conditions exist: instant payment rails, regulatory frameworks for crypto, high stablecoin 
              adoption, FX volatility, and trade corridors. Nigeria and Ghana have all of these.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Nigeria */}
              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇳🇬</span>
                    <span>Nigeria Replicates Brazil</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Mobile Money = PIX Equivalent</p>
                      <p className="text-muted-foreground">MTN Mobile Money, Airtel Money enable instant transfers, same as PIX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Exchange Licensing Path</p>
                      <p className="text-muted-foreground">Nigeria SEC regulates crypto exchanges, licensing near approval</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Higher Stablecoin Adoption</p>
                      <p className="text-muted-foreground">Nigeria has highest crypto adoption in Africa, USDT widely used</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">NGN Devaluation → Dollar Demand</p>
                      <p className="text-muted-foreground">Naira volatility drives demand for USDT hedging, same as BRL</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">China Trade Corridor</p>
                      <p className="text-muted-foreground">Nigeria–China import/export flows create OTC demand</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">KYC/AML Infrastructure</p>
                      <p className="text-muted-foreground">SmileID and local providers enable same compliance stack as Brazil</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ghana */}
              <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇭</span>
                    <span>Ghana Replicates Brazil</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Mobile Money Penetration</p>
                      <p className="text-muted-foreground">MTN Mobile Money, Vodafone Cash enable instant payments</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Soft Launch Approved</p>
                      <p className="text-muted-foreground">No product restrictions, full-stack deployment from day one</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Stablecoin Maturity</p>
                      <p className="text-muted-foreground">USDT adoption growing, especially for remittances and trade</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">GHS Volatility</p>
                      <p className="text-muted-foreground">Cedi devaluation creates demand for dollar-denominated assets</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">China–Ghana Corridor</p>
                      <p className="text-muted-foreground">Import/export flows to China create natural OTC demand</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Less Competition</p>
                      <p className="text-muted-foreground">No full-stack player exists, Coins will be first</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold text-foreground mb-3">Replication Checklist: What's Needed in a New Market</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-medium text-foreground">Infrastructure Requirements</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Instant payment rails (PIX, Mobile Money, ACH)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>KYC/AML providers (Zoloz, SmileID, local equivalents)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bank accounts and PSP partnerships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Regulatory reporting infrastructure</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-foreground">Market Conditions</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>FX volatility and dollar demand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Existing stablecoin adoption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Import/export trade corridors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fragmented competition (no full-stack player)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20 text-sm">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Timeline:</strong> From decision to launch in a new market takes approximately 
                  12 weeks. This includes vendor onboarding (KYC, banking, PSPs), compliance setup (licensing applications, reporting), 
                  and infrastructure deployment (orderbook, payment integrations, custody). Brazil took 18 months because we built 
                  everything from scratch. Nigeria and Ghana will take 12 weeks because we're replicating a proven blueprint.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary: Why the Blueprint Matters */}
        <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-background">
          <CardHeader>
            <CardTitle className="text-2xl">Why the Blueprint Matters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Most crypto companies expand opportunistically: "Let's try this market because it's big." Coins expands systematically: 
              "Brazil proved the model works. Nigeria and Ghana have the same conditions. Deploy the blueprint."
            </p>
            <p>
              This approach has three advantages:
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-2">1. De-Risked Execution</p>
                <p className="text-sm">
                  We're not experimenting. We're replicating a proven model. Infrastructure, compliance, and go-to-market are 
                  known quantities.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-2">2. Capital Efficiency</p>
                <p className="text-sm">
                  Building Brazil cost 18 months. Nigeria and Ghana will cost 12 weeks each. Marginal cost of expansion decreases 
                  as the blueprint matures.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-accent/50">
                <p className="font-semibold text-foreground mb-2">3. Compounding Network Effects</p>
                <p className="text-sm">
                  Each new market strengthens the others: liquidity pools deepen, compliance leverage increases, and the four-rail 
                  flywheel spins faster.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border text-center">
              <p className="text-lg font-semibold text-foreground">
                Brazil is not the end goal. It's the beginning.
              </p>
              <p className="text-sm mt-2">
                The blueprint scales to any Global South market with the right conditions. Nigeria and Ghana are next. 
                Others will follow.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

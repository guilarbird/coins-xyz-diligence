import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { Building2, Shield, Zap, Globe, AlertCircle } from "lucide-react";

export default function Infrastructure() {
  const providers = {
    kyc: [
      { name: "Zoloz", region: "Brazil", category: "KYC/AML" },
      { name: "SmileID", region: "Nigeria, Ghana", category: "KYC/AML" },
    ],
    banking: [
      { name: "Transfeera", region: "Brazil", category: "PSP / Payment Rails" },
      { name: "Qyon", region: "Brazil", category: "PSP / Banking API" },
      { name: "Stark Bank", region: "Brazil", category: "Banking Infrastructure" },
      { name: "Onz", region: "Brazil", category: "Payment Processing" },
    ],
    liquidity: [
      { name: "Transfero", region: "Brazil", category: "OTC Liquidity" },
      { name: "Mercado Bitcoin", region: "Brazil", category: "Exchange Liquidity" },
      { name: "Foxbit", region: "Brazil", category: "Exchange Liquidity" },
      { name: "Binance", region: "Global", category: "Exchange Liquidity" },
      { name: "Bybit", region: "Global", category: "Exchange Liquidity" },
      { name: "Bitget", region: "Global", category: "Exchange Liquidity" },
      { name: "BlockFills", region: "Global", category: "Institutional Liquidity" },
    ],
    stablecoin: [
      { name: "Circle (USDC)", region: "Global", category: "Stablecoin Issuer" },
      { name: "Braza / BRLA", region: "Brazil", category: "BRL Stablecoin" },
    ],
    other: [
      { name: "Genial Investimentos", region: "Brazil", category: "Brokerage / Custody" },
    ],
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Infrastructure Providers & Market Counterparties
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            The operational backbone that enables Coins to deploy the four-rail model across Global South markets. 
            These partnerships provide KYC/AML, banking rails, liquidity, and stablecoin infrastructure.
          </p>
        </div>

        {/* Disclaimer */}
        <Card className="border-orange-500/30 bg-orange-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Disclaimer:</strong> The logos and names listed below represent infrastructure 
                providers, liquidity venues, and market counterparties that Coins integrates with or sources services from. 
                Their inclusion does not imply endorsement, partnership, or commercial relationship beyond standard vendor/counterparty arrangements.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* KYC/AML & Compliance Stack */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-2xl">KYC/AML & Compliance Stack</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Identity verification, AML monitoring, and regulatory reporting
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {providers.kyc.map((provider, idx) => (
                <Card key={idx} className="bg-accent/50">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <p className="font-semibold text-lg text-foreground">{provider.name}</p>
                      <p className="text-sm text-muted-foreground">{provider.category}</p>
                      <p className="text-xs text-muted-foreground">Region: {provider.region}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Zoloz</strong> provides KYC/AML for Brazil operations, including document verification, 
                liveness detection, and AML screening. <strong className="text-foreground">SmileID</strong> covers Nigeria and Ghana with 
                local ID verification and biometric authentication.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Banking & Payment Rails */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <CardTitle className="text-2xl">Banking & Payment Rails</CardTitle>
                <p className="text-sm text-muted-foreground">
                  PSPs, bank accounts, PIX integration, and settlement infrastructure
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {providers.banking.map((provider, idx) => (
                <Card key={idx} className="bg-accent/50">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">{provider.name}</p>
                      <p className="text-xs text-muted-foreground">{provider.category}</p>
                      <p className="text-xs text-muted-foreground">{provider.region}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Transfeera</strong> and <strong className="text-foreground">Qyon</strong> provide 
                PIX integration and payment processing. <strong className="text-foreground">Stark Bank</strong> offers banking APIs 
                for account management and settlement. <strong className="text-foreground">Onz</strong> handles merchant payment flows.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Liquidity & Market Counterparties */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-2xl">Liquidity & Market Counterparties</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Exchanges, OTC desks, and institutional liquidity providers
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {providers.liquidity.map((provider, idx) => (
                <Card key={idx} className="bg-accent/50">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">{provider.name}</p>
                      <p className="text-xs text-muted-foreground">{provider.category}</p>
                      <p className="text-xs text-muted-foreground">{provider.region}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4 text-sm text-muted-foreground">
              <p>
                Coins sources liquidity from both local (Mercado Bitcoin, Foxbit, Transfero) and global (Binance, Bybit, Bitget) venues. 
                <strong className="text-foreground"> BlockFills</strong> provides institutional-grade OTC execution for large tickets.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stablecoin Infrastructure */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Globe className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <CardTitle className="text-2xl">Stablecoin Infrastructure</CardTitle>
                <p className="text-sm text-muted-foreground">
                  USDC, USDT, and BRL-pegged stablecoins
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {providers.stablecoin.map((provider, idx) => (
                <Card key={idx} className="bg-accent/50">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <p className="font-semibold text-lg text-foreground">{provider.name}</p>
                      <p className="text-sm text-muted-foreground">{provider.category}</p>
                      <p className="text-xs text-muted-foreground">Region: {provider.region}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Circle's USDC</strong> is the primary stablecoin for cross-border settlement. 
                <strong className="text-foreground"> Braza (BRLA)</strong> provides BRL-pegged stablecoins for local treasury management.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Other Infrastructure */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Custody & Brokerage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {providers.other.map((provider, idx) => (
                <Card key={idx} className="bg-accent/50">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <p className="font-semibold text-lg text-foreground">{provider.name}</p>
                      <p className="text-sm text-muted-foreground">{provider.category}</p>
                      <p className="text-xs text-muted-foreground">Region: {provider.region}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Replicability Blueprint */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Replicability: 12-Week Deployment Checklist</CardTitle>
            <p className="text-sm text-muted-foreground">
              What's needed to launch in a new market (Nigeria, Ghana, others)
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Weeks 1-4: Vendor Onboarding</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• KYC/AML provider selection and integration</li>
                    <li>• Bank account opening and PSP partnerships</li>
                    <li>• Payment rails integration (Mobile Money, ACH)</li>
                    <li>• Liquidity venue onboarding</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Weeks 5-8: Compliance Setup</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Licensing applications (Exchange, PI, VASP)</li>
                    <li>• Regulatory reporting infrastructure</li>
                    <li>• AML monitoring and transaction screening</li>
                    <li>• Data privacy and LGPD/GDPR compliance</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Weeks 9-10: Infrastructure Deployment</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Orderbook engine and matching logic</li>
                    <li>• API banking integrations</li>
                    <li>• Blockchain infrastructure (custody, settlement)</li>
                    <li>• Security and risk management systems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Weeks 11-12: Testing & Launch</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• End-to-end testing (KYC, deposits, trading, withdrawals)</li>
                    <li>• Soft launch with limited users</li>
                    <li>• Monitoring and incident response</li>
                    <li>• Full launch and marketing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Brazil took 18 months</strong> because we built everything from scratch. 
                <strong className="text-foreground"> Nigeria and Ghana will take 12 weeks</strong> because we're replicating a proven blueprint 
                with known vendors and processes.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

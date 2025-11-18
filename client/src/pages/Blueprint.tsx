import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { TrendingUp, Building2, Briefcase, CheckCircle2, ArrowRight, Globe } from "lucide-react";

const operatingSystems = [
  {
    title: "Exchange OS (B2C)",
    icon: TrendingUp,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    components: [
      "Spot engine (orderbook)",
      "Retail KYC tiers (L1/L2/L3)",
      "Liquidity provisioning",
      "Community layer (creators, ambassadors, Web3 culture)",
      "Growth + Performance teams",
      "MOS (Marketing Operating System)",
      "App-first UX",
    ],
  },
  {
    title: "Payments OS (B2B)",
    icon: Building2,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    components: [
      "Business Portal",
      "Backoffice/Admin system",
      "Merchant KYC/AML",
      "Collect → Convert → Settle flow",
      "PIX/PSP integrations",
      "Pricing engine for spreads",
      "Reporting & reconciliation",
      "Treasury settlement logic",
    ],
  },
  {
    title: "OTC OS (Institutional)",
    icon: Briefcase,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    components: [
      "RFQ engine",
      "Lock-in window (D0/D1/D2) with 16:00 cutoff",
      "Institutional liquidity network (crypto + fiat)",
      "Counterparty onboarding",
      "Treasury accounts (BRL/USDT)",
      "Travel Rule enforcement",
      "China corridor execution",
    ],
  },
];

const replicationRequirements = [
  {
    os: "Exchange OS",
    icon: TrendingUp,
    color: "text-blue-400",
    requirements: [
      "KYC provider (Zoloz, SmileID, Sumsub)",
      "Liquidity venues (Binance, Bybit, local exchanges)",
      "Community/creator ecosystem",
      "Regulatory clarity for retail trading",
    ],
  },
  {
    os: "Payments OS",
    icon: Building2,
    color: "text-green-400",
    requirements: [
      "Instant local rails (PIX/Mobile Money/ACH)",
      "PSP partners (Transfeera, Flutterwave, Paystack)",
      "Merchant onboarding flows",
      "Settlement infrastructure",
    ],
  },
  {
    os: "OTC OS",
    icon: Briefcase,
    color: "text-purple-400",
    requirements: [
      "Institutional counterparties (BlockFills, B2C2, local OTC desks)",
      "Regulated FX pathways",
      "Ability to lock quotes + settle D0/D1/D2",
      "Travel Rule infrastructure",
    ],
  },
];



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
            Brazil was not a pilot—it was the **prototype**. We built three operating systems in parallel, 
            stress-tested them under real market conditions, and created a replicable blueprint for Nigeria, 
            Ghana, and beyond.
          </p>
        </div>

        {/* Section 1: Three Operating Systems */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Brazil Built Three Operating Systems</h2>
            <p className="text-muted-foreground">
              These three OS modules work independently but compound when integrated. Together, they form 
              the four-rail flywheel that differentiates Coins from single-product competitors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {operatingSystems.map((os, idx) => {
              const Icon = os.icon;
              return (
                <Card key={idx} className={`${os.borderColor}`}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${os.bgColor} flex items-center justify-center mb-3`}>
                      <Icon className={`h-6 w-6 ${os.color}`} />
                    </div>
                    <CardTitle className="text-xl">{os.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {os.components.map((component, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${os.color}`} />
                          <span className="text-muted-foreground">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Section 2: Why Brazil Is the Prototype */}
        <Card className="bg-primary/5 border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl">Why Brazil Is the Prototype</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p className="text-foreground font-semibold">
              Brazil was not chosen randomly. It has the exact conditions to build three operating systems at once:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Instant Payments (PIX)</p>
                  <p>
                    PIX processes 3.9 billion transactions per month, making it the fastest-growing instant payment 
                    system globally. This enables the Payments OS to operate with sub-10-second settlement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">High Stablecoin Adoption</p>
                  <p>
                    Brazil accounts for 18% of global USDT volume (Chainalysis 2024). Retail users, SMEs, and 
                    institutions already understand stablecoins—no education layer required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">FX Volatility + Dollar Demand</p>
                  <p>
                    BRL devalued 22% against USD in 2024. Importers, exporters, and treasury managers need 
                    dollar-denominated settlement to hedge FX risk—this is the OTC OS use case.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Large SME Import/Export Base</p>
                  <p>
                    Brazil imports $280B annually, with 68% sourced from China. The China corridor (BRL → USDT → CNY) 
                    is the primary use case for OTC and OCBS.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Creator-Driven Culture</p>
                  <p>
                    Brazil has the 3rd largest creator economy globally (YouTube, Instagram, TikTok). Creators 
                    act as last-mile distribution for the Exchange OS, driving retail adoption.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">4-Rail Flywheel Operates End-to-End</p>
                  <p>
                    These five conditions allow Exchange, Payments, OTC, and OCBS to run simultaneously. 
                    This is why Brazil is the blueprint—not because it's large, but because it's **complete**.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: How These OS Replicate in New Markets */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">How These OS Replicate in New Markets</h2>
            <p className="text-muted-foreground">
              Each operating system has specific replication requirements. Nigeria and Ghana meet these requirements; 
              Argentina and Mexico do not (yet).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {replicationRequirements.map((req, idx) => {
              const Icon = req.icon;
              return (
                <Card key={idx} className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`h-5 w-5 ${req.color}`} />
                      <CardTitle className="text-lg">{req.os} Replication</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {req.requirements.map((requirement, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-sm">
                          <ArrowRight className={`h-4 w-4 mt-0.5 flex-shrink-0 ${req.color}`} />
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>



        {/* Strategic Insights */}
        <Card className="bg-accent/30 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Why This Blueprint Is Defensible</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Competitors Cannot Replicate All Three OS</p>
                <p>
                  Mercado Bitcoin has Exchange OS but no Payments OS or OTC OS. Binance has Exchange OS and OTC OS 
                  but no Payments OS (no PIX integration). Transfero has OTC OS but no Exchange OS or Payments OS. 
                  Coins is the only platform with all three operating systems integrated.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Rapid Market Replication</p>
                <p>
                  Brazil required 18 months to build the three operating systems from zero. Nigeria and Ghana 
                  replicate much faster because we're deploying pre-built modules, not developing new infrastructure. 
                  This is why the blueprint compounds—each new market becomes faster and cheaper to launch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Nigeria & Ghana Are Not Experiments</p>
                <p>
                  These markets were selected because they meet the same structural conditions as Brazil: instant 
                  payments (Mobile Money), high stablecoin adoption, FX volatility, import/export demand, and 
                  creator culture. They are not "tests"—they are blueprint replications with predictable outcomes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>


      </div>
    </DashboardLayout>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { CheckCircle2, Link as LinkIcon, Eye, Handshake, Plug } from "lucide-react";

type RelationshipType = "direct" | "strategic" | "counterparty" | "observation";

interface Provider {
  name: string;
  relationship: RelationshipType;
  description: string;
}

const relationshipConfig: Record<RelationshipType, { icon: any; label: string; color: string }> = {
  direct: {
    icon: Plug,
    label: "Direct Integration",
    color: "text-green-400",
  },
  strategic: {
    icon: LinkIcon,
    label: "Strategic Connectivity",
    color: "text-blue-400",
  },
  counterparty: {
    icon: Handshake,
    label: "Market Counterparty",
    color: "text-purple-400",
  },
  observation: {
    icon: Eye,
    label: "Ecosystem Observation",
    color: "text-orange-400",
  },
};

const ecosystemLayers: {
  title: string;
  description: string;
  providers: Provider[];
}[] = [
  {
    title: "1. Banking & PSP Rails",
    description: "Fiat on/off-ramps, settlement infrastructure, and domestic payment channels",
    providers: [
      {
        name: "Transfeera",
        relationship: "direct",
        description: "PSP for PIX integration, instant BRL deposits/withdrawals",
      },
      {
        name: "Qyon",
        relationship: "direct",
        description: "Payment orchestration, multi-bank connectivity",
      },
      {
        name: "Stark Bank",
        relationship: "direct",
        description: "Banking-as-a-Service and account infrastructure integrated directly into Coins' settlement architecture.",
      },
      {
        name: "Onz",
        relationship: "strategic",
        description: "Alternative PSP for redundancy and failover",
      },
    ],
  },
  {
    title: "2. Exchanges & Liquidity Venues",
    description: "Orderbook liquidity, hedging counterparties, and market-making infrastructure",
    providers: [
      {
        name: "Mercado Bitcoin",
        relationship: "counterparty",
        description: "Largest Brazilian exchange, BRL-USDT liquidity source",
      },
      {
        name: "Foxbit",
        relationship: "counterparty",
        description: "Secondary Brazilian exchange, backup liquidity",
      },
      {
        name: "Binance",
        relationship: "counterparty",
        description: "Global exchange, deep USDT liquidity for hedging",
      },
      {
        name: "Bybit",
        relationship: "counterparty",
        description: "Alternative global venue, competitive spreads",
      },
      {
        name: "Bitget",
        relationship: "observation",
        description: "Emerging exchange, monitoring for future integration",
      },
    ],
  },
  {
    title: "3. Stablecoin Issuers & FX Infrastructure",
    description: "Stablecoin minting/redemption, treasury management, and settlement rails",
    providers: [
      {
        name: "Circle (USDC)",
        relationship: "strategic",
        description: "Primary stablecoin issuer, regulated USD-backed reserves",
      },
      {
        name: "Tether (USDT)",
        relationship: "strategic",
        description: "Dominant stablecoin in LatAm and Africa, high liquidity",
      },
      {
        name: "Braza Bank",
        relationship: "direct",
        description: "Licensed Brazilian financial institution providing BRL settlement, domestic liquidity and fiat-side infrastructure.",
      },
      {
        name: "BRLA",
        relationship: "strategic",
        description: "BRL-backed stablecoin issued by Braza Bank; domestic settlement alternative integrated into Coins' treasury architecture.",
      },
      {
        name: "Transfero",
        relationship: "counterparty",
        description: "Institutional OTC desk, stablecoin liquidity provider",
      },
    ],
  },
  {
    title: "4. KYC/AML & Compliance",
    description: "Identity verification, transaction monitoring, and regulatory reporting",
    providers: [
      {
        name: "Zoloz (Ant Group)",
        relationship: "direct",
        description: "Biometric KYC, liveness detection, document verification",
      },
      {
        name: "SmileID",
        relationship: "direct",
        description: "Africa-focused KYC, Nigeria and Ghana onboarding",
      },
      {
        name: "Sumsub",
        relationship: "observation",
        description: "Global KYC alternative, monitoring for multi-region expansion",
      },
      {
        name: "COAF (Brazil)",
        relationship: "strategic",
        description: "Financial intelligence unit, AML reporting compliance",
      },
    ],
  },
  {
    title: "5. OTC & Brokerage Counterparties",
    description: "Large-ticket RFQ execution, institutional FX, and treasury services",
    providers: [
      {
        name: "BlockFills",
        relationship: "counterparty",
        description: "Institutional OTC desk, multi-million dollar RFQ execution",
      },
      {
        name: "Genial Investimentos",
        relationship: "direct",
        description: "Brazilian brokerage serving as institutional counterparty and strategic partner for BRL–USDT corridor flows.",
      },
      {
        name: "Transfero",
        relationship: "counterparty",
        description: "Local OTC desk, BRL-USDT corridor specialist",
      },
      {
        name: "B2C2",
        relationship: "observation",
        description: "Global liquidity provider, monitoring for future integration",
      },
    ],
  },
];

function ProviderCard({ provider }: { provider: Provider }) {
  const config = relationshipConfig[provider.relationship];
  const Icon = config.icon;

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
      <div className={`w-10 h-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 ${config.color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <p className="font-semibold text-foreground">{provider.name}</p>
          <span className={`text-xs px-2 py-0.5 rounded-full bg-background ${config.color}`}>
            {config.label}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{provider.description}</p>
      </div>
    </div>
  );
}

export default function Infrastructure() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Ecosystem Map
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Coins operates as an orchestration layer across a five-tier ecosystem. We integrate directly with critical 
            infrastructure, maintain strategic connectivity with key partners, and transact with market counterparties 
            to deliver the four-rail product stack.
          </p>
        </div>

        {/* Relationship Legend */}
        <Card className="bg-accent/20 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl">Relationship Classifications</CardTitle>
            <p className="text-sm text-muted-foreground pt-2">
              Each provider is classified by the depth and nature of our relationship:
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(relationshipConfig).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <div key={key} className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 ${config.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className={`font-semibold ${config.color}`}>{config.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {key === "direct" && "API-level integration, contractual SLA, critical dependency"}
                        {key === "strategic" && "Partnership agreement, shared roadmap, mutual referrals"}
                        {key === "counterparty" && "Transactional relationship, no exclusive agreement"}
                        {key === "observation" && "Monitoring for future integration, no active relationship"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Ecosystem Layers */}
        <div className="space-y-8">
          {ecosystemLayers.map((layer, idx) => (
            <Card key={idx} className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{layer.title}</CardTitle>
                <p className="text-sm text-muted-foreground pt-2">{layer.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {layer.providers.map((provider, pIdx) => (
                    <ProviderCard key={pIdx} provider={provider} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strategic Insights */}
        <Card className="bg-primary/5 border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl">Why This Ecosystem Structure Matters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Redundancy & Resilience</p>
                <p>
                  Multiple providers per layer ensure zero single points of failure. If Transfeera goes down, 
                  Qyon and Onz provide backup PSP connectivity. If Binance liquidity dries up, Bybit and Mercado 
                  Bitcoin absorb the flow.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Blueprint Replicability</p>
                <p>
                  The five-layer structure is not Brazil-specific—it's the template for all markets. Nigeria 
                  replicates Layer 1 (PSPs) with Flutterwave and Paystack, Layer 4 (KYC) with SmileID, and 
                  Layer 2 (exchanges) with Binance and Luno. Same blueprint, different providers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Competitive Moat Through Integration Depth</p>
                <p>
                  Competitors like Mercado Bitcoin or Binance operate within a single layer (exchange). Coins 
                  orchestrates across all five layers, creating cross-layer network effects that single-product 
                  platforms cannot replicate without rebuilding their entire business model.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">12-Week Market Entry Timeline</p>
                <p>
                  Because the ecosystem structure is standardized, Coins can deploy to new markets in 12 weeks: 
                  Week 1-3 (KYC/AML setup), Week 4-6 (PSP integration), Week 7-9 (exchange liquidity), Week 10-12 
                  (OTC partnerships). Brazil took 18 months to build; Nigeria and Ghana take 12 weeks to replicate.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="p-4 rounded-lg bg-accent/50 text-xs text-muted-foreground border border-border">
          <p>
            <strong className="text-foreground">Disclaimer:</strong> Provider relationships are subject to change. 
            "Direct Integration" and "Strategic Connectivity" classifications reflect contractual agreements as of 
            November 2024. "Market Counterparty" and "Ecosystem Observation" classifications reflect transactional 
            relationships with no exclusivity. This ecosystem map is for due diligence purposes and does not constitute 
            an endorsement or recommendation of any provider.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

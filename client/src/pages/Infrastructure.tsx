import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/DashboardLayout";
import { CheckCircle2, Link as LinkIcon, Eye, Handshake, Plug } from "lucide-react";

type RelationshipType = "direct" | "strategic" | "counterparty" | "observation";

interface Provider {
  name: string;
  relationship: RelationshipType;
  description: string;
}

const relationshipConfig: Record<RelationshipType, { icon: any; label: string; color: string; bgColor: string }> = {
  direct: {
    icon: Plug,
    label: "Direct Integration",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  strategic: {
    icon: LinkIcon,
    label: "Strategic Connectivity",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  counterparty: {
    icon: Handshake,
    label: "Market Counterparty",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  observation: {
    icon: Eye,
    label: "Ecosystem Observation",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
};

const ecosystemLayers: {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  providers: Provider[];
}[] = [
  {
    id: "banking",
    title: "Banking & PSP Rails",
    shortTitle: "Banking",
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
        name: "BS2",
        relationship: "direct",
        description: "Brazilian digital bank providing account infrastructure and settlement services",
      },
      {
        name: "Topazio Bank Account",
        relationship: "direct",
        description: "FX bank account for cross-border settlement and remittance flows",
      },
      {
        name: "Remessa Online via Topazio",
        relationship: "strategic",
        description: "Cross-border remittance platform integrated via Topazio banking infrastructure",
      },
      {
        name: "Onz",
        relationship: "strategic",
        description: "Alternative PSP for redundancy and failover",
      },
      {
        name: "Bluegreen",
        relationship: "direct",
        description: "Payment gateway for merchant integration and checkout flows",
      },
    ],
  },
  {
    id: "exchanges",
    title: "Exchanges & Liquidity Venues",
    shortTitle: "Exchanges",
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
    id: "stablecoins",
    title: "Stablecoin Issuers & FX Infrastructure",
    shortTitle: "Stablecoins",
    description: "Stablecoin minting/redemption, treasury management, and settlement rails",
    providers: [
      {
        name: "Circle (USDC)",
        relationship: "strategic",
        description: "Primary stablecoin issuer, regulated USD-backed reserves. USDC is the preferred stablecoin for institutional treasury settlement.",
      },
      {
        name: "Tether (USDT)",
        relationship: "strategic",
        description: "Dominant stablecoin in LatAm and Africa, high liquidity. USDT is the primary stablecoin for retail and OTC flows.",
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
        name: "ARBI",
        relationship: "strategic",
        description: "FX infrastructure provider for cross-border settlement and currency conversion",
      },
    ],
  },
  {
    id: "compliance",
    title: "KYC/AML & Compliance",
    shortTitle: "Compliance",
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
    id: "otc",
    title: "OTC & Brokerage Counterparties",
    shortTitle: "OTC",
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
        name: "Conduit",
        relationship: "counterparty",
        description: "OTC desk for institutional crypto liquidity and large-ticket execution",
      },
      {
        name: "Capitual",
        relationship: "counterparty",
        description: "OTC desk specializing in LatAm institutional flows",
      },
      {
        name: "B2C2",
        relationship: "observation",
        description: "Global liquidity provider, monitoring for future integration",
      },
    ],
  },
];

export default function Infrastructure() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(relationshipConfig).map(([key, config]) => {
            const Icon = config.icon;
            return (
              <div key={key} className={`p-3 rounded-lg border ${config.bgColor} border-border`}>
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`h-4 w-4 ${config.color}`} />
                  <span className={`text-xs font-semibold ${config.color}`}>{config.label}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {key === "direct" && "API integration, SLA"}
                  {key === "strategic" && "Partnership, shared roadmap"}
                  {key === "counterparty" && "Transactional relationship"}
                  {key === "observation" && "Monitoring for future"}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tabs for Layers */}
        <Tabs defaultValue="banking" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {ecosystemLayers.map((layer, idx) => (
              <TabsTrigger key={layer.id} value={layer.id} className="text-xs md:text-sm">
                <span className="hidden md:inline">{layer.shortTitle}</span>
                <span className="md:hidden">{idx + 1}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {ecosystemLayers.map((layer) => (
            <TabsContent key={layer.id} value={layer.id} className="space-y-6">
              {/* Layer Header */}
              <div className="text-center space-y-2 pb-4 border-b">
                <h2 className="text-2xl md:text-3xl font-bold">{layer.title}</h2>
                <p className="text-muted-foreground">{layer.description}</p>
              </div>

              {/* Providers Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Provider</th>
                      <th className="text-left p-3 font-semibold hidden md:table-cell">Relationship</th>
                      <th className="text-left p-3 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {layer.providers.map((provider, idx) => {
                      const config = relationshipConfig[provider.relationship];
                      const Icon = config.icon;
                      return (
                        <tr key={idx} className="border-b hover:bg-accent/50 transition-colors">
                          <td className="p-3">
                            <div className="font-semibold text-foreground">{provider.name}</div>
                            <div className="md:hidden mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${config.bgColor} ${config.color}`}>
                                {config.label}
                              </span>
                            </div>
                          </td>
                          <td className="p-3 hidden md:table-cell">
                            <div className="flex items-center gap-2">
                              <Icon className={`h-4 w-4 ${config.color}`} />
                              <span className={`text-sm ${config.color}`}>{config.label}</span>
                            </div>
                          </td>
                          <td className="p-3 text-sm text-muted-foreground">{provider.description}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          ))}
        </Tabs>

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
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

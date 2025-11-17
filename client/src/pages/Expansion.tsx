import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, TrendingUp, Users, DollarSign } from "lucide-react";

export default function Expansion() {
  const markets = [
    {
      country: "Brazil",
      priority: "High",
      status: "Active",
      allocation: "40%",
      population: "215M",
      cryptoAdoption: "High",
      keyFocus: "Chinese import/export connections, PIX integration",
      color: "bg-green-500"
    },
    {
      country: "Thailand",
      priority: "High",
      status: "Active",
      allocation: "30%",
      population: "70M",
      cryptoAdoption: "Very High",
      keyFocus: "Tourism sector, regional crypto hub",
      color: "bg-blue-500"
    },
    {
      country: "Mexico",
      priority: "Medium",
      status: "Planning",
      allocation: "20%",
      population: "130M",
      cryptoAdoption: "Growing",
      keyFocus: "Remittances, US trade corridor",
      color: "bg-purple-500"
    },
    {
      country: "Argentina",
      priority: "Medium",
      status: "Research",
      allocation: "10%",
      population: "46M",
      cryptoAdoption: "High",
      keyFocus: "Currency instability, crypto demand",
      color: "bg-orange-500"
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Expansion Strategy
          </h1>
          <p className="text-muted-foreground">
            Geographic prioritization and resource allocation framework
          </p>
        </div>

        {/* Strategic Framework */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Prioritization Framework</CardTitle>
            <CardDescription>
              How we think about expansion and resource allocation across markets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Key Evaluation Criteria</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Market Size & Demographics</p>
                      <p className="text-xs text-muted-foreground">Population, GDP, crypto adoption rates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Regulatory Environment</p>
                      <p className="text-xs text-muted-foreground">Licensing requirements, compliance complexity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Revenue Potential</p>
                      <p className="text-xs text-muted-foreground">Transaction volume, fee structure, margins</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-4 w-4 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Local Partnerships</p>
                      <p className="text-xs text-muted-foreground">Banking relationships, distribution channels</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Resource Allocation Strategy</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Brazil</span>
                      <span className="text-sm font-semibold text-foreground">40%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '40%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Thailand</span>
                      <span className="text-sm font-semibold text-foreground">30%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '30%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Mexico</span>
                      <span className="text-sm font-semibold text-foreground">20%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: '20%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Argentina</span>
                      <span className="text-sm font-semibold text-foreground">10%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500" style={{ width: '10%' }} />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Resource allocation includes personnel, marketing spend, partnership development, 
                    and operational infrastructure investments.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Analysis */}
        <div className="space-y-6">
          {markets.map((market, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-lg ${market.color}/20 flex items-center justify-center`}>
                      <Globe className={`h-5 w-5 ${market.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div>
                      <CardTitle className="text-foreground">{market.country}</CardTitle>
                      <CardDescription>
                        Priority: {market.priority} • Status: {market.status}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{market.allocation}</div>
                    <p className="text-xs text-muted-foreground">Resource allocation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Market Overview</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Population</span>
                        <span className="font-medium text-foreground">{market.population}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Crypto Adoption</span>
                        <span className="font-medium text-foreground">{market.cryptoAdoption}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Strategic Focus</h4>
                    <p className="text-sm text-muted-foreground">{market.keyFocus}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

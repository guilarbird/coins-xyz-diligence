import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function OnChainResearch() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">On-Chain Research</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Blockchain analytics, transaction flow analysis, and on-chain metrics for Coins.xyz operations.
          </p>
        </div>

        {/* Work in Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Construction className="w-5 h-5" />
              Work in Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-8 border-2 border-dashed rounded-lg text-center">
              <Construction className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold text-xl mb-2">On-Chain Research Coming Soon</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                This section will include detailed blockchain analytics, transaction flow analysis, wallet clustering, 
                and on-chain metrics for Coins.xyz operations across Brazil, Nigeria, and Ghana.
              </p>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Planned Content:</p>
                <ul className="space-y-1">
                  <li>• BRL-USDT corridor transaction flows</li>
                  <li>• Stablecoin settlement volumes by chain</li>
                  <li>• Wallet clustering and user behavior analysis</li>
                  <li>• Cross-chain bridge usage patterns</li>
                  <li>• On-chain liquidity depth metrics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

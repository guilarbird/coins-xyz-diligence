import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Key, Zap, DollarSign, ArrowLeftRight, Webhook } from "lucide-react";

export default function ApiDocs() {
  return (
    <div className="min-h-screen p-6 md:p-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Code className="h-8 w-8 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">API Documentation</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Complete reference for the COINS Brazil Public Spot API. Build seamless integrations for PIX payments, 
          OTC trading, and crypto operations.
        </p>
      </div>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://api-docs.coinsbrasil.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <p className="font-semibold text-foreground mb-1">Interactive API Explorer</p>
              <p className="text-sm text-muted-foreground">Test endpoints directly in Swagger UI</p>
            </a>
            <div className="p-4 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-1">Base URL</p>
              <code className="text-sm text-primary">https://fiat-api.coinsbrasil.xyz</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Authentication */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5 text-yellow-400" />
            Authentication
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            All API requests require authentication via access token obtained through the login endpoint.
          </p>
          <div className="p-4 rounded-lg bg-muted/50">
            <p className="font-mono text-sm mb-2"><span className="text-green-400 font-semibold">POST</span> /v2/login</p>
            <p className="text-sm text-muted-foreground">Login for access token</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">Request Headers</p>
            <code className="block p-3 rounded bg-muted text-sm">
              Authorization: Bearer &lt;your_access_token&gt;
            </code>
          </div>
        </CardContent>
      </Card>

      {/* FIAT / PIX Payments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-400" />
            FIAT / PIX Payments
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Complete suite of endpoints for managing PIX payments, cash-in/cash-out operations, and BRL transactions.
          </p>

          <div className="space-y-3">
            {/* Balance */}
            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-blue-400 font-semibold">GET</span> /v2/fiat/balance
              </p>
              <p className="text-sm text-muted-foreground">Query account balance in BRL</p>
            </div>

            {/* Orders */}
            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-blue-400 font-semibold">GET</span> /v2/fiat/orders
              </p>
              <p className="text-sm text-muted-foreground">Query account orders with pagination and filters</p>
            </div>

            {/* Transactions */}
            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-blue-400 font-semibold">GET</span> /v2/fiat/transactions
              </p>
              <p className="text-sm text-muted-foreground">Query account transactions history</p>
            </div>

            {/* Cash In */}
            <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
              <p className="font-mono text-sm mb-2">
                <span className="text-green-400 font-semibold">POST</span> /v2/fiat/orders/cash-in
              </p>
              <p className="text-sm text-muted-foreground mb-3">Generates a BRCode (PIX QR code) for cash-in order</p>
              <div className="text-xs space-y-1">
                <p className="text-foreground font-semibold">Use Case:</p>
                <p className="text-muted-foreground">Merchants accepting PIX payments, users depositing BRL</p>
              </div>
            </div>

            {/* Order Details */}
            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-blue-400 font-semibold">GET</span> /v2/fiat/orders/{"{id}"}
              </p>
              <p className="text-sm text-muted-foreground">Get detailed information about a specific order</p>
            </div>

            {/* Cash Out */}
            <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
              <p className="font-mono text-sm mb-2">
                <span className="text-green-400 font-semibold">POST</span> /v2/fiat/orders/cash-out
              </p>
              <p className="text-sm text-muted-foreground mb-3">Cash out to a PIX key (CPF, email, phone, random key)</p>
              <div className="text-xs space-y-1">
                <p className="text-foreground font-semibold">Use Case:</p>
                <p className="text-muted-foreground">Withdrawals, supplier payments, remittances</p>
              </div>
            </div>

            {/* Batch Cash Out */}
            <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
              <p className="font-mono text-sm mb-2">
                <span className="text-green-400 font-semibold">POST</span> /v2/fiat/orders/batch-cash-out
              </p>
              <p className="text-sm text-muted-foreground mb-3">Process batch cash-out operations from CSV file</p>
              <div className="text-xs space-y-1">
                <p className="text-foreground font-semibold">Use Case:</p>
                <p className="text-muted-foreground">Payroll, bulk supplier payments, mass disbursements</p>
              </div>
            </div>

            {/* Payout Query */}
            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-green-400 font-semibold">POST</span> /v2/fiat/payout/query
              </p>
              <p className="text-sm text-muted-foreground">Query QR code information before payout</p>
            </div>

            {/* Payout Confirm */}
            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-green-400 font-semibold">POST</span> /v2/fiat/payout/confirm
              </p>
              <p className="text-sm text-muted-foreground">Confirm payout for a QR code</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* OTC Trading */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowLeftRight className="h-5 w-5 text-purple-400" />
            OTC Trading
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Request-for-Quote (RFQ) endpoints for institutional OTC trading with lock-in windows and competitive pricing.
          </p>

          <div className="space-y-3">
            {/* Quote */}
            <div className="p-4 rounded-lg border border-purple-500/20 bg-purple-500/5">
              <p className="font-mono text-sm mb-2">
                <span className="text-blue-400 font-semibold">GET</span> /otc/quote/{"{symbol}"}/{"{side}"}
              </p>
              <p className="text-sm text-muted-foreground mb-3">Get real-time quote for crypto in BRL (buy/sell)</p>
              <div className="text-xs space-y-1">
                <p className="text-foreground font-semibold">Parameters:</p>
                <p className="text-muted-foreground">• symbol: USDT, BTC, ETH, etc.</p>
                <p className="text-muted-foreground">• side: buy or sell</p>
              </div>
            </div>

            {/* Lock */}
            <div className="p-4 rounded-lg border border-purple-500/20 bg-purple-500/5">
              <p className="font-mono text-sm mb-2">
                <span className="text-green-400 font-semibold">POST</span> /otc/lock
              </p>
              <p className="text-sm text-muted-foreground mb-3">Lock an amount with a quote (D0/D1/D2 settlement)</p>
              <div className="text-xs space-y-1">
                <p className="text-foreground font-semibold">Use Case:</p>
                <p className="text-muted-foreground">Importers hedging FX risk, corporates managing treasury, large trades with price protection</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
            <p className="font-semibold text-foreground mb-2">OTC Lock-In Mechanics</p>
            <p className="text-sm text-muted-foreground">
              Quotes are locked for a specific time window (typically 30-60 seconds). Settlement options include 
              D0 (same-day), D1 (next business day), and D2 (two business days). Cutoff time is 16:00 BRT.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Crypto */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-400" />
            Crypto Operations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Query crypto balances and wallet addresses across multiple networks.
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-blue-400 font-semibold">GET</span> /crypto/balance/{"{symbol}"}
              </p>
              <p className="text-sm text-muted-foreground">Query crypto account balance for a specific token</p>
            </div>

            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-blue-400 font-semibold">GET</span> /crypto/wallet/{"{network}"}
              </p>
              <p className="text-sm text-muted-foreground">Query wallet address by network (ERC20, TRC20, etc.)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* WebHooks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Webhook className="h-5 w-5 text-cyan-400" />
            WebHooks
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Configure webhooks to receive real-time notifications for order updates, transaction confirmations, and balance changes.
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-yellow-400 font-semibold">PUT</span> /v2/webhook
              </p>
              <p className="text-sm text-muted-foreground">Set a URL to receive webhook notifications</p>
            </div>

            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-blue-400 font-semibold">GET</span> /v2/webhook
              </p>
              <p className="text-sm text-muted-foreground">List all configured webhooks</p>
            </div>

            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-blue-400 font-semibold">GET</span> /v2/webhook/{"{webhook_type}"}
              </p>
              <p className="text-sm text-muted-foreground">Get details of a specific webhook</p>
            </div>

            <div className="p-4 rounded-lg border border-border/50">
              <p className="font-mono text-sm mb-2">
                <span className="text-red-400 font-semibold">DELETE</span> /v2/webhook/{"{webhook_type}"}
              </p>
              <p className="text-sm text-muted-foreground">Remove a webhook configuration</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Best Practices & Rate Limits</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-foreground mb-2">Security</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Store API keys securely (never in client-side code)</li>
                <li>• Rotate tokens regularly</li>
                <li>• Use HTTPS for all requests</li>
                <li>• Implement webhook signature verification</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Performance</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Implement exponential backoff for retries</li>
                <li>• Cache balance queries when possible</li>
                <li>• Use batch endpoints for bulk operations</li>
                <li>• Monitor webhook delivery success rates</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
            <p className="font-semibold text-foreground mb-2">Support</p>
            <p className="text-sm text-muted-foreground">
              For API support, integration assistance, or to request higher rate limits, contact the Coins technical team 
              or visit the interactive documentation at{" "}
              <a 
                href="https://api-docs.coinsbrasil.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                api-docs.coinsbrasil.xyz
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

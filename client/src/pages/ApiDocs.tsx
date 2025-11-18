import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Key, Zap, DollarSign, ArrowLeftRight, Webhook, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md bg-muted hover:bg-accent transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
      </button>
      <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}

function EndpointCard({ 
  method, 
  path, 
  description, 
  example,
  response,
  useCase
}: { 
  method: string; 
  path: string; 
  description: string;
  example?: { curl: string; js: string; python: string };
  response?: string;
  useCase?: string;
}) {
  const methodColors: Record<string, string> = {
    GET: "text-blue-400",
    POST: "text-green-400",
    PUT: "text-yellow-400",
    DELETE: "text-red-400"
  };

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="font-mono text-sm mb-2">
              <span className={`${methodColors[method]} font-semibold`}>{method}</span>{" "}
              <span className="text-foreground">{path}</span>
            </p>
            <p className="text-sm text-muted-foreground">{description}</p>
            {useCase && (
              <div className="mt-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs font-semibold text-foreground mb-1">Use Case:</p>
                <p className="text-xs text-muted-foreground">{useCase}</p>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      {example && (
        <CardContent className="space-y-4">
          <Tabs defaultValue="curl" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="js">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="curl" className="mt-4">
              <CodeBlock code={example.curl} language="bash" />
            </TabsContent>
            <TabsContent value="js" className="mt-4">
              <CodeBlock code={example.js} language="javascript" />
            </TabsContent>
            <TabsContent value="python" className="mt-4">
              <CodeBlock code={example.python} language="python" />
            </TabsContent>
          </Tabs>
          {response && (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">Response:</p>
              <CodeBlock code={response} language="json" />
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}

export default function ApiDocs() {
  const baseUrl = "https://fiat-api.coinsbrasil.xyz";

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
              <code className="text-sm text-primary">{baseUrl}</code>
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
          
          <EndpointCard
            method="POST"
            path="/v2/login"
            description="Login for access token"
            example={{
              curl: `curl -X POST ${baseUrl}/v2/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "your-email@example.com",
    "password": "your-password"
  }'`,
              js: `const response = await fetch('${baseUrl}/v2/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'your-email@example.com',
    password: 'your-password'
  })
});
const data = await response.json();
const token = data.access_token;`,
              python: `import requests

response = requests.post('${baseUrl}/v2/login', json={
    'email': 'your-email@example.com',
    'password': 'your-password'
})
data = response.json()
token = data['access_token']`
            }}
            response={`{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}`}
          />

          <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
            <p className="font-semibold text-foreground mb-2">Using the Access Token</p>
            <p className="text-sm text-muted-foreground mb-3">
              Include the access token in the Authorization header for all subsequent requests:
            </p>
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
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Complete suite of endpoints for managing PIX payments, cash-in/cash-out operations, and BRL transactions.
          </p>

          <div className="space-y-4">
            <EndpointCard
              method="GET"
              path="/v2/fiat/balance"
              description="Query account balance in BRL"
              example={{
                curl: `curl -X GET ${baseUrl}/v2/fiat/balance \\
  -H "Authorization: Bearer YOUR_TOKEN"`,
                js: `const response = await fetch('${baseUrl}/v2/fiat/balance', {
  headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
});
const balance = await response.json();`,
                python: `response = requests.get('${baseUrl}/v2/fiat/balance',
    headers={'Authorization': 'Bearer YOUR_TOKEN'})
balance = response.json()`
              }}
              response={`{
  "balance": "15420.50",
  "currency": "BRL",
  "available": "15420.50",
  "locked": "0.00"
}`}
            />

            <EndpointCard
              method="POST"
              path="/v2/fiat/orders/cash-in"
              description="Generates a BRCode (PIX QR code) for cash-in order"
              useCase="Merchants accepting PIX payments, users depositing BRL"
              example={{
                curl: `curl -X POST ${baseUrl}/v2/fiat/orders/cash-in \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": "100.00",
    "description": "Deposit to wallet"
  }'`,
                js: `const response = await fetch('${baseUrl}/v2/fiat/orders/cash-in', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: '100.00',
    description: 'Deposit to wallet'
  })
});
const order = await response.json();`,
                python: `response = requests.post('${baseUrl}/v2/fiat/orders/cash-in',
    headers={'Authorization': 'Bearer YOUR_TOKEN'},
    json={'amount': '100.00', 'description': 'Deposit to wallet'})
order = response.json()`
              }}
              response={`{
  "order_id": "ORD-2025-001234",
  "amount": "100.00",
  "currency": "BRL",
  "status": "pending",
  "brcode": "00020126580014br.gov.bcb.pix...",
  "qr_code_url": "https://api.coinsbrasil.xyz/qr/ORD-2025-001234",
  "expires_at": "2025-11-18T03:00:00Z"
}`}
            />

            <EndpointCard
              method="POST"
              path="/v2/fiat/orders/cash-out"
              description="Cash out to a PIX key (CPF, email, phone, random key)"
              useCase="Withdrawals, supplier payments, remittances"
              example={{
                curl: `curl -X POST ${baseUrl}/v2/fiat/orders/cash-out \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": "500.00",
    "pix_key": "user@example.com",
    "pix_key_type": "email",
    "description": "Payment to supplier"
  }'`,
                js: `const response = await fetch('${baseUrl}/v2/fiat/orders/cash-out', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: '500.00',
    pix_key: 'user@example.com',
    pix_key_type: 'email',
    description: 'Payment to supplier'
  })
});
const order = await response.json();`,
                python: `response = requests.post('${baseUrl}/v2/fiat/orders/cash-out',
    headers={'Authorization': 'Bearer YOUR_TOKEN'},
    json={
        'amount': '500.00',
        'pix_key': 'user@example.com',
        'pix_key_type': 'email',
        'description': 'Payment to supplier'
    })
order = response.json()`
              }}
              response={`{
  "order_id": "ORD-2025-001235",
  "amount": "500.00",
  "currency": "BRL",
  "status": "processing",
  "pix_key": "user@example.com",
  "pix_key_type": "email",
  "estimated_completion": "2025-11-18T02:05:00Z"
}`}
            />

            <EndpointCard
              method="POST"
              path="/v2/fiat/orders/batch-cash-out"
              description="Process batch cash-out operations from CSV file"
              useCase="Payroll, bulk supplier payments, mass disbursements"
            />
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
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Request-for-Quote (RFQ) endpoints for institutional OTC trading with lock-in windows and competitive pricing.
          </p>

          <div className="space-y-4">
            <EndpointCard
              method="GET"
              path="/otc/quote/{symbol}/{side}"
              description="Get real-time quote for crypto in BRL (buy/sell)"
              example={{
                curl: `curl -X GET ${baseUrl}/otc/quote/USDT/buy \\
  -H "Authorization: Bearer YOUR_TOKEN"`,
                js: `const response = await fetch('${baseUrl}/otc/quote/USDT/buy', {
  headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
});
const quote = await response.json();`,
                python: `response = requests.get('${baseUrl}/otc/quote/USDT/buy',
    headers={'Authorization': 'Bearer YOUR_TOKEN'})
quote = response.json()`
              }}
              response={`{
  "quote_id": "QTE-2025-789012",
  "symbol": "USDT",
  "side": "buy",
  "price": "5.45",
  "amount": "10000.00",
  "total_brl": "54500.00",
  "valid_until": "2025-11-18T02:01:30Z",
  "settlement_options": ["D0", "D1", "D2"]
}`}
            />

            <EndpointCard
              method="POST"
              path="/otc/lock"
              description="Lock an amount with a quote (D0/D1/D2 settlement)"
              useCase="Importers hedging FX risk, corporates managing treasury, large trades with price protection"
              example={{
                curl: `curl -X POST ${baseUrl}/otc/lock \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "quote_id": "QTE-2025-789012",
    "amount": "10000.00",
    "settlement": "D1"
  }'`,
                js: `const response = await fetch('${baseUrl}/otc/lock', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    quote_id: 'QTE-2025-789012',
    amount: '10000.00',
    settlement: 'D1'
  })
});
const lock = await response.json();`,
                python: `response = requests.post('${baseUrl}/otc/lock',
    headers={'Authorization': 'Bearer YOUR_TOKEN'},
    json={
        'quote_id': 'QTE-2025-789012',
        'amount': '10000.00',
        'settlement': 'D1'
    })
lock = response.json()`
              }}
              response={`{
  "lock_id": "LOCK-2025-456789",
  "quote_id": "QTE-2025-789012",
  "symbol": "USDT",
  "side": "buy",
  "amount": "10000.00",
  "locked_price": "5.45",
  "total_brl": "54500.00",
  "settlement": "D1",
  "settlement_date": "2025-11-19",
  "status": "locked",
  "expires_at": "2025-11-18T16:00:00Z"
}`}
            />
          </div>

          <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
            <p className="font-semibold text-foreground mb-2">OTC Lock-In Mechanics</p>
            <p className="text-sm text-muted-foreground">
              Quotes are locked for a specific time window (typically 30-60 seconds). Settlement options include 
              <strong> D0</strong> (same-day), <strong>D1</strong> (next business day), and <strong>D2</strong> (two business days). 
              Cutoff time is <strong>16:00 BRT</strong>.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Crypto Operations */}
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

          <div className="space-y-4">
            <EndpointCard
              method="GET"
              path="/crypto/balance/{symbol}"
              description="Query crypto account balance for a specific token"
              example={{
                curl: `curl -X GET ${baseUrl}/crypto/balance/USDT \\
  -H "Authorization: Bearer YOUR_TOKEN"`,
                js: `const response = await fetch('${baseUrl}/crypto/balance/USDT', {
  headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
});
const balance = await response.json();`,
                python: `response = requests.get('${baseUrl}/crypto/balance/USDT',
    headers={'Authorization': 'Bearer YOUR_TOKEN'})
balance = response.json()`
              }}
              response={`{
  "symbol": "USDT",
  "balance": "25000.00",
  "available": "24500.00",
  "locked": "500.00",
  "networks": ["ERC20", "TRC20", "BEP20"]
}`}
            />

            <EndpointCard
              method="GET"
              path="/crypto/wallet/{network}"
              description="Query wallet address by network (ERC20, TRC20, etc.)"
            />
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

          <div className="space-y-4">
            <EndpointCard
              method="PUT"
              path="/v2/webhook"
              description="Set a URL to receive webhook notifications"
              example={{
                curl: `curl -X PUT ${baseUrl}/v2/webhook \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "webhook_type": "order_update",
    "url": "https://your-domain.com/webhooks/orders"
  }'`,
                js: `const response = await fetch('${baseUrl}/v2/webhook', {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    webhook_type: 'order_update',
    url: 'https://your-domain.com/webhooks/orders'
  })
});`,
                python: `response = requests.put('${baseUrl}/v2/webhook',
    headers={'Authorization': 'Bearer YOUR_TOKEN'},
    json={
        'webhook_type': 'order_update',
        'url': 'https://your-domain.com/webhooks/orders'
    })`
              }}
              response={`{
  "webhook_type": "order_update",
  "url": "https://your-domain.com/webhooks/orders",
  "status": "active",
  "created_at": "2025-11-18T02:00:00Z"
}`}
            />

            <EndpointCard
              method="GET"
              path="/v2/webhook"
              description="List all configured webhooks"
            />
          </div>

          <div className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <p className="font-semibold text-foreground mb-2">Webhook Payload Example</p>
            <CodeBlock code={`{
  "event": "order.completed",
  "timestamp": "2025-11-18T02:05:00Z",
  "data": {
    "order_id": "ORD-2025-001234",
    "type": "cash-in",
    "amount": "100.00",
    "currency": "BRL",
    "status": "completed"
  }
}`} language="json" />
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

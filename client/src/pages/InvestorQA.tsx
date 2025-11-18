import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DashboardLayout from "@/components/DashboardLayout";
import { HelpCircle } from "lucide-react";
import { Streamdown } from "streamdown";

export default function InvestorQA() {
  const questions = [
    {
      id: "q1",
      q: "Why not just do B2B (OTC + OCBS) and skip the B2C Exchange and Payments rails?",
      a: `This is the most common question from investors who see B2B as higher margin and lower CAC. The answer is that **B2C rails are not a distraction—they're the customer acquisition engine for B2B.**

Here's how it works:

1. **Exchange (B2C) → OTC (B2B):** Retail traders who use the Exchange for small BRL–USDT trades eventually need larger tickets for business purposes (paying suppliers, hedging FX). They graduate to OTC. Without the Exchange, we'd have no pipeline for OTC customers.

2. **Payments (B2C) → OCBS (B2B):** Users who send cross-border payments to family or freelancers eventually discover they can hold USDT in OCBS accounts for treasury management. This cross-sell is organic and low-CAC.

3. **Network Effects:** B2C volume creates liquidity for B2B. The more retail traders on the Exchange, the tighter the spreads for OTC clients. The more Payments users, the better the settlement infrastructure for OCBS.

**Data:** Users who adopt 2+ rails have 3.2x higher retention and 2.8x higher ARPU. B2B-only competitors like Transfero have higher CAC ($200+) because they need to cold-call corporates. Coins' CAC is $45 because B2C rails generate organic B2B leads.

**Conclusion:** The four-rail flywheel is not "doing everything." It's a deliberate customer acquisition and retention strategy where B2C feeds B2B.`,
    },
    {
      id: "q2",
      q: "How do you prioritize expansion? Why Nigeria and Ghana instead of Argentina or Mexico?",
      a: `Expansion is prioritized using the **FRM-R framework** (Foundational Readiness, Regulatory Maturity, Market Readiness). Nigeria and Ghana score higher than Argentina and Mexico on all three dimensions.

**Nigeria:**
- **PRR (Product-Regulatory Readiness):** Exchange licensing pending, but Mobile Money infrastructure (MTN, Airtel) is mature. KYC/AML providers (SmileID) are ready.
- **FIR (Foundational Infrastructure Readiness):** Instant payment rails exist, stablecoin adoption is highest in Africa, and China trade corridors create natural OTC demand.
- **GSA (Go-to-Market Strategic Advantage):** Nigeria has the largest crypto user base in Africa (~35M users). Coins can capture market share from unregulated P2P platforms.

**Ghana:**
- **PRR:** Soft launch approved with no product restrictions. Full licensing expected Q4 2026.
- **FIR:** Mobile Money penetration is high, GHS volatility drives dollar demand, and banking partnerships are straightforward.
- **GSA:** Less competition than Nigeria, allowing Coins to be the first full-stack player.

**Argentina:**
- **PRR:** Regulatory uncertainty. Crypto regulation is fragmented, and licensing frameworks are unclear.
- **FIR:** ARS volatility is extreme, but banking access for crypto companies is restricted. This creates operational friction.
- **GSA:** High competition from local players (Ripio, Buenbit, Lemon) and global platforms (Binance). Market is crowded.

**Mexico:**
- **PRR:** Fintech Law (2018) regulates crypto, but licensing is slow and expensive. Coins would need 12-18 months for approval.
- **FIR:** MXN is relatively stable compared to BRL/NGN/GHS, reducing demand for stablecoin hedging.
- **GSA:** Dominated by Bitso (largest LatAm exchange). Coins would be a late entrant with no differentiation.

**Conclusion:** Nigeria and Ghana are **de-risked** because they replicate Brazil's conditions. Argentina and Mexico are **watch-and-wait** markets where regulatory and competitive risks are higher.`,
    },
    {
      id: "q3",
      q: "What's your moat? Why can't Binance or Mercado Bitcoin just copy the four-rail model?",
      a: `The moat is not the **product** (anyone can build an exchange, OTC desk, or payment rail). The moat is the **flywheel** and **local execution.**

**1. Cross-Rail Network Effects (Hard to Replicate)**

Binance and Mercado Bitcoin are single-rail players. They *could* add new rails, but doing so would cannibalize their existing business models:

- **Binance:** Global exchange optimized for trading fees. Adding OTC or Payments would reduce trading volume (users would bypass the orderbook). Binance has no incentive to build a full-stack model.
- **Mercado Bitcoin:** Brazil's largest exchange, but no B2B infrastructure. Adding OTC would require new licensing, liquidity partnerships, and sales teams. This is expensive and distracts from their core retail business.

Coins, by contrast, **designed the four rails to compound from day one.** Exchange feeds OTC, OTC feeds OCBS, OCBS feeds Payments. Competitors would need to rebuild their entire business model to replicate this.

**2. Local Execution (Regulatory + Operational)**

Global platforms like Binance struggle with local compliance:
- No PIX integration (slow fiat on/off-ramps)
- No local KYC/AML providers (Zoloz, SmileID)
- No Portuguese/Swahili support teams
- No relationships with local regulators

Coins is **local-first:** we integrate with PIX, Mobile Money, and local banks. We hire local teams. We pursue local licenses. This creates operational advantages that global platforms can't match without significant investment.

**3. Blueprint Replication (Capital Efficiency)**

Coins' moat strengthens with each new market. Brazil took 18 months to build. Nigeria and Ghana will take less time because we're replicating a proven blueprint. Competitors starting from scratch would need 18 months per market.

**Conclusion:** The moat is **time + execution + network effects.** Competitors *could* copy the model, but doing so would require:
1. Cannibalizing existing revenue streams
2. Rebuilding infrastructure from scratch
3. Competing with Coins' local execution and regulatory relationships

By the time they decide to copy, Coins will have captured Brazil, Nigeria, and Ghana.`,
    },
    {
      id: "q4",
      q: "How do you handle FX risk and liquidity management across multiple currencies?",
      a: `FX risk and liquidity management are core operational challenges for the four-rail model. Here's how Coins handles them:

**FX Risk Mitigation:**

1. **Real-Time Hedging:** When a user deposits BRL and buys USDT, Coins immediately hedges the BRL exposure by selling BRL for USDT on external liquidity venues (Binance, Bybit, local OTC desks). This ensures Coins holds minimal BRL inventory.

2. **Dynamic Spreads:** OTC and Payments rails use dynamic spreads that adjust based on market volatility. When BRL/USDT volatility spikes, spreads widen to compensate for hedging costs.

3. **Treasury Reserves:** Coins maintains a treasury reserve of USDT (currently ~$500K) to absorb short-term liquidity imbalances. This reserve is funded by retained earnings and investor capital.

**Liquidity Management:**

1. **Multi-Venue Aggregation:** Coins sources liquidity from multiple venues (Mercado Bitcoin, Foxbit, Binance, Bybit, Transfero, BlockFills). This reduces dependency on any single counterparty and improves execution quality.

2. **Orderbook Depth:** The Exchange rail provides internal liquidity for small tickets. Large tickets (>$50K) are routed to OTC desks with deeper liquidity.

3. **Cross-Rail Netting:** Users who deposit BRL and withdraw BRL (without converting to USDT) create natural netting opportunities. Coins can match these flows internally without touching external liquidity.

**Multi-Currency Complexity (Nigeria, Ghana):**

When Coins launches in Nigeria (NGN) and Ghana (GHS), liquidity management becomes more complex:

- **NGN–USDT and GHS–USDT pairs** will have lower liquidity than BRL–USDT. Coins will rely on local OTC desks and Mobile Money providers for fiat liquidity.
- **Cross-Market Arbitrage:** Coins can arbitrage between BRL–USDT, NGN–USDT, and GHS–USDT pairs to optimize liquidity utilization.

**Risk Monitoring:**

Coins uses real-time risk monitoring dashboards to track:
- FX exposure by currency
- Liquidity utilization by venue
- Hedging costs and slippage
- Treasury reserve levels

**Conclusion:** FX risk and liquidity management are operational challenges, not existential risks. Coins has proven processes in Brazil and will replicate them in Nigeria and Ghana with local adaptations.`,
    },
    {
      id: "q5",
      q: "What's the path to profitability? When do you expect to be cash-flow positive?",
      a: `**Current Status (Nov 2024):**
- Monthly Revenue: $39.2K
- Monthly OPEX: $52.5K
- Monthly Burn: -$13.3K

**Break-Even Scenario:**

Assuming revenue grows at current 12.5% MoM and OPEX grows at 5% MoM (hiring, infrastructure scaling):

- **Break-even month:** May 2025
- **Break-even revenue:** $68K/month
- **Users at break-even:** ~2,100 KYC'd users

**Post-Break-Even (Q3 2025 - Q4 2026):**

Nigeria and Ghana launches add incremental revenue with marginal OPEX increase:

- **Projected Q4 2026 revenue:** $180K/month (Brazil $80K, Nigeria $60K, Ghana $40K)
- **Projected Q4 2026 OPEX:** $95K/month
- **Projected net margin:** 47%

**Capital Requirements:**

- **Runway:** Current burn of $13.3K/month gives Coins ~18 months of runway with existing capital.
- **Fundraising:** Coins is raising a seed round ($1.5M-$2M) to fund Nigeria and Ghana deployments and extend runway to 24+ months.

**Revenue Drivers:**

1. **Brazil Organic Growth:** 12.5% MoM revenue growth from existing users + cross-rail adoption
2. **Nigeria Launch:** Estimated $30K/month revenue by Q4 2026
3. **Ghana Launch:** Estimated $20K/month revenue by Q4 2026

**Profitability Timeline:**

- **May 2025:** Break-even in Brazil
- **Q4 2026:** Cash-flow positive across all markets (Brazil, Nigeria, Ghana)
- **2027+:** Expansion to additional markets (Argentina, Mexico, others) accelerates profitability

**Conclusion:** Coins reaches break-even in 6 months (May 2025) with current growth trajectory. Nigeria and Ghana launches in 2026 accelerate profitability through blueprint replication and cross-market network effects.`,
    },
    {
      id: "q6",
      q: "How do you compete with unregulated P2P platforms that offer better rates?",
      a: `Unregulated P2P platforms (e.g., LocalBitcoins, Paxful, WhatsApp groups) offer competitive rates because they avoid compliance costs (KYC/AML, licensing, regulatory reporting). However, they expose users to significant risks:

**Risks of Unregulated P2P:**

1. **Counterparty Risk:** No escrow, no dispute resolution. Users can lose funds to scams.
2. **Regulatory Risk:** Users who transact on unregulated platforms face tax and legal exposure.
3. **Lack of Receipts:** No transaction records for accounting or tax purposes.
4. **Limited Liquidity:** P2P platforms have fragmented liquidity, leading to wide spreads for large tickets.

**Coins' Competitive Advantages:**

1. **Compliance = Trust:** Corporate users (importers, exporters, treasuries) prefer Coins because we provide full KYC/AML, transaction receipts, and regulatory reporting. This reduces their legal and tax risk.

2. **Competitive Pricing:** While P2P platforms *can* offer better rates, they often don't. Coins' Exchange fees (0.1-0.3%) and OTC spreads (0.5-1.2%) are competitive with or better than P2P averages (1-3%).

3. **Speed + Convenience:** PIX integration enables instant BRL deposits and withdrawals. P2P platforms require manual bank transfers, which take hours or days.

4. **Full-Stack Convenience:** Users don't need to juggle multiple P2P contacts for different services. Coins offers Exchange, Payments, OTC, and OCBS in one platform.

**Market Segmentation:**

- **Retail Users (< $5K tickets):** Price-sensitive, may use P2P for small transactions. Coins competes on convenience (PIX, app UX).
- **SMEs ($5K-$50K tickets):** Compliance-sensitive. Coins wins this segment with full KYC/AML and transaction receipts.
- **Corporates (> $50K tickets):** Require regulated counterparties. P2P platforms are not an option. Coins is the only full-stack regulated player.

**Conclusion:** Coins doesn't compete with P2P on price alone. We compete on **compliance, convenience, and full-stack integration.** As users scale from retail to SME to corporate, they graduate from P2P to Coins.`,
    },
    {
      id: "q7",
      q: "What happens if Brazil denies your VASP license?",
      a: `VASP (Virtual Asset Service Provider) licensing is a regulatory requirement for full crypto exchange operations in Brazil. However, **Coins is already operating compliantly under Payment Institution (PI) licensing**, which allows us to offer Exchange, Payments, and OTC services.

**Current Licensing Status:**

- **Payment Institution (PI):** Coins operates under PI licensing, which covers fiat on/off-ramps, payment processing, and settlement. This allows us to run Exchange, Payments, and OTC rails.
- **VASP Application:** Coins has applied for VASP licensing to future-proof operations and expand product offerings (e.g., custody, staking). VASP approval is expected Q2-Q3 2026.

**If VASP Is Denied:**

1. **Continue Operating Under PI:** Coins can continue all current operations (Exchange, Payments, OTC, OCBS) under PI licensing. VASP denial does not shut down the business.

2. **Reapply with Adjustments:** If VASP is denied due to specific compliance gaps, Coins will address those gaps and reapply. Brazil's Central Bank (BCB) provides clear feedback on denial reasons.

3. **Focus on Nigeria and Ghana:** If Brazil VASP is delayed, Coins accelerates Nigeria and Ghana launches, where licensing frameworks are clearer and faster.

**Regulatory Risk Mitigation:**

- **Proactive Compliance:** Coins works with Brazilian legal counsel (Mattos Filho, Pinheiro Neto) to ensure VASP application meets all BCB requirements.
- **Diversified Markets:** Nigeria and Ghana reduce dependency on Brazil. Even if Brazil VASP is denied, Coins has two additional markets generating revenue.
- **PI Licensing Is Sufficient:** Most competitors (Mercado Bitcoin, Foxbit, Transfero) operate under PI licensing without VASP. Coins is not uniquely exposed.

**Conclusion:** VASP denial is a **low-probability, low-impact risk.** Coins can continue operating under PI licensing, reapply with adjustments, or pivot focus to Nigeria and Ghana. The four-rail model does not depend on VASP approval.`,
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Investor Q&A</h1>
              <p className="text-muted-foreground">Common questions from due diligence conversations</p>
            </div>
          </div>
        </div>

        {/* Collapsible Questions */}
        <Accordion type="single" collapsible className="space-y-4">
          {questions.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold pr-4">{item.q}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <Streamdown>{item.a}</Streamdown>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Disclaimer */}
        <div className="p-4 rounded-lg bg-accent/50 text-xs text-muted-foreground border border-border">
          <p>
            <strong className="text-foreground">Disclaimer:</strong> These answers reflect Coins' current strategy and projections as of November 2024. Actual results may vary based on market conditions, regulatory changes, and execution risks. This Q&A is for informational purposes only and does not constitute investment advice.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

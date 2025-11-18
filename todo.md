# Coins Research - Full Implementation TODO

## Phase 1: Overview Page
- [x] Implementar hero section com label, H1, subtitle e strategic line
- [x] Adicionar FRM-R framework (PRR, FIR, GSA) com tabela de priorização
- [x] Criar blueprint summary preview
- [x] Garantir responsividade mobile/desktop

## Phase 2: The Model Page (4-Rail Flywheel)
- [x] Criar diagrama circular do flywheel (Exchange, Payments, OTC, OCBS)
- [x] Escrever narrativa explicando B2C → B2B synergies
- [x] Adicionar seção "Why Full-Stack Compounds"
- [x] Responder pergunta do Wei sobre B2B-only strategy

## Phase 3: Markets Page (FRM-R Expansion)
- [x] Criar página completa do FRM-R framework
- [ ] Implementar perfis detalhados de cada mercado:
  - [x] Brazil (anchor market)
  - [x] Nigeria (secondary anchor, licensing pending)
  - [x] Ghana (fast follower, soft launch approved)
  - [x] Argentina (intel gathering)
  - [x] Mexico (intel gathering)
- [x] Adicionar competitive landscape snapshot por país

## Phase 4: Blueprint Brazil → Global South Page
- [x] Explicar por que Brasil é o protótipo
- [x] Detalhar BRL-USDT corridor advantage
- [x] Mostrar transferability para Nigeria & Ghana
- [x] Adicionar bullets "What makes Brazil the blueprint?"

## Phase 5: Metrics & Traction Page
- [x] Processar CSVs (registrations, kyc_lv2, spot, ocbs, tradedesk, fiat, net worth)
- [x] Criar KPI cards (6 principais métricas)
- [x] Implementar line charts com Recharts
- [x] Implementar bar charts para breakdowns
- [x] Escrever narrativa interpretando os dados

## Phase 6: Infrastructure Providers Page
- [x] Criar grid com logos de providers
- [x] Listar: Transfeera, Qyon, Stark Bank, Onz, Braza/BRLA, Transfero, MB, Foxbit, Binance, Bybit, Bitget, BlockFills, Circle, Genial
- [x] Adicionar explicação de cada categoria (banks, PSPs, liquidity)
- [x] Incluir disclaimer sobre logos

## Phase 7: Community & Last-Mile Distribution Page
- [x] Explicar vantagem cultural do Brasil (Web3 + creator economy)
- [x] Mostrar creators como distribution layer
- [x] Conectar com Exchange → Payments → OTC
- [x] Bullets: "How Coins Activates Creators"
- [x] Estratégia last-mile para remittances & payments

## Phase 8: Regulation & Licensing Page
- [x] Brazil: PI + VASP roadmap com timelines
- [x] Nigeria: licensing pending (explicit)
- [x] Ghana: soft launch approved (explicit)
- [x] AR/MX: selective-entry regulatory watchlist
- [x] Compliance stack (Zoloz, SmileID, AML)
- [x] Risk matrix (regulatory, market, operational)

## Phase 9: Investor Q&A Page
- [x] Criar Q&A baseado nas perguntas do Wei
- [x] Responder: Prioritization of expansion
- [x] Responder: ROI/LTV/CAC by region
- [x] Responder: Churned MTU definition
- [x] Responder: Exit path
- [x] Responder: B2B vs B2C confusion (usar flywheel)
- [x] Responder: OPEX/software cost logic
- [x] Responder: SAM for top 3 geos

## Phase 10: Site-Wide Integration
- [x] Atualizar navegação com todos os items
- [x] Garantir sidebar static (desktop) e collapsible (mobile)
- [x] Padronizar tipografia e spacing em todas as páginas
- [x] Adicionar footers com legal wording
- [x] Otimizar performance e responsividade mobile
- [x] Preparar para deploy no Vercel

## Completed Previously
- [x] Escolher paleta de cores profissional (tema escuro)
- [x] Configurar tipografia e estilos globais
- [x] Criar layout de navegação com sidebar
- [x] Adicionar logos oficiais da Coins.xyz
- [x] Implementar menu mobile com hambúrguer
- [x] Deploy no Vercel
- [x] Configurar domínio base-xyz.com


## Strategic Refactoring (Nov 18, 2025)

### Bug Fix
- [x] Corrigir erro de nested `<a>` na página Metrics

### Layer 0: Global South Pre-Selection
- [x] Adicionar seção "Global South Pre-Selection Layer" no Overview
- [x] Explicar critérios estruturais (população jovem, mobile-first, stablecoin penetration, FX volatility, China corridor, creator economy)
- [x] Atualizar Markets page para incluir Layer 0 antes do FRM-R
- [x] Reescrever lógica de expansão com Layer 0

### Strategic Sentence
- [x] Substituir "Where legacy rails fail..." por nova sentence
- [x] Nova: "Coins doesn't compete with traditional rails — it completes them. We operate in the structural gaps where banks, PSPs and single-product crypto platforms cannot reach with speed, compliance or settlement optionality."
- [x] Atualizar Overview, The Model e outras páginas relevantes

### Ecosystem Map (Infrastructure Refactor)
- [x] Transformar Infrastructure page em Ecosystem Map visual
- [x] Organizar em 5 layers: Banking & PSP Rails, Exchanges & Liquidity, Stablecoin Issuers, KYC/AML, OTC & Brokerage
- [x] Classificar cada provider: Direct Integration, Strategic Connectivity, Market Counterparty, Ecosystem Observation
- [x] Criar diagrama visual do ecossistema

### Metrics KPI Families
- [x] Reescrever Metrics com KPI families corretos
- [x] Exchange: 30D spot volume, spread quality, liquidity depth
- [x] KYC Funnel: L2/L3 conversion, time-to-KYC
- [x] Payments: PIX in/out, settlement success rate
- [x] OTC: RFQ volume, corridor flows
- [x] OCBS: stablecoin settlement volumes
- [x] Narrativa: "Coins is not a speculative exchange; it is an emerging-market settlement network."

### Overview & The Model Updates
- [x] Incluir Global South pre-selection na lógica de expansão
- [x] Fortalecer narrativa Brazil → Global South blueprint
- [x] Reforçar 4-rail flywheel (exchange → payments → OTC → OCBS → exchange)


## Light & Dark Theme Implementation (Nov 18, 2025)

- [x] Habilitar theme switching no App.tsx (adicionar prop `switchable`)
- [x] Adicionar theme toggle button no DashboardLayout header
- [x] Ajustar cores CSS para light theme no index.css
- [x] Garantir contraste adequado em ambos os temas
- [x] Testar todas as páginas em light e dark mode


## Blueprint Page Refactor - Three Operating Systems (Nov 18, 2025)

### Section 1: Brazil Built Three Operating Systems
- [x] Criar seção introdutória explicando os 3 Operating Systems
- [x] Exchange OS (B2C): spot engine, retail KYC, liquidity, community, MOS, app-first UX
- [x] Payments OS (B2B): Business Portal, backoffice, merchant KYC, Collect→Convert→Settle, PIX/PSP, pricing engine
- [x] OTC OS (Institutional): RFQ engine, lock-in window D0/D1/D2, institutional liquidity, Travel Rule, China corridor

### Section 2: Why Brazil Is the Prototype
- [x] Explicar por que Brasil foi escolhido (não aleatório)
- [x] Listar condições específicas: PIX, stablecoin adoption, FX volatility, SME import/export, creator culture
- [x] Conectar com 4-rail flywheel end-to-end

### Section 3: How These OS Replicate in New Markets
- [x] Exchange OS replication requirements
- [x] Payments OS replication requirements
- [x] OTC OS replication requirements

### Section 4: 12-Week Market Replication Framework
- [x] Inserir framework completo de 12 semanas (Layers A-C)
- [x] Detalhar milestones e dependências

### Layout & UX
- [x] Card-based layout para os 3 Operating Systems
- [x] Adicionar ícones para Exchange, Payments, OTC
- [x] Garantir responsividade mobile
- [x] Tom institucional e investor-grade


## Final Complete Update - Nov 18, 2025

### Global Fixes & Foundation
- [x] Fix light theme logo rendering em todas as páginas e breakpoints
- [x] Enable Q&A toggling (collapsible questions) na página Investor Q&A
- [x] Remover 12-week framework de todas as páginas (Overview, Blueprint, Markets, Regulation)
- [ ] Preparar componentes de charts/metrics para aceitar novos dados facilmente
- [ ] Converter paragraphs longos em tables/charts onde aplicável

### Infrastructure Fixes
- [x] Stark Bank → "Direct Integration" + nova descrição
- [x] Split Braza Bank e BRLA em dois cards separados
- [x] Genial Investimentos → "Direct Counterparty + Strategic Partner" + nova descrição

### Compliance Fixes
- [x] Adicionar Travel Rule compliance em todas as seções relevantes
- [x] Adicionar Travel Rule no "How It Works" e Regulation page

### OTC Fixes
- [x] Inserir OTC lock-in mechanics (D0/D1/D2, 16:00 cutoff) no The Model
- [x] Adicionar explicação de por que OTC infra é raro

### Payments + Trade Desk Fixes
- [x] Adicionar explanation block: "Payments and Trade Desk are a single flow"

### Community & UGC Fixes (PRIORITY)
- [x] Reescrever Community page focando em UGC-driven growth
- [x] Adicionar métricas reais: +2,000 accounts from KOLs, weekly 50-140 registrations
- [x] Champions peaks (79-119/week), Telegram (175→315), Affiliates (3→47)
- [x] Seção "How the UGC Engine Works"
- [x] Seção "Why UGC Is Our Last-Mile Strategy"
- [x] Seção "Base XYZ inside Circle"
- [x] Seção "Talent recruitment from community"
- [x] Seção secundária: "Chinese-Brazilian Community Pilot (Kawai)"

### Licensing Plan Integration
- [ ] Acessar documento https://coinscapana-2asaxl4k.manus.space
- [ ] Integrar Payment Institution (IP) roadmap
- [ ] Integrar VASP roadmap
- [ ] Adicionar capital requirements, timeline, dependencies
- [ ] Converter em tables + diagrams

### Design & Layout Fixes
- [ ] Fix light theme logo issues
- [ ] Adicionar ícones para Exchange OS / Payments OS / OTC OS
- [ ] Melhorar spacing mobile
- [ ] Adicionar toggle sections em Q&A
- [ ] Charts/tables scroll em mobile


## API Documentation Page
- [ ] Acessar https://api-docs.coinsbrasil.xyz/ e extrair informações
- [x] Criar página API Documentation com seções:
  - [x] Overview e autenticação
  - [x] PIX Payments endpoints
  - [x] OTC Trading endpoints
  - [x] Exemplos de código
  - [x] Rate limits e best practices
- [x] Adicionar rota /api-docs no App.tsx
- [x] Adicionar item "API Documentation" no DashboardLayout menu
- [x] Testar página e fazer commit/push para GitHub


## API Documentation Improvements
- [x] Adicionar Tabs component do shadcn/ui
- [x] Adicionar exemplos de código com syntax highlighting
- [x] Simular responses JSON para cada endpoint
- [x] Adicionar exemplos em múltiplas linguagens (cURL, JavaScript, Python)
- [x] Melhorar layout com sidebar de navegação interna
- [x] Adicionar copy button para código
- [x] Testar e fazer commit/push

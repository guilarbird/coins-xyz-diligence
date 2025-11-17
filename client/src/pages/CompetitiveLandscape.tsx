import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react";

export default function CompetitiveLandscape() {
  const competitors = [
    {
      name: "Mercado Bitcoin",
      category: "Exchange",
      exchange: true,
      spot: true,
      derivatives: false,
      otc: true,
      payments: true,
      license: "IP emissor $eletrônica (desde 06/2023)",
      vasp: "Não especificado (segue marco cripto; tem lic. CVM p/ crowdfunding)",
      strengths: ["Maior exchange do Brasil", "Licença IP desde 2023", "Infraestrutura consolidada"],
      weaknesses: ["Foco limitado em B2B", "Menor presença em pagamentos cross-border"]
    },
    {
      name: "Binance",
      category: "Exchange Global",
      exchange: true,
      spot: true,
      derivatives: false,
      otc: true,
      payments: true,
      license: "Não (considera aquisições; não tem lic. local)",
      vasp: "Não (opera via parceiros; deverá licença BC em 2024)",
      strengths: ["Marca global forte", "Binance Pay para pagamentos", "Grande liquidez"],
      weaknesses: ["Sem licença local ainda", "Processo regulatório pendente", "Foco global vs local"]
    },
    {
      name: "Bitso",
      category: "Exchange (México)",
      exchange: true,
      spot: true,
      derivatives: false,
      otc: false,
      payments: true,
      license: "IP aprovada (via subs. Nvio) e SCD (crédito)",
      vasp: "DLT lic. (Gibraltar); reg. BC pendente VASP",
      strengths: ["Licença IP aprovada", "Experiência em LatAm", "Foco em pagamentos"],
      weaknesses: ["Operação menor no Brasil", "VASP ainda pendente"]
    },
    {
      name: "Ripio",
      category: "Exchange (Argentina)",
      exchange: true,
      spot: true,
      derivatives: false,
      otc: false,
      payments: "Limitado",
      license: "Em processo – pediu lic. IP ao BC",
      vasp: "Não (opera com reg. exterior; deverá autorizar-se no BC)",
      strengths: ["Presença em múltiplos países LatAm", "Experiência regional"],
      weaknesses: ["Licenciamento em processo", "Pagamentos limitados", "Foco mais em trading"]
    },
    {
      name: "Foxbit",
      category: "Exchange",
      exchange: true,
      spot: true,
      derivatives: false,
      otc: true,
      payments: true,
      license: "Não (aguardando reg. VASP)",
      vasp: "Não (aderiu autorregulação ABCripto)",
      strengths: ["Mesa OTC ativa", "Foxbit Pay para pagamentos", "Foco institucional"],
      weaknesses: ["Aguardando licença VASP", "Menor escala que Mercado Bitcoin"]
    },
    {
      name: "Crypto.com",
      category: "Exchange Global",
      exchange: true,
      spot: true,
      derivatives: false,
      otc: false,
      payments: true,
      license: "IP aprovada (15/06/2023)",
      vasp: "Sim (Exchange registrada em Singapura; licenças globais)",
      strengths: ["Licença IP aprovada", "Marca global", "Infraestrutura robusta"],
      weaknesses: ["Foco global vs local", "Menor adaptação ao mercado brasileiro"]
    },
    {
      name: "Transfero",
      category: "Fintech Cripto",
      exchange: "Parcial",
      spot: true,
      derivatives: false,
      otc: true,
      payments: true,
      license: "IP aprovada (09/2023)",
      vasp: "Não (empresa estrangeira reg. Suíça; agora sujeita BC)",
      strengths: ["Licença IP aprovada", "OTC para grandes volumes", "Parcerias bancárias"],
      weaknesses: ["Exchange parcial", "Menor presença retail"]
    },
    {
      name: "Braza Bank",
      category: "Banco FX",
      exchange: false,
      spot: false,
      derivatives: false,
      otc: true,
      payments: true,
      license: "Banco autorizado (câmbio)",
      vasp: "Sim – Inst. Financeira (6º no interbancário FX)",
      strengths: ["Banco regulado", "Licença bancária completa", "Stablecoin própria"],
      weaknesses: ["Não é exchange", "Foco em FX tradicional + cripto"]
    }
  ];

  const coinsXyzPosition = {
    strengths: [
      "Foco B2B em cross-border payments (diferencial vs exchanges retail)",
      "Conexões com importadores/exportadores chineses (nicho específico)",
      "Processo VASP/PI em andamento (25% concluído)",
      "Integração PIX + infraestrutura bancária brasileira",
      "Três verticals de negócio (Payments, Exchange, Trade Desk)"
    ],
    challenges: [
      "Licenciamento VASP/PI ainda em processo (vs Mercado Bitcoin, Bitso, Crypto.com já licenciados)",
      "Escala menor que players estabelecidos",
      "Necessidade de capital injection (Jul 2026) para cumprir requisitos",
      "Competição intensa em todos os segmentos"
    ],
    opportunities: [
      "Nicho B2B cross-border pouco explorado por exchanges tradicionais",
      "Crescimento do comércio Brasil-China",
      "Demanda por soluções de pagamento cripto-fiat",
      "Mercado brasileiro em rápida maturação regulatória"
    ]
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Competitive Landscape
          </h1>
          <p className="text-muted-foreground">
            Análise comparativa dos principais players de cripto e pagamentos no Brasil
          </p>
        </div>

        {/* Coins.xyz Positioning */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Posicionamento Estratégico da Coins.xyz</CardTitle>
            <CardDescription>
              Vantagens competitivas e desafios no mercado brasileiro
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Forças
                </h3>
                <ul className="space-y-2">
                  {coinsXyzPosition.strengths.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  Desafios
                </h3>
                <ul className="space-y-2">
                  {coinsXyzPosition.challenges.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Oportunidades
                </h3>
                <ul className="space-y-2">
                  {coinsXyzPosition.opportunities.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Segmentation */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Segmentação do Mercado</CardTitle>
            <CardDescription>
              Dois clusters principais de players no Brasil
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <h3 className="font-semibold text-foreground mb-3">Exchanges/Corretoras de Cripto</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Focadas em trading de ativos digitais
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Mercado Bitcoin, Foxbit, Binance</li>
                  <li>• Foco: Trading spot, derivativos, OTC</li>
                  <li>• Alguns expandindo para pagamentos</li>
                </ul>
              </div>
              <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <h3 className="font-semibold text-foreground mb-3">Fintechs de Pagamento/Infra</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Focadas em transferências, pagamentos e infraestrutura financeira
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• AlfredPay, Braza Bank, Nox Pay, Transfero</li>
                  <li>• Foco: Pagamentos, remessas, B2B</li>
                  <li>• Algumas com licenças bancárias</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <h3 className="font-semibold text-foreground mb-2">Instituições Híbridas</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Bitso, Crypto.com, Transfero, Bitso:</strong> Exchanges que buscaram licenças de pagamento 
                para oferecer contas PIX e cartões. Em termos de regulação, algumas empresas já possuem 
                licença no Banco Central como Instituição de Pagamento (Mercado Bitcoin, Crypto.com, Transfero, Bitso) 
                ou operam sob licença bancária tradicional (BTG, Genial, Braza).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Competitive Matrix */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Matriz Comparativa de Competidores</CardTitle>
            <CardDescription>
              Análise detalhada de capacidades e licenciamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {competitors.map((competitor, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{competitor.name}</h3>
                      <p className="text-sm text-muted-foreground">{competitor.category}</p>
                    </div>
                    <div className="flex gap-2">
                      {competitor.exchange && (
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs rounded">Exchange</span>
                      )}
                      {competitor.payments && (
                        <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded">Payments</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Spot Trading</p>
                      <div className="flex items-center gap-1">
                        {competitor.spot ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500" />
                        )}
                        <span className="text-sm text-foreground">
                          {competitor.spot ? "Sim" : "Não"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Derivativos</p>
                      <div className="flex items-center gap-1">
                        {competitor.derivatives ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500" />
                        )}
                        <span className="text-sm text-foreground">
                          {competitor.derivatives ? "Sim" : "Não"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">OTC</p>
                      <div className="flex items-center gap-1">
                        {competitor.otc ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500" />
                        )}
                        <span className="text-sm text-foreground">
                          {typeof competitor.otc === 'string' ? competitor.otc : competitor.otc ? "Sim" : "Não"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Pagamentos</p>
                      <div className="flex items-center gap-1">
                        {competitor.payments ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500" />
                        )}
                        <span className="text-sm text-foreground">
                          {typeof competitor.payments === 'string' ? competitor.payments : competitor.payments ? "Sim" : "Não"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-muted/30 rounded">
                      <p className="text-xs font-semibold text-foreground mb-1">Licença Inst. Pagto (BC)</p>
                      <p className="text-xs text-muted-foreground">{competitor.license}</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded">
                      <p className="text-xs font-semibold text-foreground mb-1">Registro VASP / Outras Licenças</p>
                      <p className="text-xs text-muted-foreground">{competitor.vasp}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-green-500 mb-2">Pontos Fortes</p>
                      <ul className="space-y-1">
                        {competitor.strengths.map((strength, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                            <span className="text-green-500">+</span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-orange-500 mb-2">Pontos Fracos</p>
                      <ul className="space-y-1">
                        {competitor.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                            <span className="text-orange-500">-</span>
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regulatory Landscape */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Cenário Regulatório</CardTitle>
            <CardDescription>
              Marco Legal dos Criptoativos (Lei 14.478/2022)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Todos os players listados têm ajustado seus modelos para conformidade ao <strong>Marco Legal dos Criptoativos 
                (Lei 14.478/2022)</strong>, que exige autorização do BC para prestar serviços de ativos virtuais a partir de 2024.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <h4 className="font-semibold text-foreground mb-2">Já Licenciados (IP)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Mercado Bitcoin</li>
                    <li>• Crypto.com</li>
                    <li>• Transfero</li>
                    <li>• Bitso</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <h4 className="font-semibold text-foreground mb-2">Em Processo</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ripio</li>
                    <li>• Foxbit (VASP)</li>
                    <li>• Coins.xyz (VASP/PI)</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold text-foreground mb-2">Licenças Alternativas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• BTG, Genial (CVM/BC)</li>
                    <li>• Braza Bank (Banco FX)</li>
                    <li>• Binance (parceiros)</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Este cenário ilustra um ecossistema em rápida maturação, no qual empresas de <strong>exchange</strong> ampliam 
                serviços para pagamentos, e <strong>fintechs de pagamento</strong> incorporam cripto, convergindo setores 
                antes separados.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

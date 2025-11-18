import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { regulatoryData, type CountryRegulation } from "@/data/regulatoryData";
import { CheckCircle2, Clock, AlertCircle, DollarSign, Building2, FileText, Shield } from "lucide-react";

export default function Regulation() {
  const [currencyMode, setCurrencyMode] = useState<"BRL" | "USD">("USD");

  return (
    <DashboardLayout>
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Licensing & Regulatory Strategy</h1>
              <p className="text-lg text-muted-foreground mt-2 max-w-3xl">
                Coins operates in a regulated environment across all markets. Our strategy is to build compliant
                infrastructure first, then pursue full licensing as regulations mature.
              </p>
            </div>
            
            {/* Currency Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setCurrencyMode("USD")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currencyMode === "USD"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrencyMode("BRL")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currencyMode === "BRL"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                BRL (R$)
              </button>
            </div>
          </div>
        </div>

        {/* Country Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {regulatoryData.map((country) => (
            <AccordionItem key={country.country} value={country.country} className="border rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <span className="text-4xl">{country.flag}</span>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-2xl font-semibold">{country.country}</h2>
                      <StatusBadge status={country.status} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{country.summary}</p>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6">
                {country.country === "Brazil" ? (
                  <BrazilContent country={country} currencyMode={currencyMode} />
                ) : (
                  <PlaceholderContent country={country} />
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
    </DashboardLayout>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config = {
    "Active": { icon: CheckCircle2, className: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20" },
    "In Progress": { icon: Clock, className: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20" },
    "Planned": { icon: AlertCircle, className: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20" }
  };
  
  const { icon: Icon, className } = config[status as keyof typeof config] || config["Planned"];
  
  return (
    <Badge variant="outline" className={className}>
      <Icon className="w-3 h-3 mr-1" />
      {status}
    </Badge>
  );
}

function BrazilContent({ country, currencyMode }: { country: CountryRegulation; currencyMode: "BRL" | "USD" }) {
  return (
    <div className="space-y-8 mt-6">
      {/* Executive Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Total Capital Required</div>
              <div className="text-2xl font-bold mt-1">
                {currencyMode === "BRL" ? country.totalCapitalBRL : country.totalCapitalUSD}
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Dual Licenses</div>
              <div className="text-2xl font-bold mt-1">VASP + IP</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Full Compliance</div>
              <div className="text-2xl font-bold mt-1">Jan 2028</div>
            </div>
          </div>
          
          {country.corporateStructure && (
            <div className="mt-4 p-4 border rounded-lg">
              <div className="font-semibold mb-2">Corporate Structure</div>
              <div className="text-sm text-muted-foreground mb-3">
                Controller: <span className="font-medium text-foreground">{country.corporateStructure.controller}</span>
              </div>
              <div className="space-y-2">
                {country.corporateStructure.entities.map((entity, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                    <div>
                      <div className="font-medium">{entity.name}</div>
                      <div className="text-muted-foreground">{entity.license}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Capital Requirements */}
      {country.capitalRequirements && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Capital Requirements
            </CardTitle>
            <CardDescription>
              Phased capital injection strategy coordinated with regulatory milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {country.capitalRequirements.map((req, idx) => (
                <div key={idx} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <div className="font-semibold">{req.entity}</div>
                      <div className="text-sm text-muted-foreground mt-1">{req.license}</div>
                      <div className="text-sm mt-2">{req.purpose}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {currencyMode === "BRL" ? req.amountBRL : req.amountUSD}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Regulatory Timeline */}
      {country.milestones && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Regulatory Timeline
            </CardTitle>
            <CardDescription>
              Two parallel authorization threads (IP + VASP) with exact dates and regulatory cutoffs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {country.milestones.map((milestone, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 md:w-32">
                    <div className="text-sm font-medium">{milestone.date}</div>
                    <StatusBadge status={milestone.status} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="font-semibold">{milestone.title}</div>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {milestone.entity}
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-2">{milestone.description}</div>
                        <div className="text-xs text-muted-foreground mt-1 italic">
                          Regulatory cutoff: {milestone.regulatoryCutoff}
                        </div>
                      </div>
                      {milestone.amountBRL && (
                        <div className="text-right">
                          <div className="font-bold">
                            {currencyMode === "BRL" ? milestone.amountBRL : milestone.amountUSD}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Licenses */}
      {country.licenses && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Licensing Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {country.licenses.map((license, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="font-semibold text-lg">{license.name}</h3>
                    <p className="text-sm text-muted-foreground">{license.type}</p>
                  </div>
                  <Badge>{license.status}</Badge>
                </div>
                <p className="text-sm">{license.description}</p>
                
                {license.requirements && (
                  <div>
                    <div className="text-sm font-medium mb-2">Requirements:</div>
                    <ul className="space-y-1">
                      {license.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {license.timeline && (
                  <div className="p-3 bg-muted rounded-md">
                    <div className="text-sm font-medium">Timeline</div>
                    <div className="text-sm text-muted-foreground mt-1">{license.timeline}</div>
                  </div>
                )}
                
                {idx < (country.licenses?.length || 0) - 1 && <div className="border-t" />}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Compliance Infrastructure */}
      {country.compliance && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Compliance Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* KYC/AML */}
            <div>
              <h3 className="font-semibold mb-3">KYC/AML Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {country.compliance.kycAml.map((provider, idx) => (
                  <div key={idx} className="p-3 border rounded-lg">
                    <div className="font-medium">{provider.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{provider.category}</div>
                    <div className="text-sm mt-2">{provider.purpose}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Rule */}
            {country.compliance.travelRule && (
              <div>
                <h3 className="font-semibold mb-2">Travel Rule Compliance</h3>
                <p className="text-sm text-muted-foreground">{country.compliance.travelRule}</p>
              </div>
            )}

            {/* Data Privacy */}
            <div>
              <h3 className="font-semibold mb-2">Data Privacy & Security</h3>
              <ul className="space-y-1">
                {country.compliance.dataPrivacy.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reporting */}
            {country.compliance.reporting && (
              <div>
                <h3 className="font-semibold mb-2">Regulatory Reporting</h3>
                <ul className="space-y-1">
                  {country.compliance.reporting.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Regulatory Risks */}
      {country.risks && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Regulatory Risk Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {country.risks.map((risk, idx) => (
              <div key={idx} className="p-4 border rounded-lg">
                <div className="font-semibold text-red-600 dark:text-red-400">{risk.risk}</div>
                <p className="text-sm mt-2">{risk.description}</p>
                <div className="mt-3 p-3 bg-muted rounded-md">
                  <div className="text-sm font-medium">Mitigation Strategy</div>
                  <p className="text-sm text-muted-foreground mt-1">{risk.mitigation}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Additional Notes */}
      {country.notes && country.notes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Additional Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {country.notes.map((note, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function PlaceholderContent({ country }: { country: CountryRegulation }) {
  return (
    <div className="mt-6 p-8 border-2 border-dashed rounded-lg text-center">
      <AlertCircle className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
      <h3 className="font-semibold text-lg mb-2">Regulatory Content In Development</h3>
      <p className="text-sm text-muted-foreground max-w-md mx-auto">
        Detailed regulatory information for {country.country} will be added as licensing processes progress.
      </p>
      {country.notes && country.notes.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
          {country.notes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

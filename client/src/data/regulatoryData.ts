// Regulatory data structure for all countries
// Consolidates content from multiple sources for Brazil
// Placeholders for other countries

export interface CapitalRequirement {
  entity: string;
  license: string;
  amountBRL: string;
  amountUSD: string;
  purpose: string;
}

export interface Milestone {
  date: string;
  title: string;
  entity: "IP" | "VASP" | "Both";
  amountBRL?: string;
  amountUSD?: string;
  status: "In Progress" | "Upcoming" | "Planned" | "Completed";
  description: string;
  regulatoryCutoff: string;
}

export interface ComplianceProvider {
  name: string;
  category: string;
  purpose: string;
  markets: string[];
}

export interface RegulatoryRisk {
  risk: string;
  description: string;
  mitigation: string;
}

export interface CountryRegulation {
  country: string;
  flag: string;
  status: "Active" | "In Progress" | "Planned";
  summary: string;
  
  // Capital requirements
  capitalRequirements?: CapitalRequirement[];
  totalCapitalBRL?: string;
  totalCapitalUSD?: string;
  
  // Corporate structure
  corporateStructure?: {
    controller: string;
    entities: {
      name: string;
      license: string;
      cnpj?: string;
    }[];
  };
  
  // Timeline
  milestones?: Milestone[];
  
  // Licensing details
  licenses?: {
    name: string;
    type: string;
    status: string;
    description: string;
    requirements?: string[];
    timeline?: string;
  }[];
  
  // Compliance
  compliance?: {
    kycAml: ComplianceProvider[];
    dataPrivacy: string[];
    travelRule?: string;
    reporting?: string[];
  };
  
  // Risks
  risks?: RegulatoryRisk[];
  
  // Additional notes
  notes?: string[];
}

export const regulatoryData: CountryRegulation[] = [
  {
    country: "Brazil",
    flag: "🇧🇷",
    status: "Active",
    summary: "Dual licensing strategy (PI + VASP) with Central Bank (BCB). Clear regulatory framework, mature compliance infrastructure. Total capital requirement: R$ 23.2M (~USD $4.4M).",
    
    totalCapitalBRL: "R$ 23,200,000",
    totalCapitalUSD: "~USD $4,377,358",
    
    corporateStructure: {
      controller: "Joffre Ortigas Asia Holdings",
      entities: [
        {
          name: "Coins.xyz Digital Markets Ltda",
          license: "VASP (Virtual Asset Service Provider)",
          cnpj: "Pending registration"
        },
        {
          name: "Coins.xyz Global Trading Ltda",
          license: "IP (Payment Institution / Electronic Money)",
          cnpj: "Pending registration"
        }
      ]
    },
    
    capitalRequirements: [
      {
        entity: "Coins.xyz Digital Markets",
        license: "VASP",
        amountBRL: "R$ 14,000,000",
        amountUSD: "~USD $2,641,509",
        purpose: "Virtual Asset Service Provider minimum capital requirement"
      },
      {
        entity: "Coins.xyz Global Trading",
        license: "IP (Payment Institution)",
        amountBRL: "R$ 9,200,000",
        amountUSD: "~USD $1,735,849",
        purpose: "Payment Institution minimum capital requirement"
      }
    ],
    
    milestones: [
      {
        date: "Dec 1, 2025",
        title: "IP Authorization Preparation",
        entity: "IP",
        status: "In Progress",
        description: "Opens BCB docket and aligns governance so the IP dossier can be assembled without rework.",
        regulatoryCutoff: "Start dossier before Jan 2026"
      },
      {
        date: "Jan 5, 2026",
        title: "Business Plan Completion",
        entity: "IP",
        status: "In Progress",
        description: "Mandatory artifact; defines products, risk, PRE assumptions, and controls for auditor/BCB review.",
        regulatoryCutoff: "BP attached to pre-audit pack"
      },
      {
        date: "Jan–Feb 2026",
        title: "Partial Capital Injection (IP)",
        entity: "IP",
        amountBRL: "R$ 2,000,000",
        amountUSD: "~USD $377,358",
        status: "Upcoming",
        description: "Meets fixed/cumulative capital for pre-audit checks and financial capacity before filing. Cumulative: R$ 2.0M",
        regulatoryCutoff: "Capital on books for pre-audit"
      },
      {
        date: "Jan–Feb 2026",
        title: "Partial Capital Injection (VASP)",
        entity: "VASP",
        amountBRL: "R$ 3,000,000",
        amountUSD: "~USD $566,038",
        status: "Upcoming",
        description: "Brings VASP to baseline so auditors can validate controls and PRE. Cumulative: R$ 3.0M",
        regulatoryCutoff: "Capital on books for pre-audit"
      },
      {
        date: "Mar 15, 2026",
        title: "IP Filing (Target)",
        entity: "IP",
        status: "Upcoming",
        description: "Starts BCB review early on a clean dossier while VASP work runs in parallel.",
        regulatoryCutoff: "IP authorization filing deadline"
      },
      {
        date: "May 1, 2026",
        title: "Pre-Audit Capital Injection (IP)",
        entity: "IP",
        amountBRL: "R$ 3,000,000",
        amountUSD: "~USD $566,038",
        status: "Upcoming",
        description: "Tops up to auditor-required cumulative amount at audit date. Cumulative: R$ 5.0M",
        regulatoryCutoff: "Capital on books for audit start in Jun"
      },
      {
        date: "May 1, 2026",
        title: "Pre-Audit Capital Injection (VASP)",
        entity: "VASP",
        amountBRL: "R$ 5,000,000",
        amountUSD: "~USD $943,396",
        status: "Upcoming",
        description: "Ensures VASP cumulative capital matches the level to be attested. Cumulative: R$ 8.0M",
        regulatoryCutoff: "Capital on books for audit start in Jun"
      },
      {
        date: "Jun 1 – Sep 30, 2026",
        title: "External Audit Window (VASP)",
        entity: "VASP",
        status: "Upcoming",
        description: "Independent audit evidence; required in filing package.",
        regulatoryCutoff: "Audit completed before filing"
      },
      {
        date: "Nov 1, 2026",
        title: "Authorization Filing Injection (Both)",
        entity: "Both",
        amountBRL: "R$ 6,000,000",
        amountUSD: "~USD $1,132,075",
        status: "Planned",
        description: "Aligns paid-in capital to final PRE/exposure at filing, avoiding conditional approvals. VASP: R$ 3.5M (Cumul: R$ 11.5M), IP: R$ 2.5M (Cumul: R$ 7.5M)",
        regulatoryCutoff: "Full capital evidenced at filing"
      },
      {
        date: "Nov 1, 2026",
        title: "VASP Authorization Deadline",
        entity: "VASP",
        amountBRL: "R$ 3,500,000",
        amountUSD: "~USD $660,377",
        status: "Planned",
        description: "Regulatory deadline for VASP authorization filing with BCB. Cumulative: R$ 11.5M",
        regulatoryCutoff: "VASP authorization deadline"
      },
      {
        date: "Jan 15, 2028",
        title: "Final Compliance Injection (Both)",
        entity: "Both",
        amountBRL: "R$ 4,200,000",
        amountUSD: "~USD $792,453",
        status: "Planned",
        description: "Post-authorization top-up to match initial operating scale and ensure year-one compliance. VASP: R$ 2.5M (Cumul: R$ 14.0M), IP: R$ 1.7M (Cumul: R$ 9.2M)",
        regulatoryCutoff: "Residual adjustments closed"
      }
    ],
    
    licenses: [
      {
        name: "PI (Payment Institution)",
        type: "Electronic Money Institution",
        status: "Application in Progress",
        description: "Required for PIX integration and payment processing. Coins operates under PSP partnerships (Transfeera, Qyon) while pursuing direct PI license.",
        requirements: [
          "Minimum capital: R$ 9,200,000",
          "Business plan approved by BCB",
          "External audit evidence",
          "Fit-and-proper checks for controllers",
          "AML/CFT compliance infrastructure",
          "Data residency and LGPD compliance"
        ],
        timeline: "Target filing: March 15, 2026. Expected approval: Q4 2026."
      },
      {
        name: "VASP (Virtual Asset Service Provider)",
        type: "Crypto Exchange License",
        status: "Application in Progress",
        description: "Brazil's Central Bank requires VASP registration for crypto exchanges. Enables full exchange operations.",
        requirements: [
          "Minimum capital: R$ 14,000,000",
          "PRE (Patrimônio de Referência Exigido) calculation",
          "External audit (Jun–Sep 2026)",
          "Travel Rule compliance (FATF-aligned)",
          "Cold storage and custody infrastructure",
          "Transaction monitoring and COAF reporting"
        ],
        timeline: "Authorization deadline: November 1, 2026. Expected approval: Q1 2027."
      }
    ],
    
    compliance: {
      kycAml: [
        {
          name: "Zoloz",
          category: "KYC/AML Provider",
          purpose: "Document verification, liveness detection, AML screening",
          markets: ["Brazil"]
        },
        {
          name: "COAF",
          category: "Regulatory Reporting",
          purpose: "Brazil's Financial Intelligence Unit - automated transaction reporting",
          markets: ["Brazil"]
        }
      ],
      dataPrivacy: [
        "LGPD Compliance (Lei Geral de Proteção de Dados)",
        "User consent management",
        "Data residency requirements (Brazil-hosted infrastructure)",
        "Right to erasure and data portability"
      ],
      travelRule: "Coins automates full Travel Rule support across Exchange, OTC and on-chain settlement, ensuring FATF-aligned sender/beneficiary data transmission for all large bilateral flows.",
      reporting: [
        "COAF (Financial Intelligence Unit) - automated reporting",
        "BCB regulatory reporting (capital, transactions, compliance)",
        "IN1888 compliance (Normative Instruction for crypto operations)",
        "Quarterly audit reports"
      ]
    },
    
    risks: [
      {
        risk: "Licensing Delays",
        description: "Regulatory approval processes can take longer than expected, delaying full product launches.",
        mitigation: "Operate under PSP partnerships while pursuing direct licenses. This allows revenue generation and user acquisition during licensing processes."
      },
      {
        risk: "Capital Requirement Changes",
        description: "BCB may adjust minimum capital requirements based on market conditions or PRE calculations.",
        mitigation: "Phased capital injection strategy allows flexibility. Maintain buffer capital and close relationships with BCB to anticipate changes."
      },
      {
        risk: "VASP Denial",
        description: "If VASP authorization is denied, exchange operations would be limited.",
        mitigation: "Operate exchange under VASP-licensed partners (e.g., Transfero, Mercado Bitcoin) while reapplying. PI license still enables payments business."
      },
      {
        risk: "Banking Access",
        description: "Banks may be hesitant to serve crypto companies, creating friction for fiat on/off-ramps.",
        mitigation: "Diversify banking partnerships (Transfeera, Qyon, Stark Bank, Onz). Direct PI license reduces dependency on third-party banks."
      }
    ],
    
    notes: [
      "FX Rate Reference: 1 USD = 5.30 BRL (as of Nov 18, 2025)",
      "Controller: Joffre Ortigas Asia Holdings is being formalized as the controlling shareholder, replacing Joffre BR Holdings. MCZ Law Firm coordination.",
      "Team: Daniel Hott providing exceptional support on licensing requirements. Bitso financial controller joining Nov 17, 2025 to strengthen compliance readiness.",
      "Structural Tasks: Bylaws amendment (controller change), CNPJ registration (fit-and-proper checks), RDE-IED registration (foreign direct investment legalization).",
      "Overall Risk Level: Medium. Brazil's regulatory environment is stable and mature. The Central Bank has been clear about licensing requirements since 2022."
    ]
  },
  
  // Placeholder countries
  {
    country: "Nigeria",
    flag: "🇳🇬",
    status: "In Progress",
    summary: "Exchange license application submitted Q4 2024. SEC (Securities and Exchange Commission) regulates crypto exchanges. Approval expected Q2-Q3 2025.",
    notes: [
      "KYC/AML: SmileID integration complete",
      "Banking: MTN Mobile Money and Airtel Money integrations",
      "Timeline: Soft launch Q1 2026, full launch post-licensing Q2-Q3 2026"
    ]
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    status: "In Progress",
    summary: "Soft launch approved by SEC. Full product suite deployment from day one. Formal licensing application planned Q2 2026.",
    notes: [
      "Mobile Money: MTN Mobile Money and Vodafone Cash partnerships",
      "Timeline: Soft launch Q1 2026, formal licensing Q2 2026, full license Q4 2026"
    ]
  },
  {
    country: "Philippines",
    flag: "🇵🇭",
    status: "Planned",
    summary: "Market analysis in progress. Regulatory framework evaluation pending.",
    notes: ["Placeholder for future expansion"]
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    status: "Planned",
    summary: "Market analysis in progress. Regulatory framework evaluation pending.",
    notes: ["Placeholder for future expansion"]
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    status: "Planned",
    summary: "Market analysis in progress. Regulatory framework evaluation pending.",
    notes: ["Placeholder for future expansion"]
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    status: "Planned",
    summary: "Selective-entry market. Regulatory watchlist. Intel gathering phase.",
    notes: ["Placeholder for future expansion"]
  },
  {
    country: "Argentina",
    flag: "🇦🇷",
    status: "Planned",
    summary: "Selective-entry market. Regulatory watchlist. Intel gathering phase.",
    notes: ["Placeholder for future expansion"]
  },
  {
    country: "Vietnam",
    flag: "🇻🇳",
    status: "Planned",
    summary: "Market analysis in progress. Regulatory framework evaluation pending.",
    notes: ["Placeholder for future expansion"]
  }
];

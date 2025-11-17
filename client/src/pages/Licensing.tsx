import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function Licensing() {
  const milestones = [
    {
      date: "Jul 2026",
      title: "Capital Injection - 25%",
      description: "Initial capital requirements met for VASP/PI licensing application",
      status: "in-progress",
      percentage: 25
    },
    {
      date: "Jan 2027",
      title: "License Approval - 50%",
      description: "Expected approval from Brazilian Central Bank for VASP/PI operations",
      status: "pending",
      percentage: 50
    },
    {
      date: "Jan 2028",
      title: "Full Operations - 100%",
      description: "Complete regulatory compliance and full operational capacity",
      status: "pending",
      percentage: 100
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Licensing & Regulatory
          </h1>
          <p className="text-muted-foreground">
            VASP/PI licensing roadmap and compliance milestones
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Current Progress
              </CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">25%</div>
              <p className="text-xs text-muted-foreground">
                Capital injection phase
              </p>
              <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-1/4" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Next Milestone
              </CardTitle>
              <AlertCircle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">Jan 2027</div>
              <p className="text-xs text-muted-foreground">
                License approval target
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Target Completion
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">Jan 2028</div>
              <p className="text-xs text-muted-foreground">
                Full operations launch
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Regulatory Timeline</CardTitle>
            <CardDescription>
              Visual roadmap showing VASP/PI licensing milestones with animated progress bars
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        milestone.status === 'in-progress' 
                          ? 'bg-blue-500/20 border-2 border-blue-500' 
                          : 'bg-muted border-2 border-border'
                      }`}>
                        {milestone.status === 'in-progress' ? (
                          <Clock className="h-5 w-5 text-blue-500" />
                        ) : (
                          <div className="h-3 w-3 rounded-full bg-muted-foreground" />
                        )}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.date}</p>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {milestone.percentage}%
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {milestone.description}
                      </p>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${
                            milestone.status === 'in-progress' 
                              ? 'bg-blue-500' 
                              : 'bg-muted-foreground/30'
                          }`}
                          style={{ width: milestone.status === 'in-progress' ? '25%' : '0%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regulatory Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">VASP Requirements</CardTitle>
              <CardDescription>Virtual Asset Service Provider licensing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Capital Requirements</p>
                    <p className="text-xs text-muted-foreground">Minimum capital injection scheduled for Jul 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Compliance Framework</p>
                    <p className="text-xs text-muted-foreground">AML/KYC systems implementation in progress</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Security Standards</p>
                    <p className="text-xs text-muted-foreground">Cybersecurity audit and certification pending</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">PI Requirements</CardTitle>
              <CardDescription>Payment Institution licensing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Banking Integration</p>
                    <p className="text-xs text-muted-foreground">PIX and Brazilian banking rails connected</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Operational Infrastructure</p>
                    <p className="text-xs text-muted-foreground">Payment processing systems under development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Central Bank Approval</p>
                    <p className="text-xs text-muted-foreground">Application submission planned for Q4 2026</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

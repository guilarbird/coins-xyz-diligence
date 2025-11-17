import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {title}
          </h1>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Construction className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-foreground">Coming Soon</CardTitle>
                <CardDescription>
                  This section is under development
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Detailed analysis and data visualization for this section will be available soon. 
              Please check back later or contact the team for more information.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

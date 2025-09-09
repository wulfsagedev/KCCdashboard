'use client';

// src/components/dashboard/BudgetOverview.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DollarSign, Building2, Calendar, Users, Lightbulb, AlertTriangle, Shield, CheckCircle } from "lucide-react";

const BudgetOverview = () => {
  const totalBudget = 904287655; // Total council area requirement
  const capitalBudget = 141300000; // Capital investment

  const keyMetrics = [
    {
      title: "Total Annual Budget",
      value: "£904.3M",
      description: "The total amount KCC needs to run all services for one year",
      explanation: "This covers everything from social care to road maintenance across Kent",
      badge: "Annual Budget",
      icon: DollarSign,
      color: "text-primary"
    },
    {
      title: "Capital Investment",
      value: "£141.3M",
      description: "Money spent on long-term assets like buildings and infrastructure",
      explanation: "Building new schools, fixing roads, and upgrading facilities that last for years",
      badge: "Infrastructure",
      icon: Building2,
      color: "text-primary"
    },
    {
      title: "Daily Operating Cost",
      value: "£2.48M",
      description: "How much it costs to run KCC services every single day",
      explanation: "This is your county council working 24/7 to provide essential services",
      badge: "Daily Cost",
      icon: Calendar,
      color: "text-primary"
    },
    {
      title: "Cost Per Resident",
      value: "£567",
      description: "Annual cost per person living in Kent (1.59M residents)",
      explanation: "What it costs to provide county-level services for each person in Kent",
      badge: "Per Person",
      icon: Users,
      color: "text-primary"
    }
  ];

  const budgetBreakdown = [
    { category: "Adult Social Care", percentage: 35, amount: 316700678, priority: "High", icon: Shield },
    { category: "Children's Services", percentage: 25, amount: 226071914, priority: "High", icon: Users },
    { category: "Education & Schools", percentage: 12, amount: 108514519, priority: "High", icon: Building2 },
    { category: "Transport & Highways", percentage: 10, amount: 90428766, priority: "Medium", icon: Calendar },
    { category: "Public Health", percentage: 8, amount: 72343013, priority: "Medium", icon: Shield },
    { category: "Libraries & Culture", percentage: 5, amount: 45214383, priority: "Medium", icon: Building2 },
    { category: "Other Services", percentage: 5, amount: 45214383, priority: "Low", icon: CheckCircle }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="pb-2 space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">{metric.badge}</Badge>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </div>
              <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold">{metric.value}</CardTitle>
              <CardDescription className="text-xs sm:text-sm">{metric.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-xs bg-muted p-2 rounded-md flex items-start gap-2">
                <Lightbulb className="h-3 w-3 mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium">Why this matters:</span> {metric.explanation}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Budget Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Where Your Money Goes</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            How KCC spends your council tax across different services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 sm:space-y-6">
            {budgetBreakdown.map((item, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2 min-w-0">
                    <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="font-medium text-sm sm:text-base truncate">{item.category}</span>
                    <Badge 
                      variant={item.priority === 'High' ? 'destructive' : item.priority === 'Medium' ? 'default' : 'secondary'}
                      className="text-xs shrink-0"
                    >
                      {item.priority}
                    </Badge>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-sm sm:text-base">£{(item.amount / 1000000).toFixed(1)}M</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{item.percentage}%</div>
                  </div>
                </div>
                <Progress value={item.percentage} className="h-2" />
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {item.category === "Adult Social Care" && "Care for elderly and disabled residents - the largest expense due to aging population"}
                  {item.category === "Children's Services" && "Child protection, fostering, and support for vulnerable young people"}
                  {item.category === "Education & Schools" && "School transport, special educational needs, and education support"}
                  {item.category === "Transport & Highways" && "Road maintenance, traffic lights, and public transport subsidies"}
                  {item.category === "Public Health" && "Disease prevention, health promotion, and community health services"}
                  {item.category === "Libraries & Culture" && "Libraries, museums, arts programs, and community centers"}
                  {item.category === "Other Services" && "Planning, waste strategy, emergency planning, and administrative costs"}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Context Box */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <CardTitle className="text-base sm:text-lg">Understanding Your Council Tax</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base">
              <strong>KCC is just one part of your total council tax bill.</strong> Your full council tax also includes:
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div><strong>District/Borough Council:</strong> Local services like housing, planning, recycling</div>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div><strong>Kent Police:</strong> Local policing and community safety</div>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div><strong>Kent Fire & Rescue:</strong> Fire prevention and emergency response</div>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div><strong>Parish Council:</strong> Very local services (if applicable in your area)</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              KCC typically represents about 70-75% of your total council tax bill because we provide the most expensive services like social care and education.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetOverview;
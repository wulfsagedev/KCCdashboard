'use client';

// src/components/dashboard/RevenueBreakdown.tsx

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { DollarSign, Building, Users, PiggyBank, TrendingDown, ChevronDown, ChevronUp, Info, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

const RevenueBreakdown = () => {
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const revenueStreams = [
    {
      source: "Council Tax",
      amount: 352712367,
      percentage: 39,
      icon: DollarSign,
      description: "Money paid directly by Kent residents through council tax bills",
      explanation: "This is the money you pay on your council tax bill. It's KCC's most reliable income source because it comes directly from residents.",
      details: {
        bandDRate: 1691.19,
        properties: 587922,
        collectionRate: 98.5,
        facts: [
          "Kent has 751,000 households paying council tax",
          "Collection rate is 98.5% - one of the highest in England",
          "Band D makes up about 25% of all properties",
          "Council tax can only increase by 3% + 2% adult care precept without referendum"
        ]
      },
      stability: "High",
      volatility: "Low - grows predictably each year"
    },
    {
      source: "Government Grants (Ringfenced)",
      amount: 307497783,
      percentage: 34,
      icon: Building,
      description: "Specific grants from government that must be spent on particular services",
      explanation: "These are grants that come with strings attached - government says exactly what they must be spent on, like schools or social care.",
      details: {
        publicHealth: 89000000,
        dedicatedSchools: 125000000,
        socialCare: 93497783,
        facts: [
          "Public Health Grant: £89M for prevention and health services",
          "Dedicated Schools Grant: £125M for special educational needs",
          "Social Care Grants: £93M for adult and children's care",
          "Can't be spent on anything else - legally restricted"
        ]
      },
      stability: "Medium",
      volatility: "Medium - can change with government priorities"
    },
    {
      source: "Service User Income",
      amount: 135643149,
      percentage: 15,
      icon: Users,
      description: "Money paid by people who use specific council services",
      explanation: "When people pay for services they use - like care home fees, parking charges, or planning application fees.",
      details: {
        careCharges: 45000000,
        parking: 25000000,
        planning: 15000000,
        other: 50643149,
        facts: [
          "Care charges: £45M from people who can afford to pay for care",
          "Parking income: £25M from car parks and permits",
          "Planning fees: £15M from development applications",
          "Other fees: £51M from licenses, registrations, and services"
        ]
      },
      stability: "Medium",
      volatility: "Medium - depends on demand for services"
    },
    {
      source: "Government Grants (Unringfenced)",
      amount: 81385889,
      percentage: 9,
      icon: PiggyBank,
      description: "General grants from government that KCC can spend on any service",
      explanation: "Flexible government funding that KCC can spend on whatever services need it most - these are the most valuable grants.",
      details: {
        revenue: 45000000,
        newHomes: 20000000,
        rural: 16385889,
        facts: [
          "Revenue Support Grant: £45M general government funding",
          "New Homes Bonus: £20M reward for building new houses",
          "Rural Services Grant: £16M extra for rural areas",
          "Can be spent on any service based on local priorities"
        ]
      },
      stability: "Low",
      volatility: "High - subject to government spending reviews"
    },
    {
      source: "Business Rates",
      amount: 27128630,
      percentage: 3,
      icon: TrendingDown,
      description: "Local taxes paid by businesses, shops, and commercial properties",
      explanation: "Business rates are like council tax but for commercial properties. Most of this money goes to central government, with only a small share coming back to Kent.",
      details: {
        retained: 27128630,
        totalCollected: 180000000,
        retentionRate: 15,
        facts: [
          "Kent collects £180M in business rates annually",
          "Only 15% (£27M) is retained locally",
          "Rest goes to central government for redistribution",
          "Varies with local business growth and property values"
        ]
      },
      stability: "Low",
      volatility: "High - affected by business closures and economic cycles"
    }
  ];

  const totalRevenue = revenueStreams.reduce((sum, stream) => sum + stream.amount, 0);

  const toggleDetails = (source: string) => {
    setShowDetails(showDetails === source ? null : source);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Revenue Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-lg sm:text-xl">How KCC Gets Its Money</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Total revenue: £{(totalRevenue / 1000000).toFixed(1)}M annually
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-3 min-w-0">
                    <stream.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <span className="font-medium text-sm sm:text-base">{stream.source}</span>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge 
                          variant={
                            stream.stability === 'High' ? 'default' : 
                            stream.stability === 'Medium' ? 'secondary' : 'destructive'
                          }
                          className="text-xs"
                        >
                          {stream.stability} Stability
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-sm sm:text-base">£{(stream.amount / 1000000).toFixed(1)}M</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stream.percentage}%</div>
                  </div>
                </div>
                
                <Progress value={stream.percentage} className="h-3" />
                
                <div className="text-xs sm:text-sm text-muted-foreground bg-muted p-3 rounded-md">
                  {stream.explanation}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleDetails(stream.source)}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {showDetails === stream.source ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show Details
                    </>
                  )}
                </Button>

                {showDetails === stream.source && (
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Info className="h-4 w-4 text-primary" />
                              <h4 className="font-semibold text-sm sm:text-base">Key Facts</h4>
                            </div>
                            <div className="space-y-1 text-xs sm:text-sm">
                              {stream.details.facts.map((fact, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                                  <span>{fact}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <AlertTriangle className="h-4 w-4 text-destructive" />
                              <h4 className="font-semibold text-sm sm:text-base">Reliability</h4>
                            </div>
                            <div className="space-y-2 text-xs sm:text-sm">
                              <div className="flex justify-between items-center">
                                <span>Stability:</span>
                                <Badge variant={
                                  stream.stability === 'High' ? 'default' : 
                                  stream.stability === 'Medium' ? 'secondary' : 'destructive'
                                } className="text-xs">
                                  {stream.stability}
                                </Badge>
                              </div>
                              <div className="text-muted-foreground">
                                {stream.volatility}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Stability Analysis */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-lg sm:text-xl">Revenue Risk Assessment</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                How secure and predictable each income source is
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-primary text-sm sm:text-base">Stable Revenue (39%)</h3>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-primary mb-2">£353M</div>
              <div className="text-xs sm:text-sm text-primary/80">
                <strong>Council Tax:</strong> Predictable, growing income that KCC controls locally
              </div>
            </div>
            <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-secondary-foreground" />
                <h3 className="font-semibold text-secondary-foreground text-sm sm:text-base">Moderate Risk (49%)</h3>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-secondary-foreground mb-2">£443M</div>
              <div className="text-xs sm:text-sm text-secondary-foreground/80">
                <strong>Service Income & Some Grants:</strong> Reasonably predictable but can vary
              </div>
            </div>
            <div className="p-3 sm:p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="h-4 w-4 text-destructive" />
                <h3 className="font-semibold text-destructive text-sm sm:text-base">High Risk (12%)</h3>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-destructive mb-2">£108M</div>
              <div className="text-xs sm:text-sm text-destructive/80">
                <strong>Government Grants & Business Rates:</strong> Subject to political and economic changes
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What This Means for You */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg sm:text-xl">What This Means for Your Council Tax</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Why Council Tax Increases</h4>
                <div className="space-y-1 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                    <span>Government grants haven't kept up with inflation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                    <span>Demand for services grows faster than other income</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                    <span>Council tax is the only reliable, growing income source</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                    <span>Adult social care costs rise as population ages</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Future Challenges</h4>
                <div className="space-y-1 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0 text-destructive" />
                    <span>Business rates reform may reduce income</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0 text-destructive" />
                    <span>Government may cut grants further</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0 text-destructive" />
                    <span>Service demand continues growing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0 text-destructive" />
                    <span>Limited ability to raise new revenue streams</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-3 sm:p-4 bg-primary/10 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-primary" />
                <h4 className="font-semibold text-primary text-sm sm:text-base">The Bottom Line</h4>
              </div>
              <p className="text-xs sm:text-sm text-primary/80">
                KCC is heavily dependent on council tax because other income sources are unreliable or declining. 
                When government cuts grants or service demand increases, council tax usually has to rise to fill the gap. 
                This is why council tax increases are often unavoidable, even when councils try to be efficient.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue vs Spending */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <PiggyBank className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-lg sm:text-xl">Balancing the Books</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                How revenue matches up with spending commitments
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div>
                <div className="font-semibold text-primary text-sm sm:text-base">Total Revenue</div>
                <div className="text-xs sm:text-sm text-primary/80">All income sources combined</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-primary">
                £{(totalRevenue / 1000000).toFixed(1)}M
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 sm:p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <div>
                <div className="font-semibold text-destructive text-sm sm:text-base">Total Spending</div>
                <div className="text-xs sm:text-sm text-destructive/80">All service budgets combined</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-destructive">
                £904.3M
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 sm:p-4 bg-secondary/50 rounded-lg border">
              <div>
                <div className="font-semibold text-secondary-foreground text-sm sm:text-base">Budget Gap</div>
                <div className="text-xs sm:text-sm text-secondary-foreground/80">Difference covered by reserves and borrowing</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-secondary-foreground">
                £{((904300000 - totalRevenue) / 1000000).toFixed(1)}M
              </div>
            </div>
            
            <div className="text-xs sm:text-sm text-muted-foreground bg-muted p-3 rounded-md flex items-start gap-2">
              <Info className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <strong>Note:</strong> The budget gap is normal and planned for. It's covered by using financial reserves 
                (money saved from previous years) and careful borrowing for capital projects. This allows KCC to smooth 
                out variations in income and maintain services during difficult periods.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RevenueBreakdown;
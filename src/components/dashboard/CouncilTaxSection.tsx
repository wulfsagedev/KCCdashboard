'use client';

// src/components/dashboard/CouncilTaxSection.tsx

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Home, Calculator, CreditCard, Calendar, CheckCircle, AlertTriangle, Lightbulb, Info } from "lucide-react";

const CouncilTaxSection = () => {
  const [selectedBand, setSelectedBand] = useState('D');

  const councilTaxData = {
    bandD: 1691.19, // KCC portion only
    taxbase: 587921.91, // Total Band D equivalent properties
    bands: {
      A: { rate: 6/9, amount: 1127.46, properties: 89543, description: "Small properties, flats, terraced houses" },
      B: { rate: 7/9, amount: 1315.37, properties: 156234, description: "Small to medium family homes" },
      C: { rate: 8/9, amount: 1503.28, properties: 187456, description: "Average family homes" },
      D: { rate: 1, amount: 1691.19, properties: 145678, description: "Larger family homes (baseline)" },
      E: { rate: 11/9, amount: 2067.01, properties: 98234, description: "Large family homes" },
      F: { rate: 13/9, amount: 2442.83, properties: 45123, description: "Large houses, small mansions" },
      G: { rate: 15/9, amount: 2818.65, properties: 23456, description: "Very large houses" },
      H: { rate: 18/9, amount: 3382.38, properties: 5678, description: "Mansions and luxury properties" }
    }
  };

  const calculateMonthlyPayment = (annualAmount: number) => (annualAmount / 10).toFixed(2);
  const calculateWeeklyPayment = (annualAmount: number) => (annualAmount / 52).toFixed(2);

  const totalProperties = Object.values(councilTaxData.bands).reduce((sum, band) => sum + band.properties, 0);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Band Selector */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Home className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-lg sm:text-xl">Select Your Council Tax Band</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Find your band on your council tax bill or check the government website
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
            {Object.entries(councilTaxData.bands).map(([band, data]) => (
              <Button
                key={band}
                variant={selectedBand === band ? "default" : "outline"}
                onClick={() => setSelectedBand(band)}
                className="h-auto p-2 sm:p-3 flex flex-col items-center"
              >
                <div className="font-bold text-sm sm:text-lg">Band {band}</div>
                <div className="text-xs text-center mt-1 leading-tight">
                  {data.properties.toLocaleString()} homes
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Selected Band Details */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg sm:text-xl">Band {selectedBand} - Your KCC Council Tax</CardTitle>
            </div>
            <Badge variant="default" className="text-xs w-fit">
              {((councilTaxData.bands[selectedBand as keyof typeof councilTaxData.bands].properties / totalProperties) * 100).toFixed(1)}% of Kent homes
            </Badge>
          </div>
          <CardDescription className="text-sm sm:text-base">
            {councilTaxData.bands[selectedBand as keyof typeof councilTaxData.bands].description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="text-center p-3 sm:p-4 bg-primary/5 rounded-lg border">
              <CreditCard className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-xl sm:text-2xl font-bold text-primary">
                £{councilTaxData.bands[selectedBand as keyof typeof councilTaxData.bands].amount.toFixed(2)}
              </div>
              <div className="text-xs sm:text-sm text-primary">Annual KCC Charge</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-secondary/50 rounded-lg border">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-secondary-foreground" />
              <div className="text-xl sm:text-2xl font-bold text-secondary-foreground">
                £{calculateMonthlyPayment(councilTaxData.bands[selectedBand as keyof typeof councilTaxData.bands].amount)}
              </div>
              <div className="text-xs sm:text-sm text-secondary-foreground">Monthly Payment</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-muted rounded-lg border">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
              <div className="text-xl sm:text-2xl font-bold text-muted-foreground">
                £{calculateWeeklyPayment(councilTaxData.bands[selectedBand as keyof typeof councilTaxData.bands].amount)}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Weekly Cost</div>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2 text-sm sm:text-base flex items-center gap-2">
              <Info className="h-4 w-4" />
              What This Money Pays For:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <div className="font-medium">Social Care (35%): £{(councilTaxData.bands[selectedBand as keyof typeof councilTaxData.bands].amount * 0.35).toFixed(0)} annually</div>
                <div className="text-muted-foreground">Care for elderly and disabled residents</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Children's Services (25%): £{(councilTaxData.bands[selectedBand as keyof typeof councilTaxData.bands].amount * 0.25).toFixed(0)} annually</div>
                <div className="text-muted-foreground">Child protection and family support</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Education (12%): £{(councilTaxData.bands[selectedBand as keyof typeof councilTaxData.bands].amount * 0.12).toFixed(0)} annually</div>
                <div className="text-muted-foreground">School transport and special needs</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Highways (10%): £{(councilTaxData.bands[selectedBand as keyof typeof councilTaxData.bands].amount * 0.10).toFixed(0)} annually</div>
                <div className="text-muted-foreground">Road maintenance and traffic systems</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Band Distribution */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Home className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-lg sm:text-xl">Kent Housing Distribution</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                How homes across Kent are distributed by council tax band
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            {Object.entries(councilTaxData.bands).map(([band, data]) => {
              const percentage = (data.properties / totalProperties) * 100;
              return (
                <div key={band} className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <div className="flex items-center space-x-2 min-w-0">
                      <span className="font-medium text-sm sm:text-base">Band {band}</span>
                      <Badge variant="outline" className="text-xs shrink-0">£{data.amount.toFixed(0)}/year</Badge>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-medium text-sm sm:text-base">{data.properties.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{percentage.toFixed(1)}%</div>
                    </div>
                  </div>
                  <Progress value={percentage} className="h-2" />
                  <div className="text-xs sm:text-sm text-muted-foreground">{data.description}</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Understanding Council Tax */}
      <Card className="border-l-4 border-l-destructive">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle className="text-lg sm:text-xl">How Council Tax Bands Work</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-sm sm:text-base">Band Assessment</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>Based on property value in April 1991</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>Assessed by Valuation Office Agency</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>Band D is the baseline (multiplier = 1.0)</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>Higher bands pay proportionally more</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm sm:text-base">Payment Options</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>Pay over 10 months (April to January)</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>Direct debit available</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>Single annual payment gets 1% discount</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>Discounts available for single occupancy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-destructive/10 rounded text-xs sm:text-sm flex items-start gap-2">
            <Lightbulb className="h-4 w-4 mt-0.5 shrink-0 text-destructive" />
            <div>
              <span className="font-medium">Remember:</span> This is just the KCC portion. Your total council tax bill includes charges from your district council, police, fire service, and possibly a parish council.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CouncilTaxSection;
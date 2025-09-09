'use client';

// src/components/dashboard/BandComparison.tsx

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Scale, MapPin, TrendingUp, Calculator, Users, Building2, Map, Clock, Info, CheckCircle, AlertTriangle, Lightbulb, BarChart3, DollarSign } from "lucide-react";

const BandComparison = () => {
  const [selectedComparison, setSelectedComparison] = useState('councils');

  const councilComparisons = [
    {
      council: 'Kent County Council',
      area: 'Kent',
      bandD: 1691.19,
      population: 1590000,
      type: 'County Council',
      services: ['Social Care', 'Education', 'Highways', 'Libraries'],
      efficiency: 'Good',
      satisfaction: 76
    },
    {
      council: 'Essex County Council',
      area: 'Essex',
      bandD: 1558.85,
      population: 1490000,
      type: 'County Council',
      services: ['Social Care', 'Education', 'Highways', 'Libraries'],
      efficiency: 'Good',
      satisfaction: 74
    },
    {
      council: 'Surrey County Council',
      area: 'Surrey',
      bandD: 1643.16,
      population: 1190000,
      type: 'County Council',
      services: ['Social Care', 'Education', 'Highways', 'Libraries'],
      efficiency: 'Excellent',
      satisfaction: 79
    },
    {
      council: 'Hampshire County Council',
      area: 'Hampshire',
      bandD: 1428.86,
      population: 1370000,
      type: 'County Council',
      services: ['Social Care', 'Education', 'Highways', 'Libraries'],
      efficiency: 'Good',
      satisfaction: 77
    },
    {
      council: 'East Sussex County Council',
      area: 'East Sussex',
      bandD: 1792.44,
      population: 560000,
      type: 'County Council',
      services: ['Social Care', 'Education', 'Highways', 'Libraries'],
      efficiency: 'Fair',
      satisfaction: 72
    }
  ];

  const regionalData = [
    {
      region: 'South East Average',
      bandD: 1615.32,
      description: 'Average for all county councils in South East England',
      comparison: 'KCC is £76 above average',
      reasoning: 'Higher due to coastal geography and aging population'
    },
    {
      region: 'England Average',
      bandD: 1568.99,
      description: 'Average for all county councils in England',
      comparison: 'KCC is £122 above average',
      reasoning: 'Kent&apos;s rural areas and social care demand increase costs'
    },
    {
      region: 'Similar Councils',
      bandD: 1634.87,
      description: 'Average for councils with similar demographics and geography',
      comparison: 'KCC is £56 above similar councils',
      reasoning: 'Similar challenges but Kent faces additional pressures'
    }
  ];

  const historicalData = [
    { year: '2020-21', bandD: 1468.10, increase: 3.99, context: 'COVID-19 emergency response costs' },
    { year: '2021-22', bandD: 1545.87, increase: 5.30, context: 'Adult social care precept introduced' },
    { year: '2022-23', bandD: 1594.23, increase: 3.13, context: 'Inflation pressure on services' },
    { year: '2023-24', bandD: 1636.95, increase: 2.68, context: 'Continued demand growth' },
    { year: '2024-25', bandD: 1691.19, increase: 3.31, context: 'Current year budget' }
  ];

  const serviceComparison = [
    {
      service: 'Adult Social Care',
      kent: 35,
      average: 32,
      explanation: 'Kent has older population than national average'
    },
    {
      service: 'Children&apos;s Services',
      kent: 25,
      average: 23,
      explanation: 'Higher demand for child protection services'
    },
    {
      service: 'Highways & Transport',
      kent: 10,
      average: 12,
      explanation: 'Efficient highway management despite rural challenges'
    },
    {
      service: 'Education Support',
      kent: 12,
      average: 15,
      explanation: 'Good value special education transport'
    },
    {
      service: 'Public Health',
      kent: 8,
      average: 8,
      explanation: 'In line with national priorities'
    },
    {
      service: 'Other Services',
      kent: 10,
      average: 10,
      explanation: 'Libraries, culture, and administrative costs'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Comparison Type Selector */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-lg sm:text-xl">Compare Kent County Council</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                See how KCC compares with other councils and over time
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            <Button
              variant={selectedComparison === 'councils' ? "default" : "outline"}
              onClick={() => setSelectedComparison('councils')}
              className="h-auto p-3 flex flex-col gap-1"
            >
              <MapPin className="h-4 w-4" />
              <span className="font-semibold text-sm">Similar Councils</span>
              <span className="text-xs text-muted-foreground">vs other counties</span>
            </Button>
            <Button
              variant={selectedComparison === 'regional' ? "default" : "outline"}
              onClick={() => setSelectedComparison('regional')}
              className="h-auto p-3 flex flex-col gap-1"
            >
              <Map className="h-4 w-4" />
              <span className="font-semibold text-sm">Regional Average</span>
              <span className="text-xs text-muted-foreground">South East & England</span>
            </Button>
            <Button
              variant={selectedComparison === 'historical' ? "default" : "outline"}
              onClick={() => setSelectedComparison('historical')}
              className="h-auto p-3 flex flex-col gap-1"
            >
              <Clock className="h-4 w-4" />
              <span className="font-semibold text-sm">Over Time</span>
              <span className="text-xs text-muted-foreground">5-year trend</span>
            </Button>
            <Button
              variant={selectedComparison === 'services' ? "default" : "outline"}
              onClick={() => setSelectedComparison('services')}
              className="h-auto p-3 flex flex-col gap-1"
            >
              <TrendingUp className="h-4 w-4" />
              <span className="font-semibold text-sm">Service Split</span>
              <span className="text-xs text-muted-foreground">vs national average</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Council Comparison */}
      {selectedComparison === 'councils' && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <CardTitle className="text-lg sm:text-xl">Comparison with Similar County Councils</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Band D council tax rates for county councils with similar demographics
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {councilComparisons.map((council, index) => (
                <div key={index} className={`p-3 sm:p-4 border rounded-lg ${council.council === 'Kent County Council' ? 'border-primary bg-primary/5' : ''}`}>
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 shrink-0 text-primary" />
                        <h3 className="font-semibold text-sm sm:text-base">{council.council}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="text-xs">{council.population.toLocaleString()} residents</Badge>
                        <Badge variant={council.efficiency === 'Excellent' ? 'default' : council.efficiency === 'Good' ? 'secondary' : 'destructive'} className="text-xs">
                          {council.efficiency}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg sm:text-2xl font-bold">£{council.bandD.toFixed(2)}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Band D annual</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <h4 className="font-medium text-xs sm:text-sm mb-2 flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        Services Provided
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {council.services.map((service, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{service}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-xs sm:text-sm mb-2 flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        Resident Satisfaction
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Progress value={council.satisfaction} className="flex-1 h-2" />
                        <span className="text-xs sm:text-sm font-medium">{council.satisfaction}%</span>
                      </div>
                    </div>
                  </div>
                  
                  {council.council === 'Kent County Council' && (
                    <div className="mt-3 p-2 sm:p-3 bg-primary/10 rounded text-xs sm:text-sm text-primary flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                      <div>
                        <strong>Your Council:</strong> KCC charges more than some neighbors but provides comprehensive services with good satisfaction ratings.
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Regional Comparison */}
      {selectedComparison === 'regional' && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Map className="h-5 w-5 text-primary" />
              <div>
                <CardTitle className="text-lg sm:text-xl">Regional & National Comparison</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  How KCC&apos;s Band D rate compares to regional and national averages
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {regionalData.map((region, index) => (
                <div key={index} className="p-3 sm:p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Map className="h-4 w-4 shrink-0 text-primary" />
                        <h3 className="font-semibold text-sm sm:text-base">{region.region}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{region.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg sm:text-2xl font-bold">£{region.bandD.toFixed(2)}</div>
                      <div className="text-xs sm:text-sm font-medium text-primary">{region.comparison}</div>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground bg-muted p-3 rounded-md flex items-start gap-2">
                    <Info className="h-4 w-4 mt-0.5 shrink-0" />
                    <div>
                      <strong>Why the difference:</strong> {region.reasoning}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Historical Comparison */}
      {selectedComparison === 'historical' && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <CardTitle className="text-lg sm:text-xl">5-Year Council Tax Trend</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  How KCC&apos;s Band D rate has changed over the last 5 years
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {historicalData.map((year, index) => (
                <div key={index} className="p-3 sm:p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base">{year.year}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{year.context}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg sm:text-xl font-bold">£{year.bandD.toFixed(2)}</div>
                      <Badge 
                        variant={year.increase > 4 ? 'destructive' : year.increase > 3 ? 'secondary' : 'default'}
                        className="text-xs"
                      >
                        +{year.increase}% increase
                      </Badge>
                    </div>
                  </div>
                  <Progress value={year.increase * 10} className="h-2" />
                </div>
              ))}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="p-3 sm:p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold text-primary text-sm sm:text-base">Total Increase</h4>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-1">£223.09</div>
                  <p className="text-xs sm:text-sm text-primary/80">
                    Over 5 years (15.2% total increase, averaging 3.04% per year)
                  </p>
                </div>
                <div className="p-3 sm:p-4 bg-secondary/50 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-secondary-foreground" />
                    <h4 className="font-semibold text-secondary-foreground text-sm sm:text-base">Inflation Context</h4>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-secondary-foreground mb-1">18.5%</div>
                  <p className="text-xs sm:text-sm text-secondary-foreground/80">
                    Cumulative inflation 2020-2024 - council tax increases have been below inflation
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Service Comparison */}
      {selectedComparison === 'services' && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <div>
                <CardTitle className="text-lg sm:text-xl">Service Spending vs National Average</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  How KCC allocates budget compared to the average county council
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {serviceComparison.map((service, index) => (
                <div key={index} className="p-3 sm:p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <Building2 className="h-4 w-4 shrink-0 text-primary" />
                      <h3 className="font-semibold text-sm sm:text-base truncate">{service.service}</h3>
                    </div>
                    <div className="flex items-center space-x-2 shrink-0">
                      <Badge variant={service.kent > service.average ? 'destructive' : service.kent < service.average ? 'default' : 'secondary'} className="text-xs">
                        {service.kent > service.average ? 'Above' : service.kent < service.average ? 'Below' : 'Same'} Average
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm">Kent County Council</span>
                      <span className="font-medium text-sm sm:text-base">{service.kent}%</span>
                    </div>
                    <Progress value={service.kent} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-muted-foreground">National Average</span>
                      <span className="text-muted-foreground text-sm sm:text-base">{service.average}%</span>
                    </div>
                    <Progress value={service.average} className="h-2 opacity-50" />
                  </div>
                  
                  <div className="text-xs sm:text-sm text-muted-foreground bg-muted p-3 rounded-md flex items-start gap-2">
                    <Info className="h-4 w-4 mt-0.5 shrink-0" />
                    <div>
                      <strong>Why the difference:</strong> {service.explanation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Comparison Calculator */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-lg sm:text-xl">Quick Comparison Calculator</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                See what KCC services would cost in other council areas
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="text-center p-3 sm:p-4 border rounded-lg">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">If KCC was Hampshire</h4>
              <div className="text-lg sm:text-xl font-bold text-primary">£1,428.86</div>
              <div className="text-xs sm:text-sm text-muted-foreground">£262 less per year</div>
              <div className="text-xs mt-2 text-destructive">
                But: Different demographics, less coastal area
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 border rounded-lg bg-primary/5">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Current KCC Rate</h4>
              <div className="text-lg sm:text-xl font-bold text-primary">£1,691.19</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Your actual rate</div>
              <div className="text-xs mt-2 text-primary">
                Reflects Kent&apos;s actual service needs
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 border rounded-lg">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">If KCC was Surrey</h4>
              <div className="text-lg sm:text-xl font-bold text-secondary-foreground">£1,643.16</div>
              <div className="text-xs sm:text-sm text-muted-foreground">£48 less per year</div>
              <div className="text-xs mt-2 text-destructive">
                But: Wealthier residents, different challenges
              </div>
            </div>
          </div>
          
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
            <Info className="h-4 w-4 shrink-0" />
            <span>
              <strong>Note:</strong> These comparisons are illustrative only. Each council faces unique circumstances 
              that affect costs and service needs.
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BandComparison;
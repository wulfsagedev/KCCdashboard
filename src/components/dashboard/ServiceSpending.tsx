'use client';

// src/components/dashboard/ServiceSpending.tsx

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Users, Shield, GraduationCap, Car, Heart, Building, Settings, TrendingUp, AlertCircle, CheckCircle, Info } from "lucide-react";

const ServiceSpending = () => {
  const [selectedService, setSelectedService] = useState('adult-care');

  const services = {
    'adult-care': {
      name: 'Adult Social Care',
      budget: 316700000,
      percentage: 35,
      monthlyPerHousehold: 76.25,
      dailyCost: 867671,
      description: 'Supporting elderly and disabled residents to live independently',
      icon: Shield,
      breakdown: [
        { item: 'Care Home Fees', amount: 126680000, percentage: 40, explanation: 'Paying for residential and nursing home care' },
        { item: 'Home Care Services', amount: 95010000, percentage: 30, explanation: 'Help with daily tasks like washing, cooking, medication' },
        { item: 'Learning Disability Support', amount: 63340000, percentage: 20, explanation: 'Specialized support for people with learning disabilities' },
        { item: 'Mental Health Services', amount: 31670000, percentage: 10, explanation: 'Community mental health support and crisis intervention' }
      ],
      impact: {
        peopleHelped: 45000,
        careHours: 2800000,
        facilities: 850
      },
      challenges: 'Aging population means more people need care, but government funding has not kept pace with demand.',
      whyImportant: 'Without this service, vulnerable residents would have nowhere to turn for essential daily support.'
    },
    'children-services': {
      name: 'Children\'s Services',
      budget: 226071914,
      percentage: 25,
      monthlyPerHousehold: 54.46,
      dailyCost: 619395,
      description: 'Protecting children and supporting families in crisis',
      icon: Users,
      breakdown: [
        { item: 'Child Protection', amount: 90428766, percentage: 40, explanation: 'Social workers investigating abuse and neglect' },
        { item: 'Looked After Children', amount: 67607874, percentage: 30, explanation: 'Foster care, residential care, and adoption services' },
        { item: 'Early Help & Prevention', amount: 45071957, percentage: 20, explanation: 'Supporting families before problems become serious' },
        { item: 'Youth Offending Service', amount: 22607191, percentage: 10, explanation: 'Working with young people who commit crimes' }
      ],
      impact: {
        peopleHelped: 15000,
        casesHandled: 8500,
        facilities: 45
      },
      challenges: 'More complex cases and rising costs of care placements put pressure on budgets.',
      whyImportant: 'Protecting Kent\'s most vulnerable children is a legal duty and moral obligation.'
    },
    'education': {
      name: 'Education & Schools',
      budget: 108514519,
      percentage: 12,
      monthlyPerHousehold: 26.14,
      dailyCost: 297301,
      description: 'Supporting education across Kent\'s schools',
      icon: GraduationCap,
      breakdown: [
        { item: 'Special Educational Needs', amount: 43405808, percentage: 40, explanation: 'Extra support for children with disabilities and learning needs' },
        { item: 'School Transport', amount: 32554356, percentage: 30, explanation: 'Buses and taxis getting children to school safely' },
        { item: 'Education Psychology', amount: 21702904, percentage: 20, explanation: 'Specialist support for children with behavioral or learning difficulties' },
        { item: 'Adult Education', amount: 10851452, percentage: 10, explanation: 'Community learning and skills training for adults' }
      ],
      impact: {
        peopleHelped: 25000,
        schoolsSupported: 650,
        journeysProvided: 15000000
      },
      challenges: 'Rising number of children with special needs requires more specialist support and transport.',
      whyImportant: 'Ensuring every child can access education regardless of their needs or location.'
    },
    'highways': {
      name: 'Highways & Transport',
      budget: 90428766,
      percentage: 10,
      monthlyPerHousehold: 21.78,
      dailyCost: 247750,
      description: 'Maintaining Kent\'s roads and transport infrastructure',
      icon: Car,
      breakdown: [
        { item: 'Road Maintenance', amount: 36171506, percentage: 40, explanation: 'Fixing potholes, resurfacing roads, and structural repairs' },
        { item: 'Traffic Management', amount: 27128630, percentage: 30, explanation: 'Traffic lights, road signs, and junction improvements' },
        { item: 'Winter Services', amount: 18085753, percentage: 20, explanation: 'Gritting roads and clearing snow in winter' },
        { item: 'Public Transport Support', amount: 9042877, percentage: 10, explanation: 'Subsidizing bus routes in rural areas' }
      ],
      impact: {
        roadsMaintained: 5200,
        potholesFilled: 45000,
        grittingRuns: 850
      },
      challenges: 'Increasing traffic and extreme weather put more pressure on road surfaces.',
      whyImportant: 'Good roads are essential for business, emergency services, and daily life.'
    },
    'public-health': {
      name: 'Public Health',
      budget: 72343013,
      percentage: 8,
      monthlyPerHousehold: 17.43,
      dailyCost: 198202,
      description: 'Preventing disease and promoting healthy communities',
      icon: Heart,
      breakdown: [
        { item: 'Sexual Health Services', amount: 28937205, percentage: 40, explanation: 'Contraception, STI testing, and sexual health clinics' },
        { item: 'Drug & Alcohol Treatment', amount: 21702904, percentage: 30, explanation: 'Helping people overcome addiction and substance abuse' },
        { item: 'Health Improvement', amount: 14468603, percentage: 20, explanation: 'Programs to reduce smoking, obesity, and promote exercise' },
        { item: 'Health Protection', amount: 7234301, percentage: 10, explanation: 'Managing disease outbreaks and environmental health risks' }
      ],
      impact: {
        peopleHelped: 85000,
        programsRun: 120,
        healthChecks: 35000
      },
      challenges: 'Growing mental health needs and lifestyle-related diseases require more intervention.',
      whyImportant: 'Prevention is cheaper than treatment - keeping people healthy saves money long-term.'
    },
    'libraries-culture': {
      name: 'Libraries & Culture',
      budget: 45214383,
      percentage: 5,
      monthlyPerHousehold: 10.89,
      dailyCost: 123876,
      description: 'Providing community spaces and cultural opportunities',
      icon: Building,
      breakdown: [
        { item: 'Library Services', amount: 22607191, percentage: 50, explanation: 'Books, computers, and community spaces in 99 libraries' },
        { item: 'Registration Services', amount: 9042877, percentage: 20, explanation: 'Birth, death, and marriage registrations and ceremonies' },
        { item: 'Museums & Heritage', amount: 6782158, percentage: 15, explanation: 'Preserving Kent\'s history and providing educational experiences' },
        { item: 'Arts & Community', amount: 6782158, percentage: 15, explanation: 'Supporting local arts groups and community events' }
      ],
      impact: {
        visitors: 3500000,
        booksBorrowed: 1800000,
        eventsHosted: 8500
      },
      challenges: 'Digital services cost money while traditional library use declines.',
      whyImportant: 'Libraries provide essential services for people without internet access and create community hubs.'
    }
  };

  const currentService = services[selectedService as keyof typeof services];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Service Selector */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-lg sm:text-xl">Explore KCC Services</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Click on any service to see detailed spending breakdown and impact
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {Object.entries(services).map(([key, service]) => {
              const ServiceIcon = service.icon;
              return (
                <Button
                  key={key}
                  variant={selectedService === key ? "default" : "outline"}
                  onClick={() => setSelectedService(key)}
                  className="h-auto p-3 sm:p-4 flex flex-col items-start text-left gap-2"
                >
                  <div className="flex items-center gap-2 w-full">
                    <ServiceIcon className="h-4 w-4 shrink-0" />
                    <div className="font-semibold text-sm sm:text-base truncate">{service.name}</div>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    £{(service.budget / 1000000).toFixed(1)}M ({service.percentage}%)
                  </div>
                  <div className="text-xs">
                    £{service.monthlyPerHousehold.toFixed(2)}/month per household
                  </div>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Selected Service Details */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-2">
              <currentService.icon className="h-6 w-6 text-primary" />
              <CardTitle className="text-xl sm:text-2xl">{currentService.name}</CardTitle>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="text-xs">{currentService.percentage}% of budget</Badge>
              <Badge variant="outline" className="text-xs">£{currentService.monthlyPerHousehold.toFixed(2)}/month</Badge>
            </div>
          </div>
          <CardDescription className="text-sm sm:text-base">{currentService.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="text-center p-3 sm:p-4 bg-primary/5 rounded-lg border">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                £{(currentService.budget / 1000000).toFixed(1)}M
              </div>
              <div className="text-xs sm:text-sm text-primary">Annual Budget</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-secondary/50 rounded-lg border">
              <div className="text-xl sm:text-2xl font-bold text-secondary-foreground">
                £{currentService.dailyCost.toLocaleString()}
              </div>
              <div className="text-xs sm:text-sm text-secondary-foreground">Daily Cost</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-muted rounded-lg border">
              <div className="text-xl sm:text-2xl font-bold text-muted-foreground">
                {currentService.impact.peopleHelped?.toLocaleString() || 'N/A'}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">People Helped</div>
            </div>
          </div>

          {/* Budget Breakdown */}
          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-base sm:text-lg font-semibold">How the money is spent:</h3>
            </div>
            {currentService.breakdown.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center gap-2">
                  <span className="font-medium text-sm sm:text-base">{item.item}</span>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-sm sm:text-base">£{(item.amount / 1000000).toFixed(1)}M</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{item.percentage}%</div>
                  </div>
                </div>
                <Progress value={item.percentage} className="h-2" />
                <div className="text-xs sm:text-sm text-muted-foreground bg-muted p-2 rounded-md">
                  {item.explanation}
                </div>
              </div>
            ))}
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {Object.entries(currentService.impact).map(([key, value]) => (
              <div key={key} className="text-center p-3 border rounded-lg">
                <div className="text-lg sm:text-xl font-bold">{value?.toLocaleString()}</div>
                <div className="text-xs sm:text-sm text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </div>
              </div>
            ))}
          </div>

          {/* Context and Challenges */}
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <h4 className="font-semibold text-destructive text-sm sm:text-base">Current Challenges</h4>
              </div>
              <p className="text-xs sm:text-sm text-destructive/80">{currentService.challenges}</p>
            </div>
            <div className="p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <h4 className="font-semibold text-primary text-sm sm:text-base">Why This Service Matters</h4>
              </div>
              <p className="text-xs sm:text-sm text-primary/80">{currentService.whyImportant}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Comparison */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-lg sm:text-xl">Service Spending Comparison</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                How much each service costs per household per month
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.values(services)
              .sort((a, b) => b.budget - a.budget)
              .map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg gap-3">
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">
                        {index + 1}
                      </div>
                      <ServiceIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <div className="min-w-0">
                        <div className="font-medium text-sm sm:text-base truncate">{service.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground truncate">
                          {service.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-sm sm:text-base">£{service.monthlyPerHousehold.toFixed(2)}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">per month</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceSpending;
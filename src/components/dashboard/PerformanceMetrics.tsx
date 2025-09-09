import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Zap } from 'lucide-react';

const PerformanceSection = () => {
  const performanceMetrics = [
    {
      category: "Resident Satisfaction",
      icon: <Users className="h-5 w-5" />,
      description: "How satisfied Kent residents are with council services",
      services: [
        {
          name: "Libraries",
          score: 89,
          target: 85,
          trend: "up",
          benchmark: "Above national average (84%)",
          source: "2024 Annual Survey",
          explanation: "Libraries consistently score highest - free access to books, computers, and community spaces"
        },
        {
          name: "Highways",
          score: 67,
          target: 70,
          trend: "down",
          benchmark: "Below national average (72%)",
          source: "2024 Annual Survey", 
          explanation: "Road maintenance satisfaction affected by winter weather damage and funding constraints"
        },
        {
          name: "Adult Social Care",
          score: 78,
          target: 80,
          trend: "up",
          benchmark: "At national average (78%)",
          source: "CQC Assessment",
          explanation: "Care quality improving but waiting times for assessments remain a challenge"
        }
      ]
    },
    {
      category: "Value for Money",
      icon: <DollarSign className="h-5 w-5" />,
      description: "How efficiently KCC delivers services compared to similar councils",
      services: [
        {
          name: "Children's Services",
          score: 82,
          target: 85,
          trend: "up",
          benchmark: "Above average (79%)",
          source: "DfE Statistics",
          explanation: "Good outcomes per £ spent, but high demand increases total costs"
        },
        {
          name: "Waste Management",
          score: 91,
          target: 88,
          trend: "up",
          benchmark: "Well above average (85%)",
          source: "DEFRA Reports",
          explanation: "Excellent recycling rates and efficient collection routes save money"
        }
      ]
    }
  ];

  const ServiceMetric = ({ service, category }) => (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <h4 className="font-medium text-sm sm:text-base truncate">{service.name}</h4>
          {service.trend === 'up' ? (
            <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-600 flex-shrink-0" />
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Badge variant={service.score >= service.target ? "default" : "secondary"} className="text-xs">
            {service.score}%
          </Badge>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            Target: {service.target}%
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <Progress value={service.score} className="h-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0%</span>
          <span className="text-center">Target: {service.target}%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="grid gap-3">
        <div className="space-y-1">
          <div className="flex items-start gap-2">
            <Target className="h-3 w-3 mt-1 flex-shrink-0 text-muted-foreground" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-muted-foreground">Performance Details</p>
              <p className="text-sm break-words">
                <span className="font-medium">Benchmark:</span> {service.benchmark}
              </p>
              <p className="text-sm break-words">
                <span className="font-medium">Source:</span> {service.source}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-start gap-2">
            <Zap className="h-3 w-3 mt-1 flex-shrink-0 text-muted-foreground" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-muted-foreground">What This Means</p>
              <p className="text-sm text-muted-foreground break-words leading-relaxed">
                {service.explanation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">KCC Performance Dashboard</h2>
        <p className="text-muted-foreground">
          Tracking how well KCC delivers services and value for money
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">Resident Satisfaction</p>
              <p className="text-xs text-muted-foreground break-words">
                How satisfied Kent residents are with council services
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">Value for Money</p>
              <p className="text-xs text-muted-foreground break-words">
                How efficiently KCC delivers services compared to similar councils
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">Service Outcomes</p>
              <p className="text-xs text-muted-foreground break-words">
                How well services achieve their intended results
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">Digital & Innovation</p>
              <p className="text-xs text-muted-foreground break-words">
                How KCC uses technology and innovation to improve services
              </p>
            </div>
          </div>
        </Card>
      </div>

      {performanceMetrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              {metric.icon}
              <span className="break-words">{metric.category}</span>
            </CardTitle>
            <CardDescription className="break-words leading-relaxed">
              {metric.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {metric.services.map((service, serviceIndex) => (
              <div key={serviceIndex}>
                <ServiceMetric service={service} category={metric.category} />
                {serviceIndex < metric.services.length - 1 && (
                  <hr className="my-6 border-border" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PerformanceSection;
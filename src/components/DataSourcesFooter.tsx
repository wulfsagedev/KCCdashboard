'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Building, BarChart3, Users, Shield } from 'lucide-react';

export default function DataSourcesFooter() {
  const dataSources = [
    {
      category: "Budget & Finance",
      icon: <FileText className="h-4 w-4" />,
      sources: [
        {
          title: "Kent County Council Budget Book 2025-26",
          description: "Official annual budget document with complete financial details",
          url: "https://www.kent.gov.uk/about-the-council/finance-and-budget/budget-book-and-medium-term-financial-plan",
          lastUpdated: "February 2025"
        },
        {
          title: "Council Tax 2025-26",
          description: "Official council tax rates and band information",
          url: "https://www.kent.gov.uk/about-the-council/finance-and-budget/council-tax/council-tax-2025-to-2026",
          lastUpdated: "February 2025"
        },
        {
          title: "KCC Spending Data",
          description: "Detailed information about council spending and financial transparency",
          url: "https://www.kent.gov.uk/about-the-council/finance-and-budget/spending",
          lastUpdated: "Ongoing"
        }
      ]
    },
    {
      category: "Performance & Quality",
      icon: <BarChart3 className="h-4 w-4" />,
      sources: [
        {
          title: "Care Quality Commission Assessment Report",
          description: "Independent assessment of KCC&apos;s adult social care services",
          url: "https://www.cqc.org.uk/care-services/local-authority-assessment-reports/kent-0525",
          lastUpdated: "May 2025"
        },
        {
          title: "Budget Consultation 2025-26",
          description: "Public consultation responses and resident feedback",
          url: "https://letstalk.kent.gov.uk/budget-consultation-2025-26",
          lastUpdated: "September 2024"
        }
      ]
    },
    {
      category: "National Statistics",
      icon: <Building className="h-4 w-4" />,
      sources: [
        {
          title: "ONS Public Sector Finance Statistics",
          description: "Official UK government finance and local authority data",
          url: "https://www.ons.gov.uk/economy/governmentpublicsectorandtaxes/publicsectorfinance",
          lastUpdated: "Monthly"
        },
        {
          title: "ONS Local Government Finance Data",
          description: "Comprehensive local government expenditure and revenue statistics",
          url: "https://www.ons.gov.uk/economy/governmentpublicsectorandtaxes/localgovernmentfinance",
          lastUpdated: "Quarterly"
        },
        {
          title: "Government Live Tables on Local Government Finance",
          description: "Latest data on local authority borrowing, spending and council tax",
          url: "https://www.gov.uk/government/statistical-data-sets/live-tables-on-local-government-finance",
          lastUpdated: "Quarterly"
        }
      ]
    },
    {
      category: "Governance & Democracy",
      icon: <Users className="h-4 w-4" />,
      sources: [
        {
          title: "KCC Committee Meetings & Reports",
          description: "Official council decisions, minutes and policy documents",
          url: "https://democracy.kent.gov.uk/",
          lastUpdated: "Ongoing"
        },
        {
          title: "Annual Statement of Accounts",
          description: "Audited financial statements and annual governance statement",
          url: "https://www.kent.gov.uk/about-the-council/finance-and-budget",
          lastUpdated: "Annually"
        }
      ]
    }
  ];

  const methodology = [
    {
      title: "Data Accuracy",
      description: "All financial figures are sourced directly from KCC&apos;s official budget documents and government statistical releases."
    },
    {
      title: "Currency & Timing",
      description: "All figures are current as of the 2025-26 financial year unless otherwise stated. Historical comparisons use like-for-like methodology."
    },
    {
      title: "Transparency",
      description: "This dashboard aims to make complex government finances accessible to all Kent residents through clear explanations and reliable sources."
    }
  ];

  return (
    <footer className="bg-muted/30 border-t mt-12">
      <div className="container mx-auto px-3 py-8 sm:px-6 sm:py-12 max-w-7xl">
        <div className="space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold">Data Sources & Methodology</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              All data in this dashboard comes from official government sources to ensure accuracy and transparency. 
              Click any link below to view the original documents and verify the information.
            </p>
          </div>

          {/* Data Sources Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {dataSources.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {category.icon}
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.sources.map((source, sourceIndex) => (
                      <div key={sourceIndex} className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <a 
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-primary hover:underline flex items-start gap-1"
                            >
                              {source.title}
                              <ExternalLink className="h-3 w-3 mt-0.5 flex-shrink-0" />
                            </a>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                              {source.description}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-xs flex-shrink-0">
                            {source.lastUpdated}
                          </Badge>
                        </div>
                        {sourceIndex < category.sources.length - 1 && (
                          <hr className="border-border opacity-50" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Methodology */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Data Quality & Methodology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {methodology.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-sm font-medium">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Legal & Contact */}
          <div className="border-t pt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2 text-xs text-muted-foreground">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">About This Dashboard</h4>
                <p className="leading-relaxed">
                  This independent dashboard presents Kent County Council&apos;s financial data in an accessible format. 
                  It is not affiliated with KCC but uses only official government sources.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Data Usage</h4>
                <p className="leading-relaxed">
                  All data is published under Open Government Licence and may be freely used. 
                  Please verify figures against original sources for formal purposes.
                </p>
              </div>
            </div>
            
            <div className="text-center text-xs text-muted-foreground border-t pt-4">
              <p>
                Last updated: September 2025 • Made for Kent residents • 
                <a href="mailto:feedback@example.com" className="text-primary hover:underline ml-1">
                  Report issues or suggest improvements
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
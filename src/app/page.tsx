'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Import your existing modular components
import BudgetOverview from '@/components/dashboard/BudgetOverview';
import CouncilTaxSection from '@/components/dashboard/CouncilTaxSection';
import ServicesSpending from '@/components/dashboard/ServiceSpending';
import RevenueBreakdown from '@/components/dashboard/RevenueBreakdown';
import PerformanceMetrics from '@/components/dashboard/PerformanceMetrics';
import BandComparison from '@/components/dashboard/BandComparison';
import DataSourcesFooter from '@/components/DataSourcesFooter';

export default function KCCDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 py-3 sm:px-6 sm:py-6 max-w-7xl">
        {/* Mobile-optimized header with better spacing */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-xl leading-tight sm:text-2xl lg:text-3xl font-bold">
              Kent County Council Budget 2025-26
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Complete financial overview • Last updated: 09/09/2025
            </p>
          </div>
          {/* Theme toggle positioned better on mobile */}
          <div className="flex justify-end sm:mt-0">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile-optimized alert with better padding */}
        <Alert className="mb-4 sm:mb-6 p-3 sm:p-4">
          <AlertDescription className="text-sm leading-relaxed">
            All figures represent the KCC portion only. Your total council tax includes charges from district councils, police, and fire services.
          </AlertDescription>
        </Alert>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          {/* Mobile-first tab design with better touch targets */}
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 mb-4 sm:mb-6 h-auto p-1">
            <TabsTrigger 
              value="overview" 
              className="text-xs sm:text-sm px-1 py-2 sm:px-3 sm:py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="council-tax" 
              className="text-xs sm:text-sm px-1 py-2 sm:px-3 sm:py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Council Tax
            </TabsTrigger>
            <TabsTrigger 
              value="services" 
              className="text-xs sm:text-sm px-1 py-2 sm:px-3 sm:py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Services
            </TabsTrigger>
            <TabsTrigger 
              value="revenue" 
              className="text-xs sm:text-sm px-1 py-2 sm:px-3 sm:py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Revenue
            </TabsTrigger>
            <TabsTrigger 
              value="performance" 
              className="text-xs sm:text-sm px-1 py-2 sm:px-3 sm:py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Performance
            </TabsTrigger>
            <TabsTrigger 
              value="comparison" 
              className="text-xs sm:text-sm px-1 py-2 sm:px-3 sm:py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Compare
            </TabsTrigger>
          </TabsList>

          {/* Content with consistent mobile spacing */}
          <div className="space-y-4 sm:space-y-6">
            <TabsContent value="overview" className="mt-0 space-y-4 sm:space-y-6">
              <BudgetOverview />
            </TabsContent>

            <TabsContent value="council-tax" className="mt-0 space-y-4 sm:space-y-6">
              <CouncilTaxSection />
            </TabsContent>

            <TabsContent value="services" className="mt-0 space-y-4 sm:space-y-6">
              <ServicesSpending />
            </TabsContent>

            <TabsContent value="revenue" className="mt-0 space-y-4 sm:space-y-6">
              <RevenueBreakdown />
            </TabsContent>

            <TabsContent value="performance" className="mt-0 space-y-4 sm:space-y-6">
              <PerformanceMetrics />
            </TabsContent>

            <TabsContent value="comparison" className="mt-0 space-y-4 sm:space-y-6">
              <BandComparison />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      {/* Data Sources Footer - appears on all pages */}
      <DataSourcesFooter />
    </div>
  );
}
// src/types/council.ts
export interface Council {
  id: string;
  name: string;
  fullName: string;
  region: string;
  totalBudget: number;
  residents: number;
  households: number;
  councilTaxRate: number;
  website: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  establishedYear: number;
  area: string; // e.g., "1,368 sq miles"
}

export interface ServiceSpending {
  id: string;
  name: string;
  category: ServiceCategory;
  amount: number; // in pounds
  percentage: number; // percentage of total budget
  value: number; // actual budget value
  monthlyPerHousehold: number;
  description: string;
  performance: number; // performance rating 0-100
  trend: 'up' | 'down' | 'stable';
  trendPercentage: number;
  keyMetrics: string[];
  challenges: string[];
  improvements: string[];
}

export type ServiceCategory = 
  | 'social-care'
  | 'education'
  | 'transport'
  | 'environment'
  | 'public-health'
  | 'emergency-services'
  | 'housing'
  | 'governance'
  | 'economic-development';

export interface CouncilTaxBand {
  band: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
  ratio: number;
  annualAmount: number;
  monthlyAmount: number;
  properties: number; // number of properties in this band
  percentage: number; // percentage of total properties
}

export interface RevenueSource {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  type: 'council-tax' | 'government-grants' | 'business-rates' | 'fees-charges' | 'other';
  description: string;
  reliability: 'high' | 'medium' | 'low';
}

// src/types/dashboard.ts
export interface DashboardMetric {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  trend?: {
    direction: 'up' | 'down' | 'stable';
    percentage: number;
    period: string; // e.g., "vs last year"
  };
  description: string;
  importance: 'high' | 'medium' | 'low';
  category: string;
}

export interface PerformanceIndicator {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  description: string;
  lastUpdated: Date;
  source: string;
  trend: {
    direction: 'up' | 'down' | 'stable';
    data: Array<{ period: string; value: number }>;
  };
}

export interface DataSource {
  id: string;
  name: string;
  url: string;
  type: 'pdf' | 'api' | 'csv' | 'web';
  lastFetched?: Date;
  updateFrequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'annually';
  reliability: 'high' | 'medium' | 'low';
  description: string;
}

export interface ChartData {
  id: string;
  type: 'bar' | 'line' | 'pie' | 'doughnut' | 'area';
  title: string;
  data: any[]; // Chart.js data format
  options?: any; // Chart.js options
  description: string;
  source: string;
}

// src/types/theme.ts
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

// src/types/api.ts
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: Date;
  source?: string;
}

export interface ApiError {
  message: string;
  code: string;
  details?: any;
}

// src/types/index.ts
export type {
  Council,
  ServiceSpending,
  ServiceCategory,
  CouncilTaxBand,
  RevenueSource
} from './council';

export type {
  DashboardMetric,
  PerformanceIndicator,
  DataSource,
  ChartData
} from './dashboard';

export type {
  Theme,
  ThemeContextType
} from './theme';

export type {
  ApiResponse,
  ApiError
} from './api';
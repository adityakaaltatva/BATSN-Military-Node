export interface Alert {
  id: string;
  explosiveLevel: number;
  chemicalDetected: string;
  location: {
    latitude: number;
    longitude: number;
  };
  timestamp: string;
}

export interface FilterOptions {
  location?: string;
  timeRange?: {
    start: Date;
    end: Date;
  };
}
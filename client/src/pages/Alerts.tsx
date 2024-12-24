import React, { useState, useEffect } from 'react';
import AlertTable from '../components/AlertTable';
import MapView from '../components/Map';
import FilterPanel from '../components/FilterPanel';
import type { Alert, FilterOptions } from '../types';
import { MapPin, Table } from 'lucide-react';

const Alerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [view, setView] = useState<'map' | 'table'>('table');
  const [filters, setFilters] = useState<FilterOptions>({});

  useEffect(() => {
    // Simulated data fetch - replace with actual API call
    const mockAlerts: Alert[] = [
      {
        id: '1',
        explosiveLevel: 7,
        chemicalDetected: 'TNT',
        location: { latitude: 40.7128, longitude: -74.0060 },
        timestamp: new Date().toISOString(),
      },
      {
        id: '2',
        explosiveLevel: 3,
        chemicalDetected: 'RDX',
        location: { latitude: 51.5074, longitude: -0.1278 },
        timestamp: new Date().toISOString(),
      },
    ];
    setAlerts(mockAlerts);
  }, []);

  const handleLogAlert = async (alert: Alert) => {
    try {
      // Implement blockchain logging logic here
      console.log('Logging alert to blockchain:', alert);
      // Show success message
    } catch (error) {
      console.error('Error logging to blockchain:', error);
      // Show error message
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Threat Alerts</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setView('table')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
              view === 'table' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            <Table className="w-5 h-5" />
            <span>Table View</span>
          </button>
          <button
            onClick={() => setView('map')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
              view === 'map' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            <MapPin className="w-5 h-5" />
            <span>Map View</span>
          </button>
        </div>
      </div>

      <FilterPanel filters={filters} onFilterChange={setFilters} />

      {view === 'table' ? (
        <AlertTable alerts={alerts} onLogAlert={handleLogAlert} />
      ) : (
        <MapView alerts={alerts} />
      )}
    </div>
  );
};

export default Alerts;
import React from 'react';
import { Filter } from 'lucide-react';
import type { FilterOptions } from '../types';

interface FilterPanelProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-400" />
        <h2 className="text-lg font-semibold text-white">Filters</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Location
          </label>
          <select
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.location || ''}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          >
            <option value="">All Locations</option>
            <option value="north">Northern Hemisphere</option>
            <option value="south">Southern Hemisphere</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Start Date
          </label>
          <input
            type="datetime-local"
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.timeRange?.start?.toISOString().slice(0, 16) || ''}
            onChange={(e) => {
              const newDate = e.target.value ? new Date(e.target.value) : undefined;
              onFilterChange({
                ...filters,
                timeRange: {
                  ...filters.timeRange,
                  start: newDate,
                  end: filters.timeRange?.end || new Date(),
                },
              });
            }}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            End Date
          </label>
          <input
            type="datetime-local"
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.timeRange?.end?.toISOString().slice(0, 16) || ''}
            onChange={(e) => {
              const newDate = e.target.value ? new Date(e.target.value) : undefined;
              onFilterChange({
                ...filters,
                timeRange: {
                  ...filters.timeRange,
                  start: filters.timeRange?.start || new Date(),
                  end: newDate,
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
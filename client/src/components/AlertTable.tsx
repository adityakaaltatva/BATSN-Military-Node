import React from 'react';
import { format } from 'date-fns';
import { AlertTriangle } from 'lucide-react';
import type { Alert } from '../types';

interface AlertTableProps {
  alerts: Alert[];
  onLogAlert: (alert: Alert) => void;
}

const AlertTable: React.FC<AlertTableProps> = ({ alerts, onLogAlert }) => {
  return (
    <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-xl">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-900 text-gray-300">
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Threat Level</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Chemical</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Timestamp</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {alerts.map((alert) => (
            <tr 
              key={alert.id}
              className={`
                ${alert.explosiveLevel > 5 ? 'bg-red-900/20' : 'bg-gray-800'}
                hover:bg-gray-700 transition-colors
              `}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {alert.explosiveLevel > 5 && (
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                  )}
                  <span className={`
                    ${alert.explosiveLevel > 5 ? 'text-red-500 font-bold' : 'text-gray-300'}
                  `}>
                    {alert.explosiveLevel}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {alert.chemicalDetected}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {`${alert.location.latitude.toFixed(6)}, ${alert.location.longitude.toFixed(6)}`}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {format(new Date(alert.timestamp), 'PPpp')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => onLogAlert(alert)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                >
                  Log to Blockchain
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertTable;
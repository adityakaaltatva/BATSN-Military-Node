import React, { useState, useEffect } from 'react';
import { Database, ExternalLink } from 'lucide-react';
import type { Alert } from '../types';

const BlockchainLogs = () => {
  const [logs, setLogs] = useState<Alert[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Simulate blockchain connection
    setIsConnected(true);
    // Fetch logs from blockchain
    const mockLogs: Alert[] = [
      {
        id: '1',
        explosiveLevel: 7,
        chemicalDetected: 'TNT',
        location: { latitude: 40.7128, longitude: -74.0060 },
        timestamp: new Date().toISOString(),
      },
    ];
    setLogs(mockLogs);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Blockchain Logs</h1>
          <p className="text-gray-400">
            Immutable record of high-threat alerts stored on the blockchain
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Database className={`w-5 h-5 ${isConnected ? 'text-green-500' : 'text-red-500'}`} />
          <span className={`${isConnected ? 'text-green-500' : 'text-red-500'}`}>
            {isConnected ? 'Connected to Network' : 'Disconnected'}
          </span>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Transactions</h2>
          {logs.map((log) => (
            <div key={log.id} className="bg-gray-700 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-white">
                  Alert #{log.id}
                </h3>
                <a
                  href="#"
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  <span className="mr-1">View on Explorer</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Threat Level</p>
                  <p className="text-white font-medium">{log.explosiveLevel}</p>
                </div>
                <div>
                  <p className="text-gray-400">Chemical</p>
                  <p className="text-white font-medium">{log.chemicalDetected}</p>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white font-medium">
                    {log.location.latitude}, {log.location.longitude}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Timestamp</p>
                  <p className="text-white font-medium">
                    {new Date(log.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainLogs;
import React from 'react';
import { Clock, Hash, Database, ArrowRight } from 'lucide-react';

interface BlockDetailsProps {
  block: {
    number: number;
    hash: string;
    timestamp: number;
    transactions: number;
    gasUsed: string;
    miner: string;
  };
}

const BlockDetails: React.FC<BlockDetailsProps> = ({ block }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
      <h2 className="text-xl font-bold text-green-400 mb-6 flex items-center">
        <Database className="w-6 h-6 mr-2" />
        Block #{block.number}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-400 mb-1">Block Hash</div>
            <div className="font-mono text-white break-all bg-gray-700/50 p-2 rounded">
              {block.hash}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-gray-400 mb-1">Timestamp</div>
            <div className="font-mono text-white flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-400" />
              {new Date(block.timestamp * 1000).toLocaleString()}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-400 mb-1">Miner</div>
            <div className="font-mono text-white break-all bg-gray-700/50 p-2 rounded">
              {block.miner}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-gray-400 mb-1">Gas Used</div>
            <div className="font-mono text-white">
              {block.gasUsed}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockDetails;
import React from 'react';
import { Shield, Clock, Hash } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Block {
  number: number;
  hash: string;
  timestamp: number;
  transactions: number;
}

interface BlockListProps {
  blocks: Block[];
  onSelectBlock: (block: Block) => void;
}

const BlockList: React.FC<BlockListProps> = ({ blocks, onSelectBlock }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold text-green-400 flex items-center">
          <Shield className="w-5 h-5 mr-2" />
          Latest Blocks
        </h2>
      </div>
      <div className="divide-y divide-gray-700">
        {blocks.map((block) => (
          <button
            key={block.hash}
            onClick={() => onSelectBlock(block)}
            className="w-full p-4 hover:bg-gray-700/50 transition-colors text-left flex items-center justify-between group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700 p-2 rounded-lg group-hover:bg-gray-600">
                <Hash className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Block</div>
                <div className="font-mono text-white">#{block.number}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {formatDistanceToNow(block.timestamp * 1000, { addSuffix: true })}
              </div>
              <div className="text-sm text-gray-400">
                {block.transactions} transactions
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlockList;
import React, { useState, useEffect } from 'react';
import BlockList from '../components/explorer/BlockList';
import TransactionList from '../components/explorer/TransactionList';
import BlockDetails from '../components/explorer/BlockDetails';
import { Shield } from 'lucide-react';

const Explorer = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [blocks, setBlocks] = useState([
    {
      number: 1234567,
      hash: '0x1234...5678',
      timestamp: Date.now() / 1000,
      transactions: 150,
      gasUsed: '1,234,567',
      miner: '0xabcd...efgh'
    }
  ]);
  
  const [transactions, setTransactions] = useState([
    {
      hash: '0xtx1234...5678',
      from: '0xsender...1234',
      to: '0xreceiver...5678',
      value: '1.23 ETH'
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-green-400" />
            Blockchain Explorer
          </h1>
          <p className="text-gray-400">
            Monitor and analyze blockchain activity in real-time
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <BlockList 
            blocks={blocks} 
            onSelectBlock={setSelectedBlock} 
          />
          <TransactionList transactions={transactions} />
        </div>
        
        <div>
          {selectedBlock && <BlockDetails block={selectedBlock} />}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
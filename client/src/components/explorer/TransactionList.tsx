import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold text-green-400 flex items-center">
          <FileText className="w-5 h-5 mr-2" />
          Latest Transactions
        </h2>
      </div>
      <div className="divide-y divide-gray-700">
        {transactions.map((tx) => (
          <div key={tx.hash} className="p-4 hover:bg-gray-700/50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="font-mono text-sm text-gray-400 truncate flex-1">
                {tx.hash}
              </div>
            </div>
            <div className="flex items-center text-sm">
              <div className="font-mono text-gray-400 truncate flex-1">
                {tx.from}
              </div>
              <ArrowRight className="w-4 h-4 mx-2 text-green-400" />
              <div className="font-mono text-gray-400 truncate flex-1">
                {tx.to}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface StatusBadgeProps {
  status: 'success' | 'error' | 'warning';
  text: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, text }) => {
  const icons = {
    success: <CheckCircle className="w-4 h-4 text-green-400" />,
    error: <XCircle className="w-4 h-4 text-red-400" />,
    warning: <AlertTriangle className="w-4 h-4 text-yellow-400" />
  };

  const colors = {
    success: 'bg-green-400/10 text-green-400 border-green-400/20',
    error: 'bg-red-400/10 text-red-400 border-red-400/20',
    warning: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20'
  };

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full border ${colors[status]}`}>
      {icons[status]}
      <span className="ml-2 text-sm font-medium">{text}</span>
    </div>
  );
};

export default StatusBadge;
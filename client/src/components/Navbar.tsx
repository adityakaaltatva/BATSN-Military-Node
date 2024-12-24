import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, AlertTriangle, Database, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-6 h-6 text-green-400" />
          <span className="text-xl font-bold">BioSensor Network</span>
        </div>
        
        <div className="flex space-x-6">
          <NavLink 
            to="/"
            className={({ isActive }) => 
              `flex items-center space-x-2 hover:text-green-400 transition-colors ${isActive ? 'text-green-400' : ''}`
            }
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </NavLink>
          
          <NavLink 
            to="/alerts"
            className={({ isActive }) => 
              `flex items-center space-x-2 hover:text-green-400 transition-colors ${isActive ? 'text-green-400' : ''}`
            }
          >
            <AlertTriangle className="w-5 h-5" />
            <span>Alerts</span>
          </NavLink>
          
          <NavLink 
            to="/blockchain"
            className={({ isActive }) => 
              `flex items-center space-x-2 hover:text-green-400 transition-colors ${isActive ? 'text-green-400' : ''}`
            }
          >
            <Database className="w-5 h-5" />
            <span>Blockchain Logs</span>
          </NavLink>

          <NavLink 
            to="/explorer"
            className={({ isActive }) => 
              `flex items-center space-x-2 hover:text-green-400 transition-colors ${isActive ? 'text-green-400' : ''}`
            }
          >
            <Search className="w-5 h-5" />
            <span>Explorer</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
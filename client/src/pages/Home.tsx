import { Shield, AlertTriangle, Database } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Add LinkedIn and GitHub for links
import { useEffect, useState } from 'react'; // For API data fetching

const Home = () => {
  const [systemData, setSystemData] = useState({
    activeSensors: 0,
    totalAlerts: 0,
    highThreats: 0,
    blockchainLogs: 0,
  });

  useEffect(() => {
    const fetchSystemData = async () => {
      const response = await fetch('/api/system-overview');
      const data = await response.json();
      setSystemData(data);
    };
    fetchSystemData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white font-military">
      <div className="container mx-auto px-8 py-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white uppercase tracking-widest mb-4">
            BATSN - Bioengineered Anti-terror Surveillance Network
          </h1>
          <p className="text-gray-300 text-lg mx-auto max-w-2xl">
            Secure, advanced biosensor network leveraging blockchain for real-time explosive detection and threat monitoring.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-700 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-white">Real-time Monitoring</h2>
            </div>
            <p className="text-gray-400">24/7 surveillance with state-of-the-art biosensors ensuring swift threat detection.</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-xl font-semibold text-white">Threat Detection</h2>
            </div>
            <p className="text-gray-400">Precision explosives detection via bioengineered sensors to safeguard sensitive areas.</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-xl font-semibold text-white">Blockchain Security</h2>
            </div>
            <p className="text-gray-400">Immutable logs with distributed ledger technology for absolute data integrity.</p>
          </div>
        </div>

        {/* System Overview Section */}
        <div className="bg-gray-700 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">System Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-600 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Active Sensors</h3>
              <p className="text-4xl font-bold text-blue-400">{systemData.activeSensors}</p>
            </div>
            <div className="bg-gray-600 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Total Alerts</h3>
              <p className="text-4xl font-bold text-blue-400">{systemData.totalAlerts}</p>
            </div>
            <div className="bg-gray-600 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">High Threats</h3>
              <p className="text-4xl font-bold text-red-500">{systemData.highThreats}</p>
            </div>
            <div className="bg-gray-600 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Blockchain Logs</h3>
              <p className="text-4xl font-bold text-green-400">{systemData.blockchainLogs}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-700 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">About the Project</h2>
          <p className="text-gray-400 mb-4">
            The BATSN system integrates advanced biosensor technologies for explosives detection and leverages blockchain for data integrity. 
            Our system ensures proactive threat detection and offers an immutable record for every detected anomaly, enhancing operational security.
          </p>
        </div>

        <div className="text-center mt-12 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">About the Contributor</h2>
          <p className="text-gray-400 mb-4">
            I'm Aditya Pandey, a passionate innovator focused on leveraging cutting-edge technologies like biosensors and blockchain for societal safety. 
            I'm committed to creating secure, scalable solutions in the defense and surveillance sectors.
          </p>
          <div className="flex justify-center mt-4">
            <a href="https://www.linkedin.com/in/aditya-pandey-devs" className="text-blue-500 hover:text-blue-400 mx-3">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/adityakaaltatva" className="text-gray-300 hover:text-gray-400 mx-3">
              <FaGithub size={30} />
            </a>
            
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 p-4 mt-16 text-center text-gray-400">
        <img src="https://imgs.search.brave.com/pedCQyS4lsbJqnO1CC7_vYLJRbccQeerDZNOBvhuSLw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0QvZHJkby1s/b2dvLTI2MDg3REM3/Q0Etc2Vla2xvZ28u/Y29tLnBuZw" alt="DRDO Logo" className="mx-auto mb-2 w-16 h-auto" />
        <p>&copy; 2024 Aditya Pandey. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

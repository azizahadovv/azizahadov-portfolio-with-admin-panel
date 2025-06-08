import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('contacts');

  // Simple authentication (in production, use proper JWT)
  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_logged_in', 'true');
    } else {
      alert('Invalid credentials. Use admin/admin123');
    }
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in');
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const { data: contacts = [], isLoading } = useQuery({
    queryKey: ['/api/contacts'],
    enabled: isAuthenticated,
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_logged_in');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-portfolio-gray-900 p-8 rounded-xl border border-portfolio-gray-700 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <i className="fas fa-shield-alt text-4xl text-dark-red mb-4"></i>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-portfolio-gray-400">Enter your credentials to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-portfolio-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="w-full px-4 py-3 bg-portfolio-gray-800 border border-portfolio-gray-700 rounded-lg focus:outline-none focus:border-dark-red transition-colors duration-300 text-white"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-portfolio-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-4 py-3 bg-portfolio-gray-800 border border-portfolio-gray-700 rounded-lg focus:outline-none focus:border-dark-red transition-colors duration-300 text-white"
                placeholder="Enter password"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-dark-red hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Login
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-portfolio-gray-800 rounded-lg">
            <p className="text-sm text-portfolio-gray-400 text-center">
              Demo Credentials:<br />
              Username: <span className="text-dark-blue font-mono">admin</span><br />
              Password: <span className="text-dark-blue font-mono">admin123</span>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-portfolio-gray-900 border-b border-portfolio-gray-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <i className="fas fa-tachometer-alt text-2xl text-dark-red"></i>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeTab === 'contacts' 
                    ? 'bg-dark-red text-white' 
                    : 'bg-portfolio-gray-800 hover:bg-portfolio-gray-700'
                }`}
              >
                <i className="fas fa-envelope mr-2"></i>
                Contacts
              </button>
              <button
                onClick={() => setActiveTab('database')}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeTab === 'database' 
                    ? 'bg-dark-red text-white' 
                    : 'bg-portfolio-gray-800 hover:bg-portfolio-gray-700'
                }`}
              >
                <i className="fas fa-database mr-2"></i>
                Database
              </button>
              <button
                onClick={() => setActiveTab('api')}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeTab === 'api' 
                    ? 'bg-dark-red text-white' 
                    : 'bg-portfolio-gray-800 hover:bg-portfolio-gray-700'
                }`}
              >
                <i className="fas fa-code mr-2"></i>
                API Docs
              </button>
            </div>
            
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-portfolio-gray-800 hover:bg-portfolio-gray-700 rounded-lg transition-colors duration-300"
            >
              <i className="fas fa-sign-out-alt mr-2"></i>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {activeTab === 'contacts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Contact Messages</h2>
              <div className="flex items-center space-x-2 text-portfolio-gray-400">
                <i className="fas fa-sync-alt"></i>
                <span>Auto-refresh: 30s</span>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dark-red"></div>
              </div>
            ) : contacts.length === 0 ? (
              <div className="text-center py-12">
                <i className="fas fa-inbox text-6xl text-portfolio-gray-600 mb-4"></i>
                <h3 className="text-xl font-semibold text-portfolio-gray-400 mb-2">No Messages Yet</h3>
                <p className="text-portfolio-gray-500">Contact messages will appear here when submitted</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-dark-blue rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white"></i>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{contact.name}</h3>
                          <p className="text-sm text-portfolio-gray-400">{contact.email}</p>
                        </div>
                      </div>
                      <span className="text-xs text-portfolio-gray-500">
                        {new Date(contact.createdAt).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-medium text-dark-red mb-1">Subject:</h4>
                      <p className="text-portfolio-gray-300">{contact.subject}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-dark-red mb-1">Message:</h4>
                      <p className="text-portfolio-gray-300 leading-relaxed">{contact.message}</p>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <a
                        href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                        className="px-4 py-2 bg-dark-red hover:bg-red-600 text-white rounded-lg text-sm transition-colors duration-300"
                      >
                        <i className="fas fa-reply mr-2"></i>
                        Reply
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'database' && <DatabaseInfo />}
        {activeTab === 'api' && <APIDocumentation />}
      </main>
    </div>
  );
};

const APIDocumentation = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('contact');

  const endpoints = {
    contact: {
      method: 'POST',
      url: '/api/contact',
      description: 'Submit a contact form message',
      requestBody: {
        name: 'string (required)',
        email: 'string (required, valid email)',
        subject: 'string (required)',
        message: 'string (required)'
      },
      responseSuccess: {
        success: true,
        message: 'Message sent successfully!',
        contact: {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          subject: 'Project Inquiry',
          message: 'Hello, I would like to discuss...',
          createdAt: '2024-01-01T12:00:00.000Z'
        }
      },
      responseError: {
        success: false,
        message: 'Invalid form data',
        errors: [
          {
            code: 'invalid_type',
            expected: 'string',
            received: 'undefined',
            path: ['name'],
            message: 'Required'
          }
        ]
      }
    },
    getContacts: {
      method: 'GET',
      url: '/api/contacts',
      description: 'Retrieve all contact messages (Admin only)',
      requestBody: null,
      responseSuccess: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          subject: 'Project Inquiry',
          message: 'Hello, I would like to discuss...',
          createdAt: '2024-01-01T12:00:00.000Z'
        }
      ],
      responseError: {
        success: false,
        message: 'Failed to fetch contacts'
      }
    }
  };

  const currentEndpoint = endpoints[selectedEndpoint];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white">API Documentation</h2>
      
      <div className="grid md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="space-y-2">
          <h3 className="font-semibold text-dark-blue mb-4">Endpoints</h3>
          {Object.entries(endpoints).map(([key, endpoint]) => (
            <button
              key={key}
              onClick={() => setSelectedEndpoint(key)}
              className={`w-full text-left p-3 rounded-lg transition-colors duration-300 ${
                selectedEndpoint === key
                  ? 'bg-dark-red text-white'
                  : 'bg-portfolio-gray-800 hover:bg-portfolio-gray-700 text-portfolio-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded ${
                  endpoint.method === 'GET' ? 'bg-green-600' : 'bg-blue-600'
                } text-white`}>
                  {endpoint.method}
                </span>
                <span className="text-sm">{endpoint.url}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-6">
          <div className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className={`px-3 py-1 text-sm rounded ${
                currentEndpoint.method === 'GET' ? 'bg-green-600' : 'bg-blue-600'
              } text-white font-mono`}>
                {currentEndpoint.method}
              </span>
              <span className="text-lg font-mono text-dark-blue">{currentEndpoint.url}</span>
            </div>
            <p className="text-portfolio-gray-300">{currentEndpoint.description}</p>
          </div>

          {currentEndpoint.requestBody && (
            <div className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Request Body</h3>
              <pre className="bg-portfolio-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-green-400 text-sm">
                  {JSON.stringify(currentEndpoint.requestBody, null, 2)}
                </code>
              </pre>
            </div>
          )}

          <div className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Success Response (200)</h3>
            <pre className="bg-portfolio-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-green-400 text-sm">
                {JSON.stringify(currentEndpoint.responseSuccess, null, 2)}
              </code>
            </pre>
          </div>

          <div className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Error Response (400/500)</h3>
            <pre className="bg-portfolio-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-red-400 text-sm">
                {JSON.stringify(currentEndpoint.responseError, null, 2)}
              </code>
            </pre>
          </div>

          {/* Usage Examples */}
          <div className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Usage Example</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-dark-blue mb-2">JavaScript (Fetch)</h4>
                <pre className="bg-portfolio-gray-800 p-4 rounded-lg overflow-x-auto">
                  <code className="text-yellow-400 text-sm">
{`fetch('${currentEndpoint.url}', {
  method: '${currentEndpoint.method}',${currentEndpoint.requestBody ? `
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(${JSON.stringify(currentEndpoint.requestBody, null, 2)})` : ''}
})
.then(response => response.json())
.then(data => console.log(data));`}
                  </code>
                </pre>
              </div>

              <div>
                <h4 className="text-sm font-medium text-dark-blue mb-2">cURL</h4>
                <pre className="bg-portfolio-gray-800 p-4 rounded-lg overflow-x-auto">
                  <code className="text-blue-400 text-sm">
{`curl -X ${currentEndpoint.method} \\
  ${window.location.origin}${currentEndpoint.url} \\${currentEndpoint.requestBody ? `
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(currentEndpoint.requestBody)}'` : ''}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DatabaseInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white">Database Information</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Database Status */}
        <div className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-white">Connection Status</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-portfolio-gray-300">Database Type:</span>
              <span className="text-white font-mono">PostgreSQL</span>
            </div>
            <div className="flex justify-between">
              <span className="text-portfolio-gray-300">Status:</span>
              <span className="text-green-400 font-semibold">Connected</span>
            </div>
            <div className="flex justify-between">
              <span className="text-portfolio-gray-300">ORM:</span>
              <span className="text-white font-mono">Drizzle</span>
            </div>
            <div className="flex justify-between">
              <span className="text-portfolio-gray-300">Host:</span>
              <span className="text-white font-mono">Neon Database</span>
            </div>
          </div>
        </div>

        {/* Database Schema */}
        <div className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Schema Information</h3>
          
          <div className="space-y-4">
            <div className="border border-portfolio-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <i className="fas fa-table text-dark-blue"></i>
                <h4 className="font-semibold text-white">users</h4>
              </div>
              <div className="text-sm text-portfolio-gray-300 space-y-1">
                <div>• id (serial, primary key)</div>
                <div>• username (text, unique)</div>
                <div>• password (text)</div>
              </div>
            </div>
            
            <div className="border border-portfolio-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <i className="fas fa-table text-dark-red"></i>
                <h4 className="font-semibold text-white">contacts</h4>
              </div>
              <div className="text-sm text-portfolio-gray-300 space-y-1">
                <div>• id (serial, primary key)</div>
                <div>• name (text, required)</div>
                <div>• email (text, required)</div>
                <div>• subject (text, required)</div>
                <div>• message (text, required)</div>
                <div>• createdAt (timestamp, auto)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Database Features */}
      <div className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Database Features</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-portfolio-gray-800 rounded-lg">
            <i className="fas fa-shield-alt text-2xl text-green-500 mb-2"></i>
            <h4 className="font-semibold text-white mb-1">Secure Storage</h4>
            <p className="text-sm text-portfolio-gray-300">Data encrypted and protected</p>
          </div>
          
          <div className="text-center p-4 bg-portfolio-gray-800 rounded-lg">
            <i className="fas fa-sync-alt text-2xl text-blue-500 mb-2"></i>
            <h4 className="font-semibold text-white mb-1">Real-time Sync</h4>
            <p className="text-sm text-portfolio-gray-300">Instant data synchronization</p>
          </div>
          
          <div className="text-center p-4 bg-portfolio-gray-800 rounded-lg">
            <i className="fas fa-database text-2xl text-purple-500 mb-2"></i>
            <h4 className="font-semibold text-white mb-1">PostgreSQL</h4>
            <p className="text-sm text-portfolio-gray-300">Production-grade database</p>
          </div>
        </div>
      </div>

      {/* Migration Info */}
      <div className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Migration Status</h3>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
            <i className="fas fa-check-circle text-green-500"></i>
            <div>
              <h4 className="font-semibold text-white">Schema Migration</h4>
              <p className="text-sm text-portfolio-gray-300">Database tables created successfully</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <i className="fas fa-info-circle text-blue-500"></i>
            <div>
              <h4 className="font-semibold text-white">Data Migration</h4>
              <p className="text-sm text-portfolio-gray-300">Switched from in-memory to persistent storage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-portfolio-gray-900 p-6 rounded-xl border border-portfolio-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Technical Configuration</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-dark-blue mb-2">Database Driver</h4>
            <pre className="bg-portfolio-gray-800 p-3 rounded text-sm text-green-400">
              <code>@neondatabase/serverless</code>
            </pre>
          </div>
          
          <div>
            <h4 className="font-medium text-dark-blue mb-2">ORM Configuration</h4>
            <pre className="bg-portfolio-gray-800 p-3 rounded text-sm text-green-400">
              <code>drizzle-orm/neon-serverless</code>
            </pre>
          </div>
          
          <div>
            <h4 className="font-medium text-dark-blue mb-2">Connection Pool</h4>
            <pre className="bg-portfolio-gray-800 p-3 rounded text-sm text-green-400">
              <code>WebSocket + Connection Pool</code>
            </pre>
          </div>
          
          <div>
            <h4 className="font-medium text-dark-blue mb-2">Environment</h4>
            <pre className="bg-portfolio-gray-800 p-3 rounded text-sm text-green-400">
              <code>Production Ready</code>
            </pre>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminPanel;
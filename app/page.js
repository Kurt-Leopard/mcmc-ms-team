"use client";
import { useState, useEffect } from 'react';
import { Home, Users, Calendar, Phone, Menu, Moon, Sun } from 'lucide-react';

// Import the EnhancedSchedule component
import EnhancedSchedule from './components/EnhancedSchedule';

export default function MobileFirstDesign() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Retrieve the dark mode preference from localStorage when the component mounts
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setIsDark(savedDarkMode === 'true');
    }
  }, []);

  // Save the dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', isDark.toString());
  }, [isDark]);

  const teams = [
    {
      name: "Praise & Worship Team",
      leader: "Music Team",
      members: [
        { name: "Michael Castillion", role: "Music Director | Lead Guitarist", phone: "(555) 111-2233", email: "michael@church.com" },
        { name: "Joel Paden", role: "Acoustic Guitarist", phone: "(555) 111-4455", email: "joel@church.com" },
        { name: "Marlou Gimongala", role: "Drummer | Lead Guitarist", phone: "(555) 111-6677", email: "marlou@church.com" },
        { name: "Psalm Aristoteles", role: "Bass Guitarist", phone: "(555) 111-6677", email: "psalm@church.com" },
        { name: "Mark Angelou Jamandre", role: "Pianist | Drummer", phone: "(555) 111-6677", email: "mark@church.com" },
        { name: "Chloe Dela Tore", role: "Bass Guitarist", phone: "(555) 111-6677", email: "chloe@church.com" },
        { name: "Rabii Aranez", role: "Pianist", phone: "(555) 111-6677", email: "rabii@church.com" },
        { name: "Jannet Limocon", role: "Worship Leader", phone: "(555) 111-6677", email: "jannet@church.com" },
        { name: "Jireg Angela", role: "Worship Leader | Acoustic Guitarist", phone: "(555) 111-6677", email: "jireg@church.com" },
        { name: "Ruth Dela Torre", role: "Worship Leader | Acoustic Guitarist", phone: "(555) 111-6677", email: "ruth@church.com" },
        { name: "Shane Gail Demeterio", role: "Backup Vocalist", phone: "(555) 111-6677", email: "shane@church.com" },
        { name: "Cassandra Carampatan", role: "Backup Vocalist", phone: "(555) 111-6677", email: "cassandra@church.com" },
        { name: "Marco Absalon Carreon", role: "Backup Vocalist", phone: "(555) 111-6677", email: "marco@church.com" },
        { name: "Regine Pajena", role: "Lyrics Projectorist", phone: "(555) 111-6677", email: "regine@church.com" }
      ]
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Top Header */}
      <header className={`fixed top-0 w-full z-50 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="flex justify-between items-center px-4 h-16">
          <div className="flex items-center">
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-indigo-600'}`}>
               Music Team
            </span>
          </div>
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-16 pb-20">
        {activeTab === 'home' && (
          <div className="p-4 space-y-6">
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-indigo-50'}`}>
              <h2 className="text-2xl font-bold mb-4">Welcome to MCMC Music</h2>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Join us in worship and praise through music ministry.
              </p>
            </div>
            
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-purple-50'}`}>
              <h3 className="text-xl font-bold mb-3">Next Service</h3>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>Sunday Morning Service</p>
                <p>8:00 AM </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'teams' && (
          <div className="p-4 space-y-6">
            {teams.map((team, index) => (
              <div key={index} className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <h3 className="text-xl font-bold mb-4">{team.name}</h3>
                <div className="space-y-4">
                  {team.members.map((member, mIndex) => (
                    <div key={mIndex} className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <p className="font-semibold">{member.name}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{member.role}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{member.phone}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{member.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'schedule' && (
          <EnhancedSchedule isDark={isDark}/>
        )}

        {activeTab === 'contact' && (
          <div className="p-4 space-y-6">
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className="font-semibold">Main Office</p>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>(555) 123-4567</p>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>office@church.com</p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className="font-semibold">Music Director</p>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>(555) 123-8899</p>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>music@church.com</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className={`fixed bottom-0 w-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="flex justify-around items-center h-16">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center ${activeTab === 'home' ? 'text-indigo-600' : isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button 
            onClick={() => setActiveTab('teams')}
            className={`flex flex-col items-center ${activeTab === 'teams' ? 'text-indigo-600' : isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <Users size={20} />
            <span className="text-xs mt-1">Teams</span>
          </button>
          <button 
            onClick={() => setActiveTab('schedule')}
            className={`flex flex-col items-center ${activeTab === 'schedule' ? 'text-indigo-600' : isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <Calendar size={20} />
            <span className="text-xs mt-1">Schedule</span>
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`flex flex-col items-center ${activeTab === 'contact' ? 'text-indigo-600' : isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <Phone size={20} />
            <span className="text-xs mt-1">Contact</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
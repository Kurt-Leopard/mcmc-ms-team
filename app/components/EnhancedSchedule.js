"use client";
import React from 'react';
import { Calendar } from 'lucide-react';

export default function EnhancedSchedule({ isDark }) {
  // Generate dates for all Sundays from March to December 2025
  const generateSundaySchedule = () => {
    const schedule = [];
    const startDate = new Date(2025, 2, 1); // March 1, 2025
    const endDate = new Date(2025, 11, 31); // December 31, 2025
    
    // Find first Sunday
    while (startDate.getDay() !== 0) {
      startDate.setDate(startDate.getDate() + 1);
    }

    let sundayCount = 0;
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const month = currentDate.toLocaleString('default', { month: 'long' });
      const date = currentDate.getDate();
      const team = sundayCount % 2 === 0 ? "Team 1" : "Team 2";
      
      schedule.push({
        date: `${month} ${date}`,
        team: team,
        morningService: {
          time: "8:00 AM",
          service: "Morning Service"
        },
      });

      // Move to next Sunday
      currentDate.setDate(currentDate.getDate() + 7);
      sundayCount++;
    }

    return schedule;
  };

  const sundaySchedule = generateSundaySchedule();

  return (
    <div className="p-4 space-y-4">
      <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Calendar size={24} />
          Sunday Service Schedule (March - December 2025)
        </h2>
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
          Teams alternate each Sunday
        </p>
      </div>

      {sundaySchedule.map((day, index) => (
        <div 
          key={index} 
          className={`p-4 rounded-xl shadow-md transition-all ${
            day.team === "Team 1" 
              ? isDark ? 'bg-indigo-900/30' : 'bg-indigo-50' 
              : isDark ? 'bg-purple-900/30' : 'bg-purple-50'
          }`}
        >
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="font-semibold text-lg">{day.date}</h3>
              <p className={`text-sm font-medium ${
                day.team === "Team 1"
                  ? 'text-indigo-600'
                  : 'text-purple-600'
              }`}>
                {day.team}
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <p className="font-medium">{day.morningService.time}</p>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {day.morningService.service}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
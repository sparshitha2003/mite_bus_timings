import React, { useState } from 'react';
import { Search, Bus, Clock, MapPin } from 'lucide-react';

const busTimetable = [
  { time: '8:20 AM', busName: 'Jeevan', destination: 'Reaches at 8:35', route: 'KARKALA' },
  { time: '8:25 AM', busName: 'Master', destination: 'Reaches at 8:45', route: 'KARKALA' },
  { time: '9:35 AM', busName: 'Ballal', destination: 'Jainpete to BC Road', route: 'BC Road' },
  { time: '10:10 AM', busName: 'Pradeeptha', destination: 'MITE to MDB', route: 'MDB', fare: '6 Rs' },
  { time: '10:45 AM', busName: 'Shriraj', destination: 'From MITE', route: 'KARKALA' },
  { time: '11:00 AM', busName: 'Nishmitha', destination: 'MITE to MDB', route: 'MDB' },
  { time: '11:05 AM', busName: 'Jeevan', destination: 'MITE to MDB', route: 'MDB' },
  { time: '11:10 AM', busName: 'Janet Mary', destination: 'Jainpete to MITE', route: 'MDB' },
  { time: '11:45 AM', busName: 'Jayaraj', destination: 'From MITE', route: 'KARKALA' },
  { time: '12:40 PM', busName: 'Sajesh', destination: 'General Route', route: 'KARKALA' },
  { time: '12:45 PM', busName: 'Vishal', destination: 'General Route', route: 'KARKALA' },
  { time: '12:50 PM', busName: 'Mahesh', destination: 'Bus stand to MITE', route: 'MITE', fare: '6 Rs' },
  { time: '12:55 PM', busName: 'Jayaraj', destination: 'General Route', route: 'KARKALA' },
  { time: '1:00 PM', busName: 'Nishmitha', destination: 'MDB', route: 'MDB' },
  { time: '1:00 PM', busName: 'Master', destination: 'General Route', route: 'KARKALA' },
  { time: '1:10 PM', busName: 'Jeevan', destination: 'General Route', route: 'KARKALA' },
  { time: '1:15 PM', busName: 'Nishmitha', destination: 'General Route', route: 'KARKALA' },
  { time: '1:20 PM', busName: 'Janet Mary', destination: 'General Route', route: 'MDB' },
  { time: '1:25 PM', busName: 'Nirmala', destination: 'MDB', route: 'MDB' },
  { time: '1:30 PM', busName: 'Nishmitha', destination: 'MDB', route: 'MDB' },
  { time: '1:35 PM', busName: 'Reshma', destination: 'General Route', route: 'KARKALA' },
  { time: '1:45 PM', busName: 'Vishal', destination: 'General Route', route: 'KARKALA' },
  { time: '2:00 PM', busName: 'Durga', destination: 'Karkala', route: 'Karkala' },
  { time: '2:00 PM', busName: 'Jain', destination: 'General Route', route: 'MITE' },
  { time: '2:00 PM', busName: 'Reshma', destination: 'General Route', route: 'MITE' },
  { time: '2:05 PM', busName: 'Nishmitha', destination: 'MDB', route: 'MDB' },
  { time: '2:10 PM', busName: 'Shriraj', destination: 'General Route', route: 'KARKALA' },
  { time: '2:30 PM', busName: 'Vishal', destination: 'General Route', route: 'KARKALA' },
  { time: '2:30 PM', busName: 'Rajashree', destination: 'MDB', route: 'MDB' },
  { time: '2:32 PM', busName: 'Abhiman', destination: 'Naravi', route: 'Naravi' },
  { time: '2:50 PM', busName: 'Vishal', destination: 'General Route', route: 'KARKALA' },
  { time: '2:55 PM', busName: 'Pradeeptha', destination: 'Naravi', route: 'Naravi' },
  { time: '3:00 PM', busName: 'Shalom', destination: 'MDB', route: 'MDB' },
  { time: '3:05 PM', busName: 'Nishmitha', destination: 'General Route', route: 'KARKALA' },
  { time: '3:10 PM', busName: 'Jayaraj', destination: 'General Route', route: 'KARKALA' },
  { time: '3:40 PM', busName: 'Shankar Vittal', destination: 'General Route', route: 'KARKALA' },
  { time: '3:45 PM', busName: 'Mahaveera', destination: 'General Route', route: 'MITE' },
  { time: '3:50 PM', busName: 'Padmambika', destination: 'General Route', route: 'KARKALA' },
  { time: '3:55 PM', busName: 'Sajesh', destination: 'MDB', route: 'KARKALA' },
  { time: '4:00 PM', busName: 'Reshma', destination: 'General Route', route: 'KARKALA' },
  { time: '4:00 PM', busName: 'Durga', destination: 'Belthangady', route: 'Belthangady' },
  { time: '4:00 PM', busName: 'Golden', destination: 'MDB', route: 'MDB' },
  { time: '4:15 PM', busName: 'Reshma', destination: 'General Route', route: 'KARKALA' },
  { time: '4:25 PM', busName: 'Padmambika', destination: 'General Route', route: 'KARKALA' },
  { time: '4:25 PM', busName: 'Master', destination: 'General Route', route: 'KARKALA' },
  { time: '4:35 PM', busName: 'Jeevan', destination: 'General Route', route: 'KARKALA' },
  { time: '4:45 PM', busName: 'Master', destination: 'General Route', route: 'KARKALA' },
  { time: '4:50 PM', busName: 'Celiena', destination: 'General Route', route: 'MDB' },
  { time: '5:00 PM', busName: 'Jayaraj', destination: 'General Route', route: 'KARKALA' },
  { time: '5:10 PM', busName: 'Mahesh', destination: 'Late', route: 'MITE' },
  { time: '5:15 PM', busName: 'Reshma', destination: 'General Route', route: 'KARKALA' },
  { time: '5:25 PM', busName: 'Janet Mary', destination: 'General Route', route: 'MDB' },
];

const BusTimingWebsite = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('All');
  const [sortBy, setSortBy] = useState('time');

  // Get unique routes for the dropdown
  const routes = ['All', ...new Set(busTimetable.map(bus => bus.route))];

  // Filter and sort bus timetable
  const filteredAndSortedBuses = busTimetable
    .filter(bus =>
      (selectedRoute === 'All' || bus.route.toLowerCase() === selectedRoute.toLowerCase()) &&
      (bus.busName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.destination.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'time') {
        return (
          new Date(`1970-01-01T${a.time.replace(/ /g, '')}`) -
          new Date(`1970-01-01T${b.time.replace(/ /g, '')}`)
        );
      }
      return a.busName.localeCompare(b.busName);
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center">
            <Bus className="mr-3" size={36} />
            MITE Bus Timings
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <label className="mr-2 text-sm">Sort by:</label>
              <select
                className="bg-blue-500 text-white p-2 rounded"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="time">Time</option>
                <option value="name">Bus Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="p-6">
          <div className="flex space-x-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search buses, times, routes, destinations"
                className="w-full p-3 pl-10 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <select
              className="p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
            >
              {routes.map(route => (
                <option key={route} value={route}>
                  {route}
                </option>
              ))}
            </select>
          </div>

          {/* Bus List */}
          <div className="space-y-4">
            {filteredAndSortedBuses.map((bus, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 rounded-lg flex items-center justify-between hover:bg-blue-100 transition-colors shadow-sm"
              >
                <div className="flex items-center space-x-4 flex-grow">
                  <Clock className="text-blue-600" size={24} />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-lg text-blue-800">{bus.busName} Bus</p>
                      {bus.fare && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                          Fare: {bus.fare}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{bus.time} - {bus.destination}</p>
                    <p className="text-sm text-gray-500">Route: {bus.route}</p>
                  </div>
                </div>
                <MapPin className="text-green-500" size={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTimingWebsite;

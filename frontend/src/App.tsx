import { useState } from 'react';
import './App.css';
import CarCard from './components/CarCard';

const App = () => {
  const mockCars = [
    { brand: "Toyota", model: "Camry", price: 25000, mileage: 15000, image: "https://picsum.photos/300/200?random=1" },
    { brand: "Honda", model: "Civic", price: 22000, mileage: 20000, image: "https://picsum.photos/300/200?random=1" },
  ];

  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-20000', label: 'Under $20k' },
    { value: '20000-30000', label: '$20k - $30k' },
    { value: '30000-999999', label: 'Over $30k' },
  ];

  // Filter cars based on price range
  const filteredCars = mockCars.filter(car => {
    if (selectedPriceRange === 'all') return true;
    const [min, max] = selectedPriceRange.split('-').map(Number);
    return car.price >= min && car.price <= max;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-blue-600">AutoTradeHouse</div>
            <div className="flex space-x-4">
              <button className="px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                Login
              </button>
              <button className="px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Sell Car
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Car</h1>
          <div className="max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search by brand, model, or keyword"
              className="w-full px-4 py-3 rounded-lg text-gray-800"
            />
          </div>
        </div>
      </div>

      {/* Price Filter Dropdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
        <select
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
          className="px-4 py-2 rounded-lg text-gray-800"
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Car Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car, index) => (
            <CarCard key={index} {...car} isPromoted={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
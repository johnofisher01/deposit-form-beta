import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MyApp</Link>
        
        <div className="relative">
          <button
            className="px-4 py-2 bg-blue-700 rounded-md hover:bg-blue-800"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Menu ▼
          </button>
          
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md overflow-hidden">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-200">About</Link>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-200">Contact</Link>
              <Link to="/form" className="block px-4 py-2 hover:bg-gray-200">Form</Link>
            </div>
          )}
        </div>
      </div>    
    </nav>
  );
};

export default Navbar;

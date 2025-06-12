import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/32',
  };

  const getInitials = (name) =>
    name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();

  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between relative">
      <div className="text-xl font-bold">MyApp</div>

      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 px-6 md:px-0 py-4 md:py-0`}
      >
        <Link to="/" className="hover:text-cyan-400">
          Home
        </Link>
        <Link to="/Login" className="hover:text-cyan-400">
          Login
        </Link>
        <Link to="/signUp" className="hover:text-cyan-400">
          SignUp
        </Link>
        <Link to="#contact" className="hover:text-cyan-400">
          Contact
        </Link>
      </nav>

      <div
        className="flex items-center gap-2 cursor-pointer relative ml-4"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src={user.avatar}
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-sm text-gray-300">{getInitials(user.name)}</span>

        {dropdownOpen && (
          <div className="absolute top-12 right-0 bg-gray-800 rounded-md shadow-lg w-40 py-2 z-50">
            <a
              href="#profile"
              className="block px-4 py-2 text-sm hover:bg-cyan-600"
            >
              Profile
            </a>
            <a
              href="#settings"
              className="block px-4 py-2 text-sm hover:bg-cyan-600"
            >
              Settings
            </a>
            <a
              href="#logout"
              className="block px-4 py-2 text-sm hover:bg-cyan-600"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

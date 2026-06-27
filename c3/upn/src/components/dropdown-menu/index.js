import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ children, list, dropDownPosition }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="dropdown"
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <div
        className="dropdown-toggle"
        style={{ cursor: 'pointer' }}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        {children}
      </div>

      <ul
        className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
        style={dropDownPosition}
      >
        {list?.map((item, index) => (
          <li key={index} onClick={() => setShowDropdown(false)}>
              {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

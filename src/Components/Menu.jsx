import React, { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button onClick={toggleMenu}>Menu</button>
      {isOpen && (
        <ul className="menu-items">
          <li>Club Press</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
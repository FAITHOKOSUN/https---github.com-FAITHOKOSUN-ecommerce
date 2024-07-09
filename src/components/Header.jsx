import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/logo.png';
import Icon from '../assets/shopping_cart 1.png';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="header">
      <div className="header-top">
        <p>10% OFF WHEN YOU ORDER VIA THE MOBILE APP</p>
      </div>
      <div className="header-bottom">
        <Link to="/" className="logo-link">
          <img src={logoImage} alt="Company Logo" className="logo" />
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search Mahogany" />
          <button>🔍</button>
        </div>
        <div className="actions">
          <button>Get App</button>
          <button>Log in/Register</button>
          <Link to="/cart" className="cart-button">
            🛒
            <div className="cart-badge">{cartCount}</div>
          </Link>
        </div>
      </div>
      <div className="header-line"></div>
      <nav className="navigation">
        <Link to="/shop" className="shop-link">
          Shop
        </Link>
        <Link to="/tables">Tables</Link>
        <Link to="/chairs">Chairs</Link>
        <Link to="/beds-pillows">Beds & Pillows</Link>
        <Link to="/deals">Deals</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;

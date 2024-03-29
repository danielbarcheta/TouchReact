import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="Nav-content">
        <span className="logo">
          <img src="logo-touch-health.png" alt="Touch Health Logo" />
        </span>
        <div className="menu">
          <button>  
            <span className="material-symbols-outlined">home</span>
          </button>
          <button>COC</button>
          <button>Treinamentos</button>
          <button>Mentores</button>
          <button>Equipes</button>
          <button>Feedbacks</button>
          <button>ReactJS</button>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button className="search-button">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

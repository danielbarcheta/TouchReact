// Navbar.jsx
import React from 'react';
import './Navbar.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

const Navbar = () => {
  return (
    <nav className="navbar">
      <section class="Nav-content">
      <span className="logo">
        <img src="logo-touch-health.png" alt="Touch Health Logo" />
      </span>
      <div className="menu">
        <button>  
        <span class="material-symbols-outlined">home</span>
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
        <button class="search-button"><span class="material-symbols-outlined">search</span>
        </button>
      </div>
      </section>
    </nav>
  );
};

export default Navbar;

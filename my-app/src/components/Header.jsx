import React from 'react';

const Header = ({ onLanguageChange, currentLanguage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="fas fa-leaf me-2"></span>Agro Help
        </a>
        
        <div className="language-selector">
          <select 
            className="form-select form-select-sm" 
            value={currentLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="bn">Bengali</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;

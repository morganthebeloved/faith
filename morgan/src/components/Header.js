import React from "react";
import logo from "../images/Bee.png";
// import logo from "../logo.png";

const Header = ({ setCurrentPage, isDarkMode, setIsDarkMode }) => {
  return (
    <header>

      <nav className="navbar navbar-expand-lg jot">
        <div className="container pex-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <img className="you" src={logo} alt="logo" width="150" />
              <span
                className="nav-link active px-5"
                aria-current="page"
                onClick={() => setCurrentPage("home")}
              >
                <button type="button" className="btn btn-info boot">Home</button>
              </span>
              <span
                className="nav-link px-5"
                onClick={() => setCurrentPage("about")}
              >
                <button type="button" className="btn btn-info boot">ABOUT ME</button>
              </span>
              <span
                className="nav-link px-5" 
                onClick={() => setCurrentPage("project")}
              >
               <button type="button" className="btn btn-info boot">PROJECT</button>
              </span>
              <span
                className="nav-link px-5"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <button type="button" className="btn btn-info boot"><i class="bi bi-toggle-on">THEME</i></button>

                
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

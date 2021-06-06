import React from "react";

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="https://www.appgain.io/?country=EG">
          <img
            src="https://cdn.appgain.io/Appgain-website/img/logocolor-12x.png"
            style={{ width: "10em" }}
            alt="apgainLogo"
          />
        </a>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginLeft: ".5em" }}
        >
          <a className="nav-link" href="https://github.com/M-Hegazy">
            Github
          </a>
        </div>
      </nav>
    </div>
  );
}

export default navbar;

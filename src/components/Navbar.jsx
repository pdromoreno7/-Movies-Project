import React from "react";
// import { Button } from "./Button";

import { MenuItems } from "./MenuItems";

import "./styles/Navbar.css";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <header className="l-header">
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            Movies <i className="fab fa-react"></i>
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <Button>Donar</Button> */}
        </nav>
      </header>
    );
  }
}
export default Navbar;

import { MenuItems } from "./MenuItems";
export function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="Navbar-logo">
        Movies <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon"></div>
      <ul>
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
    </nav>
  );
}

import { NavLink, Link, Outlet } from "react-router-dom";
import logo from "../assets/images/Watch_Later_Logo_Short.svg";
import AddButton from "./buttons/AddButton";
import CollectionButton from "./buttons/CollectionButton";
import SearchButton from "./buttons/SearchButton";
import ProfileButton from "./buttons/ProfileButton";

export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="header__item-container left-side">

          <div className="header__item">
            <NavLink to="/collection">
              <CollectionButton />
            </NavLink>
          </div>

          <div className="header__item">
            <NavLink to="/addFilm">
              <AddButton />
            </NavLink>
          </div>

        </div>

        <Link to="/">
          <img src={logo} alt="header logo" className="header__logo" />
        </Link>

        <div className="header__item-container right-side">

          <div className="header__item">
            <NavLink to="/search">
              <SearchButton />
            </NavLink>
          </div>

          <div className="header__item">
            <NavLink to="/profile">
               <ProfileButton />
            </NavLink>
          </div>

        </div>

      </header>
      
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
}

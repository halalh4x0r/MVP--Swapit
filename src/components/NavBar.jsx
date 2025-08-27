import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">SwapIt</Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/new">Create Listing</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <NavLink to="/child">Child</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/about/test">Test</NavLink>
    </nav>
  )
}

export default Navbar
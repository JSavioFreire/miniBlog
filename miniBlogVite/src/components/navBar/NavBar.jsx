import { NavLink, Link } from "react-router-dom"
import { Nav } from "./StyledNavBar"

const NavBar = () => {
  return (
    <Nav>
        <Link to='/'><h1>Mini Blog</h1></Link>
        <nav>
            <ul>
                <li><NavLink to='/login'>Entrar</NavLink></li>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>Sobre</NavLink></li>
            </ul>
        </nav>
        
        
    </Nav>
  )
}

export default NavBar
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
    return <>
        <nav className="navbar navbar-expand-md bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop" className="nav-link">Shop</Link>
                </li>      
            </ul>
        </nav>

        

        <Outlet />
    </>
        
}

export default Nav;
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
    return (
        <>
            <div className="nav">
                <nav className=" container d-flex">
                    <div className="navbar-brand"><Link to="/">The Ocean Mart</Link></div>
                    <div className="Nav">
                        <ul className="navbar">
                            <li className="nav-link">
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/review">Review</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/inventory">Inventory</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header

import { NavLink } from 'react-router-dom';

import logo from '../assets/img/Logo_White.png';
import searchIcon from '../assets/img/search-icon@2x.svg';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="" height="36" />
                    </NavLink>

                    <form className="d-flex">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Recipient's username" />
                            <button className="btn btn-outline-secondary" type="button">
                                <img src={searchIcon} alt="" />
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;
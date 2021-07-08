import { NavLink } from 'react-router-dom';

import { Search } from './';

import logo from '../assets/img/Logo_White.png';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container position-relative">
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="" height="48" />
                    </NavLink>

                    <Search />
                </div>
            </nav>
        </header>
    );
}

export default Header;
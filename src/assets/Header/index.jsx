import Logo from '../../Images/logo_apple.png';
import './HeaderStyle.scss';

function Header() {
    return (
        <header className='header'>
            <div className='container'>
            <div className='header-body'>
                <div>

                    <a href="#">
                        <img className='header-logo' src={Logo} alt="logo"/>
                    </a>

                </div>

                <div className='header-navigator'>
                    <nav>

                        <ul className='header-nav'>
                        <a className='nav-item' href="#"><li>Main Menu</li></a>
                        <a className='nav-item' href="#"><li>Store</li></a>
                        <a className='nav-item' href="#"><li>Filters</li></a>
                        <a className='nav-item' href="#"><li>Cabinet</li></a>

                        </ul>

                    </nav>

                </div>
                </div>
            </div>
        </header>
    )

}

export default Header;
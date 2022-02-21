import React from 'react';
// import Logo from '../assets/SpaceX-Logo.svg';
import { ReactComponent as Logo } from '../assets/SpaceX-Logo.svg';


const Navbar = () => {
    return (
        <div>
            <Logo fill="white" />
            {/* prosledili smo mu fill da zna kojom bojom da popuni, jer smo odabrali da pozadina bude crna */}
            {/* <NavbarTabs /> */}
        </div>
    )
}

export default Navbar;
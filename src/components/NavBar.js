import React from "react"
import{Nav,NavLink,NavMenu,} from "../style components/NavBarStyle"

function Navbar(){
    return(
        <>
        <Nav>
        <NavLink to="/">ANIMATION SHOWDOWN</NavLink>
        <NavMenu>
        <NavLink to="/Versus" activestyle="true">VERSUS</NavLink>
        <NavLink to="/CharcterList" activestyle="true">FIGHTERS</NavLink>
        </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar;
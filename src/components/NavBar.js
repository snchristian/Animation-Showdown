import React from "react"
import{Nav,NavLink,NavMenu,} from "../style components/NavBarStyle"

function Navbar(){
    return(
        <>
        <Nav>
        <NavLink to="/">Animation ShowDown</NavLink>
        <NavMenu>
        <NavLink to="/showdown" activestyle="true">Versus</NavLink>
        <NavLink to="/CharcterList" activestyle="true">Fighters</NavLink>
        </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar;
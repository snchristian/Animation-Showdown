import styled from "styled-components"
import {NavLink as Link} from "react-router-dom"

export const Nav = styled.nav`
background:#000000;
height:50px;
display:flex;
justify-content:space-between;
padding: 5px;
padding:0.5rem calc((100W-1000px)/2);
z-index:10;
font-family: 'Modak', cursive;
font-size: 20px;
`

export const NavLink = styled(Link)`
    color:#fff;
    display:flex;
    align-item:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color:#00FFFF;
    }

`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width:768px){
        display:none
    }

`

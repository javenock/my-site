import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.jpg';
import styled from 'styled-components';
import {ButtonWrapper} from './Button';




export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/" >
                    <img src={logo} alt="personal-img" className="Navbar-brand" id="im-id"/>
                </Link>
                <ul className="navbar-nav align-items-center" >
                    <li className="nav-item">
                        <Link to="/" className="nav-link ml-5">
                            home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cv" className="nav-link ml-5">
                            cv
                        </Link>
                    </li>
                </ul>
                <Link to="/contacts" className="nav-link ml-auto">
                <ButtonWrapper>
                    <i className="fas fa-address-book" />
                    contacts
                </ButtonWrapper>
                </Link>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav`
background : var(--mainBlue);
.nav-link{
    color : var(--mainWhite) !important;
    font-size : 1.4rem;
    text-transform : capitalize;
    
}
#im-id{
    border-radius : 20%;
}
`;


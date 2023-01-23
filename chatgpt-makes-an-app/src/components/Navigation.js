import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #333;
    color: white;

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin-right: 20px;
    }

    a {
        color: white;
        text-decoration: none;
        padding: 10px;
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </Nav>
    );
}

export default Navigation;

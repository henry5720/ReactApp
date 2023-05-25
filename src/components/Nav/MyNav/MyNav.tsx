import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo/Logo';
import { SearchBox } from '../SearchBox/SearchBox';
import { Pointer } from '../Pointer/Pointer';

const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: slategrey;
`;

export const MyNav = () => (
    <Nav>
        <Logo></Logo>
        <SearchBox></SearchBox>
        <Pointer></Pointer>
    </Nav>
);
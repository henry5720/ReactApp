import * as React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: slategrey;
`;

const Div = styled.div`
    width: 500px;
    background-color: brown;
`;

export const MyNav = () => (
    <Nav>
        <Div>test</Div>
    </Nav>
);
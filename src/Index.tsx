import React from 'react';
import styled from 'styled-components';
import './css/initialize.css'

import { Logo } from './components/Logo/Logo';
import { SearchBox } from './components/SearchBox/SearchBox';

const Body=styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #aed7dc;
`;

const Index = () => (
    <Body>
        <Logo/>
        <SearchBox/>
    </Body>

);

export {Index};
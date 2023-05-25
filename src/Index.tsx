import React from 'react';
import styled from 'styled-components';
import './css/initialize.css'

import { MyNav } from './components/Nav/MyNav/MyNav';

const Body=styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-content: center; */
    /* justify-items: center; */
    /* align-items: center; */
    width: 100%;
    height: 100vh;
    background-color: #aed7dc;
`;

const Index = () => (
    <Body>
        <MyNav/>
    </Body>

);

export {Index};
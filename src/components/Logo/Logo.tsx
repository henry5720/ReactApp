import * as React from 'react';
import styled from 'styled-components';

const widthAndHeight:Array<number>=[50, 50]

// Array<number> == number[]
const H1 = styled.h1<{ widthAndHeight?: Array<number> }>`
    display: flex;
    justify-content: center;
    width: ${widthAndHeight[0]}px;
    height: ${widthAndHeight[1]}px;
    background-color: slategrey;
`;

const A=styled.a`
    width: 100%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    color: #383838;
    background-color: #95dc99;
`;

const Logo = () => (
    <H1>
        <A href='#'>X</A>
    </H1>
);

export {Logo};
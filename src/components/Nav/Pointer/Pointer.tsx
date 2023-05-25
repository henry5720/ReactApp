import React from 'react';
import styled from 'styled-components';

const Div=styled.div`
    display: flex;
    width: 200px;
    background-color: #e9ab2f;
`;

const Button=styled.button`
    display: flex;
    width: 100%;
`;

const MyButton=styled(Button)`
    background-color: #60d778;
`;

const A=styled.a`
    display: block;
    width: 50px;
    background-color: cyan;
`;

const Pointer=()=>{
    return (
        <Div>
            <MyButton></MyButton>
            <A href="#"></A>
        </Div>
    )
}

export {Pointer};
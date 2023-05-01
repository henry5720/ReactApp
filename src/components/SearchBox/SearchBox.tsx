import React from 'react';
import styled from 'styled-components';
import { FormPanel } from './FormPanel';

// [TODO] : pc view 125%, css problem
/* ==================== [Style] ==================== */
const Icon=styled.i`
    display: block;
    aspect-ratio: 1 / 1;
    background-color: antiquewhite;
`;

const Input=styled.input`
    border: 0;
    padding: 0 30px 0 10px;
    width: 100%;
    outline: none;
`;

const Button=styled.button`
    margin: 0;
    padding: 0;
    background-color: #bb935e;
`;

const RecordBtn=styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    &:hover{
        background-color: #e20f0f;
    }
`;

// [TODO] : split components
/* ==================== [Hooks] ==================== */

const SearchBox = () => {
    return (
        <FormPanel>
            <Icon></Icon>
            <Input placeholder="例: 台積電 eps"/>
            <RecordBtn></RecordBtn>
        </FormPanel>
    );
}

export {SearchBox};
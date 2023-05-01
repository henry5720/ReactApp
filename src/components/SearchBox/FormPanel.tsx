import React from 'react';
import styled from 'styled-components';

// [TODO] : pc view 125%, css problem
/* ==================== [Style] ==================== */
const Form=styled.form`
    display: flex;
    justify-content: space-between;
    border: 1px solid #ffffff;
    padding: 10px;
    border-radius: 10px;
    width: 300px;
    height: 50px;
    background-color: #5a97cc;
`;

// [TODO] : split components
/* ==================== [Hooks] ==================== */
interface FormPanelProps {
    children?: React.ReactNode;
}
const FormPanel=({ children }: FormPanelProps)=>{
    const onSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        event?.preventDefault();
    }

    return (
        <Form onSubmit={onSubmit}>
            {children}
        </Form>
    )
}

export {FormPanel};
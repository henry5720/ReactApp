import * as React from 'react';
import { render } from 'react-dom';
import { Hello } from "./components/Hello";
import { LifeCircleContainer } from './components/LifeCircle';
const APP = () => (
    <LifeCircleContainer/>
);

render(<APP/>, document.getElementById('root'));
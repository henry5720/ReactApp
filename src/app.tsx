import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {Index} from './Index';

const App = () => (
    <React.StrictMode>
        <Index></Index>
    </React.StrictMode>
);

const container:HTMLElement|null = document.getElementById('app');
// createRoot(container!) if you use TypeScript
const root = createRoot(container!);
root.render(<App />);

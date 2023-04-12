import React from 'react';
import { Form } from './features/form/Form';
import './App.css';
import { Results } from './features/results/Results';

function App() {
    return (
        <div className="App">
            <Form />
            <Results />
        </div>
    );
}

export default App;

import React from 'react';
import { Form } from './features/form/Form';
import './App.css';
import { Results } from './features/results/Results';
import { Suggestions } from './features/suggestions/Suggestions';

function App() {
    return (
        <div className="App">
            <Form />
            <Suggestions />
            <Results />
        </div>
    );
}

export default App;

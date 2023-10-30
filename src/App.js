import React from 'react';
import { Form } from './features/form/Form';
import './index.css'
import './App.css';
import { Results } from './features/results/Results';
import { Ingredients } from './features/ingredients/Ingredients';

function App() {
    return (
        <div className="App">

            <header>
                <h1>What to cook?</h1>
                <Form />
            </header>
            <Ingredients />
            <main>
                <Results />
            </main>


        </div>
    );
}

export default App;

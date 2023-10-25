import React from 'react';
import { Form } from './features/form/Form';
import './App.css';
import { Results } from './features/results/Results';
import { Ingredients } from './features/ingredients/Ingredients';
import { Buttons } from './features/Buttons/Buttons';
import { Suggestions } from './features/suggestions/Suggestions';

function App() {
    return (
        <div className="App">

            <body>
                <header>
                    <h1>What to cook?</h1>
                    <Form />
                    <Buttons />
                    <Suggestions />
                </header>
                <Ingredients />
                <main>
                    <Results />
                </main>

            </body>

        </div>
    );
}

export default App;

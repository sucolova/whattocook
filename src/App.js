import React from 'react';
import { Form } from './features/form/Form';
import './App.css';
import { Results } from './features/results/Results';
import { Ingredients } from './features/ingredients/Ingredients';
import { BottomButtons } from './features/bottomButtons/BottomButtons';

function App() {
    return (
        <div className="App">

            <header>
                <h1>What to cook?</h1>
                <div className='formWrapper'>
                    <Form />
                </div>
                <Ingredients />
            </header>
            <main>
                <Results />
                <BottomButtons />
            </main>
        </div>
    );
}

export default App;

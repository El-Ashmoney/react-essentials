import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';


function App() {
    const [ selectedTopic, setSelectedTopic ] = useState('components');
    function handleSelect(selectedButtons) {
        setSelectedTopic(selectedButtons);
    }
    return (
        <div className="App">
            <main>
                <Header />
                <section id='core-concept'>
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                    <section id="examples">
                        <h2>Examples</h2>
                        <menu>
                            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                        </menu>
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <div id="content">
                                <p>{EXAMPLES[selectedTopic].description}</p>
                                <pre>
                                    <code>{EXAMPLES[selectedTopic].code}</code>
                                </pre>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default App;

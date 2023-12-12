import logo from './logo.svg';
import './App.css';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';


function App() {
    return (
        <div className="App">
            <Header />
            <section id='core-concept'>
                <h2>Core Concepts</h2>
                <ul>
                    <CoreConcept {...CORE_CONCEPTS[0]} />
                    <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]} />
                    <CoreConcept {...CORE_CONCEPTS[3]} />
                </ul>
            </section>
        </div>
    );
}

export default App;

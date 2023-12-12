import logo from './logo.svg';
import './App.css';
import { CORE_CONCEPTS } from './data';

const reactDescription = ['Fundamental ', 'Core ', 'Crucial '];
function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}


function Header() {
    const description = reactDescription[genRandomInt(2)];
    return(
    <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>React Essentials</h1>
        <p>{description} 
            "React Essentials" succinctly covers the key concepts of React, a JavaScript library for UI development, highlighting JSX, components, and state management for effective web app creation.
        </p>
    </header>
    );
}

function CoreConcept({image, title, description}){
    return(
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

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

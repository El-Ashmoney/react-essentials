import './Header.css';

const reactDescription = ['Fundamental ', 'Core ', 'Crucial '];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
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
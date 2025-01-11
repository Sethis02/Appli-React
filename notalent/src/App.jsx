import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DarkModeContext } from "./actions/DarkModeSwitch.jsx";

function App() {
    const [count, setCount] = useState(0);
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    darkMode ? document.getElementById('root').className ="dark-theme" : document.getElementById('root').className =""
    return (
        <div id="index">
            <header>
                <div className="logos">
                    <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
            </header>

            <main>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        Button Clicks {count}
                    </button>
                    <button onClick={() => {setCount((count) => count + 1)
                        toggleDarkMode()
                    }}>
                        Toggle Theme
                    </button>
                </div>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </main>

            <footer>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </footer>
        </div>
    );
}

export default App;

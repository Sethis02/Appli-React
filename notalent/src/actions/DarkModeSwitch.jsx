import { createContext, useState } from "react"

export const DarkModeContext = createContext();

export default function DarkModeSwitch({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
        console.log("oeidjk")
    }

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}
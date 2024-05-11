import { useEffect, useState } from "react";

const useTheme = () => {
    const [mode, setMode] = useState('light')

    const changeTheme = () => {
        const html = document.documentElement;

        if (mode === "light") {
            html.classList.remove("light")
            html.classList.add("dark")
            localStorage.setItem("mode", 'dark')
            setMode('dark')
        }
        else {
            html.classList.remove("dark")
            html.classList.add("light")
            localStorage.setItem("mode", 'light')
            setMode('light')
        }
    }

    useEffect(() => {
        const currentMode = localStorage.getItem('mode') ;
        document.documentElement.classList.add(currentMode)
        setMode(currentMode)
    }, [])
    return {changeTheme , mode}
};

export default useTheme;
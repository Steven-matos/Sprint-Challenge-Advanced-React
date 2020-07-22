import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('DarkMode', false);

    //Determins if the class dark-mode is true || false
    useEffect(() => {
        if(darkMode === true){
            const addDark = document.querySelector('body');
            addDark.classList.add('dark-mode');
        } else {
            const removeDark = document.querySelector('body');
            removeDark.classList.remove('dark-mode');
        }
    }, [darkMode])

    //Handles the click function to add darkmode
    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return [darkMode, toggleDark];
};
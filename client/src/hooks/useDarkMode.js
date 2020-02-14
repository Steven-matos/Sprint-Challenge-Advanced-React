import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('DarkMode', false);

    useEffect(() => {
        if(darkMode === true){
            const addDark = document.querySelector('body');
            addDark.classList.add('dark-mode');
        } else {
            const removeDark = document.querySelector('body');
            removeDark.classList.remove('dark-mode');
        }
    }, [darkMode])

    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return [darkMode, toggleDark];
};
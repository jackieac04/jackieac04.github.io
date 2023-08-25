import React, { useState, useEffect } from 'react';
import Sun from "/icons/Sun.png";
import Moon from "/icons/Moon.png";
import "./DarkMode.css";

/* Dark mode button: sets state to dark or light each tome button is pressed so that the page changes color */
export default function DarkMode() {
    const [theme, setTheme] = useState('light'); // default to light

    /* sets the theme based on the last theme user toggled. If first time on the page, defaults to light. */
    useEffect(() => {
        // Set the initial theme based on the data-theme attribute
        // Retrieve the stored theme from localStorage
        const selectedTheme = localStorage.getItem("selectedTheme");

        // If a theme is stored in localStorage, use it, otherwise default to 'light'
        if (selectedTheme) {
            document.querySelector('body').setAttribute('data-theme', selectedTheme);
            setTheme(selectedTheme);
        } else {
            const currentTheme = document.querySelector('body').getAttribute('data-theme');
            setTheme(currentTheme || 'light');
        }
    }, []);
    // sets dark mode
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        setTheme('dark');
        localStorage.setItem("selectedTheme", "dark");
    }
    // sets light mode
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        setTheme('light');
        localStorage.setItem("selectedTheme", "light");
    }
    // toggles themse based on if the target it checked or unchecked
    const toggleTheme = e => {
        e.target.checked ? setDarkMode() : setLightMode();
    }
    /* displays either sun or moon icon depepnding on if the theme is dark or light */
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                checked={theme === 'dark'} // set the checkbox state based on the theme
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img className={theme === 'dark' ? 'visible' : 'hidden'} src={Sun} alt="Sun icon" />
                <img className={theme === 'light' ? 'visible' : 'hidden'} src={Moon} alt="Moon icon" />
            </label>

        </div>
    );
}

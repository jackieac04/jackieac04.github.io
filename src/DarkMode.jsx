import React, { useState, useEffect } from 'react';
import Sun from "/Sun.png";
import Moon from "/Moon.png";
import "./DarkMode.css";

export default function DarkMode() {
    const [theme, setTheme] = useState('light'); // default to light

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

    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        setTheme('dark');
        localStorage.setItem("selectedTheme", "dark");
    }

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        setTheme('light');
        localStorage.setItem("selectedTheme", "light");
    }

    const toggleTheme = e => {
        e.target.checked ? setDarkMode() : setLightMode();
    }

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

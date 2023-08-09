import React from 'react'
import Sun from "/Sun.svg";
import Moon from "/Moon.svg";
import "./DarkMode.css";

export default function DarkMode() {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
    }

    const toggleTheme = e => {
        e.target.checked ? setDarkMode() : setLightMode()
    }
  return (
    <div className='dark_mode'>
        <input
            className='dark_mode_input'
            type='checkbox'
            id='darkmode-toggle'
            onChange={toggleTheme}
        />
        <label className='dark_mode_label' for='darkmode-toggle'>
           
        </label>
    </div>
);
}

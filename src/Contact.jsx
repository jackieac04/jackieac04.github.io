import React from 'react'
import Gmail from '/icons/Gmail.png'
import LinkedIn from '/icons/LinkedIn.png'
import IG from '/icons/IG.png'
import Discord from '/icons/Discord.png'
import GitHub from '/icons/GitHub.png'

export default function ({link, gmailIcon, icon}) {
  return (
    <>
  <a className={link} href="mailto: jaclyn_cohen@brown.edu">
            <img  className={gmailIcon} src={ Gmail} alt="the gmail app icon" />
        </a>
        <a className={link} href="https://www.linkedin.com/in/jaclyn-cohen-1718a4225/">
            <img className={icon} src={ LinkedIn } alt=" the LinkedIn app icon" />
        </a>
        <a className={link} href="https://instagram.com/leafysheepy">
            <img className={icon} src={ IG } alt=" the Instagram app icon" />
        </a>
        <a  className={link} href="https://discord.com/users/leafysheepy">
            <img className={icon} src={ Discord } alt="the Discord app icon" />
        </a>
        <a className={link} href="https://github.com/jackieac04">
            <img className={icon} src={ GitHub } alt="the GitHub app icon" />
        </a>
    </>
  )
}

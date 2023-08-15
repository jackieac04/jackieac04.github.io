import React from 'react'
import Gmail from '/icons/Gmail.png'
import LinkedIn from '/icons/LinkedIn.png'
import IG from '/icons/IG.png'
import Discord from '/icons/Discord.png'
import GitHub from '/icons/GitHub.png'

export default function ({gmailLink, linkedinLink, igLink, discordLink, githubLink, gmailIcon, linkedinIcon, igIcon, discordIcon, githubIcon}) {
  return (
    <>
  <a className={gmailLink} href="mailto: jaclyn_cohen@brown.edu">
            <img  className={gmailIcon} src={ Gmail} alt="the gmail app icon" />
        </a>
        <a className={linkedinLink} href="https://www.linkedin.com/in/jaclyn-cohen-1718a4225/">
            <img className={linkedinIcon} src={ LinkedIn } alt=" the LinkedIn app icon" />
        </a>
        <a className={igLink} href="https://instagram.com/leafysheepy">
            <img className={igIcon} src={ IG } alt=" the Instagram app icon" />
        </a>
        <a  className={discordLink} href="https://discord.com/users/leafysheepy">
            <img className={discordIcon} src={ Discord } alt="the Discord app icon" />
        </a>
        <a className={githubLink} href="https://github.com/jackieac04">
            <img className={githubIcon} src={ GitHub } alt="the GitHub app icon" />
        </a>
    </>
  )
}

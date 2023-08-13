import React from 'react';
import CSSubContent from './CSSubContent.jsx';

const posterdesc = "I never knew how surrounded with visual imagery in the form of posters a person could be until I came to Brown. At the beginning of freshman year I had the vague idea that it could be fun to collect them, but I didn't turn it into a project until March 2023. Since then, I have been collecting posters with an intent to create an archive of the shifting events, ideas, and styles of the Brown student body, in the form of a large collection of physical posters stored temporarily in my dorm with long-term plans to donate it to the John Hay Library. While Brown does already have a digital repository, it is quite vast, contains few posters, and is somewhat difficult to access, search through, and contribute to in the ways that I am primarily interested in. This is why I've decided to make my own poster archive, where users can easily upload posters, and search and sort by tons of different factors like colors, organization, and style to analyze how the opinions and aesthetics of the Brown community have evolved over time. This is currently in progress, so check back later to see the finished result!";

const thisdesc = '';
const mpdesc = '';
const tetdesc = '';
const dttpdesc = '';


const pages = [

        { name: 'Poster Archive - Coming soon', to: '/cs/poster', tech: '', imgs: [], description: posterdesc, next: '/cs/this', prev: '/cs/dttp'},
        { name: 'This site!', to:'/cs/this', tech: 'JavaScript (React + SWC), HTML, CSS, VSCode, Procreate', imgs: ['/Web.png', '/ButterfliesE.gif'], description: thisdesc, next: '/cs/mp', prev: '/cs/poster' },
        { name: 'Modal Perception', to:'/cs/mp', tech: 'JavaScript (jQuery), HTML, CSS, PHP, VSCode', imgs: ['/MP7.gif', '/MP8.gif', '/MP9.gif'], description: mpdesc, next: '/cs/tetrisus', prev: '/cs/this' },
        { name: 'Tetris and PacMan', to: '/cs/tetrissus', tech: 'Java (JavaFX), IntelliJ', imgs: ['/tetris.gif', '/susman.gif'], description: tetdesc, next: '/cs/dttp', prev: '/cs/mp'},
        { name: 'Decision Tree, Travel Planner', to:'/cs/dttp', tech: 'Java, IntelliJ', imgs: ['/dt.gif', '/tp.png'], description: dttpdesc, next: '/cs/this', prev: '/cs/dttp' }
  ];

const options = pages.map(page => ({
  name: page.name,
  to: page.to,
  component: <CSSubContent 
                name={page.name} 
                imgs={page.imgs} 
                tech={page.tech} 
                desc={page.description} 
                prev={page.prev} 
                next={page.next} 
             />
}));

export default options;

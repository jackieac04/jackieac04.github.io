import ArtSubContent from './ArtSubContent.jsx';
import React from 'react';


const options = [
        { name: 'Mixed Media, Traditional', to: 'mixedmediatrad', component: <ArtSubContent name='Mixed Media, Traditional' /> },
        { name: 'Murals', to: 'murals', component: <ArtSubContent name='Murals'/> },
        { name: 'Painting', to: 'painting', component: <ArtSubContent name='Painting'/>},
        { name: 'Printmaking', to: 'printmaking', component: <ArtSubContent name='Printmaking'/> },
        { name: 'Graphic Design', to: 'graphicDesign', component: <ArtSubContent name='Graphic Design'/> },
        { name: 'Illustration', to: 'illustration', component: <ArtSubContent name='Illustration'/> },
        { name: 'Mixed Media, Digital', to: 'mixedmediadigi', component: <ArtSubContent name='digital'/> },
        { name: "Puzzle Club", to: 'puzz', component: <ArtSubContent name='bph'/>}
    
  ];

  export default options;
import ArtSubContent from './ArtSubContent.jsx';
import React from 'react';


const options = [
        { name: 'Mixed Media, Traditional', to: 'art/mixedmediatrad', component: <ArtSubContent name='Mixed Media, Traditional' /> },
        { name: 'Murals', to: 'art/murals', component: <ArtSubContent name='Murals'/> },
        { name: 'Painting', to: 'art/painting', component: <ArtSubContent name='Painting'/>},
        { name: 'Printmaking', to: 'art/printmaking', component: <ArtSubContent name='Printmaking'/> },
        { name: 'Graphic Design', to: 'art/graphicDesign', component: <ArtSubContent name='Graphic Design'/> },
        { name: 'Illustration', to: 'art/illustration', component: <ArtSubContent name='Illustration'/> },
        { name: 'Mixed Media, Digital', to: 'art/mixedmediadigi', component: <ArtSubContent name='mixed digital'/> },
        { name: "Puzzle Club", to: 'art/puzz', component: <ArtSubContent name='bph'/>}
    
  ];

  export default options;
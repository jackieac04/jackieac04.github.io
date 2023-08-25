import ArtSubContent from './ArtSubContent.jsx';
import React from 'react';

/* List of art subpage routes, defined with a name, a link to the page, and the corresponding component */
const options = [
        { name: 'Graphic Design', to: 'art/graphicDesign', component: <ArtSubContent genre='Graphic'/> },
        { name: 'Illustration', to: 'art/illustration', component: <ArtSubContent genre='Illustration'/> },
        { name: 'Mixed Media, Digital', to: 'art/mixedmediadigi', component: <ArtSubContent genre='Mixdig'/> },
        { name: 'Mixed Media, Traditional', to: 'art/mixedmediatrad', component: <ArtSubContent genre='Mixtrad' /> },
        { name: 'Painting', to: 'art/painting', component: <ArtSubContent genre='Paint'/>},
        { name: 'Printmaking', to: 'art/printmaking', component: <ArtSubContent genre='Print'/> },
        { name: 'Public Works', to: 'art/murals', component: <ArtSubContent genre='Pub'/> }
  ];

  export default options;
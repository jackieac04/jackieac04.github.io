import { Print, Paint, MixedTrad, Murals, Graphic, Illustration, MixedDig, BPH, Traditional, Digital } from './artSubPages/index.js';
import React from 'react';


const options = [
    {
      name: "Traditional",
      optElement: 'traditional/*',
      component: <Traditional />,
      subOptions: [
        { name: 'Mixed Media', to: 'mixedMedia', component: <MixedTrad /> },
        { name: 'Murals', to: 'murals', component: <Murals /> },
        { name: 'Painting', to: 'painting', component: <Paint />},
        { name: 'Printmaking', to: 'printmaking', component: <Print /> }
      ]
    },
    {
      name: "Digital",
      optElement: 'digital/*',
      component: <Digital />,
      subOptions: [
        { name: 'Graphic Design', to: 'graphicDesign', component: <Graphic /> },
        { name: 'Illustration', to: 'illustration', component: <Illustration /> },
        { name: 'Mixed Media', to: 'mixedMedia', component: <MixedDig/> }
      ]
    },
    {
        name: "Puzzle Club",
        optElement: 'puzz',
        subOptions: [
            {name: 'Brown Puzzlehunt 2023', to: 'bph', component: <BPH /> }
        ]
    }
  ];

  export default options;
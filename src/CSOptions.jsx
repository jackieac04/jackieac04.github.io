import CSSubContent from './CSSubContent.jsx';
import React from 'react';


const options = [

        { name: 'Poster Archive - Coming soon', to: 'cs/poster', component: <CSSubContent /> },
        { name: 'This site!', to: 'cs/this', component: <CSSubContent /> },
        { name: 'Modal Perception', to: 'cs/mp', component: <CSSubContent /> },
        { name: 'Tetris and PacMan', to: 'cs/tetrissus', component: <CSSubContent />},
        { name: 'Decision Tree, Travel Planner', to: 'cs/dttp', component: <CSSubContent /> }
  ];

  export default options;
import CSSubContent from './CSSubContent.jsx';
import React from 'react';


const options = [

        { name: 'Poster Archive - Coming soon', to: 'cs/poster', component: <CSSubContent /> },
        { name: 'This site!', to: 'cs/this', component: <CSSubContent /> },
        { name: 'Modal Perception', to: 'cs/mp', component: <CSSubContent /> },
        { name: 'Tetris', to: 'cs/tetris', component: <CSSubContent />},
        { name: 'AmongMan', to: 'cs/amongman', component: <CSSubContent /> }
  ];

  export default options;
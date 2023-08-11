import CSSubContent from './CSSubContent.jsx';
import React from 'react';


const options = [

        { name: 'Poster Archive - Coming soon', to: 'poster', component: <CSSubContent /> },
        { name: 'This site!', to: 'this', component: <CSSubContent /> },
        { name: 'Modal Perception', to: 'mp', component: <CSSubContent /> },
        { name: 'Tetris', to: 'tetris', component: <CSSubContent />},
        { name: 'AmongMan', to: 'amongman', component: <CSSubContent /> }
  ];

  export default options;
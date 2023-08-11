import React from 'react';

export default function ArtMainContent() {
  return (
    <div className='info'>
    <br />
    <div className='about'>
            <h1>About my Work</h1>
        <div className='text-video'>
            <p>Text describing my art portfolio</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7HZEJcnwbus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        </div>
        
    </div>
    <div className='awards'>
        <h2>Awards</h2>
        <p>awards</p>
    </div>
    <div className='pubs'>
        <h2>Publications and Exhibitions</h2>
        <p>pubs</p>
    </div>
    <div className='features'>
        <h2>Features</h2>
        <p>features</p>
    </div>
</div>
  );
}

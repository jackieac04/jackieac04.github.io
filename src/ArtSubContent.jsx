import React from 'react'
import pieces from './Pieces'
import { useState, useRef, useEffect  } from 'react';
import Masonry from 'masonry-layout';
import './artsub.css';

export default function ArtSubContent({genre}) {
    const [selectedArt, setSelectedArt] = useState(null);
    const masonryRef = useRef(null);
    const filteredArtworks = pieces.filter(art => art.genre === genre);

    useEffect(() => {
        if (masonryRef.current) {
            const masonry = new Masonry(masonryRef.current, {
                itemSelector: '.artwork',
                gutter: 1,
                originRight: false,
                columnWidth: 25
            });
        }
    }, [filteredArtworks]);



  return (
    <>
     <div className="masonry-layout" ref={masonryRef}>
        {filteredArtworks.map(art => (
          <div 
            key={art.title} 
            className="artwork" 
            onClick={() => setSelectedArt(art)}
          >
            <img src={art.mainImg} alt={art.title} />
            <div className="hover-text"> <p>{art.title}</p></div>
          </div>
        ))}
      </div>
      {/* {selectedArt && (
        <Modal 
          art={selectedArt} 
          onClose={() => setSelectedArt(null)} 
        />
      )} */}
    </>
  )
}

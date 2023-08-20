import React from 'react'
import pieces from './Pieces'
import { useState, useRef, useEffect  } from 'react';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';
import './artsub.css';
import Modal from './Modal';

export default function ArtSubContent({genre}) {
    const [selectedArt, setSelectedArt] = useState(null);
    const [currentArtIndex, setCurrentArtIndex] = useState(null);
    const masonryRef = useRef(null);
    const filteredArtworks = pieces.filter(art => art.genre === genre);

    const handleNext = (e) => {
        e.stopPropagation();
        if (currentArtIndex < filteredArtworks.length - 1) {
          setCurrentArtIndex(currentArtIndex + 1);
          setSelectedArt(filteredArtworks[currentArtIndex + 1]);
        } else {
            setCurrentArtIndex(0)
            setSelectedArt(filteredArtworks[0]);
        }
      };
    
      const handlePrevious = (e) => {
        e.stopPropagation();
        if (currentArtIndex > 0) {
          setCurrentArtIndex(currentArtIndex - 1);
          setSelectedArt(filteredArtworks[currentArtIndex - 1]);
        } else {
            setCurrentArtIndex(filteredArtworks.length - 1)
            setSelectedArt(filteredArtworks[filteredArtworks.length - 1]);
        }
      };

    useEffect(() => {
        if (masonryRef.current) {
            imagesLoaded(masonryRef.current, function () {
                new Masonry(masonryRef.current, {
                    itemSelector: '.artwork',
                    gutter: 3,
                    originRight: false,
                    columnWidth: 25
                });
            }
    )}
    }, [filteredArtworks]);


  return (
    <>
     <div className="masonry-layout" ref={masonryRef}>
        {filteredArtworks.map((art, index) => (
          <div 
            key={art.title} 
            className="artwork" 
            onClick={() => {
                setSelectedArt(art);
                setCurrentArtIndex(index);
            }}
          >
            <img src={art.mainImg} alt={art.title} />
            <div className="hover-text"> <p>{art.title}</p></div>
          </div>
        ))}
      </div>
      {selectedArt && (
        <Modal 
          art={selectedArt} 
          onNext={handleNext}
          onPrevious={handlePrevious}
          onClose={() => setSelectedArt(null)} 
        />
      )}
    </>
  )
}

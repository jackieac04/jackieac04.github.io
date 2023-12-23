import React from 'react'
import pieces from './Pieces'
import { useState, useRef, useEffect  } from 'react';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';
import './artsub.css';
import Modal from './Modal';

/* How each of the art subpages is defined. Takes in a genre and displays the peices in that genre. */
export default function ArtSubContent({genre}) {
    const [selectedArt, setSelectedArt] = useState(null);
    const [currentArtIndex, setCurrentArtIndex] = useState(null);
    const masonryRef = useRef(null);
    const filteredArtworks = pieces.filter(art => art.genre === genre);

    // Allows users to click next on a particular modal
    const handleNext = (e) => {
        e.stopPropagation();
        if (currentArtIndex < filteredArtworks.length - 1) {
          setCurrentArtIndex(currentArtIndex + 1); //sets the index +1
          setSelectedArt(filteredArtworks[currentArtIndex + 1]); //displays the index of the piece +1
        } else { //if showing the last work, loops to the beginning
            setCurrentArtIndex(0)
            setSelectedArt(filteredArtworks[0]);
        }
      };
    
      // Allows users to click previous on a particular modal
      const handlePrevious = (e) => {
        e.stopPropagation();
        if (currentArtIndex > 0) {
          setCurrentArtIndex(currentArtIndex - 1);
          setSelectedArt(filteredArtworks[currentArtIndex - 1]);
        } else { //if showing the first work, loops to the last one
            setCurrentArtIndex(filteredArtworks.length - 1)
            setSelectedArt(filteredArtworks[filteredArtworks.length - 1]);
        }
      };
    //masonry reloads everytime the filtered artworks reload (when a new subpage is navigated to)
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

    // returns the display of artworks
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
      {/* shows a modal when a piece is clicked on */}
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

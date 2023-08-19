import React from 'react'
import { useState, useEffect } from 'react';
import './artsub.css'


export default function Modal({ art, onNext, onPrevious, onClose }) {
    const [mainImage, setMainImg] = useState(art.mainImg);

    useEffect(() => {
        // Reset curImage state whenever the art prop changes
        setMainImg(art.mainImg);
    }, [art]);

    const handleImageClick = (imgSrc) => {
        setMainImg(imgSrc);
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-wrapper">
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="img-content">
                        <div className="main-img">
                            <img src={mainImage} alt={art.title} />
                        </div>
                        {art.secondaryImgs.length > 0 && <div className="sec-imgs">
                            <img src={art.mainImg} alt={art.title} onClick={() => handleImageClick(art.mainImg)} />
                        {art.secondaryImgs.map((imgSrc, index) => (
        <img
            key={index}
            src={imgSrc}
            alt={`Secondary Image ${index}`}
            onClick={() => handleImageClick(imgSrc)}
         />
    ))}
                        </div>}
                    </div>
                    <div className="content">
                        <h2>{art.title}</h2>
                        <h4>{art.date}</h4>
                        <h4>{art.media}</h4>
                        {art.awards && <h4>{art.awards}</h4>}
                        <p>{art.description}</p>
                    </div>
            <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="buttons-art">
                <button className="prev-button" onClick={onPrevious}>Previous</button>
                <button className="next-button" onClick={onNext}>Next</button>
        </div> 
    </div>
</div>
    );
}


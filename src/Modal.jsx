import React from 'react'
import './artsub.css'


export default function Modal({ art, onNext, onPrevious, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-wrapper">
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <img src={art.mainImg} alt={art.title} />
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
                <button className="nextbutton" onClick={onNext}>Next</button>
        </div> 
    </div>
</div>
    );
}


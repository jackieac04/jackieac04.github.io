import React from 'react'
import './artsub.css'


export default function Modal({ art, onNext, onPrevious, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={art.mainImg} alt={art.title} />
                <div className="content">
                <h2>{art.title}</h2>
                <p>{art.description}</p>
                </div>
                {/* Add other art details here */}
            </div>
        </div>
    );
}


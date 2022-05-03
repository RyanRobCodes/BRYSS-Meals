import React from "react";
// eslint-disable-next-line
import eximage from "../../assets/images/small-plate.jpg";

const Modal = ({currentMeal, onClose, show}) => {
    if (!show) {
        return null
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{currentMeal.name}</h4>
                    <div className="modal-sub">${currentMeal.price}</div>
                </div>
                <div className= "modal-body">
                    <div className="modal-top">
                        <div className="modal-image">
                            <img src={`/images/${currentMeal.image}`} alt={currentMeal.name}/>
                        </div>
                        <div className="modal-info justify-center" >
                            <div>
                                <div className="description mb-2">Description</div>
                                <p>{currentMeal.description}</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="modal-bottom my-3">
                        <div className="modal-ingredient">
                            <p> some reviews? </p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer py-1">
                    <button className="btn">Cart</button>
                    <button onClick={onClose} className="btn">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
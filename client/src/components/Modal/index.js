import React from "react";
import eximage from "../../assets/images/small-plate.jpg";

const Modal = e => {
    if (!e.show) {
        return null
    }

    return (
        <div className="modal" onClick={e.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Modal Title</h4>
                    <div className="modal-sub">Vegetarian</div>
                </div>
                <div className= "modal-body">
                    <div className="modal-top">
                        <div className="modal-image">
                            <img src={eximage} alt="small plate of berry tomatoes"/>
                        </div>
                        <div className="modal-info" >
                            <div>
                                <p> Nutritional Info</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-bottom my-3">
                        <div className="modal-ingredient">
                            <div className="ingredients mb-2">Ingredients</div>
                            <p>Tomatoes, Feta Cheese, Lemon, Basil, Butter, Egg, Sea Salt</p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer py-1">
                    <button className="btn">Cart</button>
                    <button onClick={e.onClose} className="btn">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
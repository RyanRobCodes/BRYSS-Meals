import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_ME, QUERY_USER } from '../../utils/queries';


const Modal = ({currentMeal, onClose, show, onAdd}) => {
    const { username: userParam } = useParams();

    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
      });
    
    const user = data?.me || data?.user || {};

    console.log(user?.username)
    console.log(currentMeal?.name)

    const [reviewText, setReviewText] = useState('');
    const [mealForReview, setMealForReview] = useState('');
    const [usernameForReview, setUsernameForReview] = useState('');

    const handleChange = event => {
        setReviewText(event.target.value);
        setUsernameForReview(user?.username)
        setMealForReview(currentMeal?.name)
    };

    const [addReview] = useMutation(ADD_REVIEW,
        {variables: { reviewText: reviewText, username: usernameForReview, mealName: mealForReview}})

    const handleReviewSubmit = async event => {
        event.preventDefault();
        try {
            await addReview({
                variables: {reviewText: reviewText, username: usernameForReview, mealName: mealForReview},
            });
            setReviewText('');
            setUsernameForReview('');
            setMealForReview('');
        } catch (e) {
            console.log(JSON.stringify(e, null, 2));
            console.log(e)
        }
    }

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
                            <form onSubmit={handleReviewSubmit}>
                                <textarea
                                    placeholder='Review on this meal!'
                                    value={reviewText}
                                    className="col-12"
                                    onChange={handleChange}
                                ></textarea>
                                <button type="submit">Post Review</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal-footer py-1">
                    <button onClick={() => onAdd(currentMeal)}className="btn">Add to Cart</button>
                    <button onClick={onClose} className="btn">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
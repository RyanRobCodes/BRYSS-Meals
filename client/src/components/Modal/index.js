import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_ME, QUERY_USER } from '../../utils/queries';
import ReviewListModal from '../ReviewListModal';

const Modal = ({currentMeal, onClose, show}) => {

      let refreshPage = () => {
    window.location.reload(false)}

    const { username: userParam } = useParams();

    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
      });
    
    const user = data?.me || data?.user || {};

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
        refreshPage();
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
                                <p className='descriptionP'>{currentMeal.description}</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="modal-bottom my-3">
                        <div className=" col-12">
                            <ReviewListModal currentMeal={currentMeal?.name} />
                        </div>
                        <div className="modal-addReview col-12">
                            <form className="flex-row justify-space-around" onSubmit={handleReviewSubmit}>
                                <textarea
                                    placeholder='Review on this meal!'
                                    value={reviewText}
                                    className="review-textarea col-9 mb-1"
                                    onChange={handleChange}
                                ></textarea>
                                <button className='btn col-3 postReviewBtn' type="submit">Post Review</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal-footer py-1">
                    <button className="btn postReviewBtn">Add to Cart</button>
                    <button onClick={onClose} className="btn postReviewBtn">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
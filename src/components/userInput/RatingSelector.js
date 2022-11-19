import React, { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext'
import './ratingSelector.css'

const RatingSelector = () => {
    let lowRating = 1;
    let highRating = 10;
    let ratingArray = [];

    const {editFeedback} = useContext(FeedbackContext);

    for (let i = lowRating; i <= highRating; i++) {
        ratingArray.push(
            <li className='cb-ratingSelector-li' key={i}>
                <input type="radio" id={"num" + i} name="rating" value={i} />
                <label htmlFor={"num" + i}>{i}</label>
            </li>
        )
    }

    return (
        <ul className='cb-ratingSelector-ul'>
            {ratingArray}
        </ul>
    )
}

export default RatingSelector
import React, { useContext } from 'react'
import "./feedbackStats.css"
import FeedbackContext from '../../context/FeedbackContext'

const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext);
    let avgRating = 0;
    feedback.forEach(element => {
        avgRating += element.rating;
    })
    avgRating /= feedback.length

    return (
        <div className='cb-feedbackStats-container'>
            <div className='cb-feedbackStats'>
                <div className='cb-feedbackStats-stats'>
                    Total Reviews: {feedback.length}
                </div>
                <div className='cb-feedbackStats-stats'>
                    Average Rating: {Math.floor(avgRating)}
                </div>
            </div>
        </div>
    )
}

export default FeedbackStats
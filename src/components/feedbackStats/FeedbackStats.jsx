import React, { useContext } from 'react'
import "./feedbackStats.css"
import FeedbackContext from '../../context/FeedbackContext'

const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext);
    let sum = 0;
    feedback.forEach(element => {
        sum += element.rating;
    })

    return (
        <div className='cb-feedbackStats-container'>
            <div className='cb-feedbackStats'>
                <div className='cb-feedbackStats-stats'>
                    Total Reviews: {feedback.length}
                </div>
                <div className='cb-feedbackStats-stats'>
                    Average Rating: {sum / feedback.length}
                </div>
            </div>
        </div>
    )
}

export default FeedbackStats
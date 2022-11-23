import React, { useContext } from 'react'
import FeedbackItem from '../feedbackItem/FeedbackItem'
import FeedbackContext from '../../context/FeedbackContext'

const FeedbackItemList = () => {
    const {feedback} = useContext(FeedbackContext);
    return (
        <div>
            {feedback.map((item) => {
                return (
                        <FeedbackItem item={item} key={item.id} />
                )
            })}
        </div>
    );
}


export default FeedbackItemList
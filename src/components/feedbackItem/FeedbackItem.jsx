import React, { useContext } from 'react'
import './feedbackitem.css'
import { MdClose } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import FeedbackContext from '../../context/FeedbackContext'

const FeedbackItem = ({item}) => {
    const {editFeedback, updateFeedback} = useContext(FeedbackContext);
    return (
        <div className='cb-feedbackItems-container'>
            <div className='cb-feedbackItems-title'>
                <div className='cb-feedbackItems-rating'>
                    {item.rating}
                </div>
                <div className='cb-feedbackItems-options'>
                    <FaEdit 
                        style={{backgroundColor: 'var(--azure-x-11-web-color'}}
                        onClick={() => editFeedback(item)}
                    />
                    <MdClose 
                        style={{backgroundColor: 'var(--azure-x-11-web-color'}}
                        onClick={() => updateFeedback(item.id)}
                    />
                </div>
            </div>
        </div> 
    )
}

export default FeedbackItem
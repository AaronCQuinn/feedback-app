import React, { useContext } from 'react'
import './feedbackitem.css'
import { MdClose } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import FeedbackContext from '../../context/FeedbackContext'

const FeedbackItem = ({item}) => {
    const {deleteFeedback, updateFeedback} = useContext(FeedbackContext);
    return (
        <div className='cb-feedbackItem-container'>
            <div className='cb-feedbackItem'>
                {/* Title section of feedback item */}
                <div className='cb-feedbackItem-title'>
                    <div className='cb-feedbackItems-rating'>
                        {item.rating}
                    </div>
                    <div className='cb-feedbackItems-options'>
                        <FaEdit 
                            style={{backgroundColor: 'var(--azure-x-11-web-color'}}
                            onClick={() => updateFeedback(item)}
                        />
                        <MdClose 
                            style={{backgroundColor: 'var(--azure-x-11-web-color'}}
                            onClick={() => deleteFeedback(item.id)}
                        />
                    </div>
                </div>

                <div className='cb-feedbackItem-body'>
                    {item.text}
                </div>
            </div>
        </div> 
    )
}

export default FeedbackItem
import {useState, useContext} from 'react'
import RatingSelector from './RatingSelector'
import {v4 as uuid} from 'uuid'
import './userInput.css'
import FeedbackContext from '../../context/FeedbackContext'

const UserInput = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [warningMsg, setWarningMsg] = useState(false);

  const {addFeedback, editFeedback, updateCurrentFeedback, setEditFeedback, feedback} = useContext(FeedbackContext);

  const handleInputChange = (e) => {
      // No text, don't show warning.
      if (text.trim().length <= 10) {
        setWarningMsg(true);
        setBtnDisabled(true);
        // Regular submission conditions.
      } else {
        setWarningMsg(false);
        setBtnDisabled(false);
      }
      console.log(feedback);
      setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        id: uuid(),
        text,
        rating,
      }
      if (editFeedback.edit) {
        updateCurrentFeedback(editFeedback.item.id, newFeedback);
        setEditFeedback({item: {}, edit: false});
      } else {
        addFeedback(newFeedback);
      }
      setText('');
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='cb-userInput-container'>
          <div className='cb-userInput'>

              <div className='cb-userInput-header'>
                  How would you rate your service with us?
              </div>
              
                <RatingSelector select={(rating => setRating(rating))} />
                
                <div className='cb-userInput-input-group'>
                  <input type="text" placeholder='Leave your review...' onChange={handleInputChange} value={text}/>
                  <input type="submit" className='btn' disabled={btnDisabled} onSubmit={handleSubmit}/>
                </div>
  

              {warningMsg && <div className='cb-userInput-warning'>
                Please make sure your rating has more then 10 characters and a number is selected!
              </div>}

          </div>
      </div>
    </form>
  )
}

export default UserInput
import React from 'react'
import RatingSelector from './RatingSelector'
import './userInput.css'

const UserInput = () => {
  return (
    <div className='cb-userInput-container'>
        <div className='cb-userInput'>

            <div className='cb-userInput-header'>
                How would you rate your service with us?
            </div>
            <RatingSelector />
            
            <div className='cb-userInput-input-group'>
              <input type="text"/>
              <input type="submit" className='btn'/>
            </div>
        </div>
    </div>
  )
}

export default UserInput
import React from 'react'
import './ratingSelector.css'

const RatingSelector = () => {
    let lowRating = 1;
    let highRating = 10;
    let ratingArray = [];

    for (let i = lowRating; i <= highRating; i++) {
        ratingArray.push(
            <li className='cb-ratingSelector-li'>
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
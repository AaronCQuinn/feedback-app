import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../../context/FeedbackContext'
import './ratingSelector.css'

const RatingSelector = ({select}) => {
    const [selected, setSelected] = useState(10);
    const {editFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        setSelected(editFeedback.item.rating);
    }, [editFeedback]);

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value);
    }

    let lowRating = 1;
    let highRating = 10;
    let ratingArray = [];


    for (let i = lowRating; i <= highRating; i++) {
        ratingArray.push(
            <li className='cb-ratingSelector-li' key={i}>
                <input type="radio" id={"num" + i} name="rating" value={i} checked={selected === i} onChange={handleChange}/>
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
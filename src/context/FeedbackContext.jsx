import {React, createContext, useState} from 'react'

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {

  let feedbackItems = [
    {
      id: 1,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse corrupti odit quae porro ipsum temporibus laboriosam. Temporibus explicabo culpa, fugit labore blanditiis neque similique.",
      rating: 7,
    },
    {
      id: 2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse corrupti odit quae porro ipsum temporibus laboriosam. Temporibus explicabo culpa, fugit labore blanditiis neque similique.",
      rating: 10,
    },
    {
      id: 3,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse corrupti odit quae porro ipsum temporibus laboriosam. Temporibus explicabo culpa, fugit labore blanditiis neque similique.",
      rating: 8,
    },
    {
      id: 4,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse corrupti odit quae porro ipsum temporibus laboriosam. Temporibus explicabo culpa, fugit labore blanditiis neque similique.",
      rating: 9,
    },
    {
      id: 5,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse corrupti odit quae porro ipsum temporibus laboriosam. Temporibus explicabo culpa, fugit labore blanditiis neque similique.",
      rating: 6,
    },
  ]

  const [feedback, setFeedback] = useState(feedbackItems);

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  })
  
  const deleteFeedback = async(id) => {
    // Set the state to filter the feedback, all items except the one passed in.
    setFeedback(feedback.filter(item => item.id !== id));
  }

  const addFeedback = (newFeedback) => {
    setFeedback([...feedback, newFeedback]);
  }

  const updateFeedback = (item) => {
    setEditFeedback({item, edit: true})
  }

  const updateCurrentFeedback = async(id, newItem) => {
    // Map over the items. If id matches the one to update, spread both the item and newItem, if not leave it.
    feedbackItems.map(item => item.id === id ? {...item, ...newItem} : item)
  }

  return (
    <FeedbackContext.Provider
    value={
      {
      feedback,
      editFeedback,
      setEditFeedback,
      deleteFeedback,
      addFeedback,
      updateFeedback,
      updateCurrentFeedback
    }}> 
      {children} 
    </FeedbackContext.Provider>
  )
}

export default FeedbackProvider
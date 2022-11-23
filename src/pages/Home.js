import React from 'react'
import Header from '../components/header/Header'
import UserInput from '../components/userInput/UserInput'
import FeedbackStats from '../components/feedbackStats/FeedbackStats'
import FeedbackItemList from '../components/feedbackItemList/FeedbackItemList'

const home = () => {
  return (
    <>
      <Header />
      <UserInput />
      <FeedbackStats />
      <FeedbackItemList />
    </>
  )
}

export default home
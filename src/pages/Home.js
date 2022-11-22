import React from 'react'
import Header from '../components/header/Header'
import UserInput from '../components/userInput/UserInput'
import FeedbackStats from '../components/feedbackStats/FeedbackStats'

const home = () => {
  return (
    <>
      <Header />
      <UserInput />
      <FeedbackStats />
    </>
  )
}

export default home
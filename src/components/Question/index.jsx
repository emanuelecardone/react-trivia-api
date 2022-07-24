import React from 'react'
import PropTypes from 'prop-types'

const Question = ({question}) => {
  return (
    <div className='question w-100 h_20 border border-4 border-light'>
        <div className='question_box'>
            Question: {question.question}
        </div>
        <div className='answers_box'>
            Answers: {question.correct_answer}, {question.incorrect_answers[0]}, {question.incorrect_answers[1]}, {question.incorrect_answers[2]}
        </div>
        <div className='quiz'>
        </div> 
    </div>
  )
}

Question.propTypes = {
    question: PropTypes.object.isRequired
}

export default Question
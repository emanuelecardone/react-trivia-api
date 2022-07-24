import React from 'react'
import PropTypes from 'prop-types'

const QuestionBox = ({question, index}) => {

    const log = (answer) => (e) => {
        console.log(answer)
    }

  return (
    <div className={'w-100 h-100 d-flex flex-column justify-content-between align-items-center question_box_' + index}>
        <div className={'question_box_up w-100 h_30 d-flex align-items-center text-center'}>
            <h2>{question.question}</h2>
        </div>
        <div className={'question_box_down w-100 h_80 d-flex flex-wrap'}>
            <div onClick={log('correct')} className='correct_box w-50 h-50 d-flex align-items-center justify-content-center border border-3 border-light'>{question.correct_answer}</div>
            {question.incorrect_answers.map((incorrect_answer, index) => (
                <div onClick={log('wrong')} key={incorrect_answer + index} className='incorrect_box w-50 h-50 d-flex align-items-center justify-content-center border border-3 border-light'>{incorrect_answer}</div>
            ))}
        </div>
    </div>
  )
}

QuestionBox.propTypes = {
    question: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default QuestionBox
import React from 'react'
import PropTypes from 'prop-types'
import './style.scss';

const Question = ({question, index, setCurrQuestion, setClicked}) => {

    // Cambio index domanda attuale
    const changeCurrQuestion = () => {
        setCurrQuestion(index);
        setClicked(true);
    }

    return (
        <div onClick={changeCurrQuestion} className='question px-2 py-3 border border-4 border-light'>
            <div className='question_box'>
                Question: {question.question}
            </div>
            <div className='answers_box'>
                Answers: {question.correct_answer}, {question.incorrect_answers[0]}, {question.incorrect_answers[1]}, {question.incorrect_answers[2]}
            </div>
        </div>
    )
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    setCurrQuestion: PropTypes.func.isRequired
}

export default Question
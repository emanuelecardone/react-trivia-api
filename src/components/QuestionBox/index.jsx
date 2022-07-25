import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import shuffle from 'lodash/shuffle';
import './style.scss';

const QuestionBox = ({question, index, setScore, score, amount, completedQuestions, setCompletedQuestions, setCurrQuestion, setClicked}) => {

    let scoreCopy;
    let completedCopy;
    useEffect(() => {scoreCopy = score; completedCopy = [...completedQuestions]}, [score])

    const checkAnswer = (answer) => (e) => {
        if(answer === 'correct' && scoreCopy !== amount){
            completedCopy.push(index);
            scoreCopy++;
            setScore(scoreCopy);
            setCompletedQuestions([...completedCopy]);
        }    
    }

    // Ritorno lista domande
    const backToAnswers = () => {
        setCurrQuestion('none');
        setClicked(false);
    }

    // Crezione array risposte con ordine casuale
    const allAnswers = [...question.incorrect_answers];
    allAnswers.push(question.correct_answer)

    const answerBoxes = allAnswers.map((answer, index) => (
        <div onClick={checkAnswer(answer === question.correct_answer ? 'correct' : 'wrong')} key={answer + index} 
        className={'single_answer w_40 h_40 d-flex align-items-center justify-content-center border border-3 border-light'}>{answer}</div>
    ))

    const [answersList, setAnswersList] = useState(answerBoxes);

    useEffect(
        () => {
            // Mixed array lodash
            const mixedArray = shuffle(answerBoxes)
            setAnswersList(mixedArray);
        },
        []
    );

  return (
    <div className={'w-100 h-100 d-flex flex-column justify-content-between align-items-center question_box_' + index}>
        <div className={'question_box_up w-100 h_30 d-flex justify-content-center align-items-center'}>
            <h2 className='text-center'>{question.question}</h2>
        </div>
        <div className={'question_box_down w-100 h_80 d-flex flex-wrap justify-content-between'}>
            {answersList}
        </div>
        <a onClick={backToAnswers} href='#' className='btn btn-light text-success px-3 py-2'>Back</a>
    </div>
  )
}

QuestionBox.propTypes = {
    question: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default QuestionBox
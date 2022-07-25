import React from 'react'
import PropTypes from 'prop-types';
import Question from '../../components/Question';
import QuestionBox from '../../components/QuestionBox';
import useAxios from '../../hooks/useAxios';
import { useState, useContext } from 'react';
import { ApiContext } from '../../App';
import './style.scss';

const Quiz = ({finalApi, setScore, score, amount}) => {

  const {questionsData, questionsIsLoading, questionsError} = useAxios(finalApi);
  const allData = useContext(ApiContext);
  const [apiData, displayStatus, setDisplayStatus] = allData;

  // Selezione domanda
  const [currQuestion, setCurrQuestion] = useState('none');
  const [clicked, setClicked] = useState(false);

  if(questionsIsLoading){
    return  <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
              Loading...
            </div>
  } else if(!clicked){
    return (
      <div className='quiz justify-content-between'>
        <h3 className='mb-5'>Questions (click to open)</h3>
        <div className='questions_list w-100 h_70 d-flex flex-column align-items-center'>
          {questionsData.map((question, index) => (
            <Question key={question.question} question={question} index={index} setCurrQuestion={setCurrQuestion} setClicked={setClicked} />
          ))}
        </div>
      </div>
    )
  } else if(clicked){
    return(
      <QuestionBox question={questionsData[currQuestion]} index={currQuestion} setScore={setScore} score={score} amount={amount} />  
    );
    
  }
}

Quiz.propTypes = {
  finalApi: PropTypes.string.isRequired,
  setScore: PropTypes.func.isRequired
}

export default Quiz
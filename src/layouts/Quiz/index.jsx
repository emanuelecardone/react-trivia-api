import React from 'react'
import PropTypes from 'prop-types';
import Question from '../../components/Question';
import useAxios from '../../hooks/useAxios';
import './style.scss';

const Quiz = ({finalApi}) => {

  const {questionsData, questionsIsLoading, questionsError} = useAxios(finalApi);
  

  if(questionsIsLoading){
    return  <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
              Loading...
            </div>
  } else{

    return (
      <div className='quiz'>
        <h3>Questions</h3>
         {questionsData.map((question) => (
           <Question key={question.question} question={question} />
        ))}
      </div>
    )
  }
}

Quiz.propTypes = {
  finalApi: PropTypes.string.isRequired
}

export default Quiz
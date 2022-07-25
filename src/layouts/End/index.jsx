import React from 'react'

const End = ({answerResult}) => {
  return (
    <div className='end w-100 h-100 d-flex justify-content-center align-items-center text-uppercase'>
        <h2 style={{color: answerResult === 'correct' ? 'lime' : 'red'}}>{answerResult}</h2>
    </div>
  )
}

export default End
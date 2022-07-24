import React from 'react'
import Button from '../../components/Button';

const Start = () => {
  return (
    <div className='start'>
        <h2>Hello</h2>
        <p className='text-center'>
          This is a trivia quiz simulator <br/>
          You can select category, difficulty, amount of questions <br/>
          Then click start to begin
        </p>
        <Button message='Ok' sections={['start', 'selection']} />
    </div>
  )
}

export default Start
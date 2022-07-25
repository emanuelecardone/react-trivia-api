import React from 'react'
import Start from '../Start';
import Quiz from '../Quiz';
import Selection from '../Selection';
import { useContext, useState, useEffect } from 'react';
import { ApiContext } from '../../App';

const Container = () => {

    const allData = useContext(ApiContext);
    const [apiData ,displayStatus, setDisplayStatus] = allData;
    const {base} = apiData;

    const [finalApi, setFinalApi] = useState(base);
    const [amount, setAmount] = useState(1);
    const [score, setScore] = useState(0);
    const [wrongScore, setWrongScore] = useState(0);
    
    useEffect(() => {
        console.log(score, amount)
    }, [score, amount])

    if(displayStatus.start){
        return <Start />
    } else if(displayStatus.selection){
        return <Selection finalApi={finalApi} setFinalApi={setFinalApi} setAmount={setAmount} />
    } else if(displayStatus.quiz){
        return <Quiz finalApi={finalApi} setScore={setScore} wrongScore={wrongScore} setWrongScore={setWrongScore} score={score} amount={amount} />
    }
}

export default Container
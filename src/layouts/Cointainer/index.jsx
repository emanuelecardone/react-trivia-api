import React from 'react'
import Start from '../Start';
import Quiz from '../../components/Quiz';
import Selection from '../Selection';
import { useContext, useState, useEffect } from 'react';
import { ApiContext } from '../../App';

const Container = () => {

    const allData = useContext(ApiContext);
    const [apiData ,displayStatus, setDisplayStatus] = allData;
    const {base} = apiData;

    const [finalApi, setFinalApi] = useState(base);

    useEffect(() => console.log(finalApi), [finalApi])

    if(displayStatus.start){
        return <Start />
    } else if(displayStatus.selection){
        return <Selection finalApi={finalApi} setFinalApi={setFinalApi} />
    } else if(displayStatus.quiz){
        return <Quiz finalApi={finalApi} />
    }
}

export default Container
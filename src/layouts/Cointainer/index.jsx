import React from 'react'
import Start from '../Start';
import Selection from '../Selection';
import { useContext } from 'react';
import { ApiContext } from '../../App';

const Container = () => {

    const allData = useContext(ApiContext);
    const [apiData ,displayStatus, setDisplayStatus] = allData;

    if(displayStatus.start){
        return <Start />
    } else if(displayStatus.selection){
        return <Selection />
    }
}

export default Container
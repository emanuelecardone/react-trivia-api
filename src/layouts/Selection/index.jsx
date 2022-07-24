import React from 'react'
import Select from '../../components/Select'
import { useContext, useState, useEffect } from 'react'
import { ApiContext } from '../../App'
import Button from '../../components/Button'


const Selection = ({finalApi, setFinalApi}) => {

    const allData = useContext(ApiContext);
    const [apiData, displayStatus, setDisplayStatus] = allData;
    const {base} = apiData;
    
    // Cambiato dalla select
    const [currChoice, setCurrChoice] = useState(
        {
            category: 'none',
            difficulty: 'none',
            amount: 1
        }
    );
    
    
    useEffect(
        () => {
            // Debug per i none
            let categoryString = `&category=${currChoice.category}`.toLowerCase();
            let difficultyString = `&difficulty=${currChoice.difficulty}`.toLowerCase();
            if(currChoice.category === 'none'){
                categoryString = '';
            }
            if(currChoice.difficulty === 'none'){
                difficultyString = '';
            }
            // Cambio dell'api di Container
            setFinalApi(`${base}?amount=${currChoice.amount}${categoryString}${difficultyString}&type=multiple`);
        },
        [currChoice])

    return(
        <div className='selection'>
            <h2>Selection</h2>
            <div className='selects_list w-100 h_30 d-flex justify-content-around align-items-center'>
                <Select values={apiData.categories.list} type='category' currChoice={currChoice} setCurrChoice={setCurrChoice} />
                <Select values={apiData.difficulties} type='difficulty' currChoice={currChoice} setCurrChoice={setCurrChoice}/> 
                <Select values={apiData.amounts} type='amount' currChoice={currChoice} setCurrChoice={setCurrChoice}/>  
            </div>
            <h4>Current: <br/>
            {'Category: ' + currChoice.category + ' - Difficulty: ' + currChoice.difficulty + ' - Amount: ' + currChoice.amount}
            </h4>
            <Button message='Start' sections={['selection', 'quiz']} />
        </div>
    )
}

export default Selection
import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (api) => {

    // Hook che riceve un api già impostato in precedenza dove viene richiamato
    // Ritorna la risposta
    const [questionsData, setQuestionsData] = useState([]);
    const [questionsIsLoading, setQuestionsIsLoading] = useState(false);
    const [questionsError, setQuestionsError] = useState();
  
    useEffect(
        () => {
            setQuestionsIsLoading(true);
            const getData = async () =>{
                try{
                    const {data: {results}} = await axios.get(api);
                    setQuestionsData(results);
                    setQuestionsIsLoading(false);
                }catch(error){
                    setQuestionsError(error);
                }
            }
            getData();
        },
        [api]);
        return { questionsData, questionsIsLoading, questionsError }
}

export default useAxios
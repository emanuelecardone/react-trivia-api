import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetApi = (tokenApi, categoriesApi) => {

    // Hook che riceve un array di api e builda l'oggetto per fare le chiamate
    const [apiData, setApiData] = useState({});
    const [apiIsLoading, setApiIsLoading] = useState(false);
    const [apiError, setApiError] = useState();
  
    useEffect(
        () => {
            setApiIsLoading(true);
            const getData = async () =>{
                try{
                    const token = await axios.get(tokenApi);
                    const categories = await axios.get(categoriesApi);
                    const tokenValue = token.data.token;
                    const categoriesValue = categories.data.trivia_categories;
                    setApiData(
                        {
                            // Token valido per 6h
                            token: tokenValue,
                            base: 'https://opentdb.com/api.php',
                            categories: {
                              list: categoriesValue
                            },
                            difficulties: ['easy', 'medium', 'hard'],
                            type: 'multiple',
                            amounts: [10,20,30,40,50]
                        }
                    );
                    setApiIsLoading(false);
                }catch(error){
                    setApiError(error);
                }
            }
            getData();
        },
        []);
        return { apiData, apiIsLoading, apiError }
}

export default useGetApi
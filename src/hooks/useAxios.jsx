import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (api) => {

    // Hook che riceve un api già impostato in precedenza dove viene richiamato
    // Ritorna la risposta
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
  
    useEffect(
        () => {
            setIsLoading(true);
            const getData = async () =>{
                try{
                    const {data} = await axios.get(api);
                    setData(data);
                    setIsLoading(false);
                }catch(error){
                    setError(error);
                }
            }
            getData();
        },
        [api]);
        return { data, isLoading, error }
}

export default useAxios
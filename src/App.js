import './style/style.scss';
import useGetApi from './hooks/useGetApi';
import Container from './layouts/Cointainer';
import { useState, useEffect } from 'react';
import { createContext } from 'react';

const ApiContext = createContext();
const ApiProvider = ApiContext.Provider;

function App() {
  const retrieveToken = 'https://opentdb.com/api_token.php?command=request';
  const retrieveCategories = 'https://opentdb.com/api_category.php';
  const {apiData, apiIsLoading, apiError} = useGetApi(retrieveToken, retrieveCategories);

  
  // Oggetto return di Container
  const display = {
    start: true,
    selection: false,
    quiz: false
  }

  const [displayStatus, setDisplayStatus] = useState(display);

  if(apiIsLoading){
    return 'Loading...'
  }
  else{
    
    return (
      <ApiProvider value={[apiData, displayStatus, setDisplayStatus]}>
        <div className='container h_80'>
            <div className='row row-cols-1 h-100'>
                <div className='col h-100'>
                  <Container />
                </div>
            </div>
        </div>
      </ApiProvider>
    );  
  }
}


export default App;
export {ApiContext};

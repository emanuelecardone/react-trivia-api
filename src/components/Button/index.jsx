import React from 'react'
import { useContext } from 'react'
import {ApiContext} from '../../App';
import PropTypes from 'prop-types'

const Button = ({message, sections}) => {

    const allData = useContext(ApiContext);
    const [apiData ,displayStatus, setDisplayStatus] = allData;

    // Cambia sezione togliendo il true a quella attuale e dandolo a quella dopo
    // Sezioni passate da props come array di stringhe
    const switchSection = () => {
        const newDisplay = {...displayStatus}
        newDisplay[`${sections[0]}`] = false;
        newDisplay[`${sections[1]}`] = true;
        setDisplayStatus({...newDisplay});
    }

  return (
    <a onClick={switchSection} className='btn btn-light text-success text-uppercase w_10'>{message}</a>
  )
}

Button.propTypes = {
    message: PropTypes.string.isRequired,
    sections: PropTypes.array.isRequired
}

export default Button
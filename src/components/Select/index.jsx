import React from 'react'
import PropTypes from 'prop-types'

const Select = ({values, type, currChoice, setCurrChoice}) => {
    
    // Array options
    const options = values.map((value,index) => (
        <option value={type === 'category' ? value.id : value} key={type + index}>
            {type === 'category' ? value.name : value}
        </option>
    ))

    // Funzione per aggiornare (generica)
    const changeCurrChoice = (e) => {
        let newChoice = {...currChoice};
        newChoice[`${type}`] = e.target.value;
        setCurrChoice({...newChoice});
    }

  return (
      <div className='select_wrapper d-flex flex-column'>
            <label htmlFor={type}>Choose the {type}</label>
            <select name={type} id={type} onChange={changeCurrChoice} className='text-capitalize'>
                <option value={type === 'amount' ? 1 : 'none'}>{type === 'amount' ? 1 : 'none'}</option>
                {options}
            </select>
      </div>
  )
}

Select.propTypes = {
    values: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    currChoice: PropTypes.object.isRequired,
    setCurrChoice: PropTypes.func.isRequired
}

export default Select
import React from 'react'
import PropTypes from 'prop-types'

const Select = ({values, type, currChoice, setCurrChoice}) => {
    
    const options = values.map((value,index) => (
        <option className='text-capitalize' value={type === 'category' ? value.name : value} key={type + index}>
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
            <label htmlFor="type">Choose the {type}</label>
            <select name={type} id={type} onChange={changeCurrChoice}>
                <option value='none'>None</option>
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
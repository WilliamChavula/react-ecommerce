import React from 'react';

import './form-input.styles.scss'

const FormInputComponent = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className='form-input' onChange={ handleChange } { ...otherProps } />
        {
            label ? <label htmlFor={otherProps.name} className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
                {label}
            </label> : null
        }
    </div>
);

export default FormInputComponent;
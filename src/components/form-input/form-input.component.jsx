import React from 'react';

import {FormGroup, FormInput, FormInputLabel} from "./form-input.styles";


const FormInputComponent = ({ handleChange, label, ...otherProps }) => (
    <FormGroup>
        <FormInput onChange={ handleChange } { ...otherProps } />
        {
            label ? <FormInputLabel htmlFor={otherProps.name} { ...otherProps } >
                {label}
            </FormInputLabel> : null
        }
    </FormGroup>
);

export default FormInputComponent;
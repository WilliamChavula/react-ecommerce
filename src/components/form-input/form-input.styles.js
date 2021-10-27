import styled, { css } from "styled-components";

const colorsObject = {
    mainColor: 'black',
    subColor: 'grey'
}

const mixin = css`
    top: -14px;
    font-size: 12px;
    color: ${colorsObject.mainColor};
`;

export const FormGroup = styled.div`
    position: relative;
    margin: 45px 0;
    
    input[type='password'] {
        letter-spacing: 0.3em;
    }
`;

export const FormInputLabel = styled.label`
    color: ${colorsObject.subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    
    ${props => props.value.length ? mixin : ''}
`;

export const FormInput = styled.input`
    background: white none;
    color: ${colorsObject.subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colorsObject.subColor};
    margin: 25px 0;
    
    &:focus {
        outline: none;
    }
    
    &:focus ~ ${FormInputLabel} {
        ${mixin}
    }
    
    
`;

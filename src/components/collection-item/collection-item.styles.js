import styled from "styled-components";
import CustomButtonComponent from '../custom-buttom/custom-button.component'


export const Image = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})` };
`;

export const CollectionItemName = styled.span`
    width: 90%;
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
        width: 85%;
    }
`;

export const CollectionItemPrice = styled.span`
    width: 10%; 
    
    @media (max-width: 768px) {
        width: 15%;
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const CollectionButton = styled(CustomButtonComponent)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    
    @media (max-width: 768px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`;

export const CollectionItemContainer =  styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    padding-bottom: 16px;
    
    &:hover {
        ${CollectionButton} {
          display: flex;
          opacity: 0.85;
        }
        
        ${Image} {
          opacity: 0.8;
        }
    }
    
    @media (max-width: 768px) {
        width: 40vw;
        
        &:hover {
                ${CollectionButton} {
                  opacity: unset;
                }
                
                ${Image} {
                  opacity: unset;
                }
        }
    }
`;
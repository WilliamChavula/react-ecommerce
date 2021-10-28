import styled from "styled-components";


export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    
    @media (max-width: 768px) {
        width: 95%;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderItem = styled.div`
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
`;

export const CheckoutItem = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
    
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const CardText = styled.div`
    text-align: center;
    margin: 40px 0 10px;
    color: #191970;
    font-size: 18px;
`;
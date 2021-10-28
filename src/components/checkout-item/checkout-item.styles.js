import styled, { css } from "styled-components";

const metaInfo = css`
    width: 23%;
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const CheckoutImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const CartItemName = styled.span`
    ${metaInfo}
`;

export const CartItemPrice = styled.span`
    ${metaInfo}
`;

export const CartItemQuantity = styled.span`
    ${metaInfo}
    display: flex;
    
    & span {
      margin: 0 10px;
      user-select: none;
      
    }
    
    & div {
        cursor: pointer;
        user-select: none;
        
        @media (max-width: 768px) {
            transform: rotate(-90deg);
            font-size: 14px;
          }
    }
`;

export const RemoveItemButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;

import styled from "styled-components";

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
`;
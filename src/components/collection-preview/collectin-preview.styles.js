import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    justify-content: center;
    
    @media (max-width: 768px) {
        align-items: center;
        margin-bottom: 22px;
    }
`;

export const CollectionTitle = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    user-select: none;
    
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const CollectionPreview = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
`;
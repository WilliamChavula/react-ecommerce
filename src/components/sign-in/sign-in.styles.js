import styled from "styled-components";

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
        width: unset;
        margin-bottom: 40px;
    }
`;

export const Title = styled.h2`
    margin: 10px 0;
`;

export const SignInButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
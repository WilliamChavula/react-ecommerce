import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    
    @media (max-width: 768px) {
        width: unset;
    }
`;

export const Title = styled.h2`
    margin: 10px 0;
`;
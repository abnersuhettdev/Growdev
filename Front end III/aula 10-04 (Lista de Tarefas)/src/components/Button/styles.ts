import styled from "styled-components";

export const Button = styled.button`
    width: 50%;
    padding: 24px;
    font-weight: 700;
    background: ${props=> props.theme.colors.secondary};
    color: #fff;
    border-radius: ${props => props.theme.borderRadius.sm};
    margin: 12px 0px 84px;
    border: none;
    cursor: pointer;
    font-size: ${props => props.theme.fontSizes.md};
    transition: filter 0.2s ease 0s;

    &:hover{
        filter: brightness(0.9);
    }

    @media (max-width: 800px){
        width: 80%;
    }
`
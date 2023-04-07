import styled from "styled-components";

interface ITitle{
    isPrimary?: boolean;
    is100?: boolean;
    isAligned?: boolean;
}


export const Title = styled.h1<ITitle>`
    color: ${props => props.isPrimary? 'red': 'purple'};
    width: ${props => props.is100 ? '100%' : '50%'};
    text-align: ${props => props.isAligned? 'center': 'start'};
    
`

export const Wrapper = styled.div`

`

export const TextInput = styled.input`

`
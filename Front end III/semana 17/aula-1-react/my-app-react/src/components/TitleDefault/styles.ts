import styled from 'styled-components';

//Configurações Via props
// interface HeadingProps{
//     size: string;
//     color?: string
// }

// const Heading = styled.h1<HeadingProps>`
//         color: ${props => props.color ?? 'yellow'};
//         font-size: ${(props) => props.size}px;
// `;

const Heading = styled.h1<HeadingProps>`
        color: ${props => props.color ?? 'yellow'};
        font-size: ${(props) => props.size}px;
`;


export default Heading
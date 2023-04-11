import styled from 'styled-components';

// CONFIGURAÇÕES VIA PROPS
// interface HeadingProps {
// 	size: string;
// 	color?: string;
// }

// const Heading = styled.h1<HeadingProps>`
// 	color: ${(props) => props.color ?? 'yellow'};
// 	font-size: ${(props) => props.size};
// `;

// CONFIGURAÇÕES VIA TEMA DA APLICAÇÃO
const Heading = styled.h1`
	margin: 84px 0 24px;
	color: ${(props) => props.theme.colors.primary};
	font-size: ${(props) => props.theme.fontSizes.lg};
`;

export default Heading;

import styled from 'styled-components';

// interface ContainerProps {
// 	disabled?: boolean;
// }

// dai é só adicionar esse tipo ao lado do CSSProperties
// & ContainerProps
const Container = styled.main<React.CSSProperties>`
	display: ${(props) => props.display};
	flex-direction: ${(props) => props.flexDirection};
	align-items: ${(props) => props.alignItems};
	justify-content: ${(props) => props.justifyContent};
`;

export default Container;

/* background-color: ${(props) => (props.disabled ? 'red' : 'green')}; */

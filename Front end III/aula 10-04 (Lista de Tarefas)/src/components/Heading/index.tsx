import React from 'react';
import Heading from './styles';

interface TitleDefaultProps {
	title: string;
}

const TitleDefault: React.FC<TitleDefaultProps> = (props) => {
	return <Heading color="#FFF">{props.title}</Heading>;
};

export default TitleDefault;

// Array<string>
// string[]

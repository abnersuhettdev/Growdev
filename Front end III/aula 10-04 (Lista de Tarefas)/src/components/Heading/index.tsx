import React, { memo } from "react";
import Heading from "./styles";

interface TitleDefaultProps {
	title: string;
}

const TitleDefault: React.FC<TitleDefaultProps> = (props) => {
	return <Heading color="#FFF">{props.title}</Heading>;
};

const Title = memo(TitleDefault);

export default Title;

// Array<string>
// string[]

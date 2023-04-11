import React from 'react';
import CustomInput from './styles';

interface InputProps {
	name: string;
	placeholder: string;
	type: string;
	label?: string;
	showLabel?: boolean;
	id: string;
}

const Input: React.FC<InputProps> = ({
	label,
	name,
	placeholder,
	type,
	id,
	showLabel,
}) => {
	return (
		<>
			{showLabel && <label htmlFor={id}>{label}</label>}
			<CustomInput
				type={type}
				placeholder={placeholder}
				id={id}
				name={name}
			/>
		</>
	);
};

export default Input;

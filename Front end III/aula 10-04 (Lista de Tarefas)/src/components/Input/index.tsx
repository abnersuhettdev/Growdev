import { forwardRef } from "react";
import CustomInput from "./styles";

interface InputProps {
	name: string;
	placeholder: string;
	type: string;
	label?: string;
	showLabel?: boolean;
	id: string;
}

const InputRef = forwardRef<HTMLInputElement>(({}, ref) => {
	return (
		<CustomInput
			ref={ref}
			type={"text"}
			placeholder={"Escreva uma tarefa"}
			name={"task"}
		/>
	);
});

// const Input: React.FC<InputProps> = ({
// 	label,
// 	name,
// 	placeholder,
// 	type,
// 	id,
// 	showLabel,
// }) => {
// 	return (
// 		<>
// 			{/* { {showLabel &&}  */}
// 			<label htmlFor={id}>{valor}</label>
// 			{/* } */}
// 			<CustomInput
// 				type={type}
// 				placeholder={placeholder}
// 				id={id}
// 				name={name}
// 				value={valor}
// 				onChange={(ev) => handleChange(ev.target.value)}
// 			/>
// 		</>
// 	);
// };

export default InputRef;

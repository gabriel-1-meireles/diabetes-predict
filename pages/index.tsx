// import "../styles/globals.css";

import { useState } from "react";

export default function Home() {
	// let currentInputIndex = 0;
	const [currentInputIndex, setCurrentInputIndex] = useState(0);

	const inputsList = [
		{
			label: "Whats your age?",
			name: "age",
			type: "text",
			placeholder: "Enter your age",
		},
		{
			label: "Whats your height?",
			name: "height",
			type: "text",
			placeholder: "Enter your height",
		},
		{
			label: "Whats your weight?",
			name: "sex",
			options: [
				{
					value: "",
					placeholder: "Select your sex",
					options: ["disabled", "selected", "hidden"],
				},
				{ value: "0", placeholder: "Female" },
				{ value: "1", placeholder: "Male" },
			],
		},
	];

	function renderInputByIndex(index: number) {
		const item = inputsList[index];
		if (!item) {
			return <p>Input not found</p>;
		}

		if (item.options) {
			return (
				<div className="flex flex-col items-center gap-20 w-full">
					<label>{item.label} </label>
					<select
						name={item.name}
						className="transition-all border-b-2 border-tertiary-500 w-full bg-transparent text-center text-2xl pb-1 outline-none appearance-none ">
						{item.options.map((option, index) => (
							<option
								key={index}
								value={option.value}
								disabled={option.options?.includes("disabled")}
								selected={option.options?.includes("selected")}
								hidden={option.options?.includes("hidden")}>
								{option.placeholder}
							</option>
						))}
					</select>
				</div>
			);
		} else {
			return (
				<div className="flex flex-col items-center gap-20 w-full">
					<label>{item.label}</label>
					<input
						type={item.type}
						name={item.name}
						placeholder={item.placeholder}
						className="transition-all border-b-2 border-tertiary-500 w-full bg-transparent text-center text-2xl pb-1 outline-none"
					/>
				</div>
			);
		}
	}

	function prevInput() {
		if (currentInputIndex - 1 < 0) {
			return;
		}
		setCurrentInputIndex(currentInputIndex - 1);
	}

	function nextInput() {
		if (currentInputIndex + 1 > inputsList.length - 1) {
			return;
		}
		setCurrentInputIndex(currentInputIndex + 1);
	}

	return (
		<div className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-secondary-500 to-primary-500 ">
			<div className="w-1/2 h-3/5 bg-white bg-opacity-75 rounded-lg relative flex flex-col items-center shadow-custom">
				<h1 className="font-source-sans-pro text-4xl uppercase font-semibold text-center mt-14 mb-10">
					Diabetes Predict
				</h1>
				<div className="flex flex-col items-center  w-1/2">
					{renderInputByIndex(currentInputIndex)}
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					onClick={prevInput}
					className="absolute w-12 top-1/2 left-8 fill-tertiary-500">
					<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					onClick={nextInput}
					className="absolute w-12 top-1/2 right-8 fill-tertiary-500">
					<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
				</svg>

				<div className="absolute bottom-8">
					{currentInputIndex + 1} of {inputsList.length}
				</div>
			</div>
		</div>
	);
}

// position: absolute;
// 	width: 3rem;
// 	top: 50%;
// 	left: 5%;
// 	fill: #8cdeb6;
// 	transition: transform 0.3s ease-in-out;

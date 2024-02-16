import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
	const { register, handleSubmit, watch } = useForm();

	const [currentInputIndex, setCurrentInputIndex] = useState(0);
	const [animationClass, setAnimationClass] = useState("");

	const inputsList = [
		{
			label: "Whats your age?",
			name: "Age",
			type: "number",
			placeholder: "Enter your age",
			value: "",
		},
		{
			label: "Whats your height?",
			name: "Height",
			type: "number",
			placeholder: "Enter your height",
			value: "",
		},
		{
			label: "Whats your weight?",
			name: "Weight",
			type: "number",
			placeholder: "Enter your weight",
			value: "",
		},

		{
			label: "Whats your sex?",
			name: "Sex",
			options: [
				{
					value: "",
					text: "Select your sex",
					options: ["disabled", "hidden"],
				},
				{ value: "0", text: "Female" },
				{ value: "1", text: "Male" },
			],
		},

		{
			label: "What is your education level?",
			name: "Education",
			options: [
				{
					value: "",
					text: "Select your education level",
					options: ["disabled", "hidden"],
				},
				{ value: "1", text: "Never attended school" },
				{ value: "2", text: "Elementary" },
				{ value: "3", text: "Some high school" },
				{ value: "4", text: "High school graduate" },
				{ value: "5", text: "Some college" },
				{ value: "6", text: "College graduate" },
			],
		},
		{
			label: "What is your income?",
			name: "Income",
			options: [
				{
					value: "",
					text: "Select your income",
					options: ["disabled", "hidden"],
				},
				{ value: "1", text: "Less than $10,000" },
				{ value: "2", text: "$10,000 to $14,999" },
				{ value: "3", text: "$15,000 to $19,999" },
				{ value: "4", text: "$20,000 to $24,999" },
				{ value: "5", text: "$25,000 to $34,999" },
				{ value: "6", text: "$35,000 to $49,999" },
				{ value: "7", text: "$50,000 to $74,999" },
				{ value: "8", text: "$75,000 or more" },
			],
		},
		{
			label: "Have you been diagnosed with high blood pressure?",
			name: "HighBP",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Have you been diagnosed with high cholesterol?",
			name: "HighChol",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Have you had a cholesterol check in the last 5 years?",
			name: "CholCheck",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Have you smoked at least 100 cigarettes in your entire life?",
			name: "Smoker",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Have you had any history of stroke?",
			name: "Stroke",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Do you have any heart disease or had a heart attack?",
			name: "HeartDiseaseorAttack",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Have you done any exercise in the last 30 days?",
			name: "PhysActivity",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Do you eat fruits at least once a day?",
			name: "Fruits",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Do you eat vegetables at least once a day?",
			name: "Vegetables",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Do you drink alcohol regularly? >= 14 drinks per week for men >= 7 drinks per week for women",
			name: "HvyAlcoholConsump",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Do you have any form of health insurance or healthcare coverage?",
			name: "AnyHealthCare",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "Have you ever been unable to see a doctor because of the cost in the past year?",
			name: "NoDocbcCost",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
		{
			label: "How would you describe your overall health?",
			name: "GenHlth",
			options: [
				{
					value: "",
					text: "Select your overall health",
					options: ["disabled", "hidden"],
				},
				{ value: "1", text: "Excellent" },
				{ value: "2", text: "Very good" },
				{ value: "3", text: "Good" },
				{ value: "4", text: "Fair" },
				{ value: "5", text: "Poor" },
			],
		},
		{
			label: "How many days in the last 30 days have you experienced poor mental health?",
			name: "MentHlth",
			placeholder: "Enter the number of days",
			type: "number",
		},
		{
			label: "How many days in the last 30 days have you experienced physical illness or injury?",
			name: "PhysHlth",
			placeholder: "Enter the number of days",
			type: "number",
		},
		{
			label: "Do you have serious difficulty walking or climbing stairs?",
			name: "DiffWalk",
			options: [
				{ value: "0", text: "No" },
				{ value: "1", text: "Yes" },
			],
		},
	];

	const changeQuestion = (newIndex: number, direction: string) => {
		const isNext = direction === "next";
		setAnimationClass(isNext ? "fade-out-left" : "fade-out-right");
		setTimeout(() => {
			setCurrentInputIndex(newIndex);
			setAnimationClass(isNext ? "fade-in-right" : "fade-in-left");
		}, 350);
	};

	function renderInputByIndex(index: number) {
		const item = inputsList[index];
		if (!item) {
			return <p>Input not found</p>;
		}

		let input;
		if (item.options) {
			input = (
				<select
					{...register(item.name)}
					key={item.name}
					name={item.name}
					defaultValue={item.options[0].value}
					className="transition-all border-b-2 border-tertiary-500 w-full bg-transparent text-center text-2xl pb-1 outline-none appearance-none ">
					{item.options.map((option, index) => (
						<option
							key={index}
							value={option.value}
							disabled={option.options?.includes("disabled")}
							hidden={option.options?.includes("hidden")}>
							{option.text}
						</option>
					))}
				</select>
			);
		} else {
			input = (
				<input
					{...register(item.name)}
					key={item.name}
					type={item.type}
					name={item.name}
					placeholder={item.placeholder}
					className="transition-all border-b-2 border-tertiary-500 w-full bg-transparent text-center text-2xl pb-1 outline-none"
				/>
			);
		}
		return (
			<div className="flex flex-col items-center gap-20 w-full">
				<label className="font-source-sans-pro font-normal text-md text-center">
					{item.label}{" "}
				</label>
				{input}
			</div>
		);
	}

	function prevInput() {
		if (currentInputIndex - 1 < 0) {
			return;
		}
		changeQuestion(currentInputIndex - 1, "prev");
	}

	function nextInput() {
		if (currentInputIndex + 1 > inputsList.length - 1) {
			return;
		}
		changeQuestion(currentInputIndex + 1, "next");
	}

	return (
		<div className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-secondary-500 to-primary-500 ">
			<div className="w-[700px] h-[500px] bg-white bg-opacity-75 rounded-lg relative flex flex-col items-center shadow-custom">
				<h1 className="font-source-sans-pro text-4xl uppercase font-semibold text-center mt-14 mb-10">
					Diabetes Predict
				</h1>
				<div className={`flex flex-col items-center w-1/2 ${animationClass}`}>
					{renderInputByIndex(currentInputIndex)}
				</div>

				{currentInputIndex > 0 && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						onClick={prevInput}
						className="absolute w-12 top-1/2 left-8 fill-tertiary-500 cursor-pointer select-none">
						<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
					</svg>
				)}

				{currentInputIndex < inputsList.length - 1 && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						onClick={nextInput}
						className="absolute w-12 top-1/2 right-8 fill-tertiary-500 cursor-pointer select-none">
						<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
					</svg>
				)}

				<div className="absolute bottom-8">
					{currentInputIndex + 1} of {inputsList.length}
				</div>
			</div>
		</div>
	);
}

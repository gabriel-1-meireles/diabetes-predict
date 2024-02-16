import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				custom: "0 0 10px rgba(0, 0, 0, 0.3)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				"source-sans-pro": ["Source Sans Pro", "sans-serif"],
			},
			colors: {
				primary: {
					100: "#ddf6fb",
					200: "#bbeef7",
					300: "#99e5f2",
					400: "#77ddee",
					500: "#55d4ea",
					600: "#44aabb",
					700: "#337f8c",
					800: "#22555e",
					900: "#112a2f",
				},
				secondary: {
					100: "#fdfcdc",
					200: "#fbf9b9",
					300: "#faf796",
					400: "#f8f473",
					500: "#f6f150",
					600: "#c5c140",
					700: "#949130",
					800: "#626020",
					900: "#313010",
				},
				tertiary: {
					100: "#e8f8f0",
					200: "#d1f2e2",
					300: "#baebd3",
					400: "#a3e5c5",
					500: "#8cdeb6",
					600: "#70b292",
					700: "#54856d",
					800: "#385949",
					900: "#1c2c24",
				},
			},
		},
	},
	plugins: [],
};
export default config;

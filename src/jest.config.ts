import type { Config } from 'jest';

const config: Config = {
	"preset": "ts-jest",
	"transform": {
		"^.+\\.tsx?$": "ts-jest"
	},
	"testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|jsx?)$",
	"moduleFileExtensions": [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node"
	]
}

export default config;
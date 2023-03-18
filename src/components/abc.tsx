import abcjs from "abcjs";
import { useEffect } from "react";

export interface AbcProps {
	abcNotation: string;
}

export function Abc({ abcNotation }: AbcProps) {
	useEffect(() => {
		// eslint-disable-next-line
		console.log(abcNotation);
		abcjs.renderAbc("paper", abcNotation);
	});

	return <div id="paper"></div>;
}

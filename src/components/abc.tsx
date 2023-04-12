import abcjs from "abcjs";
import { useEffect } from "react";

export interface AbcProps {
	abcNotation: string;
}

export function Abc({ abcNotation }: AbcProps) {
	useEffect(() => {
		abcjs.renderAbc("paper", abcNotation);
	});

	return <div id="paper"></div>;
}

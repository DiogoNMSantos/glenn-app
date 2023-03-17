import abcjs from "abcjs";
import { useEffect } from "react";

export function Abc() {
	useEffect(() => {
		abcjs.renderAbc("paper", "X:1\nK:D\nDD AA|BBA2|\n");
	});

	return <div id="paper"></div>;
}

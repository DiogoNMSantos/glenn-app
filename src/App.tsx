import abcjs from "abcjs";
import { useEffect } from "react";

export function App() {
	useEffect(() => {
		abcjs.renderAbc("paper", "X:1\nK:D\nDD AA|BBA2|\n");
	});

	return (
		<div className="App">
			<h1>Gleen App</h1>
			<div id="paper"></div>
		</div>
	);
}

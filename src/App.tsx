import { Abc } from "./components/abc";

export function App() {
	return (
		<div className="App">
			<h1>Gleen App</h1>
			<Abc abcNotation={"X:1\nK:D\nDD AA|BBA2|\n"} />
		</div>
	);
}

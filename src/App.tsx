import { useEffect, useState } from "react";

import { Abc } from "./components/abc";
import { Piano } from "./components/piano";
import { Tune } from "./domain/tune";

export function App() {
	const [song, setSong] = useState("");
	useEffect(() => {
		setSong(Tune.defaultTheme().toString());
	}, [song]);

	return (
		<div className="App">
			<h1>Gleen App</h1>
			<Abc abcNotation={song} />
			<Piano
				keyPressedCallBack={(pitch: number, octave: number) => {
					// eslint-disable-next-line no-console
					console.log(pitch);
				}}
			></Piano>
		</div>
	);
}

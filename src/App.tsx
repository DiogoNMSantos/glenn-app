import { useMemo, useState } from "react";

import { Abc } from "./components/abc";
import { Piano } from "./components/piano";
import { MusicalNote, Tune } from "./domain/tune";

export function App() {
	const tune = useMemo<Tune>(() => new Tune(), []);
	const [notation, setNotation] = useState("");

	return (
		<div className="App">
			<h1>Gleen App</h1>
			<Abc abcNotation={notation} />
			<Piano
				keyPressedCallBack={(pitch: number, octave: number) => {
					tune.addNote(new MusicalNote().from(pitch, octave));
					setNotation(tune.toString());
				}}
			></Piano>
		</div>
	);
}

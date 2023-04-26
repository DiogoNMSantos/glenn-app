import { useMemo, useState } from "react";

import { Abc } from "./components/abc";
import { PitchDurationSelector } from "./components/durations";
import { Piano } from "./components/piano";
import { MusicalNote, Tune } from "./domain/tune";

export function App() {
	const tune = useMemo<Tune>(() => new Tune(), []);
	const [durationNumber, setDurationNumber] = useState(3);
	const [notation, setNotation] = useState("");

	return (
		<div className="App">
			<h1>Gleen App</h1>
			<Abc abcNotation={notation} />
			<Piano
				keyPressedCallBack={(pitch: number, octave: number) => {
					tune.addNote(new MusicalNote().from(pitch, octave, durationNumber));
					setNotation(tune.toString());
				}}
			></Piano>
			<PitchDurationSelector
				durationSelectedCallBack={(duration: number) => {
					setDurationNumber(duration);
				}}
			/>
		</div>
	);
}

import { abcTune, Duration, Key, Measure, Note, Octave, Pitch, SimpleTimeSignature } from "glenn";
import { useEffect, useState } from "react";

import { Abc } from "./components/abc";

export function App() {
	const [song, setSong] = useState("");
	useEffect(() => {
		const timeSignature = new SimpleTimeSignature(4, Duration.Quarter);
		const measure = new Measure(timeSignature)
			.add(new Note(Pitch.C, Duration.Quarter, Octave.C4))
			.add(new Note(Pitch.E, Duration.Quarter, Octave.C4))
			.add(new Note(Pitch.G, Duration.Eighth, Octave.C4))
			.add(new Note(Pitch.A, Duration.Eighth, Octave.C4))
			.add(new Note(Pitch.B, Duration.Eighth, Octave.C4))
			.add(new Note(Pitch.C, Duration.Eighth, Octave.C5));

		// eslint-disable-next-line new-cap
		const tune = new abcTune(Key.CMajor, timeSignature, Duration.Eighth)
			.addMeasure(measure)
			.addMeasure(measure, Duration.Sixteenth)
			.addMeasure(measure, Duration.Quarter);
		setSong(tune.toString());
	}, [song]);

	return (
		<div className="App">
			<h1>Gleen App</h1>
			<Abc abcNotation={song} />
		</div>
	);
}

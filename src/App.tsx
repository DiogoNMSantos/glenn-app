import { useMemo, useState } from "react";

import styles from "./App.module.scss";
import { Abc } from "./components/abc";
import { DurationValue, PitchDurationSelector, RestDurationSelector } from "./components/durations";
import { OctaveValue, Piano, PitchValue } from "./components/piano";
import { MusicalNote, Tune } from "./domain/tune";

export function App() {
	const tune = useMemo<Tune>(() => new Tune(), []);
	const [durationNumber, setDurationNumber] = useState(DurationValue.Quarter);
	const [notation, setNotation] = useState("");

	return (
		<div className="App">
			<div className="app"></div>
			<h1>Gleen App</h1>
			<Abc abcNotation={notation} />
			<section className={styles.container}>
				<div>
					<Piano
						keyPressedCallBack={(pitch: PitchValue, octave: OctaveValue) => {
							tune.addNote(new MusicalNote().from(pitch, octave, durationNumber));
							setNotation(tune.toString());
						}}
					></Piano>
				</div>
				<div>
					<PitchDurationSelector
						durationSelectedCallBack={(duration: DurationValue) => {
							setDurationNumber(duration);
						}}
					/>
				</div>
				<div>
					<RestDurationSelector
						restDurationSelectedCallBack={(duration: DurationValue) => {
							setDurationNumber(duration);
						}}
					/>
				</div>
			</section>
		</div>
	);
}

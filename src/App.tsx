import { Duration, SimpleTimeSignature } from "glenn";
import { useMemo, useState } from "react";

import styles from "./App.module.scss";
import { Abc } from "./components/abc";
import { CompoundTimeSignature } from "./components/compoundTimeSigntature";
import { DurationValue, PitchDurationSelector } from "./components/durations";
import { Modal } from "./components/modal";
import { OctaveValue, Piano, PitchValue } from "./components/piano";
import { RestDurationSelector } from "./components/rests";
import { TimeSignature, TimeSignatureValue } from "./components/simpleTimeSignature";
import { MusicalNote, Tune } from "./domain/tune";

export function App() {
	const tune = useMemo<Tune>(() => new Tune(new SimpleTimeSignature(4, Duration.Quarter)), []);
	const [durationNumber, setDurationNumber] = useState(DurationValue.Quarter);
	const [timeSignature, setTimeSignature] = useState(TimeSignatureValue.Quadruple);
	const [notation, setNotation] = useState("");
	const [status, setStatus] = useState("");

	return (
		<div className="App">
			<div className="app"></div>
			<h1>Gleen App</h1>
			<Modal
				modalCallBack={(timeSignature: TimeSignatureValue) => {
					setTimeSignature(timeSignature);
				}}
			/>
			<section className={styles.container}>
				<div style={{ justifySelf: "left" }}>
					<Abc abcNotation={notation} />
				</div>
				<div className="item">
					<Piano
						keyPressedCallBack={(pitch: PitchValue, octave: OctaveValue) => {
							try {
								tune.addNote(new MusicalNote().from(pitch, octave, durationNumber));
								setNotation(tune.toString());
							} catch (error) {
								setStatus("Double duration exceeds measure size");
							}
						}}
					></Piano>
				</div>
				<div className="item">
					<PitchDurationSelector
						durationSelectedCallBack={(duration: DurationValue) => {
							setDurationNumber(duration);
						}}
					/>
				</div>
				<div className="item">
					<RestDurationSelector
						restDurationSelectedCallBack={(duration: DurationValue) => {
							setDurationNumber(duration);
						}}
					/>
				</div>
				<div>
					<TimeSignature
						timeSignatureSelectedCallBack={(timeSignature: TimeSignatureValue) => {
							setTimeSignature(timeSignature);
						}}
					/>
				</div>
				<div>
					<CompoundTimeSignature
						timeSignatureSelectedCallBack={(timeSignature: TimeSignatureValue) => {
							setTimeSignature(timeSignature);
						}}
					/>
				</div>
				<div className="item">
					<h3 role="status">{status}</h3>
				</div>
			</section>
		</div>
	);
}

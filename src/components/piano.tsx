import "./piano.scss";

import { PianoKey } from "./pianoKey";

export enum PitchValue {
	C,
	CSharp,
	D,
	DSharp,
	E,
	F,
	FSharp,
	G,
	GSharp,
	A,
	ASharp,
	B,
}

export enum OctaveValue {
	C0,
	C1,
	C2,
	C3,
	C4,
	C5,
	C6,
	C7,
	C8,
}

export interface PianoProps {
	keyPressedCallBack: (pitch: PitchValue, octave: OctaveValue) => void;
}

export function Piano({ keyPressedCallBack }: PianoProps) {
	return (
		<>
			<PianoKey
				keyStyle="key whiteKey altKey"
				pitch={PitchValue.A}
				octave={OctaveValue.C0}
				keyPressedCallBack={keyPressedCallBack}
				pitchName={"A0"}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey"
				pitch={PitchValue.ASharp}
				octave={OctaveValue.C0}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey"
				pitch={PitchValue.B}
				octave={OctaveValue.C0}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey"
				pitch={PitchValue.C}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
				pitchName={"C1"}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey"
				pitch={PitchValue.CSharp}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey"
				pitch={PitchValue.D}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey"
				pitch={PitchValue.DSharp}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey"
				pitch={PitchValue.E}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey"
				pitch={PitchValue.F}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.FSharp}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.G}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.GSharp}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.A}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.ASharp}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.B}
				octave={OctaveValue.C1}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey"
				pitch={PitchValue.C}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
				pitchName={"C2"}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.CSharp}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.D}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.DSharp}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.E}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey "
				pitch={PitchValue.F}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.FSharp}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.G}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.GSharp}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.A}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.ASharp}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.B}
				octave={OctaveValue.C2}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey"
				pitch={PitchValue.C}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
				pitchName={"C3"}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.CSharp}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.D}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.DSharp}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.E}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey "
				pitch={PitchValue.F}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.FSharp}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.G}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.GSharp}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.A}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.ASharp}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.B}
				octave={OctaveValue.C3}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey"
				pitch={PitchValue.C}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
				pitchName={"C4"}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.CSharp}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.D}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.DSharp}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.E}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey "
				pitch={PitchValue.F}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.FSharp}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.G}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.GSharp}
				octave={4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.A}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.ASharp}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.B}
				octave={OctaveValue.C4}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey"
				pitch={PitchValue.C}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
				pitchName={"C5"}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.CSharp}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.D}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.DSharp}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.E}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey "
				pitch={PitchValue.F}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.FSharp}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.G}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.GSharp}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.A}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.ASharp}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.B}
				octave={OctaveValue.C5}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey"
				pitch={PitchValue.C}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
				pitchName={"C6"}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.CSharp}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.D}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.DSharp}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.E}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey "
				pitch={PitchValue.F}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.FSharp}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.G}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.GSharp}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.A}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.ASharp}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.B}
				octave={OctaveValue.C6}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey"
				pitch={PitchValue.C}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
				pitchName={"C7"}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.CSharp}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.D}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.DSharp}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.E}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey "
				pitch={PitchValue.F}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.FSharp}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.G}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.GSharp}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.A}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key blackKey "
				pitch={PitchValue.ASharp}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey altKey "
				pitch={PitchValue.B}
				octave={OctaveValue.C7}
				keyPressedCallBack={keyPressedCallBack}
			></PianoKey>
			<PianoKey
				keyStyle="key whiteKey"
				pitch={PitchValue.C}
				octave={OctaveValue.C8}
				keyPressedCallBack={keyPressedCallBack}
				pitchName={"C8"}
			></PianoKey>
		</>
	);
}

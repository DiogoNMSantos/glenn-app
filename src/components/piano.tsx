import "./piano.scss";

import { PianoKey } from "./pianoKey";

export interface PianoProps {
	keyPressedCallBack: (pitch: number, octave: number) => void;
}

export function Piano({ keyPressedCallBack }: PianoProps) {
	return (
		<div>
			<ul className="set" role="separator">
				<PianoKey
					keyStyle="key whiteKey altKey"
					pitch={9}
					octave={0}
					keyPressedCallBack={keyPressedCallBack}
					pitchName={"A0"}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey"
					pitch={10}
					octave={0}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey"
					pitch={11}
					octave={0}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
			</ul>
			<ul className="set" role="separator">
				<PianoKey
					keyStyle="key whiteKey"
					pitch={0}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
					pitchName={"C1"}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey"
					pitch={1}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey"
					pitch={2}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey"
					pitch={3}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey"
					pitch={4}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey"
					pitch={5}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={6}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={7}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={8}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={9}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={10}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={11}
					octave={1}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
			</ul>
			<ul className="set" role="separator">
				<PianoKey
					keyStyle="key whiteKey"
					pitch={0}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
					pitchName={"C2"}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={1}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={2}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={3}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={4}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey "
					pitch={5}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={6}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={7}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={8}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={9}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={10}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={11}
					octave={2}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
			</ul>
			<ul className="set" role="separator">
				<PianoKey
					keyStyle="key whiteKey"
					pitch={0}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
					pitchName={"C3"}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={1}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={2}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={3}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={4}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey "
					pitch={5}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={6}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={7}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={8}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={9}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={10}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={11}
					octave={3}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
			</ul>
			<ul className="set" role="separator">
				<PianoKey
					keyStyle="key whiteKey"
					pitch={0}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
					pitchName={"C4"}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={1}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={2}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={3}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={4}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey "
					pitch={5}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={6}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={7}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={8}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={9}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={10}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={11}
					octave={4}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
			</ul>
			<ul className="set" role="separator">
				<PianoKey
					keyStyle="key whiteKey"
					pitch={0}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
					pitchName={"C5"}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={1}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={2}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={3}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={4}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey "
					pitch={5}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={6}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={7}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={8}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={9}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={10}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={11}
					octave={5}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
			</ul>
			<ul className="set" role="separator">
				<PianoKey
					keyStyle="key whiteKey"
					pitch={0}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
					pitchName={"C6"}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={1}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={2}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={3}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={4}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey "
					pitch={5}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={6}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={7}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={8}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={9}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={10}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={11}
					octave={6}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
			</ul>
			<ul className="set" role="separator">
				<PianoKey
					keyStyle="key whiteKey"
					pitch={0}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
					pitchName={"C7"}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={1}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={2}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={3}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={4}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey "
					pitch={5}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={6}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={7}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={8}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={9}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key blackKey "
					pitch={10}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
				<PianoKey
					keyStyle="key whiteKey altKey "
					pitch={11}
					octave={7}
					keyPressedCallBack={keyPressedCallBack}
				></PianoKey>
			</ul>
			<ul className="set" role="separator">
				<PianoKey
					keyStyle="key whiteKey"
					pitch={0}
					octave={8}
					keyPressedCallBack={keyPressedCallBack}
					pitchName={"C8"}
				></PianoKey>
			</ul>
		</div>
	);
}

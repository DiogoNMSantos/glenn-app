export interface PianoKeyProps {
	pitch: number;
	octave: number;
	keyStyle: string;
	pitchName?: string;
	keyPressedCallBack: (pitch: number, octave: number) => void;
}

export function PianoKey({
	keyStyle,
	pitch,
	octave,
	pitchName,
	keyPressedCallBack,
}: PianoKeyProps) {
	const handleClick = () => {
		keyPressedCallBack(pitch, octave);
	};

	return (
		<li className={keyStyle} role="button" onClick={handleClick}>
			{pitchName ? pitchName : ""}
		</li>
	);
}

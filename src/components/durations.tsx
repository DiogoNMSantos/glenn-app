import "./durations.scss";

export enum DurationValue {
	Double,
	Whole,
	Half,
	Quarter,
	Eighth,
	Sixteenth,
	ThirtySecond,
	SixtyFourth,
}

export interface DurationProps {
	durationSelectedCallBack: (duration: DurationValue) => void;
}

export function PitchDurationSelector({ durationSelectedCallBack }: DurationProps) {
	return (
		<div className="container">
			<PitchDurationButton
				duration={DurationValue.Double}
				name={"𝅜"}
				durationSelectedCallBack={durationSelectedCallBack}
			/>
			<PitchDurationButton
				duration={DurationValue.Whole}
				name={"𝅝"}
				durationSelectedCallBack={durationSelectedCallBack}
			/>
			<PitchDurationButton
				duration={DurationValue.Half}
				name={"𝅗𝅥"}
				durationSelectedCallBack={durationSelectedCallBack}
			/>
			<PitchDurationButton
				duration={DurationValue.Quarter}
				name={"𝅘𝅥"}
				durationSelectedCallBack={durationSelectedCallBack}
			/>
			<PitchDurationButton
				duration={DurationValue.Eighth}
				name={"𝅘𝅥𝅮"}
				durationSelectedCallBack={durationSelectedCallBack}
			/>
			<PitchDurationButton
				duration={DurationValue.Sixteenth}
				name={"𝅘𝅥𝅯"}
				durationSelectedCallBack={durationSelectedCallBack}
			/>
			<PitchDurationButton
				duration={DurationValue.ThirtySecond}
				name={"𝅘𝅥𝅰"}
				durationSelectedCallBack={durationSelectedCallBack}
			/>
			<PitchDurationButton
				duration={DurationValue.SixtyFourth}
				name={"𝅘𝅥𝅱"}
				durationSelectedCallBack={durationSelectedCallBack}
			/>
		</div>
	);
}

export interface PitchDurationButtonProps {
	duration: DurationValue;
	name: string;
	durationSelectedCallBack: (duration: DurationValue) => void;
}

export function PitchDurationButton({
	duration,
	name,
	durationSelectedCallBack,
}: PitchDurationButtonProps) {
	const handleClick = () => {
		durationSelectedCallBack(duration);
	};

	return (
		<button className="duration" onClick={handleClick}>
			{name}
		</button>
	);
}

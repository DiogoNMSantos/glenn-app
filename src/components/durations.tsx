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

export interface RestDurationProps {
	restDurationSelectedCallBack: (duration: DurationValue) => void;
}

export function RestDurationSelector({ restDurationSelectedCallBack }: RestDurationProps) {
	return (
		<div className="container">
			<RestDurationButton
				duration={DurationValue.Double}
				name={"𝄺"}
				restDurationSelectedCallBack={restDurationSelectedCallBack}
			/>

			<RestDurationButton
				duration={DurationValue.Whole}
				name={"𝄻"}
				restDurationSelectedCallBack={restDurationSelectedCallBack}
			/>

			<RestDurationButton
				duration={DurationValue.Half}
				name={"𝄼"}
				restDurationSelectedCallBack={restDurationSelectedCallBack}
			/>

			<RestDurationButton
				duration={DurationValue.Quarter}
				name={"𝄽"}
				restDurationSelectedCallBack={restDurationSelectedCallBack}
			/>

			<RestDurationButton
				duration={DurationValue.Eighth}
				name={"𝄾"}
				restDurationSelectedCallBack={restDurationSelectedCallBack}
			/>

			<RestDurationButton
				duration={DurationValue.Sixteenth}
				name={"𝄿"}
				restDurationSelectedCallBack={restDurationSelectedCallBack}
			/>

			<RestDurationButton
				duration={DurationValue.ThirtySecond}
				name={"𝅀"}
				restDurationSelectedCallBack={restDurationSelectedCallBack}
			/>

			<RestDurationButton
				duration={DurationValue.SixtyFourth}
				name={"𝅁"}
				restDurationSelectedCallBack={restDurationSelectedCallBack}
			/>
		</div>
	);
}

export interface RestDurationButtonProps {
	duration: DurationValue;
	name: string;
	restDurationSelectedCallBack: (duration: DurationValue) => void;
}

export function RestDurationButton({
	duration,
	name,
	restDurationSelectedCallBack,
}: RestDurationButtonProps) {
	const restHandleClick = () => {
		restDurationSelectedCallBack(duration);
	};

	return (
		<button className="duration" onClick={restHandleClick}>
			{name}
		</button>
	);
}

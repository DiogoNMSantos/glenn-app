import "./rests.scss";

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
		<button className="rest" onClick={restHandleClick}>
			{name}
		</button>
	);
}

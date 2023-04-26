export interface DurationProps {
	durationSelectedCallBack: (duration: number) => void;
}

export function PitchDurationSelector({ durationSelectedCallBack }: DurationProps) {
	return (
		<div>
			<button name="Dot" />
			<button name="Rest" />
			<PitchDurationButton duration={0} durationSelectedCallBack={durationSelectedCallBack} />
			<PitchDurationButton duration={1} durationSelectedCallBack={durationSelectedCallBack} />
			<PitchDurationButton duration={2} durationSelectedCallBack={durationSelectedCallBack} />
			<PitchDurationButton duration={3} durationSelectedCallBack={durationSelectedCallBack} />
			<PitchDurationButton duration={4} durationSelectedCallBack={durationSelectedCallBack} />
			<PitchDurationButton duration={5} durationSelectedCallBack={durationSelectedCallBack} />
			<PitchDurationButton duration={6} durationSelectedCallBack={durationSelectedCallBack} />
			<PitchDurationButton duration={7} durationSelectedCallBack={durationSelectedCallBack} />
		</div>
	);
}

export interface PitchDurationButtonProps {
	duration: number;
	durationSelectedCallBack: (duration: number) => void;
}

export function PitchDurationButton({
	duration,
	durationSelectedCallBack,
}: PitchDurationButtonProps) {
	const handleClick = () => {
		durationSelectedCallBack(duration);
	};

	return (
		<div>
			<button onClick={handleClick} /> Breve
		</div>
	);
}

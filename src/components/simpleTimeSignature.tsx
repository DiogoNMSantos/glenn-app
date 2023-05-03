export enum TimeSignatureValue {
	FourByFour,
	TwoByTwo,
	TwoByFour,
	ThreeByFour,
	ThreeByEight,
	SixByEight,
	NineByEight,
	TwelveByEight,
}

export interface TimeSignatureProps {
	timeSignatureSelectedCallBack: (timeSignature: TimeSignatureValue) => void;
}

export function TimeSignature({ timeSignatureSelectedCallBack }: TimeSignatureProps) {
	return (
		<div>
			<TimeSignatureButton
				timeSignature={TimeSignatureValue.FourByFour}
				name={"4/4"}
				timeSignatureSelectedCallBack={timeSignatureSelectedCallBack}
			/>
			<TimeSignatureButton
				timeSignature={TimeSignatureValue.TwoByTwo}
				name={"2/2"}
				timeSignatureSelectedCallBack={timeSignatureSelectedCallBack}
			/>
			<TimeSignatureButton
				timeSignature={TimeSignatureValue.TwoByFour}
				name={"2/4"}
				timeSignatureSelectedCallBack={timeSignatureSelectedCallBack}
			/>
			<TimeSignatureButton
				timeSignature={TimeSignatureValue.ThreeByFour}
				name={"3/4"}
				timeSignatureSelectedCallBack={timeSignatureSelectedCallBack}
			/>
			<TimeSignatureButton
				timeSignature={TimeSignatureValue.ThreeByEight}
				name={"3/8"}
				timeSignatureSelectedCallBack={timeSignatureSelectedCallBack}
			/>
		</div>
	);
}

export interface TimeSignatureButtonProps {
	timeSignature: TimeSignatureValue;
	name: string;
	timeSignatureSelectedCallBack: (timeSignature: TimeSignatureValue) => void;
}

export function TimeSignatureButton({
	timeSignature,
	name,
	timeSignatureSelectedCallBack,
}: TimeSignatureButtonProps) {
	const handleClick = () => {
		timeSignatureSelectedCallBack(timeSignature);
	};

	return (
		<button className="timeSignature" onClick={handleClick}>
			{name}
		</button>
	);
}

export enum TimeSignatureValue {
	Quadruple,
	Duple,
	duple,
	Triple,
	triple,
}

export interface TimeSignatureProps {
	simpleTimeSignatureSelectedCallBack: (timeSignature: TimeSignatureValue) => void;
}

export function TimeSignature({ simpleTimeSignatureSelectedCallBack }: TimeSignatureProps) {
	return (
		<div>
			<TimeSignatureButton
				timeSignature={TimeSignatureValue.Quadruple}
				name={"4/4"}
				timeSignatureSelectedCallBack={simpleTimeSignatureSelectedCallBack}
			/>
			<TimeSignatureButton
				timeSignature={TimeSignatureValue.Duple}
				name={"2/2"}
				timeSignatureSelectedCallBack={simpleTimeSignatureSelectedCallBack}
			/>
			<TimeSignatureButton
				timeSignature={TimeSignatureValue.duple}
				name={"2/4"}
				timeSignatureSelectedCallBack={simpleTimeSignatureSelectedCallBack}
			/>
			<TimeSignatureButton
				timeSignature={TimeSignatureValue.Triple}
				name={"3/4"}
				timeSignatureSelectedCallBack={simpleTimeSignatureSelectedCallBack}
			/>
			<TimeSignatureButton
				timeSignature={TimeSignatureValue.triple}
				name={"3/8"}
				timeSignatureSelectedCallBack={simpleTimeSignatureSelectedCallBack}
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

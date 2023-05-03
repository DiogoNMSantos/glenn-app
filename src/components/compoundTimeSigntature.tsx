export enum TimeSignatureValue {
	Duple,
	Triple,
	Quadruple,
}

export interface CompoundTimeSignatureProps {
	timeSignatureSelectedCallBack: (timeSignature: TimeSignatureValue) => void;
}

export function CompoundTimeSignature({
	timeSignatureSelectedCallBack,
}: CompoundTimeSignatureProps) {
	return (
		<div>
			<CompoundTimeSignatureButton
				timeSignature={TimeSignatureValue.Duple}
				name={"6/8"}
				compoundTimeSignatureSelectedCallBack={timeSignatureSelectedCallBack}
			/>
			<CompoundTimeSignatureButton
				timeSignature={TimeSignatureValue.Triple}
				name={"9/8"}
				compoundTimeSignatureSelectedCallBack={timeSignatureSelectedCallBack}
			/>
			<CompoundTimeSignatureButton
				timeSignature={TimeSignatureValue.Quadruple}
				name={"12/8"}
				compoundTimeSignatureSelectedCallBack={timeSignatureSelectedCallBack}
			/>
		</div>
	);
}

export interface CompoundTimeSignatureButtonProps {
	timeSignature: TimeSignatureValue;
	name: string;
	compoundTimeSignatureSelectedCallBack: (timeSignature: TimeSignatureValue) => void;
}

export function CompoundTimeSignatureButton({
	timeSignature,
	name,
	compoundTimeSignatureSelectedCallBack: compoundtimeSignatureSelectedCallBack,
}: CompoundTimeSignatureButtonProps) {
	const handleClick = () => {
		compoundtimeSignatureSelectedCallBack(timeSignature);
	};

	return (
		<button className="compoundTimeSignature" onClick={handleClick}>
			{name}
		</button>
	);
}

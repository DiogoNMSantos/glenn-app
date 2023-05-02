export enum TimeSignatureValue {
	Duple,
	Triple,
	Quadruple,
}

export interface CompoundTimeSignatureProps {
	CompoundTimeSignatureSelectedCallBack: (timeSignature: TimeSignatureValue) => void;
}

export function CompoundTimeSignature({
	CompoundTimeSignatureSelectedCallBack,
}: CompoundTimeSignatureProps) {
	return (
		<div>
			<CompoundTimeSignatureButton
				timeSignature={TimeSignatureValue.Duple}
				name={"6/8"}
				CompoundTimeSignatureSelectedCallBack={CompoundTimeSignatureSelectedCallBack}
			/>
			<CompoundTimeSignatureButton
				timeSignature={TimeSignatureValue.Triple}
				name={"9/8"}
				CompoundTimeSignatureSelectedCallBack={CompoundTimeSignatureSelectedCallBack}
			/>
			<CompoundTimeSignatureButton
				timeSignature={TimeSignatureValue.Quadruple}
				name={"12/8"}
				CompoundTimeSignatureSelectedCallBack={CompoundTimeSignatureSelectedCallBack}
			/>
		</div>
	);
}

export interface CompoundTimeSignatureButtonProps {
	timeSignature: TimeSignatureValue;
	name: string;
	CompoundTimeSignatureSelectedCallBack: (timeSignature: TimeSignatureValue) => void;
}

export function CompoundTimeSignatureButton({
	timeSignature,
	name,
	CompoundTimeSignatureSelectedCallBack: CompoundtimeSignatureSelectedCallBack,
}: CompoundTimeSignatureButtonProps) {
	const handleClick = () => {
		CompoundtimeSignatureSelectedCallBack(timeSignature);
	};

	return (
		<button className="compoundTimeSignature" onClick={handleClick}>
			{name}
		</button>
	);
}

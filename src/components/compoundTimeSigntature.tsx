import { TimeSignatureValue } from "./simpleTimeSignature";

export interface CompoundTimeSignatureProps {
	timeSignatureSelectedCallBack: (timeSignature: TimeSignatureValue) => void;
}

export function CompoundTimeSignature({
	timeSignatureSelectedCallBack,
}: CompoundTimeSignatureProps) {
	return (
		<div>
			<CompoundTimeSignatureButton
				timeSignature={TimeSignatureValue.SixByEight}
				name={"6/8"}
				compoundTimeSignatureSelectedCallBack={timeSignatureSelectedCallBack}
			/>
			<CompoundTimeSignatureButton
				timeSignature={TimeSignatureValue.NineByEight}
				name={"9/8"}
				compoundTimeSignatureSelectedCallBack={timeSignatureSelectedCallBack}
			/>
			<CompoundTimeSignatureButton
				timeSignature={TimeSignatureValue.TwelveByEight}
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
		<button type="button" className="compoundTimeSignature" onClick={handleClick}>
			{name}
		</button>
	);
}

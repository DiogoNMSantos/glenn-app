import "./modal.scss";

import { useState } from "react";

import { CompoundTimeSignature } from "./compoundTimeSigntature";
import { TimeSignature, TimeSignatureValue } from "./simpleTimeSignature";

export interface ModalProps {
	modalCallBack: (timeSignature: TimeSignatureValue) => void;
}

export function Modal({ modalCallBack }: ModalProps) {
	const [modal, setModal] = useState(true);

	return (
		<>
			{modal && (
				<div className="modal" role="dialog">
					<div className="overlay">
						<div className="modal-content">
							<h1>Select a time signature</h1>
							<div>
								<h2>Simple</h2>
								<TimeSignature
									timeSignatureSelectedCallBack={(timeSignature: TimeSignatureValue) => {
										modalCallBack(timeSignature);
										setModal(!modal);
									}}
								/>
							</div>
							<div>
								<h2>Compound</h2>
								<CompoundTimeSignature
									timeSignatureSelectedCallBack={(timeSignature: TimeSignatureValue) => {
										modalCallBack(timeSignature);
										setModal(!modal);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

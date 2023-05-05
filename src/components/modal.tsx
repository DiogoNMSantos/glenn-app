import "./modal.scss";

import { FormEvent, useState } from "react";

import { CompoundTimeSignature } from "./compoundTimeSigntature";
import { TimeSignature, TimeSignatureValue } from "./simpleTimeSignature";

export interface ModalProps {
	modalCallBack: (timeSignature: TimeSignatureValue, title: string, author: string) => void;
}

export interface ModalState {
	title: string;
	author: string;
	timeSignature: TimeSignatureValue;
}

export function Modal({ modalCallBack }: ModalProps) {
	const [modal, setModal] = useState(true);
	const [formData, setFormData] = useState<ModalState>({
		title: "",
		author: "",
		timeSignature: TimeSignatureValue.FourByFour,
	});

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	}

	function handleSubmit(event: FormEvent) {
		// eslint-disable-next-line no-console
		console.log(formData);
		event.preventDefault();
		modalCallBack(formData.timeSignature, formData.title, formData.author);
		setModal(!modal);
	}

	return (
		<>
			{modal && (
				<div className="modal" role="dialog">
					<div className="overlay">
						<div className="modal-content">
							<form onSubmit={handleSubmit}>
								<h1>Title of the song</h1>
								<input
									type="text"
									name="title"
									value={formData.title}
									placeholder="write the title of the song"
									className="textBox"
									onChange={handleChange}
								></input>
								<h1>Author name</h1>
								<input
									type="text"
									name="author"
									value={formData.author}
									placeholder="write the author's name"
									className="textBox"
									onChange={handleChange}
								></input>

								<h1>Select a time signature</h1>
								<div>
									<h2>Simple</h2>
									<TimeSignature
										timeSignatureSelectedCallBack={(timeSignature: TimeSignatureValue) => {
											setFormData((prevState) => ({
												...prevState,
												timeSignature,
											}));
										}}
									/>
								</div>
								<div>
									<h2>Compound</h2>
									<CompoundTimeSignature
										timeSignatureSelectedCallBack={(timeSignature: TimeSignatureValue) => {
											setFormData((prevState) => ({
												...prevState,
												timeSignature,
											}));
										}}
									/>
								</div>
								<button type="submit" className="close-modal">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

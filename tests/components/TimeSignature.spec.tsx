import { fireEvent, render, screen } from "@testing-library/react";

import { CompoundTimeSignatureButton } from "../../src/components/compoundTimeSigntature";
import { Modal } from "../../src/components/modal";
import { TimeSignatureButton } from "../../src/components/simpleTimeSignature";

describe("Time signatures", () => {
	test("simple quaduple", () => {
		const timeSignaturePressed = jest.fn();
		render(
			<TimeSignatureButton
				timeSignature={1}
				name={"4/4"}
				timeSignatureSelectedCallBack={timeSignaturePressed}
			/>
		);

		const durations = screen.getByRole("button");

		fireEvent.click(durations);

		expect(timeSignaturePressed).toHaveBeenCalledWith(1);
	});

	test("compound duple", () => {
		const timeSignaturePressed = jest.fn();
		render(
			<CompoundTimeSignatureButton
				timeSignature={1}
				name={"6/8"}
				compoundTimeSignatureSelectedCallBack={timeSignaturePressed}
			/>
		);

		const durations = screen.getByRole("button");

		fireEvent.click(durations);

		expect(timeSignaturePressed).toHaveBeenCalledWith(1);
	});
});

describe("Modal", () => {
	test("displays correct time signature, title and author on app", () => {
		const modalCallBackPressed = jest.fn();
		render(<Modal modalCallBack={modalCallBackPressed} />);

		const timeSignature = screen.getAllByRole("button");
		const submitButton = screen.getByText("Submit");
		const titleInput = screen.getByPlaceholderText("write the title of the song");
		const authorInput = screen.getByPlaceholderText("write the author's name");

		fireEvent.click(timeSignature[1]);
		fireEvent.change(titleInput, { target: { value: "Diogo's Song" } });
		fireEvent.change(authorInput, { target: { value: "Diogo" } });
		fireEvent.click(submitButton);

		expect(modalCallBackPressed).toHaveBeenCalledWith(1, "Diogo's Song", "Diogo");
	});

	test("disappears when form is submited", () => {
		const modalCallBack = jest.fn();
		render(<Modal modalCallBack={modalCallBack} />);

		const modal = screen.getByRole("dialog");
		const timeSignature = screen.getAllByRole("button");
		const submitButton = screen.getByText("Submit");

		expect(modal).toBeInTheDocument();

		fireEvent.click(timeSignature[1]);
		fireEvent.click(submitButton);

		expect(modalCallBack).toHaveBeenCalledWith(1, "", "");

		expect(modal).not.toBeInTheDocument();
	});
});

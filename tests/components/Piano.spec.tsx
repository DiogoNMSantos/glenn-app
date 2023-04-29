import { fireEvent, render, screen } from "@testing-library/react";

import { Piano } from "../../src/components/piano";
import { PianoHigh } from "../../src/components/pianoHight";

describe("Piano", () => {
	test("has 88 keys", () => {
		render(<Piano keyPressedCallBack={jest.fn} />);

		const pianoKeys = screen.getAllByRole("button");

		expect(pianoKeys.length).toBe(88);
	});

	test("maps A0 key to A0 note", () => {
		render(<Piano keyPressedCallBack={jest.fn} />);
		const pianoKeys = screen.getAllByRole("button");
		const pianoKey = pianoKeys[0];

		expect(pianoKey.textContent).toBe("A0");
	});

	test("notifies when C4 is pressed", () => {
		const keyPressed = jest.fn();
		render(<PianoHigh keyPressedCallBack={keyPressed} />);

		const pianoKeys = screen.getAllByRole("button");

		fireEvent.click(pianoKeys[39]);

		expect(keyPressed).toHaveBeenCalledWith(0, 4);
	});

	test("notifies when A3 is pressed", () => {
		const keyPressed = jest.fn();
		render(<Piano keyPressedCallBack={keyPressed} />);

		const pianoKeys = screen.getAllByRole("button");

		fireEvent.click(pianoKeys[36]);

		expect(keyPressed).toHaveBeenCalledWith(9, 3);
	});
});

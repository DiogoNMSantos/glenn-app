import { fireEvent, render, screen } from "@testing-library/react";

import { App } from "../../src/App";

describe("App", () => {
	test("piano displays error message when double rest is pressed", () => {
		render(<App />);

		const status = screen.getByRole("status");
		const pianoKey = screen.getByText("C4");
		const durationButton = screen.getByText("𝅜");
		const timeSignatureButtons = screen.getAllByText("4/4");
		const modal = screen.getByRole("dialog");

		expect(modal).toBeInTheDocument();

		fireEvent.click(timeSignatureButtons[0]);

		expect(modal).not.toBeInTheDocument();

		fireEvent.click(durationButton);
		fireEvent.click(pianoKey);

		expect(status.textContent).toStrictEqual("Double duration exceeds measure size");
	});
});

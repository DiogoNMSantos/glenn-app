import { fireEvent, render, screen } from "@testing-library/react";

import { App } from "../../src/App";

describe("App", () => {
	test("piano displays error message when double rest is pressed", () => {
		render(<App />);

		const status = screen.getByRole("status");
		const buttons = screen.getAllByRole("button");

		fireEvent.click(buttons[88]);
		fireEvent.click(buttons[36]);

		expect(status.textContent).toStrictEqual("Double duration exceeds measure size");
	});
});

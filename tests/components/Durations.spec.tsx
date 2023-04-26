import { fireEvent, render, screen } from "@testing-library/react";

import { PitchDurationButton } from "../../src/components/durations";

describe("Duration", () => {
	test("breve", () => {
		const durationPressed = jest.fn();
		render(<PitchDurationButton durationSelectedCallBack={durationPressed} duration={0} />);

		const durations = screen.getAllByRole("button");

		fireEvent.click(durations[0]);

		expect(durationPressed).toHaveBeenCalledWith(0);
	});
	test("half", () => {
		const durationPressed = jest.fn();
		render(<PitchDurationButton durationSelectedCallBack={durationPressed} duration={1} />);

		const durations = screen.getAllByRole("button");

		fireEvent.click(durations[1]);

		expect(durationPressed).toHaveBeenCalledWith(1);
	});

	test("doble", () => {
		const durationPressed = jest.fn();
		render(<PitchDurationButton durationSelectedCallBack={durationPressed} duration={2} />);

		const durations = screen.getAllByRole("button");

		fireEvent.click(durations[2]);

		expect(durationPressed).toHaveBeenCalledWith(2);
	});

	test("quarter", () => {
		const durationPressed = jest.fn();
		render(<PitchDurationButton durationSelectedCallBack={durationPressed} duration={3} />);

		const durations = screen.getAllByRole("button");

		fireEvent.click(durations[3]);

		expect(durationPressed).toHaveBeenCalledWith(3);
	});

	test("eighth", () => {
		const durationPressed = jest.fn();
		render(<PitchDurationButton durationSelectedCallBack={durationPressed} duration={4} />);

		const durations = screen.getAllByRole("button");

		fireEvent.click(durations[4]);

		expect(durationPressed).toHaveBeenCalledWith(4);
	});

	test("sixteenth", () => {
		const durationPressed = jest.fn();
		render(<PitchDurationButton durationSelectedCallBack={durationPressed} duration={5} />);

		const durations = screen.getAllByRole("button");

		fireEvent.click(durations[5]);

		expect(durationPressed).toHaveBeenCalledWith(5);
	});

	test("thirty second", () => {
		const durationPressed = jest.fn();
		render(<PitchDurationButton durationSelectedCallBack={durationPressed} duration={6} />);

		const durations = screen.getAllByRole("button");

		fireEvent.click(durations[6]);

		expect(durationPressed).toHaveBeenCalledWith(6);
	});

	test("sixty fourth", () => {
		const durationPressed = jest.fn();
		render(<PitchDurationButton durationSelectedCallBack={durationPressed} duration={7} />);

		const durations = screen.getAllByRole("button");

		fireEvent.click(durations[7]);

		expect(durationPressed).toHaveBeenCalledWith(7);
	});
});

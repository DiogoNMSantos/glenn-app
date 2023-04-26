import { fireEvent, render, screen } from "@testing-library/react";

import { PitchDurationButton } from "../../src/components/durations";

describe("Duration", () => {
	test("breve", () => {
		const durationPressed = jest.fn();
		render(<PitchDurationButton durationSelectedCallBack={durationPressed} duration={0} />);

		const durations = screen.getByRole("button");

		fireEvent.click(durations);

		expect(durationPressed).toHaveBeenCalledWith(0);
	});
});

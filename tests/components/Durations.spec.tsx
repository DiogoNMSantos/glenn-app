import { fireEvent, render, screen } from "@testing-library/react";

import { PitchDurationButton, RestDurationButton } from "../../src/components/durations";

describe("Duration", () => {
	test("Double", () => {
		const durationPressed = jest.fn();
		render(
			<PitchDurationButton
				durationSelectedCallBack={durationPressed}
				name={"Double"}
				duration={0}
			/>
		);

		const durations = screen.getByRole("button");

		fireEvent.click(durations);

		expect(durationPressed).toHaveBeenCalledWith(0);
	});

	test("duration double", () => {
		const restDurationPressed = jest.fn();
		render(
			<RestDurationButton
				restDurationSelectedCallBack={restDurationPressed}
				name={"Double"}
				duration={0}
			/>
		);

		const restDurations = screen.getByRole("button");

		fireEvent.click(restDurations);

		expect(restDurationPressed).toHaveBeenCalledWith(0);
	});
});

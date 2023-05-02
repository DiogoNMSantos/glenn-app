import { fireEvent, render, screen } from "@testing-library/react";

import { CompoundTimeSignatureButton } from "../../src/components/compoundTimeSigntature";
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
				CompoundTimeSignatureSelectedCallBack={timeSignaturePressed}
			/>
		);

		const durations = screen.getByRole("button");

		fireEvent.click(durations);

		expect(timeSignaturePressed).toHaveBeenCalledWith(1);
	});
});

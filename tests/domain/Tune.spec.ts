import { Duration, Note, Octave, Pitch } from "glenn";

import { MusicalNote } from "../../src/domain/tune";

describe("create note from", () => {
	test("pitch 0 and octave 4", () => {
		const note = new MusicalNote();

		const pitchNote = note.from(0, 4);

		expect(pitchNote).toStrictEqual(new Note(Pitch.C, Duration.Quarter, Octave.C4));
	});

	test.each([
		[0, Pitch.C],
		[1, Pitch.CSharp],
		[2, Pitch.D],
		[3, Pitch.DSharp],
		[4, Pitch.E],
		[5, Pitch.F],
		[6, Pitch.FSharp],
		[7, Pitch.G],
		[8, Pitch.GSharp],
		[9, Pitch.A],
		[10, Pitch.ASharp],
		[11, Pitch.B],
	])("all pitches posible", (pitchNumber: number, pitch: Pitch) => {
		expect(new MusicalNote().from(pitchNumber, 0)).toStrictEqual(
			new Note(pitch, Duration.Quarter, Octave.C0)
		);
	});

	test.each([
		[0, Octave.C0],
		[1, Octave.C1],
		[2, Octave.C2],
		[3, Octave.C3],
		[4, Octave.C4],
		[5, Octave.C5],
		[6, Octave.C6],
		[7, Octave.C7],
		[8, Octave.C8],
	])("all octaves posible", (octaveNumber: number, octave: Octave) => {
		expect(new MusicalNote().from(0, octaveNumber)).toStrictEqual(
			new Note(Pitch.C, Duration.Quarter, octave)
		);
	});
});

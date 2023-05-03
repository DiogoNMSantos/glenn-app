import { CompoundTimeSignature, Duration, Note, Octave, Pitch, SimpleTimeSignature } from "glenn";

import { TimeSignatureValue } from "../../src/components/simpleTimeSignature";
import { MusicalNote, TimeSignatureAddapter, Tune } from "../../src/domain/tune";

describe("MusicalNote creates note from", () => {
	test("pitch 0 and octave 4", () => {
		const note = new MusicalNote();

		const pitchNote = note.from(0, 4, 3);

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
		expect(new MusicalNote().from(pitchNumber, 0, 3)).toStrictEqual(
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
		expect(new MusicalNote().from(0, octaveNumber, 3)).toStrictEqual(
			new Note(Pitch.C, Duration.Quarter, octave)
		);
	});

	test.each([
		[0, Duration.Double],
		[1, Duration.Whole],
		[2, Duration.Half],
		[3, Duration.Quarter],
		[4, Duration.Eighth],
		[5, Duration.Sixteenth],
		[6, Duration.ThirtySecond],
		[7, Duration.SixtyFourth],
	])("all durations posible without dots", (durationNumber: number, duration: Duration) => {
		expect(new MusicalNote().from(0, 0, durationNumber)).toStrictEqual(
			new Note(Pitch.C, duration, Octave.C0)
		);
	});
});

describe("Tune", () => {
	test("adds a C note to the tune", () => {
		const tune = new Tune();

		tune.addNote(new MusicalNote().from(0, 3, 3));

		expect(tune.toString()).toContain("|C,|");
	});

	test("adds a C and a G notes to the tune", () => {
		const tune = new Tune();

		tune.addNote(new MusicalNote().from(0, 3, 3));
		tune.addNote(new MusicalNote().from(7, 3, 3));

		expect(tune.toString()).toContain("|C,G,|");
	});

	test("adds a C a G and a E notes to the tune", () => {
		const tune = new Tune();

		tune.addNote(new MusicalNote().from(0, 3, 3));
		tune.addNote(new MusicalNote().from(7, 3, 3));
		tune.addNote(new MusicalNote().from(4, 3, 3));

		expect(tune.toString()).toContain("|C,G,E,|");
	});

	test("adds a C a G a E and a F notes to the tune", () => {
		const tune = new Tune();

		tune.addNote(new MusicalNote().from(0, 3, 3));
		tune.addNote(new MusicalNote().from(7, 3, 3));
		tune.addNote(new MusicalNote().from(4, 3, 3));
		tune.addNote(new MusicalNote().from(5, 3, 3));

		expect(tune.toString()).toContain("|C,G,E,F,|");
	});

	test("adds a C a G a E a F and a D notes to the tune", () => {
		const tune = new Tune();

		tune.addNote(new MusicalNote().from(0, 3, 3));
		tune.addNote(new MusicalNote().from(7, 3, 3));
		tune.addNote(new MusicalNote().from(4, 3, 3));
		tune.addNote(new MusicalNote().from(5, 3, 3));
		tune.addNote(new MusicalNote().from(2, 3, 3));

		expect(tune.toString()).toContain("|C,G,E,F,|D,|");
	});
});

describe("Time signature", () => {
	test.each([
		[TimeSignatureValue.FourByFour, 4],
		[TimeSignatureValue.TwoByFour, 2],
		[TimeSignatureValue.ThreeByFour, 3],
	])(
		"simple with quarter note beat duration",
		(timeSignature: TimeSignatureValue, beats: number) => {
			const recieved = new TimeSignatureAddapter().from(timeSignature);
			const expected = new SimpleTimeSignature(beats, Duration.Quarter);

			expect(recieved).toStrictEqual(expected);
		}
	);
	test.each([[TimeSignatureValue.TwoByTwo, 2]])(
		"simple with half note beat duration",
		(timeSignature: TimeSignatureValue, beats: number) => {
			const recieved = new TimeSignatureAddapter().from(timeSignature);
			const expected = new SimpleTimeSignature(beats, Duration.Half);

			expect(recieved).toStrictEqual(expected);
		}
	);

	test.each([[TimeSignatureValue.ThreeByFour, 3]])(
		"simple with quarter note beat duration",
		(timeSignature: TimeSignatureValue, beats: number) => {
			const recieved = new TimeSignatureAddapter().from(timeSignature);
			const expected = new SimpleTimeSignature(beats, Duration.Quarter);

			expect(recieved).toStrictEqual(expected);
		}
	);

	test.each([[TimeSignatureValue.ThreeByEight, 3]])(
		"simple with eighth note beat duration",
		(timeSignature: TimeSignatureValue, beats: number) => {
			const recieved = new TimeSignatureAddapter().from(timeSignature);
			const expected = new SimpleTimeSignature(beats, Duration.Eighth);

			expect(recieved).toStrictEqual(expected);
		}
	);

	test.each([[TimeSignatureValue.ThreeByFour, 3]])(
		"simple with quarter note beat duration",
		(timeSignature: TimeSignatureValue, beats: number) => {
			const recieved = new TimeSignatureAddapter().from(timeSignature);
			const expected = new SimpleTimeSignature(beats, Duration.Quarter);

			expect(recieved).toStrictEqual(expected);
		}
	);
	test.each([
		[TimeSignatureValue.SixByEight, 6],
		[TimeSignatureValue.NineByEight, 9],
		[TimeSignatureValue.TwelveByEight, 12],
	])(
		"simple with quarter note beat duration",
		(timeSignature: TimeSignatureValue, beats: number) => {
			const recieved = new TimeSignatureAddapter().from(timeSignature);
			const expected = new CompoundTimeSignature(beats, Duration.Eighth);

			expect(recieved).toStrictEqual(expected);
		}
	);
});

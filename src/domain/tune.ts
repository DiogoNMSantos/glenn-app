import { abcTune, Duration, Key, Measure, Note, Octave, Pitch, SimpleTimeSignature } from "glenn";

export class Tune {
	static defaultTheme(): string {
		const timeSignature = new SimpleTimeSignature(4, Duration.Quarter);
		const measure = new Measure(timeSignature)
			.add(new Note(Pitch.C, Duration.Quarter, Octave.C4))
			.add(new Note(Pitch.E, Duration.Quarter, Octave.C4))
			.add(new Note(Pitch.G, Duration.Eighth, Octave.C4))
			.add(new Note(Pitch.A, Duration.Eighth, Octave.C4))
			.add(new Note(Pitch.B, Duration.Eighth, Octave.C4))
			.add(new Note(Pitch.C, Duration.Eighth, Octave.C5));

		// eslint-disable-next-line new-cap
		const tune = new abcTune(Key.CMajor, timeSignature, Duration.Eighth)
			.addMeasure(measure)
			.addMeasure(measure, Duration.Sixteenth)
			.addMeasure(measure, Duration.Quarter);

		return tune.toString();
	}
}

export class MusicalNote {
	from(pitch: number, octave: number): Note {
		return new Note(this.pitchFrom(pitch), Duration.Quarter, this.octaveFrom(octave));
	}

	private pitchFrom(pitchNumber: number): Pitch {
		const pitchNumberToPitch: Map<number, Pitch> = new Map<number, Pitch>([
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
		]);

		const pitch = pitchNumberToPitch.get(pitchNumber);

		return pitch ? pitch : Pitch.C;
	}

	private octaveFrom(octaveNumber: number): Octave {
		const octaveNumberToOctave: Map<number, Octave> = new Map<number, Octave>([
			[0, Octave.C0],
			[1, Octave.C1],
			[2, Octave.C2],
			[3, Octave.C3],
			[4, Octave.C4],
			[5, Octave.C5],
			[6, Octave.C6],
			[7, Octave.C7],
			[8, Octave.C8],
		]);

		const octave = octaveNumberToOctave.get(octaveNumber);

		return octave ? octave : Octave.C4;
	}
}

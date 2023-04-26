/* eslint-disable new-cap */
import { abcTune, Duration, Key, Measure, Note, Octave, Pitch, SimpleTimeSignature } from "glenn";

export class Tune {
	private readonly timeSignature = new SimpleTimeSignature(4, Duration.Quarter);
	private readonly key = Key.CMajor;
	private readonly defaultDuration: Duration = Duration.Quarter;
	private readonly tune = new abcTune(Key.CMajor, this.timeSignature, this.defaultDuration);
	private currentMeasure: Measure = new Measure(this.timeSignature);

	constructor() {
		this.tune.addMeasure(this.currentMeasure);
	}

	addNote(note: Note): void {
		try {
			this.currentMeasure.add(note);
		} catch (e) {
			this.currentMeasure = new Measure(this.timeSignature);
			this.tune.addMeasure(this.currentMeasure);
			this.currentMeasure.add(note);
		}
	}

	toString(): string {
		return this.tune.toString();
	}
}

export class MusicalNote {
	from(pitch: number, octave: number, duration: number): Note {
		return new Note(this.pitchFrom(pitch), this.durationForm(duration), this.octaveFrom(octave));
	}

	private durationForm(durationNumber: number): Duration {
		const durationNumberToDuration: Map<number, Duration> = new Map<number, Duration>([
			[0, Duration.Double],
			[1, Duration.Whole],
			[2, Duration.Half],
			[3, Duration.Quarter],
			[4, Duration.Eighth],
			[5, Duration.Sixteenth],
			[6, Duration.ThirtySecond],
			[7, Duration.SixtyFourth],
		]);

		const duration = durationNumberToDuration.get(durationNumber);

		return duration ? duration : Duration.Whole;
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

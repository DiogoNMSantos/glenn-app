/* eslint-disable new-cap */
import { abcTune, Duration, Key, Measure, Note, Octave, Pitch, SimpleTimeSignature } from "glenn";

import { DurationValue } from "../components/durations";
import { OctaveValue, PitchValue } from "../components/piano";

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

	private durationForm(durationNumber: DurationValue): Duration {
		const durationNumberToDuration: Map<DurationValue, Duration> = new Map<DurationValue, Duration>(
			[
				[DurationValue.Double, Duration.Double],
				[DurationValue.Whole, Duration.Whole],
				[DurationValue.Half, Duration.Half],
				[DurationValue.Quarter, Duration.Quarter],
				[DurationValue.Eighth, Duration.Eighth],
				[DurationValue.Sixteenth, Duration.Sixteenth],
				[DurationValue.ThirtySecond, Duration.ThirtySecond],
				[DurationValue.SixtyFourth, Duration.SixtyFourth],
			]
		);

		const duration = durationNumberToDuration.get(durationNumber);

		return duration ? duration : Duration.Whole;
	}

	private pitchFrom(pitchNumber: PitchValue): Pitch {
		const pitchNumberToPitch: Map<PitchValue, Pitch> = new Map<PitchValue, Pitch>([
			[PitchValue.C, Pitch.C],
			[PitchValue.CSharp, Pitch.CSharp],
			[PitchValue.D, Pitch.D],
			[PitchValue.DSharp, Pitch.DSharp],
			[PitchValue.E, Pitch.E],
			[PitchValue.F, Pitch.F],
			[PitchValue.FSharp, Pitch.FSharp],
			[PitchValue.G, Pitch.G],
			[PitchValue.GSharp, Pitch.GSharp],
			[PitchValue.A, Pitch.A],
			[PitchValue.ASharp, Pitch.ASharp],
			[PitchValue.B, Pitch.B],
		]);

		const pitch = pitchNumberToPitch.get(pitchNumber);

		return pitch ? pitch : Pitch.C;
	}

	private octaveFrom(octaveNumber: OctaveValue): Octave {
		const octaveNumberToOctave: Map<OctaveValue, Octave> = new Map<OctaveValue, Octave>([
			[OctaveValue.C0, Octave.C0],
			[OctaveValue.C1, Octave.C1],
			[OctaveValue.C2, Octave.C2],
			[OctaveValue.C3, Octave.C3],
			[OctaveValue.C4, Octave.C4],
			[OctaveValue.C5, Octave.C5],
			[OctaveValue.C6, Octave.C6],
			[OctaveValue.C7, Octave.C7],
			[OctaveValue.C8, Octave.C8],
		]);

		const octave = octaveNumberToOctave.get(octaveNumber);

		return octave ? octave : Octave.C4;
	}
}

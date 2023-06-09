/* eslint-disable new-cap */
import {
	abcTune,
	CompoundTimeSignature,
	Duration,
	Key,
	Note,
	Octave,
	Pitch,
	SimpleTimeSignature,
	Song,
} from "glenn";

import { DurationValue } from "../components/durations";
import { OctaveValue, PitchValue } from "../components/piano";
import { TimeSignatureValue } from "../components/simpleTimeSignature";

export class Tune {
	private readonly key = Key.CMajor;
	private readonly defaultDuration: Duration = Duration.Quarter;
	private readonly song = new Song(this.timeSignature, this.key);

	constructor(private readonly timeSignature = new SimpleTimeSignature(4, Duration.Quarter)) {}

	addNote(note: Note): void {
		this.song.addNote(note);
	}

	toString(): string {
		const tune = new abcTune(this.song, this.defaultDuration);

		return tune.toString();
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

export class TimeSignatureAddapter {
	from(timeSignature: TimeSignatureValue): SimpleTimeSignature | CompoundTimeSignature {
		const simpleTimeSignatureValueToTimeSignature: Map<TimeSignatureValue, SimpleTimeSignature> =
			new Map<TimeSignatureValue, SimpleTimeSignature>([
				[TimeSignatureValue.FourByFour, new SimpleTimeSignature(4, Duration.Quarter)],
				[TimeSignatureValue.TwoByTwo, new SimpleTimeSignature(2, Duration.Half)],
				[TimeSignatureValue.TwoByFour, new SimpleTimeSignature(2, Duration.Quarter)],
				[TimeSignatureValue.ThreeByFour, new SimpleTimeSignature(3, Duration.Quarter)],
				[TimeSignatureValue.ThreeByEight, new SimpleTimeSignature(3, Duration.Eighth)],
			]);

		const compoundTimeSignatureValueToTimeSignature: Map<
			TimeSignatureValue,
			CompoundTimeSignature
		> = new Map<TimeSignatureValue, CompoundTimeSignature>([
			[TimeSignatureValue.SixByEight, new CompoundTimeSignature(6, Duration.Eighth)],
			[TimeSignatureValue.NineByEight, new CompoundTimeSignature(9, Duration.Eighth)],
			[TimeSignatureValue.TwelveByEight, new CompoundTimeSignature(12, Duration.Eighth)],
		]);

		const simpleSignature = simpleTimeSignatureValueToTimeSignature.get(timeSignature);
		const compoundSignature = compoundTimeSignatureValueToTimeSignature.get(timeSignature);

		if (simpleSignature) {
			return simpleSignature;
		}

		if (compoundSignature) {
			return compoundSignature;
		}

		return new SimpleTimeSignature(4, Duration.Quarter);
	}
}

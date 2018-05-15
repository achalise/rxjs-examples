import { interval } from 'rxjs/index';
import { buffer, bufferTime } from 'rxjs/internal/operators';

describe(`BufferTime tests`, () => {
    it(`Should keep collecting values for the duration of buffer interval and emit at the end of every
    buffer interval`, done => {
        let stream$ = interval(10);
        let bufferred$ = stream$.pipe(bufferTime(35));
        let result = [];
        bufferred$.subscribe(v => {
            result.push(v);
        });
        setTimeout(_ => {
            expect(result.length).toEqual(3);
            console.log(result);
            // TODO may not always be true, again use a proper testing framework for observables!!
            expect(result[2]).toEqual([6, 7, 8]);
            done();
        }, 110);
    });
});

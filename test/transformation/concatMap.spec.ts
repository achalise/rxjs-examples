import { interval, Subscription } from 'rxjs/index';
import { concatMap, map } from 'rxjs/internal/operators';

describe(`concatMap tests`, () => {
    it(`should emit the value from the observable being concatenated with, 
    subscription to the observable being concatenated to is closed after the second one emits`, done => {
        let result = [];
        let result1 = [];

        let first$ = interval(100).pipe(map( _ => 'A' + _));
        let second$ = interval(200).pipe(map(_ => 'B' + _));
        let concat$ = first$.pipe(concatMap(value => {
            result1.push(value);
            return second$
        }));

        let sub: Subscription = concat$.subscribe(value => {
            result.push(value);
        });

        setTimeout(_ => {
            expect(result).toEqual(['B0']);
        }, 310);

        setTimeout(_ => {
            console.log(result);
            expect(result).toEqual(['B0', 'B1', 'B2']);
            expect(result1).toEqual(['A0']);
            done();
        }, 750);
    });
});

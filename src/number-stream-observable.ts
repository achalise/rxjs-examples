import { Observable, Observer } from 'rxjs/index';

export function evenNumberStream() {
    const stream: Observable<number> = Observable.create((observer: Observer<number>) => {
        let value = 1;
        let interval = setInterval(() => {
            if(value % 2 === 0) { observer.next(value) };
            value == 10 && observer.complete();
            value++;
        }, 10);
        return () => {
            clearInterval(interval);
        };
    });
    return stream;
}


export function oddNumberStream() {
    const stream: Observable<number> = Observable.create((observer: Observer<number>) => {
        let value = 1;
        let interval = setInterval(() => {
            if(value % 2 === 1) { observer.next(value) };
            value == 10 && observer.complete();
            value++;
        }, 10);
        return () => {
            clearInterval(interval);
        };
    });
    return stream;
}
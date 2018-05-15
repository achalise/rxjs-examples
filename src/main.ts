import { fromEvent, interval, Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators';

console.log(`Hello world`);
let el:Element = document.querySelector('.some-div');
let template = `
    <div>
        <button>Click me</button>
    </div>
`;

el.innerHTML = template;

let button = document.querySelector('button');
button.addEventListener('click', (evt) => {
    console.log(`Button clicked `, evt);
});
interval(1000).pipe(take(10)).subscribe((t:number) => console.log(t), null, null);
fromEvent(button, 'click', null, null).subscribe((evt: Event) => {console.log(evt)}, null, null);
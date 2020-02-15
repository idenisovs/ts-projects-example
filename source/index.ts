import { distance, Point } from './geometry';
import Server from './core/server';

function getPoint(coordinates: number[]): Point {
    const [ x, y ] = coordinates;

    return new Point(x, y);
}

console.log('Hello, world!');

Server.Points().then((raw) => {
    const p1 = getPoint(raw[0]);
    const p2 = getPoint(raw[1]);

    const result = distance(p1, p2);

    console.log(result);
});






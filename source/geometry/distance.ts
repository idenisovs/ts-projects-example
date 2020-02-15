import { Point } from './objects/point';

export function distance(p1: Point, p2: Point) {
    const dX = p2.x - p1.x;
    const dY = p2.y - p1.y;

    return Math.sqrt(dX ** 2 + dY ** 2);
}

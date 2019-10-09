import paper, { view, Path, Group, Point } from 'paper';

export default class Plant {
    sproutDistance = 5;
    growDistance = 10;

    /**
     * @param {Point} start
     */
    constructor(start) {
        this.start = start;
        this.path = new Path();
        this.path.strokeColor = 'black';
        this.path.strokeWidth = 5;
    }

    sprout() {
        this.path.add(new Point(this.start));
        this.path.add(new Point(this.start.add([0, -this.sproutDistance])));
    }

    grow() {
        this.path.add(new Point(this.path.lastSegment.point.add([0, -this.growDistance])));
    }
}
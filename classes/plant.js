import paper, { view, Path, Group, Point } from 'paper';

export default class Plant {
    sproutDistance = 5;
    growDistance = 10;
    startTime = null;
    startPoint = null;
    path = null;

    /**
     * @param {Point} start
     */
    constructor(startPoint) {
        this.startPoint = startPoint;
        this.path = new Path();
        this.path.strokeColor = 'black';
        this.path.strokeWidth = 5;

        window.requestAnimationFrame((t) => this.loop(t));
    }

    sprout() {
        this.path.add(new Point(this.startPoint));
        this.path.add(new Point(this.startPoint.add([0, -this.sproutDistance])));
    }

    grow() {
        this.path.add(new Point(this.path.lastSegment.point.add([0, -this.growDistance])));
    }

    loop(timeStamp) {
        if (!this.startTime) {
            this.startTime = timeStamp;
        }

        const elapsed = timeStamp - this.startTime;

        console.log(`Time stamp: ${timeStamp}`);
        console.log(`Seconds passed: ${elapsed / 1000}`);

        // Stop loop
        if(elapsed < 2000) {
            window.requestAnimationFrame((t) => this.loop(t));
        }
    }
}
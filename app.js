import paper, { view, Path, Group, Point, PaperScope } from 'paper';
import Plant from './classes/plant';

window.onload = function() {
    // Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    const test = new Plant(new Point(20, paper.view.bounds.height));

    test.sprout();

    window.setTimeout(() => {
       test.grow();
    }, 3000);

    // Draw the view now:
    paper.view.draw();
}
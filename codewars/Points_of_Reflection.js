//"Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given
// position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the
// opposite direction.
//
// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of
// integers representing the point's X and Y coordinates. Output should be in the same format,
// giving the X and Y coordinates of point P1. You do not have to validate the input.
//
// This kata was inspired by the Hackerrank challenge Find Point

function symmetricPoint(p, q) {
    const [x1, y1] = p;
    const [x2, y2] = q;

    const x3 = 2 * x2 - x1;
    const y3 = 2 * y2 - y1;


    return [x3, y3];
}


const p = [1, 2];
const q = [2, 3];
const p1 = symmetricPoint(p, q);
console.log(p1);  //? Ausgabe: [3, 4]

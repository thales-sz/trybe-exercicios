const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const result = rectangles.forEach((rectangle) => {
   // altere a chamada da funcao rectangleArea
  console.log(rectangleArea(...rectangle));
});

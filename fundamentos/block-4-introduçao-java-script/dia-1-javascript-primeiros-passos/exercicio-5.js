// Retorna se os angulos formam um triangulo
let a, b, c;
a = 60; b = 60; c = 60;
console.log(a,b,c);

if (a>0 && b>0 && c>0) {

    if (a+b+c == 180){
        console.log('Os angulos formam um triangulo');
    }
    else {
        console.log('Os angulos não formam um triangulo');
    }

}

else {
    console.log('Error, angulo invalido');
}
const datoInput = (id) => {
    return Number(document.getElementById(id).value);
}
const mensajeTrue = (id, medida, valor) => {
    document.getElementById(id).style.color = 'black';
    document.getElementById(id).innerHTML = `${medida}  =  ${valor} cm`;
}

const mensajeFalse = (id) => {
    document.getElementById(id).style.color = 'red';
    document.getElementById(id).innerHTML = `Todos los campos son requeridos y deben ser mayores a 0`;
    setTimeout(()=>{
        document.getElementById(id).style.color = 'black';
        document.getElementById(id).innerHTML = "";
    },3000);
}


// Hallar perimetro del cuadrado

const perimetroCuadrado = () => {
    const lado = datoInput('inputCuadrado');
    if (lado > 0 ) {
        const perimetro = lado * 4;
        mensajeTrue('resultadoCuadrado', 'Perimetro', perimetro);
    }else {
        mensajeFalse('resultadoCuadrado');
    }
};

// Hallar area del cuadrado
const areaCuadrado = () => {
    const lado = datoInput('inputCuadrado');
    if (lado > 0 ) {
        const area = lado * lado;
        mensajeTrue('resultadoCuadrado', 'Area', area);
    }else {
        mensajeFalse('resultadoCuadrado');
    }
};

// Hallar perimetro del Rectangulo
const perimetroRectangulo = () => {
    const base = datoInput('inputBaseRectangulo');
    const altura = datoInput('inputAlturaRectangulo');
    if (base > 0 && altura > 0) {
        const perimetro = (base * 2) + (altura * 2);
        mensajeTrue('resultadoRectangulo', 'Perimetro', perimetro)
    }else{
        mensajeFalse('resultadoRectangulo')
    }
    
};

// Hallar area del Rectangulo
const areaRectangulo = () => {
    const base = datoInput('inputBaseRectangulo');
    const altura = datoInput('inputAlturaRectangulo');
    if (base > 0 && altura > 0) {
        const area = base * altura;
        mensajeTrue('resultadoRectangulo', 'Area', area);
    }else{
        mensajeFalse('resultadoRectangulo');
    }
};

// Hallar perimetro del Triangulo
const perimetroTriangulo = () => {
    const base = datoInput('inputBaseTriangulo');
    const lado1 = datoInput('inputLado1Triangulo');
    const lado2 = datoInput('inputLado2Triangulo');
    const altura = datoInput('inputAlturaTriangulo');
    if (base > 0 && lado1 > 0 && lado2 > 0 && altura > 0) {
        const perimetro = (base + lado1 + lado2);
        mensajeTrue('resultadoTriangulo', 'Perimetro', perimetro)
    }else{
        mensajeFalse('resultadoTriangulo')
    }
};

// Hallar area del Triangulo
const areaTriangulo = () => {
    const base = datoInput('inputBaseTriangulo');
    const altura = datoInput('inputAlturaTriangulo');
    if (base > 0 && altura > 0) {
        const area = (base * altura) / 2;
        mensajeTrue('resultadoTriangulo', 'Area', area);
    }else{
        mensajeFalse('resultadoTriangulo');
    }
};

// Hallar perimetro del circulo
const circunferenciaCirculo = () => {
    const radio = datoInput('inputCirculo');
    if (radio > 0) {
        const circunferencia = (radio * 2) * Math.PI;
        mensajeTrue('resultadoCirculo', 'Circunferencia', circunferencia);
    }else{
        mensajeFalse('resultadoCirculo');
    }
};

// Hallar area del circulo
const areaCirculo = () => {
    const radio = datoInput('inputCirculo');
    if (radio > 0) {
        const area = (radio * radio) * Math.PI;
        mensajeTrue('resultadoCirculo', 'Area', area);
    }else{
        mensajeFalse('resultadoCirculo');
    }
};


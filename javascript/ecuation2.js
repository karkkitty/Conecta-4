function res() {
    var a = document.getElementById("numa").value;
    var b = document.getElementById("numb").value;
    var c = document.getElementById("numc").value;

    var disc = b * b - 4 * a * c;
    var x1 = (-b - Math.sqrt(disc)) / (2 * a);
    var x2 = (-b + Math.sqrt(disc)) / (2 * a);

    if (disc >= 0) {
        alert("El resultado de la ecuación es " + x1 + " y " + x2);
    } else {
        alert("El resultado de la raiz no existe");
    }
}
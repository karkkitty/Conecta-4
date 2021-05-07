function res3() {
    var x = document.getElementById("numx").value;
    var y = document.getElementById("numy").value;
    var p = document.getElementById("nump").value;


    var F = Math.sqrt(x)
    var M = Math.pow(y, p)

    alert("La raiz cuadrada de " + x + " es " + F);
    alert("La potencia de " + y + " elevado a " + p + "es " + M);
}
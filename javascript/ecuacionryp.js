function res2() {
    var a = document.getElementById("numa").value;
    var b = document.getElementById("numb").value;
    var c = document.getElementById("numc").value;
    var d = document.getElementById("numd").value;
    var e = document.getElementById("nume").value;
    var f = document.getElementById("numf").value;



    alert("La ecuación parametica es:\n x = " + a + " + t" + d + "\n y = " + b + " + t" + e + "\n z = " + c + " + t" + f);
    alert("La ecuación continua es:\n (x - " + a + " )/" + d + " = (y - " + b + " )/" + e + " = (z - " + c + " )/" + f);
    alert("Las ecuaciones implícitas:\n" + e + "x + " + (-d) + "y = " + d * b + a * (-e) + " & " + f + "y + " + (-e) + "z = " + e * c + b * (-f));
}
document.addEventListener("DOMContentLoaded", function() {
    const pantalla = document.getElementById("pantalla");
    const botones = document.querySelectorAll(".boton");

    botones.forEach(boton => {
        boton.addEventListener("click", function() {
            const valor = boton.value;
            if (pantalla.value == "Error"){
                pantalla.value = "";
            }
            if (valor === "=") {
                pantalla.value = calcularResultado(pantalla.value);
            } else if (valor === "C") {
                pantalla.value = "";
            } else {
                pantalla.value += valor;
            }
        });
    });

    function calcularResultado(value) {
        try {
            const separarCadena = value.match(/(\d+(\.\d+)?|\+|\-|\*|\/)/g); // Para separar la cadena en un array
            if (!separarCadena) { 
                return "Error"
            };

            let resultado = parseFloat(separarCadena[0]);
            for (let i = 1; i < separarCadena.length; i += 2) {
                const operador = separarCadena[i];
                const siguienteNumero = parseFloat(separarCadena[i + 1]);

                switch (operador) {
                    case '+':
                        resultado += siguienteNumero;
                        break;
                    case '-':
                        resultado -= siguienteNumero;
                        break;
                    case '*':
                        resultado *= siguienteNumero;
                        break;
                    case '/':
                        resultado /= siguienteNumero;
                        break;
                    default:
                        return "Error";
                }
            }
            if (resultado === Infinity || isNaN(resultado)){
                return "Error";
            }
            return resultado;
        } catch (error) {
            return "Error";
        }
    }
});
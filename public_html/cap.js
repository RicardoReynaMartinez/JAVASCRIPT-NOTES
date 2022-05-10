/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        $(document).ready(function () {
            captcha();
        });


        function captcha() {

        //Generamos una variable que obtiene el abecedario y numeros para obtener un valor random y generar el captcha
        //this constant is for declarate the captcha values

            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


            let num1 = convertirEnteros(Math.floor(Math.random() * (1 - 62)) + 1);
            let num2 = convertirEnteros(Math.floor(Math.random() * (1 - 62)) + 1);
            let num3 = convertirEnteros(Math.floor(Math.random() * (1 - 62)) + 1);
            let num4 = convertirEnteros(Math.floor(Math.random() * (1 - 62)) + 1);
            let num5 = convertirEnteros(Math.floor(Math.random() * (1 - 62)) + 1);

        //Declaramos variables para obtener el caracter.

            let l1 = characters.charAt(num1);
            let l2 = characters.charAt(num2);
            let l4 = characters.charAt(num4);
            let l5 = characters.charAt(num5);

            let l3 = characters.charAt(num3);

            result = l1 + "" + l2 + "" + num3 + "" + l4 + "" + l5;



            //mandamos el valor obtenido al input para colocar el captcha generado

            document.getElementById("txtcaptcha").value = result;

        }

        function verificarCaptcha() {
            let resultado = document.getElementById("txtresultado").value;
            if (resultado == result) {
                alert("Felicidades has acertado");
            } else {
                alert("INTRUSO");
            }
        }

        function convertirEnteros(int) {
            if (int < 0) {
                int = int * -1;
            } else {
                int = int;
            }
            return int;
        }




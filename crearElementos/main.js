//crear una constante y asignarle el valor del elemento base
const Elemento = document.querySelector("#Elemento");
//crear el elemento con creteElement
const div1 =  document.createElement("div");
const input1 =  document.createElement("input");
//asignar un id al elemento creado
input1.id="input-1";
//darle un valor
input1.value="valor inicial";
//agregar un elemento al div creado
div1.append(input1);
//agregar elemento al div base
Elemento.append(div1);

const div_2 = document.createElement("div");
const span_1 = document.createElement("span");

span_1.textContent="Valor inicial del span"
div_2.append(span_1);
Elemento.append(div_2);

//cambiar valor automaticamente
input1.onkeydown=cambioDeValor
//funcion para asignar el valor al span
function cambioDeValor(e){
    span_1.textContent=e.target.value;
}




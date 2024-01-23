const data = [
    {nombre:"Nombre_uno", apellido:"Apellido_uno",nick:"uno"},
    {nombre:"Nombre_dos", apellido:"Apellido_dos",nick:"dos"},
    {nombre:"Nombre_tres", apellido:"Apellido_tres",nick:"tres"},
    {nombre:"Nombre_cuatro", apellido:"Apellido_cuatro",nick:"cuatro"},
    {nombre:"Nombre_cinco", apellido:"Apellido_cinco",nick:"cinco"},
    {nombre:"Nombre_seis", apellido:"Apellido_seis",nick:"seis"},
]   

const base = document.querySelector("#base");
const btnTabla=document.querySelector("#btnTabla");

btnTabla.addEventListener("click",LlenarTabla);

function LlenarTabla(){
    base.innerHTML="";
    
    data.forEach(element => {
       
        const tr1 = document.createElement("tr");
        const tdNombre = document.createElement("td");
        const tdApellido= document.createElement("td");
        const tdNick = document.createElement("td");
        
        tdNombre.textContent =element.nombre;
        tdApellido.textContent = element.apellido;
        tdNick.textContent = element.nick;
    
        tr1.append(tdNombre);
        tr1.append(tdApellido);
        tr1.append(tdNick);
        base.append(tr1);
    });
}


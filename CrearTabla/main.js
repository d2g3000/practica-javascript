const data = [
    {nombre:"Nombre_uno", apellido:"Apellido_uno",nick:"uno"},
    {nombre:"Nombre_dos", apellido:"Apellido_dos",nick:"dos"},
    {nombre:"Nombre_tres", apellido:"Apellido_tres",nick:"tres"},
    {nombre:"Nombre_cuatro", apellido:"Apellido_cuatro",nick:"cuatro"},
    {nombre:"Nombre_cinco", apellido:"Apellido_cinco",nick:"cinco"},
    {nombre:"Nombre_seis", apellido:"Apellido_seis",nick:"seis"},
]   

const base = document.querySelector("#base");


data.forEach(element => {
    
    const tr1 = document.createElement("tr");
    const td_nombre = document.createElement("td");
    const td_apellido= document.createElement("td");
    const td_nick = document.createElement("td");
    
    td_nombre.textContent =element.nombre;
    td_apellido.textContent = element.apellido;
    td_nick.textContent = element.nick;

    tr1.append(td_nombre);
    tr1.append(td_apellido);
    tr1.append(td_nick);
    base.append(tr1);
});
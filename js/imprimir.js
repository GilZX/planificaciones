const listarProductos=()=>fetch("./db.json").then((response)=>response.json());
const tabla=document.querySelector('#table-planificaciones2');
const table=document.querySelector('#table-body2');
const docente=document.getElementById('p-profesor');
const asignatura=document.getElementById('p-asignatura');
asignatura.textContent=localStorage.getItem('asignature');

listarProductos().then((data)=>{
    console.log(data)
    
    for (element of data['planificacion']){
        tabla.append(crearElemento(element.fecha,element.aprendisaje,element.metodologia,element.materiales,element.indicador));
        localStorage.setItem('asignature', 'Asignatura: '.concat(element.asignatura));
    }

    
    table.append(table);

})


function crearElemento(fecha,aprendisaje,metodologia,materiales,indicador,periodo,asignatura){

    let tr=document.createElement('tr');
    tr.classList.add('scope="row"');
    let td01=document.createElement('td');
    let td02=document.createElement('td');
    let td03=document.createElement('td');
    let td04=document.createElement('td');
    let td05=document.createElement('td');
    let td06=document.createElement('td');
    let td07=document.createElement('td');

    td01.textContent=fecha;
    td02.textContent=aprendisaje;
    td03.textContent=metodologia;
    td04.textContent=materiales;
    td05.textContent=indicador;
    td06.textContent=periodo;
    td07.textContent=asignatura;
    


    tr.append(td01);
    tr.append(td02);
    tr.append(td03);
    tr.append(td04);
    tr.append(td05);
    tr.append(td06);
    tr.append(td07);

    return tr;


}
const enviar=document.getElementById('btn_enviar');
const planifiacion=document.getElementById('btn_planificacion');



enviar.addEventListener('click',function(){

    const fecha=document.getElementById('fecha').value;
    const aprendisaje=document.getElementById('aprendisaje').value;
    const metodologia=document.getElementById('metodologia').value;
    const materiales=document.getElementById('materiales').value;
    const indicador=document.getElementById('indicador').value;
    const periodo=document.getElementById('periodo').value;
    const asignatura=document.getElementById('asignatura').value;

    
    console.log(fecha);
    registrar(fecha,aprendisaje,metodologia,materiales,indicador,periodo,asignatura);
    alert('planifiacion guardada exitosamente');
})

planifiacion.addEventListener('click',function(){
    window.location.href="./planificacion.html";
})




const registrar=(fecha,aprendisaje,metodologia,materiales,indicador,periodo,asignatura)=>{
   
    return fetch("http://localhost:3000/planificacion",{
        method:"POST",
        headers:{   
            "Content-Type":"application/json"
        },
        body:JSON.stringify({fecha,aprendisaje,metodologia,materiales,indicador,id:uuid.v4(),periodo,asignatura})
    })

        
}
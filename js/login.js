const usuarios=[

   {
        'username':"profesor01",
        'password':"holamundo"
   }, 
   {
    'username':"profesor02",
    'password':"holamundo"
    } ,
    {
    'username':"profesor03",
    'password':"holamundo"
    }
]



const btn_login=document.querySelector('#btn_login');

btn_login.addEventListener('click',function(){
    const username=document.getElementById('formUser').value;
    const password=document.getElementById('formPassword').value;
    let valido=false;
    console.log(username)
    console.log(password)
    for(e of usuarios){
        if(e.username==username && e.password==password){
            valido=true
        }
    }

    if(valido){
        alert("credenciales correctas");
        window.location.href="./planificacion.html"
    }else{
        alert("Credenciales INcorrectas");
    }


})




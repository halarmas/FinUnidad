window.onload=function(){
    rellenarGrados();
}

let resultadosAsignaturas = document.getElementById("resultadosAsignaturas");


function rellenarGrados(){
    const url = "http://localhost:3000/cursos/grados";
    fetch(url, {method:'GET'}).then(
        response => {
            console.log(response);
            return response.json();
        }
    ).then(
       data=>{
        console.log("data" + data);
        const arrayGrados = data.data;
        let desplegable = document.getElementById("grado");
        desplegable.innerHTML="";
     
        let out = '<option value="">Seleccione un grado</option>';

        for(let item of arrayGrados){
                out += '<option value="'+item.id+'">'+item.nombre+'</option>';
              
        }
        desplegable.innerHTML = out;
     
       } 
    ).catch(error=>{
        console.error("Error lista de grados: " +error);
    })

}

function rellenarAsignaturas(){

    let desplegable = document.getElementById("grado");
    const id = desplegable.value;

    const url = "http://localhost:3000/cursos/asignaturas?id="+id;
    fetch(url, {method:'GET'}).then(
        response => {
            console.log(response);

            console.log("primer then de asign");

            return response.json();
        }
    ).then(
       data=>{
        console.log("data" + data);

        console.log("segundo then de asign");

        const arrayAsignaturas = data.data;

        console.log("lo que sigue es arrayAsignaturas");
        console.log(arrayAsignaturas);

        if ( arrayAsignaturas != undefined){
            console.log("dentro del if")
            let resultadosAsignaturas = document.getElementById("resultadosAsignaturas");
            resultadosAsignaturas.innerHTML="";

            let out = '';

            for(let item of arrayAsignaturas){
               out+='<tr>';

               for (let value of Object.values(item)){
                out += '<td>'+value+'</td>';
               }

            out += '</tr>';    
            }
            resultadosAsignaturas.innerHTML=out;
        }
       }
        
       
    ).catch(error=>{
        console.error("Error lista de asiganturas: " +error);
    })

}
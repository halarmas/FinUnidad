window.onload=function(){
    rellenarAlumnos();
    rellenarGrados();
   // rellenarAños();
}

function buscarAsig(){

    alert("Empieza el filtrado");

    const grado = document.getElementById('grado').value;
    const año = document.getElementById('año').value;

    alert("grado"+ grado);
    alert("año"+ año);
   
        let url = "http://localhost:3000/gestion/asignaturas";
        url += "?grado="+grado+"&año="+año;
        


        console.log("esto es url" + url);
        console.debug("esto es url" + url);

        fetch(url, { method: 'GET' }).then(
            response => {
                console.log(response);
                return response.json();
            }
        ).then(
            data => {
                console.log(data);
                const arrayAsignaturas = data.data;
                rellenarTabla(arrayAsignaturas);
                console.debug('Hemos recuperado el json')



            }
        ).catch(error => {
            console.error("Error en catch: " + error.message);

        })
        function rellenarTabla(data) {
           // const table2=document.getElementById("asignaturas");
            const table = document.getElementById("resultado");
            //table2.style.display = "table";
            table.innerHTML = '';

            let out = '';
            for (let item of data) {
                out += '<tr><input type=checkbox>';
                for (let value of Object.values(item)) {
                    out += "<td>" + value + "</td>";
                }
                out += '</tr>';
            }

            table.innerHTML = out;
        }
    }


function rellenarAlumnos(){
    const url = "http://localhost:3000/gestion/alumno";
    fetch(url, {method:'GET'}).then(
        response => {
            console.log(response);
            return response.json();
        }
    ).then(
       data=>{
        console.log("data" + data);
        const arrayAlumno = data.data;
        let desplegable = document.getElementById("alumno");
        desplegable.innerHTML="";

        let out = '<option value="">Seleccione</option>';

        for(let item of arrayAlumno){
                out += '<option>'+item.nombre+' ' +item.apellido1+ '</option>';
            
        }
        desplegable.innerHTML = out;
       } 
    ).catch(error=>{
        console.error("Error lista de alumnos: " +error);
    })

}

function rellenarGrados(){
    const url = "http://localhost:3000/gestion/grado";
    fetch(url, {method:'GET'}).then(
        response => {
            console.log(response);
            return response.json();
        }
    ).then(
       data=>{
        console.log("data" + data);
        const arrayGrado = data.data;
        let desplegable = document.getElementById("grado");
        desplegable.innerHTML="";

        let out = '<option value="">Seleccione</option>';

        for(let item of arrayGrado){
                out += '<option value="'+item.id+'">'+item.nombre+'</option>';
            
        }
        desplegable.innerHTML = out;
       } 
    ).catch(error=>{
        console.error("Error lista de grados: " +error);
    })

}

/*function rellenarAños(){
    const url = "http://localhost:3000/gestion/año";
    fetch(url, {method:'GET'}).then(
        response => {
            console.log(response);
            return response.json();
        }
    ).then(
       data=>{
        console.log("data" + data);
        const arrayAño = data.data;
        let desplegable = document.getElementById("año");
        desplegable.innerHTML="";

        let out = '<option value="">Seleccione</option>';

        for(let item of arrayAño){
                out += '<option>'+item.anyo_inicio+'</option>';
            
        }
        desplegable.innerHTML = out;
       } 
    ).catch(error=>{
        console.error("Error lista de años: " +error);
    })

}*/



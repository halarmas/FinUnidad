window.onload=function(){
    buscarProfesores();
    rellenarDepartamentos();
}
function buscarProfesores(){
    alert("Todos los profesores en tabla");

    const url = "http://localhost:3000/profesores";

    fetch (url,{method:'GET'}).then(
        response => { 
            console.log(response);
            return response.json();
        }
    ).then(
        data => {
            console.log(data);
            const arrayProfesores = data.data;
            rellenarTabla(arrayProfesores);
            console.debug('Hemos recuperado el json')
            
            
        }
    ).catch(error => {
        console.error("Error en catch: "+error.message);
       
    })
}

function filtrarProfesores(){
    alert("Empiza el filtrado");

    const url = "http://localhost:3000/profesores/filter";
    const form = document.getElementById("searchForm");
    console.log("FormData es esto" +FormData.searchForm);
    var datos = new FormData(form);
    console.log(datos);
    console.log(datos.get('nombre'));
    console.log(datos.get('apellido1'));
    console.log(datos.get('sexo'));
    console.log(datos.get('departamento'));

    url += "?nombre="+datos.get('nombre')+"&";
    url += "?apellido1=" + datos.get('apellido1') + "&";
    url += "?sexo=" + datos.get('sexo') + "&";
    url += "?departamento=" + datos.get('departamento');

    console.log(url);
    console.debug(url);


    fetch (url,{method:'GET'}).then(
        response => { 
            console.log(response);
            return response.json();
        }
    ).then(
        data => {
            console.log(data);
            const arrayProfesores = data.data;
            rellenarTabla(arrayProfesores);
            console.debug('Hemos recuperado el json')

            
            
        }
    ).catch(error => {
        console.error("Error en catch: "+error.message);
       
    })
    function rellenarTabla(data){
        const table = document.getElementById("resultados");
        table.innerHTML = '';
    
        let out = '';
        for(let item of data){
            out += '<tr>';
           for(let value of Object.values(item)){
            out += "<td>" + value + "</td>";
           }
            out += '</tr>';
        }
    
        table.innerHTML = out;
    }

}

/*function listaDepartamentos(){
    alert("Departamentos cogidos");

    const url = "http://localhost:3000/profesores/departamento";

    fetch (url,{method:'GET'}).then(
        response => { 
            console.log(response);
            return response.json();
        }
    ).then(
        data => {
            console.log(data);
            const arrayDepartamentos = data.data;
            
            console.debug('Hemos recuperado los departamentos', arrayDepartamentos)   
        }
    ).catch(error => {
        console.error("Error en catch: "+error.message);
       
    })
}*/

function rellenarTabla(data){
    const table = document.getElementById("resultados");
    table.innerHTML = '';

    let out = '';
    for(let item of data){
        out += '<tr>';
       for(let value of Object.values(item)){
        out += "<td>" + value + "</td>";
       }
        out += '</tr>';
    }

    table.innerHTML = out;
}
function rellenarDepartamentos(){
    const url = "http://localhost:3000/profesores/departamento";
    fetch(url, {method:'GET'}).then(
        response => {
            console.log(response);
            return response.json();
        }
    ).then(
       data=>{
        console.log("data" + data);
        const arrayDepartamentos = data.data;
        let desplegable = document.getElementById("departamento");
        desplegable.innerHTML="";

        let out = '<option value="">Seleccione</option>';

        for(let item of arrayDepartamentos){
                out += '<option>'+item.Departamento+'</option>';
            
        }
        desplegable.innerHTML = out;
       } 
    ).catch(error=>{
        console.error("Error lista de departamentos: " +error);
    })

}



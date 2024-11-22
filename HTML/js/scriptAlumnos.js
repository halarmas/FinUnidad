function buscarAlumnos(){
    
    alert("Empieza el filtrado");

    const idNif = document.getElementById('idNif').value;
    const nombre = document.getElementById('nombre').value;

    if (idNif && nombre) {
        alert("Solo puede buscar por ID/NIF o por nombre, no ambos.");
        return;
    }else if (nombre == ''){

    let url = "http://localhost:3000/alumnos/filter";
    url += "?idNif=" + idNif ;
    //url += "nombre=" + nombre;
   

    console.log("esto es url" + url);
    console.debug("esto es url" + url);

    fetch (url,{method:'GET'}).then(
        response => { 
            console.log(response);
            return response.json();
        }
    ).then(
        data => {
            console.log(data);
            const arrayAlumnos = data.data;
            rellenarTabla(arrayAlumnos);
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
    
        table.innerHTML = out;}

}else if(idNif == '') { 
    let url = "http://localhost:3000/alumnos";
    url += '';
alert("HOLA");
    fetch (url,{method:'GET'}).then(
        response => { 
            console.log(response);
            return response.json();
        }
    ).then(
        data => {
            console.log(data);
            const arrayAlumnos = data.data;
            rellenarTabla(arrayAlumnos);
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
    }

function buscar(){
    alert("Hola boton");

    const errorElement = document.getElementById("error");
    const url = "http://localhost:3000/profesores";

    fetch (url,{method:'GET', }).then(
        response => { 
            console.log(response);
            return response.json();
        }
    ).then(
        data => {
            console.log(data);
            const arrayProfesores = data.data;
            rellenarTabla(arrayProfesores);
            errorElement.textContent="Hemos recuperado el JSON";
            
        }
    ).catch(error => {
        console.error("Error en catch: "+error.message);
        errorElement.textContent = "Error fetching data: "+error.message;
    })
}

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
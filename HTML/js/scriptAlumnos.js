function buscarAlumnos() {

    alert("Empieza el filtrado");

    const idNif = document.getElementById('idNif').value;
    const nombre = document.getElementById('nombre').value;

    if (idNif && nombre) {
        alert("Solo puede buscar por ID/NIF o por nombre, no ambos.");
        return;
    } else if (nombre == '') {

        let url = "http://localhost:3000/alumnos/filter";
        url += "?idNif=" + idNif;
        url += "nombre=" + nombre;


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
                const arrayAlumnos = data.data;
                rellenarTabla(arrayAlumnos);
                console.debug('Hemos recuperado el json')



            }
        ).catch(error => {
            console.error("Error en catch: " + error.message);

        })
        function rellenarTabla(data) {
            const table = document.getElementById("resultados");
            table.innerHTML = '';

            let out = '';
            for (let item of data) {
                out += '<tr>';
                for (let value of Object.values(item)) {
                    out += "<td>" + value + "</td>";
                }
                out += '<td onclick="buscarAsignaturas()"><i class="fas fa-jedi"></i></td>' + '</tr>';
            }

            table.innerHTML = out;
        }

    } else if (idNif == '') {
        let url = "http://localhost:3000/alumnos/";
        url += nombre;
        alert("HOLA");
        fetch(url, { method: 'GET' }).then(
            response => {
                console.log(response);
                return response.json();
            }
        ).then(
            data => {
                console.log("PRIMER THEN");
                console.log(data);
                const arrayAlumnos = data.data.data;
                console.log("ARRAYALUMNOS" + data.data.data);
                rellenarTabla(arrayAlumnos);
                console.debug('Hemos recuperado el json')



            }
        ).catch(error => {
            console.error("Error en catch: " + error.message);

        })
        function rellenarTabla(data) {
            const table = document.getElementById("resultados");
            table.innerHTML = '';

            let out = '';
            for (let item of data) {
                out += '<tr>';
                for (let value of Object.values(item)) {
                    out += "<td>" + value + "</td>";
                }
                out += '<td onclick="buscarAsignaturas()"><i class="fas fa-jedi"></i></td>' + '</tr>';
            }

            table.innerHTML = out;
        }

    }
}

function buscarAsignaturas(){

    alert("Empieza el filtrado");

    const idNif = document.getElementById('idNif').value;
    const nombre = document.getElementById('nombre').value;

    
   
        let url = "http://localhost:3000/alumnos/asignaturas";
        url += "?idNif=" + idNif;
        


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
            const table2=document.getElementById("asignaturasTable");
            const table = document.getElementById("resultado");
            table2.style.display = "table";
            table.innerHTML = '';

            let out = '';
            for (let item of data) {
                out += '<tr>';
                for (let value of Object.values(item)) {
                    out += "<td>" + value + "</td>";
                }
                out += '<td onclick="buscarAsignaturas()"><i class="fas fa-jedi"></i></td>' + '</tr>';
            }

            table.innerHTML = out;
        }
    }


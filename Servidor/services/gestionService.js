const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function listaAlumnos(){
    let query= `SELECT DISTINCT nombre, apellido1, apellido2 FROM alumno;`;
    const rows = await db.query(query);
    const data = helper.emptyOrRows(rows); 
      return { data };

  }

  async function listaGrados(){
    let query= `SELECT DISTINCT grado.id, grado.nombre FROM grado;`;
    const rows = await db.query(query);
    const data = helper.emptyOrRows(rows); 
      return { data };
  }

  /*async function listaAños(){
    let query= `SELECT DISTINCT anyo_inicio FROM curso_escolar;`;
    const rows = await db.query(query);
    const data = helper.emptyOrRows(rows); 
      return { data };

  }*/


      async function getAsignaturas(grado, año){
  
        let query = `SELECT asignatura.nombre from asignatura JOIN grado on grado.id = asignatura.id_grado JOIN curso_escolar ON curso_escolar.id = asignatura.curso where  `;
        console.debug("Este es principio de query")
        
            const params = [];  
            query += " grado.id = ? AND curso_escolar.id = ? ";
            params.push(grado);
            params.push(año);
          
         
          console.log("grado" +grado);
          console.log("query" +query);
          console.log("params" + params);
    
          const rows = await db.query(query, params);
        
          const data = helper.emptyOrRows(rows);
        
         
          return { data };
      }

  module.exports = {
    listaAlumnos,
    listaGrados,
    //listaAños
    getAsignaturas
    
  }

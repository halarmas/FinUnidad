const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAlumnosIdNif(idNif){
  
    let query = `SELECT alumno.id, alumno.nif, alumno.nombre, alumno.apellido1, alumno.apellido2, alumno.ciudad,alumno.sexo from alumno WHERE `;
    console.debug("Este es principio de query")
    const params = [];  

    
        query += " alumno.id = ? OR alumno.nif = ?";
        params.push(idNif);
        params.push(idNif);
      
     
      console.log("idNif" +idNif);
      console.log("query" +query);
      console.log("params" +params);

      const rows = await db.query(query, params);
    
      const data = helper.emptyOrRows(rows);
    
     
      return { data };
  }

  async function getAlumnoNombre(nombre) {

    let query =  'SELECT alumno.id, alumno.nif, alumno.nombre, alumno.apellido1, alumno.apellido2, alumno.ciudad,alumno.sexo from alumno WHERE nombre="' + nombre + '";';
    
    console.log("query" +query);
    const rows = await db.query(query);
    const data = helper.emptyOrRows(rows);
  
    return {data};
    
  }


  module.exports = {
    getAlumnosIdNif,
    getAlumnoNombre
    
  }
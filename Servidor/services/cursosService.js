const db = require('./db');
const helper = require('../helper');
const config = require('../config');


  async function listaGrados(){
    let query= `SELECT * FROM grado;`;
    const rows = await db.query(query);
    const data = helper.emptyOrRows(rows); 
      return { data };

  }

  async function listaAsignaturas(idgrado){
    let query= `SELECT asignatura.id, asignatura.nombre, asignatura.creditos, asignatura.curso, asignatura.cuatrimestre, profesor.nombre AS "nombre_profesor" FROM asignatura left join profesor on asignatura.id_profesor = profesor.id where id_grado = "` +idgrado+ `";`;
    console.log(query);
    const rows = await db.query(query);
    const data = helper.emptyOrRows(rows); 
      return { data };

  }



  module.exports = {
   listaGrados,
   listaAsignaturas
  }
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAllProfesores(){
  
    const rows = await db.query(`SELECT profesor.nif,profesor.nombre,profesor.apellido1,profesor.apellido2,profesor.ciudad,profesor.sexo,departamento.nombre as Departamento_Nombre from profesor LEFT JOIN departamento ON profesor.id_departamento = departamento.id `);
    
    const data = helper.emptyOrRows(rows);
    
  
    return {data};
  }

   /* async function getProfesores(nombre,apellido1,sexo,departamento) {

  const rows = await db.query('SELECT profesor.nif,profesor.nombre,profesor.apellido1,profesor.apellido2,profesor.ciudad,profesor.sexo,departamento.nombre as Departamento_Nombre FROM profesor JOIN departamento ON profesor.id_departamento = departamento.id WHERE nombre=' + nombre +'OR apellido1=' + apellido1 + 'OR sexo=' + sexo + 'OR departamento=' + departamento + ';');
  
    const data = helper.emptyOrRows(rows);
  
    console.log('SELECT profesor.nif,profesor.nombre,profesor.apellido1,profesor.apellido2,profesor.ciudad,profesor.sexo,departamento.nombre FROM profesor JOIN departamento ON profesor.id_departamento = departamento.id WHERE nombre=' + nombre +'OR apellido1=' + apellido1 + 'OR sexo=' + sexo + 'OR departamento=' + departamento + ';');
    return {data};*/

    async function filtrarProfesores(nombre, apellido1, sexo, departamento) {
      
      let query = `SELECT profesor.nif, profesor.nombre, profesor.apellido1, profesor.apellido2, profesor.ciudad, profesor.sexo,          departamento.nombre AS Departamento_Nombre
      FROM profesor
      JOIN departamento ON profesor.id_departamento = departamento.id
      WHERE 1=1`;
      
      

      const params = [];  
    
      
      if (nombre) {
        query += " AND profesor.nombre = ?";
        params.push(nombre);
      }
      if (apellido1) {
        query += " AND profesor.apellido1 = ?";
        params.push(apellido1);
      }
      if (sexo) {
        query += " AND profesor.sexo = ?";
        params.push(sexo);
      }
      if (departamento) {
        query += " AND departamento.nombre = ?";
        params.push(departamento);
      }
    
      console.log(query);
      console.log(params);

      const rows = await db.query(query, params);
    
      const data = helper.emptyOrRows(rows);
    
     
      return { data };
    
  }
  async function listaDepartamentos(){
    let query= `SELECT DISTINCT nombre AS "Departamento" FROM departamento;`;
    const rows = await db.query(query);
    const data = helper.emptyOrRows(rows); 
      return { data };

  }


  module.exports = {
    getAllProfesores,
    filtrarProfesores,
    listaDepartamentos
  }
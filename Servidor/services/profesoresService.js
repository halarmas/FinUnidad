const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAllProfesores(){
  
    const rows = await db.query(`SELECT profesor.nif,profesor.nombre,profesor.apellido1,profesor.apellido2,profesor.ciudad,profesor.sexo,departamento.nombre as Departamento_Nombre from profesor LEFT JOIN departamento ON profesor.id_departamento = departamento.id  `);
    
    const data = helper.emptyOrRows(rows);
    
  
    return {data};
  }

  async function getProfesores(nombre,apellido1,sexo,departamento) {

    const rows = await db.query('SELECT profesor.nif,profesor.nombre,profesor.apellido1,profesor.apellido2,profesor.ciudad,profesor.sexo,departamento.nombre as Departamento_Nombre FROM profesor JOIN departamento ON profesor.id_departamento = departamento.id WHERE nombre=' + nombre +'OR apellido1=' + apellido1 + 'OR sexo=' + sexo + 'OR departamento=' + departamento + ';');
  
    const data = helper.emptyOrRows(rows);
  
    console.log('SELECT profesor.nif,profesor.nombre,profesor.apellido1,profesor.apellido2,profesor.ciudad,profesor.sexo,departamento.nombre FROM profesor JOIN departamento ON profesor.id_departamento = departamento.id WHERE nombre=' + nombre +'OR apellido1=' + apellido1 + 'OR sexo=' + sexo + 'OR departamento=' + departamento + ';');
    return {data};
    
  }



  

  module.exports = {
    getAllProfesores,
    getProfesores,
    

  }
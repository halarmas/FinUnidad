const express = require("express");
const router = express.Router();


const alumnosService = require("../services/alumnosService");

router.get("/filter", async function (req, res,) {
	
	const {idNif} = req.query;

	try {
        const resultado = await alumnosService.getAlumnosIdNif(idNif);
        console.log(resultado);
        const msg = "Se han filtrado correctamente todos los alumnos con ese id o ese nif";
		let data = resultado.data;
        console.log("resultado.data" + resultado.data);
        res.status(200).json({msg,data});
        console.debug(data);
        
		
	} catch (err){
		console.error("Error en busqueda de alumnos con ese id o ese nif", err.message);
		res.sendStatus(500);
	}
});

router.get("/:nombre", async function (req, res,) {
	
	const nombre  = req.params.nombre;

	try {
        const resultado = await alumnosService.getAlumnoNombre(nombre);
        const msg = "Se han filtrado correctamente todos los alumnos con ese nombre";
		let data = resultado;
        res.status(200).json({msg,data});
        console.debug(data);
		
	} catch (err){
		console.error("Error en busqueda de alumnos con ese nombre", err.message);
		res.sendStatus(500);
	}
});




module.exports = router;
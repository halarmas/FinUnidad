const express = require("express");
const router = express.Router();


const gestionService = require("../services/gestionService");

router.get("/alumno", async function (req, res,) {
	
	try {
        const resultado = await gestionService.listaAlumnos();
        const msg = "Se han encontrado correctamente todos los alumnos";
		let data = resultado.data;
        res.status(200).json({msg,data});
        console.debug(data);
		
	} catch (err){
		console.error("Error en busqueda de alumnos", err.message);
		res.sendStatus(500);
	}
});

router.get("/grado", async function (req, res,) {
	
	try {
        const resultado = await gestionService.listaGrados();
        const msg = "Se han encontrado correctamente todos los grados";
		let data = resultado.data;
        res.status(200).json({msg,data});
        console.debug(data);
		
	} catch (err){
		console.error("Error en busqueda de grados", err.message);
		res.sendStatus(500);
	}
});

/*router.get("/año", async function (req, res,) {
	
	try {
        const resultado = await gestionService.listaAños();
        const msg = "Se han encontrado correctamente todos los años";
		let data = resultado.data;
        res.status(200).json({msg,data});
        console.debug(data);
		
	} catch (err){
		console.error("Error en busqueda de años", err.message);
		res.sendStatus(500);
	}
});*/

router.get("/asignaturas", async function (req, res,) {
	
    const {grado} = req.query;
    const {año} = req.query;

	try {
        const resultado = await gestionService.getAsignaturas(grado, año);
        console.log(resultado);
        const msg = "Se han encontrado correctamente todas las asignaturas";
		let data = resultado.data;
        res.status(200).json({msg,data});
        console.debug(data);
		
	} catch (err){
		console.error("Error en busqueda de asignaturas", err.message);
		res.sendStatus(500);
	}
});



module.exports = router;

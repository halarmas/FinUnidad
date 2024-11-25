const express = require("express");
const router = express.Router();


const cursosService = require("../services/cursosService");


router.get("/grados", async function (req, res,) {
	
	try {
        const resultado = await cursosService.listaGrados();
        const msg = "Se han encontrado correctamente todos los grados";
		let data = resultado.data;
        res.status(200).json({msg,data});
        console.debug(data);
		
	} catch (err){
		console.error("Error en busqueda de departamentos", err.message);
		res.sendStatus(500);
	}
});

router.get("/asignaturas", async function (req, res,) {

	let id = req.query.id;
	
	try {
        const resultado = await cursosService.listaAsignaturas(id);
        const msg = "Se han encontrado correctamente todos los asignaturas";
		let data = resultado.data;
        res.status(200).json({msg,data});
        console.debug(data);
		
	} catch (err){
		console.error("Error en busqueda de departamentos", err.message);
		res.sendStatus(500);
	}
});



module.exports = router;
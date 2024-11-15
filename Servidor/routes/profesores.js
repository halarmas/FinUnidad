const express = require("express");
const router = express.Router();


const profesoresService = require("../services/profesoresService");


router.get("/", async function (req, res,) {
	
	try {
        const resultado = await profesoresService.getAllProfesores();
        const msg = "Se han encontrado correctamente todos los profesores";
		let data = resultado.data;
        res.status(200).json({msg,data});
        console.debug(data);
		
	} catch (err){
		console.error("Error en busqueda de profesores", err.message);
		res.sendStatus(500);
	}
});


module.exports = router;
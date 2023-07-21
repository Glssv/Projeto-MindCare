const consultorioController = require("../controller/consultorioController")
const express = require("express")

const router = express.Router()

router.get("/consultorios/cidade", consultorioController.findByCidade) 
router.post("/consultorios", consultorioController.addNewConsultorios) 
router.get("/consultorios", consultorioController.findAllConsultorios)
router.get("/consultorios/:id", consultorioController.findConsultoriosById)
router.patch("/consultorios/:id", consultorioController.updateConsultorios) 
router.delete("/consultorios/:id", consultorioController.deleteConsultorios)

module.exports = router 
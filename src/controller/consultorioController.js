const ConsultoriosModel = require("../model/consultoriosModel")

const addNewConsultorios = async (req, res) => {
    try {
        const {consultorio, cidade, endereco, psicologo,psiquiatra, numero} = req.body

        const newConsultorio = new ConsultoriosModel({consultorio, cidade, endereco, psicologo,psiquiatra, numero})
        const savedConsultorio = await newConsultorio.save()
        res.status(201).json({message:"O consultorio foi cadastrado com sucesso!", savedConsultorio})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const findAllConsultorios = async (req, res) => {
    try {
        const allConsultorios = await ConsultoriosModel.find()
        res.status(200).json(allConsultorios)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

const findConsultoriosById = async (req, res) => {
    try {
        const findConsultorios = await ConsultoriosModel.findById(req.params.id);
        res.status(200).json(findConsultorios);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Não foi possivel achar pelo ID"})
    }
}

const findByCidade = async (req, res) => {
    try {
        const cidadeReq = req.query.cidade.toLocaleLowerCase()
        const cidadeEncontrada = await ConsultoriosModel.filter((consultorios) => consultorios.cidade.toLocaleLowerCase().includes(cidadeReq))
        res.status(200).json({cidadeEncontrada})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const updateConsultorios = async (req, res) => {
    try {
        const {consultorio, cidade, endereco, psicologo, psiquiatra, numero} = req.body

        const updateConsultorio = await ConsultoriosModel.findByIdAndUpdate( 
            req.params.id, {
            consultorio, cidade, endereco, psicologo, psiquiatra, numero
        })
        res.status(201).json({message:"O consultorio foi adualizado com sucesso :) :) :)", updateConsultorio})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const deleteConsultorios = async (req, res) => {
    try {
        const {id} = req.params
        const deletedConsultorios = await ConsultoriosModel.findByIdAndDelete(id)
        const message = ` o console ${deletedConsultorios.consultorio} foi deletado com sucesso.`
        res.status(201).json({message})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    addNewConsultorios,
    findAllConsultorios,
    findConsultoriosById,
    findByCidade,
    updateConsultorios,
    deleteConsultorios
}
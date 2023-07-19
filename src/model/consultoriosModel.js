const mongoose = require('mongoose')
const consultoriosSchema = mongoose.Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        }, 
        consultorio: {
            type: String,
            required: true, 
        },
        cidade: {
            type: String,
            required: true, 
        },
        endereco: {
            type: String,
            required: true, 
        },
         psicologo: {
            type: String,
            required: true, 
        },
        psiquiatra: {
            type: String,
            required: true, 
        },
        numero: {
            type: Number,
            required: true, 
         },
    }
)

const Model = mongoose.model('Consultorio', consultoriosSchema)

module.exports = Model
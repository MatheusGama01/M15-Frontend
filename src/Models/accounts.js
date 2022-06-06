import mongoose from 'mongoose';

const contasSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        email: {type: String, required: true},
        senha: {type: String, required: true},
        admin: {type: Boolean, required: true},
    }
)

const contas = mongoose.model('accounts', contasSchema);

export default contas;
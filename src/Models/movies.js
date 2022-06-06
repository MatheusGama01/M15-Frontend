import mongoose from 'mongoose';

const filmeSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        diretor: {type: String, required: true},
        genero: {type: String, required: true},
    }
)

const filmes = mongoose.model('movies', filmeSchema);

export default filmes;
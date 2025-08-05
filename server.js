import express from 'express'

const app = express()

app.use(express.json())

const usuarios = []

//Rotas
app.get('/cadastro',(req,res)=>{
    //res.send('Deu Bom no Get')
    res.status(200).json(usuarios)

})
app.post('/cadastro',(req,res)=>{
        usuarios.push(req.body)
        res.status(201).json(req.body)
        res.send('Deu bom no Post')
        
})
//Configurar Porta

app.listen(3000,()=>{console.log('Server Rodando a Todo Vapor')})
import express from 'express'
import cors from 'cors'

import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express()

app.use(cors())
app.use(express.json())


//Rotas

app.delete('/cadastro/:id', async (req,res)=>{

        await prisma.usuario.delete({
                where:{
                        id:req.params.id
                }
        })
        res.status(201).json({"mensagem":"Usuario removido"})
        //console.log(req.params.id)
})

app.put('/cadastro/:id', async (req,res)=>{

        await prisma.usuario.update({
                where:{
                        id:req.params.id
                },
                data:{
                        email: req.body.email,
                        nome:  req.body.nome,
                        idade: req.body.idade
                }
        })
        res.status(201).json({"mensagem":"Usuario Atualizado"})
        //console.log(req.params.id)
})

app.get('/cadastro',async (req,res)=>{
  const usuarios = await prisma.usuario.findMany();
    res.status(200).json(usuarios)

})
app.post('/cadastro',async (req,res)=>{
      
        await prisma.usuario.create({
                data:{
                    email: req.body.email,
                    nome:  req.body.nome,
                    idade: req.body.idade
                }
        })
        res.status(201).json(req.body)
       
        
})
//Configurar Porta

app.listen(3000,()=>{console.log('Server Rodando a Todo Vapor')})
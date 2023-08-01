import express from 'express';


const server = express();


interface Teste {

}

server.get('/teste', (status, res) => {//retornos da requisição

    return res.send('Primeira API rest rodando!');
});


export { server };
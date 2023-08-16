import { Router } from 'express';
import { StatusCodes } from 'http-status-codes'; 


import { cidadesController } from './../controllers';


const router = Router();

router.post('/cidades', cidadesController.create);


router.get('/messages', (req, response) => {//retornos da requisição

    return response.send('Endpoint responsável pelas trocas de mensagens');
});

router.get('/query', (req, response) => {//o query permite passar os dados direto pelo navegador, no exemplo pra retornar o valor foi necessario passar http://localhost:3333/query?teste=helloWord
    console.log(req.query.teste);//Key teste / value helloWord
    return response.json(req.body);
});

router.get('/', (req, response) => {//nesse exemplo foi necessário instalar pacotes "npm add http-status-codes" e importar a biblioteca statuscodes
    console.log(req.body);
    return response.status(StatusCodes.FORBIDDEN).json(req.body); //Dessa forma, ao invés de colocar manualmente o status code, ao puxar o statuscodes ele dá as sugestoes do status
});

router.get('/header', (req, response) => {//retornos da requisição tipo header
    console.log(req.header);
    return response.send('header é uma das formas de receber dados do front-end');
});


router.get('/params/:id', (req, response) => {//retornos da requisição tipo params, no exemplo o usuario ira passar algum parametro pelo "id", 

    console.log(req.params.id);    //para executar a requisicao é preciso passar o valor do id, no exemplo foi http://localhost:3333/params/:123
    return response.send('params é uma das formas de receber informações pelo endpoint como textos, numeros etc');
});


export { router };
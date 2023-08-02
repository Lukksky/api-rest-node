import { Router } from 'express';

const router = Router();



router.get('/messages', (status, response) => {//retornos da requisição

    return response.send('Endpoint responsável pelas trocas de mensagens');
});

router.get('/commands', (status, response) => {//retornos da requisição

    return response.send('Endpoint responsável pelos comandos');
});

router.get('/', (status, response) => {//retornos da requisição

    return response.send('Olá DEV');
});



export { router };
'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/register', 'AuthController.register')
/* Rota de login usando o controller Auth e acessando a função 'authenticate' */
Route.post('/login', 'AuthController.authenticate');
/* Rota home feita para testes do metodo middleware */
Route.get('/home', 'AppController.index').middleware(['auth:jwt']);

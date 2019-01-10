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

Route
    .resource('posts','PostController')
    // .apiOnly()
    // .only(['index','show'])
    .except(['destory','store','edit'])

// Route.get('/posts', 'PostController.index')
//
// Route.get('/posts/create', 'PostController.create')
//
// Route.get('/posts/:id','PostController.show')
//
// Route.get('/posts/:id/edit', 'PostController.edit')
//
// Route.post('/posts', 'PostController.store')
//
// Route.patch('/posts/:id','PostController.update')
//
// Route.delete('/posts/:id','PostController.destory')

Route
    .get('/list-all-users',() => {
      return `List of users.`
    })
    .as('users.index')

Route
    .get('/users', ({ request }) => {
      switch (request.format()) {
        case 'json':
          return [
            { name: 'Johnny'},
            { nickname: 'SherDavincl' }
          ]

        default:
          return `
            - name: Johnny
            - nickname: SherDavincl
          `
      }
    })
    .formats(['json', 'html'], true)

Route
    .group(() => {
      Route.get('users',() => {
        return `Manage users.`
      })
      Route.get('posts',() => `Manage posts.`)
    })
    .prefix('admin')

Route.any('*', ({ view }) => view.render('welcome'))

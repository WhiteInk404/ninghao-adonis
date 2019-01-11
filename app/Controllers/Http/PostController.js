'use strict'

class PostController {
  index () {
    return `List of Posts.`
  }

  show ({ params }) {
    return `You're watching post ${ params.id }.`
  }

  store () {
    return `Post request has been created.`
  }

  update ({ params }) {
    return `Post ${ params.id } has been updated.`
  }

  edit ({ params }) {
    return `Editing post ${ params.id }.`
  }

  destory ({ params }) {
    return `Post ${ params.id } has been deleted.`
  }

  create () {
    return `Post created.`
  }

}

module.exports = PostController

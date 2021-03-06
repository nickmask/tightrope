var comment = require('../data/seed-comments')

exports.seed = function (knex, Promise) {
  var commentPromises = []
  comment.forEach(function (comment) {
    commentPromises.push(createComment(knex, comment))
  })
  return Promise.all(commentPromises)
}

function createComment (knex, comment) {
  return knex.table('comments')
    .insert(comment)
}

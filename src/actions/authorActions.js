"use Strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionsTypes');

var AutohorActions = {
  createAuthor: function (author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    // Hey dispatcher, go tell all the stores that an author was just created
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author:newAuthor
    });
  }
};

module.exports = AuthorActions;
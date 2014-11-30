'use strict';

app.factory('Players', function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var players = $firebase(ref.child('players')).$asArray();

 var Players = {
  all: players,
  create: function (player) {
    return players.$add(player);
  },
    get: function (playerId) {
      return $firebase(ref.child('players').child(playerId)).$asObject();
    },
    delete: function (player) {
      return players.$remove(player);
    },
  };

  return Players;
});
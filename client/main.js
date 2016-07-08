Template.leaderboard.events({
'click .players': function(){
var playerId = this._id;

 Session.set('selectedPlayer',playerId );
var selectedPlayer = Session.get('selectedPlayer');
console.log(selectedPlayer);

 
    
    console.log("You clicked a .player element");

},
'click .increment': function(){
    var selectedPlayer = Session.get('selectedPlayer');
   List.update({_id: selectedPlayer }, {$inc :{score: 5} } );
  
},
'click .decrement': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    List.update({ _id: selectedPlayer }, {$inc: {score: -5} });
},
'click .remove': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    List.remove({ _id: selectedPlayer });
}


});
Template.form.events({
'submit form': function(event){
    event.preventDefault();
    var playerNameVar = event.target.playerName.value;
    List.insert({
        name: playerNameVar,
        score: 0
    });
}
});

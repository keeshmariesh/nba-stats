var firstName;
var lastName;

$("form").submit(function(e){
    e.preventDefault();
    firstName = $("#firstNameInput").val();
    lastName = $("#lastNameInput").val();

    $("img").attr("src", "https://nba-players.herokuapp.com/players/"+lastName+"/"+firstName);
}); 
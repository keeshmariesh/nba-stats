var player = new Object();
player.firstName;
player.lastName;

$("form").submit(function(e){
    e.preventDefault();
    player.firstName = $("#firstNameInput").val();
    player.lastName = $("#lastNameInput").val();

    $("img").attr("src", "https://nba-players.herokuapp.com/players/"+player.lastName+"/"+player.firstName);

    $.get("https://nba-players.herokuapp.com/players-stats/"+player.lastName+"/"+player.firstName, function(data){
        $("h2").text(player.firstName+" "+player.lastName+" - "+data.team_name);
        $("#points").text("PPG: "+data.points_per_game);
        $("#assts").text("APG: "+data.assists_per_game);
        $("#rebs").text("RPG: "+data.rebounds_per_game);
        $("#mins").text("MPG: "+data.minutes_per_game);
    }, "json");
});
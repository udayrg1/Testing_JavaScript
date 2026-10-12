function playerName(name:string) : void

{
    console.log(name);
}

playerName("Dhoni");

function playerPlay(game: (name:string) => void) : void
{
    game("Cricket");
}

playerPlay(playerName);
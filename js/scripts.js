year = new Date().getFullYear();
document.getElementById('year').innerText = year;

function updatePlayers() {
    var playersCount = fetch('https://mcapi.us/server/status?ip=supercraft05.aternos.me')
        .then((res) => res.json())
        .then((json) => document.
            getElementById('players-count').innerText = json['players']['now']);
}
updatePlayers()
setInterval(updatePlayers,60000)
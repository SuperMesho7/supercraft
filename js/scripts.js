year = new Date().getFullYear();
document.getElementById('year').innerText = year;

apiUrl = 'https://mcapi.us/server/status?ip=supercraft05.aternos.me&port=58215'

function updatePlayersCount() {
    fetch(apiUrl)
        .then((res) => res.json())
        .then((json) => document.
            getElementById('players-count').innerText = json['players']['now']);
}
updatePlayersCount();
setInterval(updatePlayersCount,60000);

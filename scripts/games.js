const scoreboardURL = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard?limit=500&dates=20220801-20220905'


const fetchScoreboard = async () => {
    const jsonData = await fetch (scoreboardURL)
    const scores = await jsonData.json()
    console.log(scores) 

    
    
    let gamesList = scores.events.map(score => {
            
        const gameId = score.id
        const gameName = score.name
        const awayScore = score.competitions[0].competitors[1].score
        const homeScore = score.competitions[0].competitors[0].score
        const awayTeamName = score.competitions[0].competitors[1].team.displayName
        const homeTeamName = score.competitions[0].competitors[0].team.displayName
        const awayTeamColor = score.competitions[0].competitors[1].team.color
        const homeTeamColor = score.competitions[0].competitors[0].team.color
        const awayLogo = score.competitions[0].competitors[1].team.logo
        const homeLogo = score.competitions[0].competitors[0].team.logo
        
        
        let awayTeamScore = document.getElementById("awayTeamScore")
        awayTeamScore.style.background = `#${awayTeamColor}`
        
        let homeTeamScore = document.getElementById("homeTeamScore")
        homeTeamScore.style.background = `#${homeTeamColor}`
        
        return `
        <section id="eventsContainer">
        <div>
        <div id="gameTime">${score.status.type.detail}</div>
        <div id="awayTeamScore" style=background:#${awayTeamColor};><img src="${awayLogo}" width="25" height="25" style=padding:5px;background:white;border-radius:50%;margin:4px;align:center'>${awayTeamName} ${awayScore}</div>
        <div id="homeTeamScore" style=background:#${homeTeamColor};><img src="${homeLogo}" width="25" height="25" style=padding:5px;background:white;border-radius:50%;margin:4px;align:center>${homeTeamName} ${homeScore}</div>
        <button id="btn">Go To Game</button>
        </section>
        `
})



const theGames = document.getElementById('eventsContainer')
theGames.innerHTML = gamesList.join('')


 theGames.addEventListener('click', fetchGame)


}


  
fetchScoreboard()




// // CONFERENCE STANDINGS IF YOU EVER DECIDE TO ADD THEM
// // Begin with SEC and build more later - if (conf = SEC), display this stuff
// let standingsOverallRecordTitle = data.standings.groups[0].divisions[0].standings.entries[0].stats[0].description
// // let standingsAwayConferenceDivision = standings.groups[0].divisions[1].standings.entries
// // let standingsHomeConferenceDivision = standings.groups[1].divisions[1].standings.entries // If SEC WEST - Probably should just render both divisions of Home Conference
// let standingsAwayConferenceTitle = data.standings.groups[0].header
// let standingsHomeConferenceTitle = data.standings.groups[1].header
// console.log(standingsOverallRecordTitle)
// console.log(standingsAwayConferenceTitle)
// console.log(standingsHomeConferenceTitle)
const scoreboardURL = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard?limit=500&dates=20220916-20221001'
let thisGameId
let gameIdsArray = []
let gameIdArray = []
let gameURL



const fetchScoreboard = async () => {
    const jsonData = await fetch (scoreboardURL)
    const data = await jsonData.json()
    console.log(data)

    

    gameIdsArray = data.events.map(gameId => {
        thisId = gameId.id
        gameIdsArray.push(thisId)
      
    }) 

    let gamesList = data.events.map(score => {
            
        thisGameId = score.id
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
        <div id="gameTime">${score.status.type.detail}</div>
        <div id="awayTeamScore" style=background:#${awayTeamColor};><img src="${awayLogo}" width="25" height="25" style=padding:5px;background:white;border-radius:50%;margin:4px;align:center'>${awayTeamName} ${awayScore}</div>
        <div id="homeTeamScore" style=background:#${homeTeamColor};><img src="${homeLogo}" width="25" height="25" style=padding:5px;background:white;border-radius:50%;margin:4px;align:center>${homeTeamName} ${homeScore}</div>
        <button id="btn" data="${thisGameId}">Go To Game</button></div>
        </section>
        `
})




const theGames = document.getElementById('eventsContainer')
theGames.innerHTML = gamesList.join('')
}

document.querySelectorAll("#eventsContainer").forEach(function (btn) {
    btn.addEventListener('click', function (e) {
    thisGameId = e.target.lastChild.parentNode.attributes.data.nodeValue
    gameURL =  `http://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=${thisGameId}`
    console.log(gameURL)
    btn.innerHTML = `${renderClickedGame()}`
        });





});

// get theGame and fetch all the stuff to show the clicked gam
  
fetchScoreboard()


const renderClickedGame = async () => 
{
    
   
    
    const fetchGame = async () => {
        const jsonData = await fetch (gameURL)
        const data = await jsonData.json()
        console.log(data) 
           
    
        const gameId = data?.header?.competitions?.id
        const awayTeamRecord = data?.header?.competitions[0]?.competitors[1]?.record[0]?.displayValue
        const homeTeamRecord = data?.header?.competitions[0]?.competitors[0]?.record[0]?.displayValue
        const awayTeamName = data?.header?.competitions[0]?.competitors[1]?.team?.displayName
        
        const homeTeamName = data?.header?.competitions[0]?.competitors[0]?.team?.displayName
        const awayTeamName1 = data?.header?.competitions[0]?.competitors[1]?.team?.location
        const homeTeamName1 = data?.header?.competitions[0]?.competitors[0]?.team?.location
        const awayTeamAbbrev = data?.header?.competitions[0]?.competitors[1]?.team?.abbreviation
        const homeTeamAbbrev = data?.header?.competitions[0]?.competitors[0]?.team?.abbreviation
        let awayRank = data?.header?.competitions[0]?.competitors[1]?.rank
        let homeRank = data?.header?.competitions[0]?.competitors[0]?.rank
        let awayScore = data?.header?.competitions[0]?.competitors[1]?.score
        let homeScore = data?.header?.competitions[0]?.competitors[0]?.score
        const weekNumber = data?.header?.week
        const awayTeamColor = data?.boxscore?.teams[0]?.team?.color
        const homeTeamColor = data?.boxscore?.teams[1]?.team?.color
        const alternateAwayTeamColor = data?.boxscore?.teams[0]?.team?.alternateColor
        const alternateHomeTeamColor = data?.boxscore?.teams[1]?.team?.alternateColor
        let awayLogo = data?.header?.competitions[0]?.competitors[1]?.team?.logos[1]?.href
        let homeLogo = data?.header?.competitions[0]?.competitors[0]?.team?.logos[1]?.href
        let awayDarkLogo = data?.header?.competitions[0]?.competitors[1]?.team?.logos[0]?.href
        let homeDarkLogo = data?.header?.competitions[0]?.competitors[0]?.team?.logos[0]?.href
        let venueName = data?.gameInfo?.venue?.fullName
        let venueCity = data?.gameInfo?.venue?.address?.city
        let venueState = data?.gameInfo?.venue?.address?.state
        let homeScoreInt = parseInt(homeScore)
        let awayScoreInt = parseInt(awayScore)
        // let chanceToWinHome = data.predictor.homeTeam.gameProjection
        // let chanceToWinAway = data.predictor.awayTeam.gameProjection

        if (awayScore == undefined)
        {
            awayScore == 0
        }
        
        if (homeScore == undefined) 
        {
            homeScore = 0
        }


        
    // class GameID {
    //     constructor(gameId) {
    //       this.gameId = homeLogo;
    //     }
    //   }
    //   let gameId = new GameId(gameId);
    //   console.log(`${url}gameId`)
    
    
        // Need to Map through the array of standings > Entries and move the... 
        // ...above standings variables inside the map **** standings.groups[1].divisions[0].standings.entries ****
    
        // BROADCAST INFO -- showBroadcastNetwork() is called in the Called Functions section
    const showBroadcastNetwork = () => 
    {
        const secNetworkLogo = 'images/sec-network-logo-removebg-preview.png'
        const espnLogo = 'images/espn-logo.png' 
        const espnULogo = 'images/espnu-logo.png'
        const cbsLogo = 'images/sec-on-cbs-logo.png'
        const nbcLogo = 'images/nbc-logo.png'
        const abcLogo = 'images/abc-logo.png'
        const foxLogo = 'images/fox.png'
        const bigTenNetworkLogo = 'images/bigTen.png'
    
        const cbsSportsNetwork = 'CBSSN'
        const secNetwork = 'SECN'
        const espn = 'ESPN'
        const fox = 'FOX'
        const espnU = 'ESPNU'
        const cbs = 'CBS'
        const nbc = 'NBC'
        const abc = 'ABC'
        const bigTenNetwork = 'BTN'
    
        // One option needs to be if no image... just do name of network
    
    switch (data?.header?.competitions[0]?.broadcasts[0]?.media?.shortName) 
    
    {
        case secNetwork:
            document.getElementById('gameDescription').innerHTML = `<div><img src="${secNetworkLogo}" width="125" height="75" align="center"></div>`
            break;
        case espn:
            document.getElementById('gameDescription').innerHTML = `<div><img src="${espnLogo}" width="125" height="75" align="center"></div>`
            break;
        case espnU:
            document.getElementById('gameDescription').innerHTML = `<div><img src="${espnULogo}" width="125" height="75" align="center"></div>`
            break;
        case cbs:
            document.getElementById('gameDescription').innerHTML = `<div><img src="${cbsLogo}" width="125" height="75" align="center"></div>`
            break;
        case nbc:
            document.getElementById('gameDescription').innerHTML = `<div><img src="${nbcLogo}" width="125" height="75" align="center"></div>`
            break;
        case abc:
            document.getElementById('gameDescription').innerHTML = `<div><img src="${abcLogo}" width="100" height="100" align="center"></div>`
            break;
        case fox:
            document.getElementById('gameDescription').innerHTML = `<div><img src="${foxLogo}" width="125" height="75" align="center"></div>`
            break;
        case bigTenNetwork:
            document.getElementById('gameDescription').innerHTML = `<div><img src="${bigTenNetworkLogo}" width="125" height="75" align="center"></div>`
            break; 
    
        default:
            break;
    }
    
    
    }
    
    
                                            // ********* SCHEDULED STATUS FUNCTION ********* //
    const renderScheduledStatus = () => 
    {
         // WEATHER //
         let weatherTemp = data?.gameInfo?.weather?.temperature
         let weatherPrecip = data?.gameInfo?.weather?.precipitation
         let weatherTeamHigh = data?.gameInfo?.weather?.highTemperature
         let weatherTempLow = data?.gameInfo?.weather?.lowTemperature   
    
         if (data.gameInfo.weather != null)
         {   
         const weather = document.getElementById('weather')
         weather.innerHTML = `High ${weatherTeamHigh}&#176 / Low ${weatherTempLow}&#176 with a ${weatherPrecip}% chance of precip` 
         weather.style.color = `#${homeTeamColor}`
         }
    
        // VENUE AND GAMEDAY INFO - If game is out of USA, no state is listed//
        if (venueState != null)
        {
        const venue = document.getElementById('venue')
        venue.innerHTML = `<div id='venue'>${data.header.competitions[0].status.type.detail}  |  ${venueName}  |  ${venueCity}, ${venueState}</div>`
        venue.style.backgroundColor = `#${homeTeamColor}` 
        } 
        else 
        {
        const venue = document.getElementById('venue')
        venue.innerHTML = `<div id='venue'>${data.header.competitions[0].status.type.detail}  |  ${venueName}  |  ${venueCity}</div>`
        venue.style.backgroundColor = `#${homeTeamColor}` 
        }
        
        // Away Team //
        if (awayRank === undefined) 
        {
           const awayTeam = document.getElementById('awayPre')
           awayTeam.innerHTML = `<img src="${awayDarkLogo}" width="150" height="150" align="center"> <br><br>${awayTeamName}<br><br>(${awayTeamRecord})`
           awayTeam.style.color = `#${awayTeamColor}`
           awayTeam.style.backgroundColor = `#f1f1f169`
        } 
        else 
        {
           const awayTeam = document.getElementById('awayPre')
           awayTeam.innerHTML = `${awayRank}<img src="${awayDarkLogo}" width="150" height="150" align="center"> <br><br>${awayTeamName}<br><br>(${awayTeamRecord})`
           awayTeam.style.color = `#${awayTeamColor}`
           awayTeam.style.backgroundColor = `#f1f1f169`
        }
    
        // Home Team //
        if (homeRank === undefined)
       {
        const homeTeam = document.getElementById('homePre')
        homeTeam.innerHTML = `<img src="${homeDarkLogo}" width="150" height="150" align="center"><br>${homeTeamName}<br><br>(${homeTeamRecord})`
        homeTeam.style.color = `#${homeTeamColor}`
        homeTeam.style.backgroundColor = `#f1f1f169`
       } 
       else 
       {
        const homeTeam = document.getElementById('homePre')
        homeTeam.innerHTML = `${homeRank}<img src="${homeDarkLogo}" width="150" height="150" align="center"><br>${homeTeamName}<br>(${homeTeamRecord})`
        homeTeam.style.color = `#${homeTeamColor}`
        homeTeam.style.backgroundColor = `#f1f1f169`
       }
    
    
         
        
             // MATCHUP GRAPHIC For Weeks 0 & 1 // NEED TO CREATE AN WEEK 0 and WEEK 1 Display Function //
    
            // ESPN Predictor - if Home Team favored by 50% or more, show home team odds. Otherwise, show Away Team's odds. 
            // if (homeTeam && chanceToWinHome > 50) 
            // {
            // const homePredictor = document.getElementById('awayPredictor')
            // homePredictor.innerHTML = `<div>${homeTeamAbbrev} has a <b>${chanceToWinHome}%</b> chance to win<div>`
            // homePredictor.style.color = `#${homeTeamColor}`
            // } 
            // else 
            // {
            // const awayPredictor = document.getElementById('homePredictor')
            // awayPredictor.innerHTML = `<div>${awayTeamName} has a <b>${chanceToWinAway}%</b> chance to win</div>`
            // awayPredictor.style.color = `#${awayTeamColor}`
            // }
           
    }
    
    
      
    
    // *************************************************************************************************************************************** //
    
                                                // ********* PREGAME STATUS FUNCTION ********* //
    
    // *************************************************************************************************************************************** //
    
    const renderPregameStatus = () => 
    {
         
        // WEATHER //
        let weatherTemp = data?.gameInfo?.weather?.temperature
        let weatherPrecip = data?.gameInfo?.weather?.precipitation
        let weatherTeamHigh = data?.gameInfo?.weather?.highTemperature
        let weatherTempLow = data?.gameInfo?.weather?.lowTemperature   
    
        if (data.gameInfo.weather != null)
        {   
        const weather = document.getElementById('weather')
        weather.innerHTML = `High ${weatherTeamHigh}&#176 / Low ${weatherTempLow}&#176 with a ${weatherPrecip}% chance of precip` 
        weather.style.color = `#${homeTeamColor}`
        }
        
                                    // VENUE AND GAMEDAY INFO - If game is out of USA, no state is listed//
        if (venueState != null)
        {
        const venue = document.getElementById('venue')
        venue.innerHTML = `<div id='venue'>${data.header.competitions[0].status.type.detail}  |  ${venueName}  |  ${venueCity}, ${venueState}</div>`
        venue.style.backgroundColor = `#${homeTeamColor}` 
        } 
        else 
        {
        const venue = document.getElementById('venue')
        venue.innerHTML = `<div id='venue'>${data.header.competitions[0].status.type.detail}  |  ${venueName}  |  ${venueCity}</div>`
        venue.style.backgroundColor = `#${homeTeamColor}` 
        }
       
                                                    // MATCHUP - TWO TEAMS //
    
       
         // Away Team //
        if (awayRank === undefined) 
        {
           const awayTeam = document.getElementById('awayPre')
           awayTeam.innerHTML = `<img src="${awayDarkLogo}" width="150" height="150" align="center"><br>${awayTeamName}<br><br>${awayTeamRecord}`
           awayTeam.style.color = `#${awayTeamColor}`
           awayTeam.style.backgroundColor = `#f1f1f169`
        } 
        else 
        {
           const awayTeam = document.getElementById('awayPre')
           awayTeam.innerHTML = `${awayRank}<img src="${awayDarkLogo}" width="150" height="150" align="center"><br>${awayTeamName}<br><br>${awayTeamRecord}`
           awayTeam.style.color = `#${awayTeamColor}`
           awayTeam.style.backgroundColor = `#f1f1f169`
        }
    
        // Home Team //
        if (homeRank === undefined)
       {
        const homeTeam = document.getElementById('homePre')
        homeTeam.innerHTML = `<img src="${homeDarkLogo}" width="150" height="150" align="center"><br>${homeTeamName}<br><br>(${homeTeamRecord})`
        homeTeam.style.color = `#${homeTeamColor}`
        homeTeam.style.backgroundColor = `#f1f1f169`
       } 
       else 
       {
        const homeTeam = document.getElementById('homePre')
        homeTeam.innerHTML = `${homeRank}<img src="${homeDarkLogo}" width="150" height="150" align="center"><br>${homeTeamName}<br><br>(${homeTeamRecord})`
        homeTeam.style.color = `#${homeTeamColor}`
        homeTeam.style.backgroundColor = `#f1f1f169`
       }
    
       
            // MATCHUP GRAPHIC For Weeks 0 & 1 // NEED TO CREATE AN WEEK 0 and WEEK 1 Display Function //
    
           // ESPN Predictor - if Home Team favored by 50% or more, show home team odds. Otherwise, show Away Team's odds. 
        //    if (homeTeam && chanceToWinHome > 50) 
        //    {
        //    const homePredictor = document.getElementById('homePredictor')
        //    homePredictor.innerHTML = `<div>ESPN Prediction Center - ${homeTeamAbbrev} - <b>${chanceToWinHome}%</b> chance to win<div>`
        //    homePredictor.style.color = `#${homeTeamColor}`
        //    } 
        //    else 
        //    {
        //    const awayPredictor = document.getElementById('awayPredictor')
        //    awayPredictor.innerHTML = `<div>ESPN Prediction Center - ${awayTeamAbbrev} - <b>${chanceToWinAway}%</b> chance to win</div>`
        //    awayPredictor.style.color = `#${awayTeamColor}`
        //    }
    
    
          
    }
    
    // *************************************************************************************************************************************** //
    
                                                // ********* IN PROGRESS STATUS FUNCTION ********* //
    
    // *************************************************************************************************************************************** //
    
    
    const renderInProgressStatus = () => 
    {


        if (venueState != null)
        {
        const venue = document.getElementById('venue')
        venue.innerHTML = `<div id='venue'>${venueName} in ${venueCity}, ${venueState} <hr>${data.header.competitions[0].status.type.detail}</div>`
        venue.style.backgroundColor = `#${homeTeamColor}` 
        } 
        else 
        {
        const venue = document.getElementById('venue')
        venue.innerHTML = `<div id='venue'>${venueName} in ${venueCity}, ${venueState} <hr>${data.header.competitions[0].status.type.detail}</div>`
        venue.style.backgroundColor = `#${homeTeamColor}` 
        }
        
        // Away Team //
        if (awayRank === undefined) 
        {
           const awayTeam = document.getElementById('awayPre')
           awayTeam.innerHTML = `${awayScore}<br><br><img src="${awayDarkLogo}" width="150" height="150" align="center"><br> ${awayTeamName}<br><br>(${awayTeamRecord})`
           awayTeam.style.color = `#${awayTeamColor}`
           awayTeam.style.backgroundColor = `#f1f1f169`
        } 
        else 
        {
           const awayTeam = document.getElementById('awayPre')
           awayTeam.innerHTML = `${awayScore}<br><br>${awayRank}<img src="${awayDarkLogo}" width="150" height="150" align="center"> <br>${awayTeamName}<br><br>(${awayTeamRecord})`
           awayTeam.style.color = `#${awayTeamColor}`
           awayTeam.style.backgroundColor = `#f1f1f169`
        }

    
        // Home Team //
        if (homeRank === undefined)
       {
        const homeTeam = document.getElementById('homePre')
        homeTeam.innerHTML = `${homeScore}<br><br><img src="${homeDarkLogo}" width="150" height="150" align="center"><br>${homeTeamName}<br><br>(${homeTeamRecord})`
        homeTeam.style.color = `#${homeTeamColor}`
        homeTeam.style.backgroundColor = `#f1f1f169`
       } 
       else 
       {
        const homeTeam = document.getElementById('homePre')
        homeTeam.innerHTML = `${homeScore}<br><br>${homeRank}<img src="${homeDarkLogo}" width="150" height="150" align="center"><br>${homeTeamName}<br><br>(${homeTeamRecord})`
        homeTeam.style.color = `#${homeTeamColor}`
        homeTeam.style.backgroundColor = `#f1f1f169`
       }

    
       // ESPN Predictor - if Home Team favored by 50% or more, show home team odds. Otherwise, show Away Team's odds. 
    //    if (homeTeam && chanceToWinHome > 50) 
    //    {
    //    const homePredictor = document.getElementById('homePredictor')
    //    homePredictor.innerHTML = `<div>${homeTeamAbbrev} has <b>${chanceToWinHome}%</b> chance to win<div>`
    //    homePredictor.style.color = `#${homeTeamColor}`
    //    } 
    //    else 
    //    {
    //    const awayPredictor = document.getElementById('homePredictor')
    //    awayPredictor.innerHTML = `<div>${awayTeamAbbrev} has <b>${chanceToWinAway}%</b> chance to win</div>`
    //    awayPredictor.style.color = `#${awayTeamColor}`
    //    }
    
        // plays container //  
        if (data?.drives === undefined) {
            document.getElementById('currentPlay').style.display = 'none'; 
        } else {
        if (data?.header?.competitions[0]?.status?.type?.completed === false || data?.header?.competitions[0]?.status?.type?.description === false) {
           
            
            
            
            if (data?.drives === undefined) {
                document.getElementById('currentPlay').style.display = 'none'; 
                
            } else {
                if (data?.header?.competitions[0]?.status?.type?.completed === false) {   
                    
                }
            }
        }
        let theDownDistance = []
            function getDownDistance() 
            {
            let currentDownDistance = data?.drives?.current?.plays?.pop();
            theDownDistance.push(currentDownDistance?.end?.downDistanceText)
           
               return theDownDistance
    }
    let currentPlay = []
            function getLastPlay() 
            {
            let lastPlay = data?.drives?.current?.plays?.pop();
            currentPlay.push(lastPlay?.text)
                return currentPlay      
            }
    
    
            if (data?.drives === undefined) {
                document.getElementById('currentPlay').style.display = 'none'; 
    
            } else {
                if (data?.header?.competitions[0]?.status?.type?.completed === false && data?.header?.competitions[0]?.status?.type?.description !== "Scheduled" && data.drives.current.team.logos[0].href !== undefined) {
                    let driveTeam = data?.drives?.current?.team?.logos[0]?.href
                    const theLastPlay = document.getElementById('currentPlay')
                    theLastPlay.innerHTML = `${getLastPlay()}`
                       
            const theDownDistanceIs = document.getElementById('theDownDistanceIs')
            theDownDistanceIs.innerHTML = `<img src=${driveTeam} width="75" height="75" align="center"> ${getDownDistance()}`
            //**wcurrent drive info added** theDownDistanceIs.innerHTML = `<img src=${driveTeam} width="75" height="75"> ${getDownDistance()} - (${currentDrive})`
    
            }
        }
    }
        
            
            // scoring and other events (TD, FG, Penalties, etc) //
            // touchdown // 
            
            
        
            
       // scoring plays //
    if (data?.header?.competitions[0]?.status?.type?.completed === false && data?.header?.competitions[0]?.status?.type?.description !== "Scheduled" && data?.scoringPlays !== undefined) {
        const thePlays = data.scoringPlays.map((play) => {
            
            return `
            <div id="scoringPlays" align="left"><img src="${play?.team?.logo}"width="40" height="40" align="center"> ${play?.text} | QTR${play?.period?.number} | ${play?.clock?.displayValue} | <img src="${awayDarkLogo}"width="40" height="40" align="center">  ${play?.awayScore} - ${play?.homeScore}  <img src="${homeDarkLogo}"width="40" height="40" align="center"></div>
            `
        })
        
        const scoringPlays = document?.getElementById('scoringPlaysContainer')
            scoringPlays.innerHTML = thePlays.join('')
        }   
        
            if (data?.leaders !== []) {
                let homePassingLeader = data?.leaders[0]?.leaders[0]?.leaders[0]?.athlete?.displayName
                let homePassingLeaderHeadshot = data?.leaders[0]?.leaders[0]?.leaders[0]?.athlete?.headshot?.href
                let homePassingLeaderStats = data?.leaders[0]?.leaders[0]?.leaders[0]?.displayValue
                let homePassingLeaderJersey = data?.leaders[0]?.leaders[0]?.leaders[0]?.athlete?.jersey
                let homePassingLeaderPosition = data?.leaders[0]?.leaders[0]?.leaders[0]?.athlete?.position?.abbreviation
                
                let awayPassingLeader = data?.leaders[1]?.leaders[0]?.leaders[0]?.athlete?.displayName
                let awayPassingLeaderHeadshot = data?.leaders[1]?.leaders[0]?.leaders[0]?.athlete?.headshot?.href
                let awayPassingLeaderStats = data?.leaders[1]?.leaders[0]?.leaders[0]?.displayValue
                let awayPassingLeaderJersey = data?.leaders[1]?.leaders[0]?.leaders[0]?.athlete?.jersey
                let awayPassingLeaderPosition = data?.leaders[1]?.leaders[0]?.leaders[0]?.athlete?.position?.abbreviation
                
                
                const homeStatsContainer = document.getElementById('homeStatsContainer')
                homeStatsContainer.style.border = `2pt solid #${homeTeamColor}`
                
                const awayStatsContainer = document.getElementById('awayStatsContainer')
                awayStatsContainer.style.border = `2pt solid #${awayTeamColor}`
                
                const homePassingLeaders = document.getElementById('homePassingLeader')
                homePassingLeaders.innerHTML = `${homeTeamName} Stats <br><img src="${homePassingLeaderHeadshot}" width="100" height="100"> ${homePassingLeaderPosition}${homePassingLeaderJersey}`
                homePassingLeaders.style.color = `#${homeTeamColor}`
                
                const homePassingStats = document.getElementById('homePassingStats')
                homePassingStats.innerHTML = `${homePassingLeader} <br> ${homePassingLeaderStats}`
                homePassingStats.style.backgroundColor = `#${homeTeamColor}`
                
                const awayPassingLeaders = document.getElementById('awayPassingLeader')
                awayPassingLeaders.innerHTML = `${awayTeamName} Stats <br><img src="${awayPassingLeaderHeadshot}" width="100" height="100"> ${awayPassingLeaderPosition}${awayPassingLeaderJersey}`
                awayPassingLeaders.style.color = `#${awayTeamColor}`
                
                const awayPassingStats = document.getElementById('awayPassingStats')
                awayPassingStats.innerHTML = `${awayPassingLeader} <br> ${awayPassingLeaderStats}`
                awayPassingStats.style.backgroundColor = `#${awayTeamColor}`
                }
                
                // Rushing stats container //
                if (data?.leaders !== []) {
                let homeRushingLeader = data?.leaders[0]?.leaders[1]?.leaders[0]?.athlete?.displayName
                let homeRushingLeaderHeadshot = data?.leaders[0]?.leaders[1]?.leaders[0]?.athlete?.headshot?.href
                let homeRushingLeaderStats = data?.leaders[0]?.leaders[1]?.leaders[0]?.displayValue
                let homeRushingLeaderJersey = data?.leaders[0]?.leaders[1]?.leaders[0]?.athlete?.jersey
                let homeRushingLeaderPosition = data?.leaders[0]?.leaders[1]?.leaders[0]?.athlete?.position?.abbreviation
                
                let awayRushingLeader = data?.leaders[1]?.leaders[1]?.leaders[0]?.athlete?.displayName
                let awayRushingLeaderHeadshot = data?.leaders[1]?.leaders[1]?.leaders[0]?.athlete?.headshot?.href
                let awayRushingLeaderStats = data?.leaders[1]?.leaders[1]?.leaders[0]?.displayValue
                let awayRushingLeaderJersey = data?.leaders[1]?.leaders[1]?.leaders[0]?.athlete?.jersey
                let awayRushingLeaderPosition = data?.leaders[1]?.leaders[1]?.leaders[0]?.athlete?.position?.abbreviation
                
                const homeRushingLeaders = document.getElementById('homeRushingLeader')
                homeRushingLeaders.innerHTML = `<img src="${homeRushingLeaderHeadshot}" width="100" height="100"> ${homeRushingLeaderPosition}${homeRushingLeaderJersey}`
                homeRushingLeaders.style.color = `#${homeTeamColor}`
                
                const homeRushingStats = document.getElementById('homeRushingStats')
                homeRushingStats.innerHTML = `${homeRushingLeader} <br> ${homeRushingLeaderStats}`
                homeRushingStats.style.backgroundColor = `#${homeTeamColor}`
                
                const awayRushingLeaders = document.getElementById('awayRushingLeader')
                awayRushingLeaders.innerHTML = `<img src="${awayRushingLeaderHeadshot}" width="100" height="100"> ${awayRushingLeaderPosition}${awayRushingLeaderJersey}`
                awayRushingLeaders.style.color = `#${awayTeamColor}`
                
                const awayRushingStats = document.getElementById('awayRushingStats')
                awayRushingStats.innerHTML = `${awayRushingLeader} <br> ${awayRushingLeaderStats}`
                awayRushingStats.style.backgroundColor = `#${awayTeamColor}`
                }
                // Receiving stats container //
                if (data.leaders !== [] || data?.leaders !== undefined || data?.leaders[0] !== []) {
                let homeReceivingLeader = data?.leaders[0]?.leaders[2]?.leaders[0]?.athlete?.displayName
                
                let homeReceivingLeaderStats = data?.leaders[0]?.leaders[2]?.leaders[0]?.displayValue
                let homeReceivingLeaderJersey = data?.leaders[0]?.leaders[2]?.leaders[0]?.athlete?.jersey
                let homeReceivingLeaderPosition = data?.leaders[0]?.leaders[2]?.leaders[0]?.athlete?.position?.abbreviation
                
                let awayReceivingLeader = data?.leaders[1]?.leaders[2]?.leaders[0]?.athlete?.displayName
                let awayReceivingLeaderStats = data?.leaders[1]?.leaders[2]?.leaders[0]?.displayValue
                let awayReceivingLeaderJersey = data?.leaders[1]?.leaders[2]?.leaders[0]?.athlete?.jersey
                let awayReceivingLeaderPosition = data?.leaders[1]?.leaders[2]?.leaders[0]?.athlete?.position?.abbreviation  
                
                
            if (data?.leaders[0]?.leaders[2]?.leaders[0]?.athlete?.headshot === undefined) {   
                const homeReceivingLeaders = document.getElementById('homeReceivingLeader')
                homeReceivingLeaders.style.color = `#${homeTeamColor}`
                homeReceivingLeaders.style.height = '107px'
        
                } else {
                    let homeReceivingLeaderHeadshot = data?.leaders[0]?.leaders[2]?.leaders[0]?.athlete?.headshot.href
                    const homeReceivingLeaders = document.getElementById('homeReceivingLeader')
                    homeReceivingLeaders.innerHTML = `<img src="${homeReceivingLeaderHeadshot}" width="100" height="100"> ${homeReceivingLeaderPosition}${homeReceivingLeaderJersey}`
                    homeReceivingLeaders.style.color = `#${homeTeamColor}`
        
                }
            
                
                const homeReceivingStats = document.getElementById('homeReceivingStats')
                homeReceivingStats.innerHTML = `${homeReceivingLeader} <br> ${homeReceivingLeaderStats}`
                homeReceivingStats.style.backgroundColor = `#${homeTeamColor}`
                
                if (data?.leaders[1]?.leaders[2]?.leaders[0]?.athlete?.headshot === undefined) {
                    const awayReceivingLeaders = document.getElementById('awayReceivingLeader')
                    awayReceivingLeaders.style.color = `#${awayTeamColor}`
                    awayReceivingLeaders.style.marginTop = "76px"
                    awayReceivingLeaders.style.height = '107px'
        
        
                
                } else {
                
                const awayReceivingLeaders = document.getElementById('awayReceivingLeader')
                let awayReceivingLeaderHeadshot = data.leaders[1].leaders[2].leaders[0].athlete.headshot.href
                awayReceivingLeaders.innerHTML = `<img src="${awayReceivingLeaderHeadshot}" width="100" height="100"> ${awayReceivingLeaderPosition}${awayReceivingLeaderJersey}`
                awayReceivingLeaders.style.color = `#${awayTeamColor}`
                }
                
                const awayReceivingStats = document.getElementById('awayReceivingStats')
                awayReceivingStats.innerHTML = `${awayReceivingLeader} <br> ${awayReceivingLeaderStats}`
                awayReceivingStats.style.backgroundColor = `#${awayTeamColor}`
                }
    
            }
    
    
    // *************************************************************************************************************************************** //
    
                                                // ********* FINAL STATUS FUNCTION ********* //
    
    // *************************************************************************************************************************************** //
    
    
    const renderFinalStatus = () => 
    {
        
        
            if (awayRank === undefined && homeRank === undefined)
            {
                awayRank = ''
                homeRank = ''
            }
        
            if (awayRank === undefined) 
            {
                awayRank = 26
            } 
                if (homeRank === undefined) 
            {
                homeRank = 26
            }
        
        
        const gameRecap = data.article.links.web.href
        const recapTitle = data.article.headline
        const recap = document.getElementById('gameStatus')
        recap.innerHTML = `<a href=${gameRecap}>${recapTitle}</a>`
    
        
        // scoring plays FINAL STATUS //
       
            const thePlays = data.scoringPlays.map((play) => {
                
                return `
                <div id="scoringPlays" align="left"><img src="${play.team.logo}" width="40" height="40" align="center"> ${play.text} | QTR${play.period.number} | ${play.clock.displayValue} | <img src="${awayDarkLogo}"width="40" height="40" align="center">  ${play.awayScore} - ${play.homeScore}  <img src="${homeDarkLogo}"width="40" height="40" align="center"></div>
                `
            })
        
            const scoringPlays = document.getElementById('scoringPlaysContainer')
                scoringPlays.innerHTML = thePlays.join('')
       
    }     
    
    
    
                // ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• //
                //  ***** ***** ***** ***** *****  ******** ******** CALL THE FUNCTIONS ******** ******** ******** ******** ******** ******** ********//
                // ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• //
    
    
    
    
                // ******** IF STATUS == Scheduled ******** // 
    if (data.header.competitions[0].status.type.name === "STATUS_SCHEDULED")
      {
        renderScheduledStatus ()
      }
     
            // *********************Broadcast Network Rendered Depending On The Network Broadcasting Selected Game *********************** // 
    
    
            // *********************Broadcast Network Rendered Depending On The Network Broadcasting Selected Game *********************** // 
    
    
      
     
    
    //   // ******** IF STATUS == Pregame ******** // 
    
    if (data.header.competitions[0].status.type.name === "STATUS_PREGAME")
      {
        renderPregameStatus ()
      }
     
            // *********************Broadcast Network Rendered Depending On The Network Broadcasting Selected Game *********************** // 
    showBroadcastNetwork()
    
     
    
    
    
    
    //   // ******** IF STATUS == IN PROGRESS ******** // 
    
    if (data.header.competitions[0].status.type.name = "STATUS_IN_PROGRESS")
        {
            renderInProgressStatus()
        }
    
    
    //   // ******** IF STATUS == Final ******** // 
    
    
    if (data.header.competitions[0].status.type.name == "STATUS_FINAL") 
       {
        renderFinalStatus()
       }
    
    }
    
    fetchGame()
}




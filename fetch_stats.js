const fetch = require("node-fetch");

// This is the fetchStats method - which is an async function
const fetchStats = async function(playerName) {
  let response = await fetch(`https://nykloo.com/api/PlayerInfos/Search?usernameQuery=${playerName}&page=0&pageSize=25`)
  if (response.status !== 200) {
    throw new Exception('Looks like there was a problem. Status Code: ' + response.status)
  } else {
    let responseJson = await response.json()
    idName = responseJson[0]['playFabId']

    let statsResponse = await fetch(`https://nykloo.com/api/PlayerStats/Stats/${idName}`)

    if (statsResponse.status !== 200) {
      throw new Exception('Looks like there was a problem. Status Code: ' + statsResponse.status)
    }
    let statsResponseJson = await statsResponse.json()

    return statsResponseJson
  }
}

// Now we we will simply call this function
fetchStats('AWLurch')
  .then((stats) => {
    //console.log(stats)
    playerStats = stats['playerStatistics']
    //console.log(playerStats)
    playerStats.forEach(function(stat) {
      // console.log('Current stat: ', stat)
      if (stat['statisticName'] == 'PlayerSkill') {
        console.log('Player Skill: ' + stat['value'])
      } else {        
      if (stat['statisticName'] == 'CareerKills') {
        console.log('Career Kills: ' + stat['value'])
      } else {
      if (stat['statisticName'] == 'CareerWins') {
        console.log('Career  Wins: ' + stat['value'])
      } else {
      if (stat['statisticName'] == 'CareerGamesPlayed') {
        console.log('Career Games: ' + stat['value'])
      } else {
        // Do something with the others?
        //console.log(stat['statisticName'])
      }}}}
    });
  })
  .catch((e) => {
    console.log(e)
  })

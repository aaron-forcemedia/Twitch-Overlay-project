
var userName = () => prompt ('What is your user name?');
const displayName = userName();
//-----------------------------------
function hide_follow() {
    document.getElementById("follow_gif").style.display = "none";
    document.getElementById("follow_txt").style.display = "none";
}

let followcounter = 0;

function follow() {
  while (followcounter <1){

    document.getElementById("follow_gif").style.display = "block";
    setTimeout(hide_follow, 5000);  // 5 seconds

    document.getElementById("follow_txt").style.display = "block";
    setTimeout(hide_follow, 5000);  // 5 seconds

    var para = document.createElement("span");          //Help from W3Schools to understand this section
    var node = document.createTextNode(displayName);
    para.appendChild(node);

    var element = document.getElementById("follow_txt");
    element.appendChild(para);
    followcounter++;

  return followcounter;
}}
//-----------------------------------
function hide_subscribe() {
    document.getElementById("subscribe_gif").style.display = "none";
    document.getElementById("subscribe_txt").style.display = "none";
}

let subscribecounter = 0;

function subscribe() {
  while (subscribecounter <1){

    document.getElementById("subscribe_gif").style.display = "block";
    setTimeout(hide_subscribe, 5000);  // 5 seconds

    document.getElementById("subscribe_txt").style.display = "block";
    setTimeout(hide_subscribe, 5000);  // 5 seconds

    var para = document.createElement("span");
    var node = document.createTextNode(displayName);
    para.appendChild(node);

    var element = document.getElementById("subscribe_txt");
    element.appendChild(para);
    subscribecounter++;

  return subscribecounter;
}}
//-----------------------------------
function hide_like() {
    document.getElementById("like_gif").style.display = "none";
    document.getElementById("like_txt").style.display = "none";
}

let likecounter = 0;

function like() {
  while (likecounter < 1){

    document.getElementById("like_gif").style.display = "block";
    setTimeout(hide_like, 5000);  // 5 seconds

    document.getElementById("like_txt").style.display = "block";
    setTimeout(hide_like, 5000);  // 5 seconds

    var para = document.createElement("span");
    var node = document.createTextNode(displayName);
    para.appendChild(node);

    var element = document.getElementById("like_txt");
    element.appendChild(para);
    likecounter++;

  return likecounter;
}}

function info() {
    hide_like();
    hide_subscribe();
    hide_follow();
    let totalCounter=likecounter+subscribecounter+followcounter;
    alert('The purpose of this application is to simulate a Twitch Overlay. The background will be transparent on the overlay and will be dropped on top of a live gaming stream via OBS (Open Broadcaster Software) Eventually, the idea is to connect this to a Twitch Chat API to collect variables and create on screen effects. Currently, a prompt is collecting the UserName variable. To simulate spam prevention the app only allows for each action to occur once. To restart simulation refresh the browser.');
    alert('Total actions: '+ totalCounter + ' Thank you ' + displayName)
  }

 // This is the fetchStats method - which is an async function
 const fetchStats = async function(displayName) {
  // CORS proxy usage: https://blog.grida.co/cors-anywhere-for-everyone-free-reliable-cors-proxy-service-73507192714e
  let response = await fetch(`https://cors.bridged.cc/https://nykloo.com/api/PlayerInfos/Search?usernameQuery=${displayName}&page=0&pageSize=25`,
      {headers: { "X-Requested-With": "XMLHttpRequest" }})

  if (response.status !== 200) {
    throw new Exception('Looks like there was a problem. Status Code: ' + response.status)
  } else {
    let responseJson = await response.json()
    idName = responseJson[0]['playFabId']

    let statsResponse = await fetch(`https://cors.bridged.cc/https://nykloo.com/api/PlayerStats/Stats/${idName}`,
      {headers: { "X-Requested-With": "XMLHttpRequest" }})

    if (statsResponse.status !== 200) {
      throw new Exception('Looks like there was a problem. Status Code: ' + statsResponse.status)
    }
    let statsResponseJson = await statsResponse.json()

    return statsResponseJson
  }
}

let playerSkillStat = 0;
let careerGamesStat = 0;
let careerKillsStat = 0;
let CareerGamesPlayed = 0;
let careerWinsStat = 0;

  // Now we we will simply call this function
  fetchStats(displayName)
    .then((stats) => {
      //console.log(stats)
      playerStats = stats['playerStatistics']
      //console.log(playerStats)
      playerStats.forEach(function(stat) {
        // console.log('Current stat: ', stat)
        if (stat['statisticName'] == 'PlayerSkill') {
          console.log('Player Skill: ' + stat['value'])
          var playerSkillStat = stat['value'];
          return playerSkillStat;
        } else {
        if (stat['statisticName'] == 'CareerKills') {
          console.log('Career Kills: ' + stat['value'])
          var careerKillsStat = stat['value'];
          return careerKillsStat;
        } else {
        if (stat['statisticName'] == 'CareerWins') {
          console.log('Career  Wins: ' + stat['value'])
          var careerWinsStat = stat['value'];
          return careerWinsStat;
        } else {
        if (stat['statisticName'] == 'CareerGamesPlayed') {
          console.log('Career Games: ' + stat['value'])
          var careerGamesStat = stat['value'];
          return careerGamesStat;
        } else {
          // Do something with the others?
          //console.log(stat['statisticName'])
        }}}}
      });
    })
    .catch((e) => {
      console.log(e)
    })

    console.log(playerSkillStat)
    console.log(careerGamesStat)
    console.log(careerWinsStat)
    console.log(careerKillsStat)

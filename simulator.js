var userName = () => prompt ('What user name would you like to search?');
const displayName = userName();
const list = document.getElementsByClassName('stats-array')[0];

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

let subscribecounter = 0;

//-----------------------------------
/* function hide_subscribe() {
    document.getElementById("subscribe_gif").style.display = "none";
    document.getElementById("subscribe_txt").style.display = "none";
}


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
}} */
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
    //hide_subscribe();
    hide_follow();
    let totalCounter=likecounter+subscribecounter+followcounter;
    alert('The purpose of this application is to simulate a Twitch Overlay. The background will be transparent on the overlay and will be dropped on top of a live gaming stream via OBS (Open Broadcaster Software) Eventually, the idea is to connect this to a Twitch Chat API to collect variables and create on screen effects. Currently, a prompt is collecting the UserName variable. To simulate spam prevention the app only allows for each action to occur once. To restart simulation refresh the browser.');
    alert('Total actions: '+ totalCounter + ' Thank you ' + displayName)
  }

 // This is the fetchStats method - which is an async function
 const fetchStats = async function(displayName) {
  // CORS proxy usage: https://blog.grida.co/cors-anywhere-for-everyone-free-reliable-cors-proxy-service-73507192714e
  let response = await fetch(`https://cors.bridged.cc/https://nykloo.com/api/PlayerInfos/Search?usernameQuery=${displayName}&page=0&pageSize=25`,
      {headers: { "X-Requested-With": "XMLHttpRequest" }}) //Had minor help with this section via GitHub

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
let statsArray = [];

function getStats() {
  statsArray = [];
  fetchStats(displayName, statsArray)
    .then((stats) => {
      playerStats = stats['playerStatistics']
      playerStats.forEach(function(stat) {
        if (stat['statisticName'] == 'PlayerSkill') {
          console.log('Player Skill: ' + stat['value']);
          playerSkillStat = stat['value'];
          statsArray.push({
            'name': 'Player Skill',
            'value': playerSkillStat
          });
          return playerSkillStat;
        } else if (stat['statisticName'] == 'CareerKills') {
          console.log('Career Kills: ' + stat['value'])
          careerKillsStat = stat['value'];
          statsArray.push({
            'name': 'Career Kills',
            'value': careerKillsStat
          });
          return careerKillsStat;
        } else if (stat['statisticName'] == 'CareerWins') {
          console.log('Career  Wins: ' + stat['value'])
          careerWinsStat = stat['value'];
          statsArray.push({
            'name': 'Career  Wins',
            'value': careerWinsStat
          });
          return careerWinsStat;
        } else if (stat['statisticName'] == 'CareerGamesPlayed') {
          console.log('Career Games: ' + stat['value'])
          careerGamesStat = stat['value'];
          statsArray.push({
            'name': 'Career Games',
            'value': careerGamesStat
          });
          //console.log(statsArray);
          return statsArray;
        } else {
          // Do something with the others?
          console.log(stat);
        }
      });
      list.innerHTML = '';
      M.toast({html: 'New Data loaded'})
      statsArray.forEach(item => {
        const newListItem = document.createElement('li');
        newListItem.innerText = item['name'] + ' ' + item['value'];
        list.appendChild(newListItem);
      })
      const newListItem = document.createElement('li');
      var avgKills = Math.round(careerKillsStat/careerGamesStat*100)/100;
      newListItem.innerText = 'Avg Kills/Game: ' + avgKills;
      list.appendChild(newListItem);
    })
    .catch((e) => {
      console.log(e)
    })
}
console.log(subscribecounter);
    


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
    alert('The purpose of this application is to simulate a Twitch Overlay. The background will be transparent on the overlay and will be dropped on top of a live gaming stream via OBS (Open Broadcaster Software) Eventually, the idea is to connect this to a Twitch Chat API to collect variables and create on screen effects. Currently, a prompt is collecting the UserName variable. To simulate spam prevention the app only allows for each action to occur once.');
}

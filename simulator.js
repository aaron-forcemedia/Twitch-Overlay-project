
var userName = () => prompt ('What is your user name?');
const displayName = userName();
//-----------------------------------
function hide_follow() {
    document.getElementById("follow_gif").style.display = "none";
    document.getElementById("follow_txt").style.display = "none";
}

function follow() {
    document.getElementById("follow_gif").style.display = "block";
    setTimeout(hide_follow, 5000);  // 5 seconds
    
    document.getElementById("follow_txt").style.display = "block";
    setTimeout(hide_follow, 5000);  // 5 seconds


    var para = document.createElement("span");          //Help from W3Schools to understand this section
    var node = document.createTextNode(displayName);
    para.appendChild(node);

    var element = document.getElementById("follow_txt");
    element.appendChild(para);
}
//-----------------------------------
function hide_subscribe() {
    document.getElementById("subscribe_gif").style.display = "none";
    document.getElementById("subscribe_txt").style.display = "none";
}

function subscribe() {
    document.getElementById("subscribe_gif").style.display = "block";
    setTimeout(hide_subscribe, 5000);  // 5 seconds
    
    
    document.getElementById("subscribe_txt").style.display = "block";
    setTimeout(hide_subscribe, 5000);  // 5 seconds

    var para = document.createElement("span");
    var node = document.createTextNode(displayName);
    para.appendChild(node);

    var element = document.getElementById("subscribe_txt");
    element.appendChild(para);
}
//-----------------------------------
function hide_like() {
    document.getElementById("like_gif").style.display = "none";
    document.getElementById("like_txt").style.display = "none";
}

function like() {
    document.getElementById("like_gif").style.display = "block";
    setTimeout(hide_like, 5000);  // 5 seconds
    
    
    document.getElementById("like_txt").style.display = "block";
    setTimeout(hide_like, 5000);  // 5 seconds

    var para1 = document.createElement("span");
    var node1 = document.createTextNode(displayName);
    para1.appendChild(node1);

    var element1 = document.getElementById("like_txt");
    element1.appendChild(para1);
}
//-----------------------------------
function hide_shoutout() {
    document.getElementById("shoutout_gif").style.display = "none";
    document.getElementById("shoutout_txt").style.display = "none";
}

function shoutout() {
    document.getElementById("shoutout_gif").style.display = "block";
    setTimeout(hide_shoutout, 5000);  // 5 seconds
    
    
    document.getElementById("shoutout_txt").style.display = "block";
    setTimeout(hide_shoutout, 5000);  // 5 seconds

    var para = document.createElement("span");
    var node = document.createTextNode(displayName);
    para.appendChild(node);

    var element = document.getElementById("shoutout_txt");
    element.appendChild(para);
}

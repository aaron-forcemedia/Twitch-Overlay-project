
var userName = () => prompt ('What is your user name?');
userName();

function follow() {
    
    function hide() {
        document.getElementById("follow_gif").style.display = "none";
    }
    
    function show() {
        document.getElementById("follow_gif").style.display = "block";
        setTimeout(hide, 5000);  // 5 seconds
     }
    show();
    console.log(userName);
}

function subscribe() {
    
    function hide() {
        document.getElementById("subscribe_gif").style.display = "none";
    }
    
    function show() {
        document.getElementById("subscribe_gif").style.display = "block";
        setTimeout(hide, 5000);  // 5 seconds
     }
    show();
}

function like() {
    
    function hide() {
        document.getElementById("like_gif").style.display = "none";
    }
    
    function show() {
        document.getElementById("like_gif").style.display = "block";
        setTimeout(hide, 5000);  // 5 seconds
     }
    show();
}

function shoutout() {
    
    function hide() {
        document.getElementById("shoutout_gif").style.display = "none";
    }
    
    function show() {
        document.getElementById("shoutout_gif").style.display = "block";
        setTimeout(hide, 5000);  // 5 seconds
     }
    show();
}
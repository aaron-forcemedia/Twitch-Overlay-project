
function follow() {
    
    function show() {
        document.getElementById("follow_gif").style.display = "block";
        setTimeout("hide()", 5000);  // 5 seconds
    }

    function hide() {
        document.getElementById("follow_gif").style.display = "none";
    }
}
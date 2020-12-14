document.onkeydown = function(e) {
    return false;
};

document.addEventListener('contextmenu', event => event.preventDefault());

document.getElementsByTagName("body")[0].style.userSelect = "none";
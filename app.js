let count = 0;
let clicks = 0;

function update(){
    document.getElementById("count").innerText = count;
    document.getElementById("clicks").innerText = clicks;
}

function increase(){
    count++;
    clicks++;
    update();
}

function decrease(){
    count--;
    clicks++;
    update();
}

function reset(){
    count = 0;
    update();
}

function setValue(){
    count = Number(document.getElementById("number").value);
    update();
}

function darkMode(){
    document.body.classList.toggle("dark");
}
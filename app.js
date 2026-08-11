let total = 0;
function addTask(){
let input = document.getElementById("task");
if(input.value === ""){
    alert("Enter Task");
    return;
}
let li = document.createElement("li");
li.innerHTML = `
${input.value}
<button onclick="done(this)">Done</button>
<button onclick="removeTask(this)">Delete</button>
`;
document.getElementById("list").appendChild(li);
total++;
document.getElementById("total").innerText = total;
input.value = "";
}
function removeTask(button){
button.parentElement.remove();
total--;
document.getElementById("total").innerText = total;
}
function done(button){
button.parentElement.classList.toggle("done");
}
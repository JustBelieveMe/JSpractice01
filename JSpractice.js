$(document).ready(function () {
    document.getElementById("btn_submit1").onclick = function () { hello(1) };
    document.getElementById("btn_submit2").onclick = function () { hello(2) };
    document.getElementById("btn_submit3").onclick = function () { hello(3) };
    document.getElementById("changeColor").onclick = function () {
        var text = document.getElementById("result").innerHTML;
        console.log(text);
        word = "<font color='yellow'>" + text + "</font>";
        document.getElementById("result").innerHTML = word;
    
    }

}
)
function hello(int) {
    int = parseInt(document.getElementById("input_num").value) + int;
    document.getElementById("result").innerHTML = int;
    console.log(int);
}

function showTime() {
    document.getElementById("date").innerHTML = new Date();
    setTimeout("showTime()", 1000);
}
function aller() {
    alert(new Date());
}
var car = { "wheel": 4, "door": 4, "driver": "JBM" };
console.log(car["wheel"]);
console.log(car.wheel);

let JSstring = '{\
    "hi":"helloworld",\
    "good":"morning",\
    "Seeyou":"tomorrow"}';
let JSstring2 = "{'Hey': 'sorry', 'Excuse':'me', 'May':'I help you?'}";
let JSstring3 = "{'Launch':'Chrome', 'Disable':'Web security', 'Do not':'using for search'}";
console.log(JSstring);
JSONstring = JSON.parse(JSstring);
console.log(JSONstring);
JSstring = JSON.stringify(JSONstring);
console.log(JSstring);
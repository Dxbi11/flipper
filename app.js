const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
import { random } from './hex.js';

function changecolor(){
    var randomColor = random();
    document.getElementById("head").style = `background-color: #${randomColor};`;
    document.getElementById("BackgroundColor").innerHTML = `#${randomColor}`; 
}
    

document.getElementById("button").addEventListener("click", changecolor);



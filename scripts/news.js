// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()


let news=JSON.parse(localStorage.getItem("news"))
console.log(news)
import { searchNews ,append} from "./fetch.js"
let container=document.querySelector("#detailed_news")


append([news],container)
document.getElementById("search_input").addEventListener("keydown",function(){
    if(event.key=="Enter"){
        localStorage.setItem("query",JSON.stringify(this.value))
        window.location.href="../search.html"

    }


})



// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()
let query=JSON.parse(localStorage.getItem("query"))
const api=`https://masai-mock-api.herokuapp.com/news?q=${query}`

        searchNews(api).then((res)=>{
            console.log(res);
            let container=document.getElementById("results")
            container.innerHTML=null;
            append(res,container)
        })
import { searchNews ,append} from "./fetch.js"
let side=document.getElementById("sidebar").children
for(let el of side){
    console.log(el.id)
    el.addEventListener("click",function(){
        // console.log(el.id)
        const api=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${el.id}`

        searchNews(api).then((res)=>{
            console.log(res);
            let container=document.getElementById("results")
            container.innerHTML=null;
            append(res,container)
        })
    })


}
document.getElementById("search_input").addEventListener("keydown",function(){
    if(event.key=="Enter"){
        localStorage.setItem("query",JSON.stringify(this.value))
        window.location.href="../search.html"

    }


})



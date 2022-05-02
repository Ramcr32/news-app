let searchNews= async (api)=>{


    try{
        let res=await fetch(api)
        let data= await res.json();
        return data.articles;
        // console.log(data.articles)
    }catch(err){
        console.log("err:",err)
    }
}

let append = (data,container)=>{
    data.forEach(({urlToImage,title,description})=>{
        let maindiv = document.createElement("div");
        let img= document.createElement("img");
        let head = document.createElement("h3");
        let p=document.createElement("p");
        let div =document.createElement("div");
        img.src=urlToImage;
        p.innerText=description;
        head.innerText=title

        div.append(head,p)
        maindiv.append(img,div)
        maindiv.addEventListener("click",function(){
            gotoDetail({urlToImage,title,description})
        })
        container.append(maindiv)


    })
}
function gotoDetail({urlToImage,title,description}){
    console.log({urlToImage,title,description})
    localStorage.setItem("news",JSON.stringify({urlToImage,title,description}))
    window.location.href="../news.html"
}

export {searchNews, append}
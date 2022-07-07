    let up = document.querySelector(".up")
    window.onscroll = function(e){
        if(scrollY + window.innerHeight === document.documentElement.scrollHeight){
            up.style.right = "0px"
        }else{
            up.style.right = "-50px"
        }
        let header = document.querySelector("#nav")
        if(window.scrollY > 200){
            header.style.opacity = "0.1"
        }else{
            header.style.opacity = "1"
        }
        if(window.scrollY > 500){
        header.style.position = "fixed"
        header.style.opacity = "1"
        }else{
        header.style.position = "static"
        }
    }
    up.onclick = function(){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }
let li = document.querySelectorAll(".list ul li")
for(let i = 0;i < li.length; i++){
    li[i].addEventListener("click",() =>{
        window.scrollTo({
            top:parseInt(li[i].id),
            left:0,
            behavior:"smooth"
        })
    })
}

// window.onscroll = function(){
//     let header = document.querySelector("#nav")
//     if(window.scrollY > 500){
//         header.style.position = "fixed"
//     }else{
//         header.style.position = "static"
//     }
// }
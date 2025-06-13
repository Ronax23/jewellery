 let clicker=document.querySelectorAll("nav i")
        let menu=document.querySelectorAll("nav .navs")
        clicker[0].addEventListener("click",()=>{
            clicker[0].classList.toggle("fa-xmark")
            menu[0].classList.toggle("active")
        })

        let products=document.querySelectorAll(".sec2 .block")
        let main=document.querySelector(".sec2 .main")
        let view_more=document.querySelector(".sec2 button")
        let check=0
     if(view_more)
     {
           view_more.addEventListener("click",()=>{
            if(check<2)
            {
                check++
                for(let i=0;i<8;i++)
                {
                  main.innerHTML+=products[i].outerHTML
                }
            }
            
        })
     }
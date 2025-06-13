 let clicker=document.querySelectorAll("nav i")
        let menu=document.querySelectorAll("nav .navs")
        clicker[0].addEventListener("click",()=>{
            clicker[0].classList.toggle("fa-xmark")
            menu[0].classList.toggle("active")
            console.log(menu[0])
        })

        let products=document.querySelectorAll(".sec2 .block")
        let main=document.querySelector(".sec2 .main")
        let view_more=document.querySelector(".sec2 button")
        let check=0
        view_more.addEventListener("click",()=>{
            if(check<2)
            {
                check++
                for(let i=0;i<=8;i++)
                {
                  main.innerHTML+=products[i].outerHTML
                }
            }
            
        })
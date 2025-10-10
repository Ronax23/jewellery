      async function fetch_dat() {
      try{
		  let result=await  fetch("https://fakestoreapi.com/products/category/jewelery")
      return await result.json()
	  }
      catch(e)
		  {
			  console.log("error" +e)
		  }
      
     }



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


        let arr=fetch_dat()
     if(view_more)
     {
           view_more.addEventListener("click",()=>{
            if(check==0)
            {
                check++
				view_more.innerText="Collapse"
               arr.then(el=> el.forEach(element => { 
                let product=document.createElement("section")
                product.setAttribute("class","block fetched")
               product.innerHTML= `    
               
                    <p>New</p>
                    <img src="${element.image}" alt="">
                    <section class="dat">
                        <span>${element.title}</span>
                        <span class="price">Price <span>&#8377;${Math.round(element.price*89)}</span></span>
                    </section>`
                 main.append(product)
               
                
               }))
            }
			   
			   else{
				   document.querySelectorAll(".fetched").forEach(em=> em.remove())
				   view_more.innerText="View All Products"
				   check--
			   }
            
        })
     }



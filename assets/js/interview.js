 var d1 = document.querySelector(".section-2 .my_container__1 .description")
 var d2 = document.querySelector(".section-2 .my_container__2 .description")
 var d3 = document.querySelector(".section-2 .my_container__3 .description")
 var d4 = document.querySelector(".section-2 .my_container__4 .description")

 var s1 = document.querySelector(".section-2 .my_container__1 .hidden_slide")
 var s2 = document.querySelector(".section-2 .my_container__2 .hidden_slide")
 var s3 = document.querySelector(".section-2 .my_container__3 .hidden_slide")
 var s4 = document.querySelector(".section-2 .my_container__4 .hidden_slide")

 var b11 = document.querySelector(".section-2 .my_container__1 .btn1")
 var b12 = document.querySelector(".section-2 .my_container__1 .btn2")
 var b21 = document.querySelector(".section-2 .my_container__2 .btn1")
 var b22 = document.querySelector(".section-2 .my_container__2 .btn2")
 var b31 = document.querySelector(".section-2 .my_container__3 .btn1")
 var b32 = document.querySelector(".section-2 .my_container__3 .btn2")
 var b41 = document.querySelector(".section-2 .my_container__4 .btn1")
 var b42 = document.querySelector(".section-2 .my_container__4 .btn2")


function mediaSize(){
   if (window.matchMedia("(max-width: 800px)").matches)
   {
      b11.addEventListener("click",function(){
         d1.style.visibility = "none";
         s1.style.transform = "translateX(0%)";
         s1.style.visibility = "visible";
         
      })
      
      b12.addEventListener("click",function(){        
         s1.style.transform = "translateX(100%)";
         s1.style.visibility = "hidden";
         d1.style.visibility = "visible";
      })
      
      b21.addEventListener("click",function(){
         d2.style.visibility = "hidden";
         s2.style.transform = "translateX(0%)";
         s2.style.visibility = "visible";
      
      })
      
      b22.addEventListener("click",function(){
         
         s2.style.transform = "translateX(-100%)";
         s2.style.visibility = "hidden";
         d2.style.visibility = "visible";
      })

      b31.addEventListener("click",function(){
         d3.style.visibility = "none";
         s3.style.transform = "translateX(0%)";
         s3.style.visibility = "visible";
         
      })
      
      b32.addEventListener("click",function(){        
         s3.style.transform = "translateX(100%)";
         s3.style.visibility = "hidden";
         d3.style.visibility = "visible";
      })

      b41.addEventListener("click",function(){
         d4.style.visibility = "hidden";
         s4.style.transform = "translateX(0%)";
         s4.style.visibility = "visible";
      
      })
      
      b42.addEventListener("click",function(){
         
         s4.style.transform = "translateX(-100%)";
         s4.style.visibility = "hidden";
         d4.style.visibility = "visible";
      })
      
   }

   else
   {
      b11.addEventListener("click",function(){
         s1.style.transform = "translateX(36%)";
      })

      b12.addEventListener("click",function(){
         s1.style.transform = "translateX(134%)";
      })

      b21.addEventListener("click",function(){
         s2.style.transform = "translateX(-36%)";
      })

      b22.addEventListener("click",function(){
         s2.style.transform = "translateX(-134%)";
      })

      b31.addEventListener("click",function(){
         s3.style.transform = "translateX(36%)";
      })

      b32.addEventListener("click",function(){
         s3.style.transform = "translateX(134%)";
      })

      b41.addEventListener("click",function(){
         s4.style.transform = "translateX(-36%)";
      })

      b42.addEventListener("click",function(){
         s4.style.transform = "translateX(-134%)";
      })
   }

}

   mediaSize();
   window.addEventListener("resize",mediaSize,false);


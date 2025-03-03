function cursor(){
    var body = document.querySelector("body");

    body.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })

    Shery.makeMagnet("#nav-part2 h4,#footer-div h5,#footer a" , {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    
}
cursor();

function loadingAnimation(){
    var tl = gsap.timeline();

    tl.from(".line h1",{
        y:+150,
        stagger:0.2,
        duration:0.6,
        delay:0.5
    })

    tl.from(".line1-part1,.line h2",{
        opacity:0,
        onStart:function(){
            var h5timer = document.querySelector(".line1-part1 h5");
            var grow = 0;
        setInterval(function(){

            if(grow<100){
                grow++;
                h5timer.innerHTML = grow;
            }
            else{
                h5timer.innerHTML = grow;
            }
        },35)

        }
    })

    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:3.5 //3.5
    })

    tl.from("#page1",{
        delay:0.2,
        y:3600,
        opacity:0,
        duration:0.5,
        ease:Power4
    })

    tl.to("#loader",{
        display:"none"
    })

    tl.from("#nav",{
        opacity:0,
    })

    tl.from("#num,#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
        y:160,
        stagger:0.1,
        opacity:0
    })
}
loadingAnimation();



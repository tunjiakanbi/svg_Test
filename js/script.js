      // Look for .hamburger
      var hamburger = document.querySelector(".hamburger");
      // On click
        hamburger.addEventListener("click", function () {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        // Do something else, like open/close menu
      });
      // custom javascript starts here

      $(document).ready(function () {
        //Init scrollspy
        $("body").scrollspy({
          target: "#navigation",
          // offset: 176
        });

        $("#navigation a").on("click", function (e) {
          if (this.hash !== "") {
            e.preventDefault();

            const hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
              },
              800,
              function () {
                window.location.hash = hash;
              });
          }
        });


        // $('.navbar-nav>li>a').on('click', function () {
        //   $('.navbar-collapse').collapse('hide');
        // });

        //svg DOM elements
        let waves = $('.waves');
        let lakeText = $('#laketime-text');
        let sunrayChild = $('#sunrays>.cls-2');
        let seconds = $('#seconds>.cls-5');
        let hours = $('#hours>.cls-1');
        let hourmins = $('#hour-mins');
        console.log(hours);

        //easing variables
        const ei = "power4.in";
        const eo = "power4.out";
        const bo = "bounce.out";
        const bi = "bounce.in";


        function showWaves() {
          let showwaves = gsap.timeline({
            id: "showwaves"
          });
          showwaves.fromTo(waves, {
            y: 50,
            autoAlpha: 0
          }, {
            y: 0,
            autoAlpha: 1,
            duration: 3,
            ease: bo
          }, "-=2");
        }
        function showText(){
          let showtext = gsap.timeline({
            id: "showtext"
          });
          showtext.fromTo(lakeText, {
            autoAlpha: 0
          }, {
            autoAlpha: 1,
            duration: 2,
            ease: ei
          });
        }

        function showRays() {
          let showrays = gsap.timeline({
            id: "showrays"
          });
          showrays.to('#semi-circ', {
            autoAlpha: 1,
            duration:1, 
            ease: bi
          });
          showrays.fromTo(sunrayChild, {
            autoAlpha: 0,
            x: 15
          },{
            x: 0,
            autoAlpha: 1,
            //  duration: 6,
             stagger: 0.2,
             ease: ei
          },"+=3");
        }
        function showSeconds(){
          let showseconds = gsap.timeline({
            id: "showseconds"
          });
          showseconds.to(hours, {autoAlpha: 1, duration: 2},"+=4")
          showseconds.fromTo(seconds, {
            autoAlpha: 0,
            y: 15
          }, {
            y: 0,
            autoAlpha: 1,
              //duration: 6,
             stagger: 0.1,
             ease: ei
          },"+=3");
          showseconds.to('#hour-mins', {
            autoAlpha: 1, 
            duration: 1, 
            ease:bi})
        }

        let master = gsap.timeline();
        master
        .add(showWaves())
        .add(showText())
        .add(showRays())
        .add(showSeconds())
        
        ;
        GSDevTools.create();
        // document ready ends below
        // test code added
      });
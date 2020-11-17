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

        let waves = $('.waves');
        let lakeText = $('#laketime-text');
        console.log(lakeText);
        const ei = "power4.in";
        const eo = "power4.out";
        const bo = "bounce.out";
        const bi = "bounce.in";

        function showWaves() {
          let showwaves = gsap.timeline({
            id: "showwaves"
          });
          showwaves.fromTo(lakeText, {
            autoAlpha: 0
          }, {
            autoAlpha: 1,
            duration: 2,
            ease: ei
          }, '-=3');

          showwaves.fromTo(waves, {
            y: 50,
            autoAlpha: 0
          }, {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: bo
          });
        }

        let master = gsap.timeline();
        master.add(showWaves());
        GSDevTools.create();
        // document ready ends below
      });
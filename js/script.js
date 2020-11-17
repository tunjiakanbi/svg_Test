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

        // document ready ends below
      });
 $(document).ready(function () {
            // Add smooth scrolling to all links
            $("a").on('click', function (event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });
        });


        $(document).ready(function () {
            $(".btn-1").click(function () {
                $(".para-2").hide();
                $(".video-2").hide();
                $(".para-1").show();
                $(".video-1").show();

                


            });
            $(".btn-2").click(function () {
                $(".para-2").show();
                $(".video-2").show();
                $(".para-1").hide();
                $(".video-1").hide();


            });
        });

                const toggle = document.querySelector(".toggle");
        const menu = document.querySelector(".menu");
        const items = document.querySelectorAll(".item");

        /* Toggle mobile menu */
        function toggleMenu() {
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
            } else {
                menu.classList.add("active");
                toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
            }
        }

        /* Activate Submenu */
        function toggleItem() {
            if (this.classList.contains("submenu-active")) {
                this.classList.remove("submenu-active");
            } else if (menu.querySelector(".submenu-active")) {
                menu.querySelector(".submenu-active").classList.remove("submenu-active");
                this.classList.add("submenu-active");
            } else {
                this.classList.add("submenu-active");
            }
        }

        /* Close Submenu From Anywhere */
        function closeSubmenu(e) {
            let isClickInside = menu.contains(e.target);

            if (!isClickInside && menu.querySelector(".submenu-active")) {
                menu.querySelector(".submenu-active").classList.remove("submenu-active");
            }
        }
        /* Event Listeners */
        toggle.addEventListener("click", toggleMenu, false);
        for (let item of items) {
            if (item.querySelector(".submenu")) {
                item.addEventListener("click", toggleItem, false);
            }
            item.addEventListener("keypress", toggleItem, false);
        }
        document.addEventListener("click", closeSubmenu, false);
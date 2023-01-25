
    document.getElementById("boton_fecha").onmouseover = function fecha() {
        document.getElementById("fecha").innerHTML = Date();
    }

    // Modo Oscuro
    document.getElementById("dark_mode").addEventListener("click", function darkMode() {
        document.body.style.backgroundColor = "#212F3D";
        document.getElementById("content").style.backgroundColor = "#566573";
        document.getElementById("sidebar").style.backgroundColor = "#2C3E50";
        
        const collection = document.getElementsByTagName("ul");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#808B96";
        }

        const parrafo = document.getElementById("fecha");
        parrafo.style.color = "white";
        parrafo.style.fontWeight = "normal";
    })

        // Modo Claro
    document.getElementById("light_mode").addEventListener("click", function lightMode() {
        document.body.style.backgroundColor = "white";
        document.getElementById("content").style.backgroundColor = "#DAD9DE";
        document.getElementById("sidebar").style.backgroundColor = "#9FBCC6";
        
        const collection = document.getElementsByTagName("ul");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#F4F4F4";
        }

        const parrafo = document.getElementById("fecha");
        parrafo.style.color = "black";
        parrafo.style.fontWeight = "bold";
    })

        // Ir arriba de la página
    let botonArriba = document.getElementById("arriba");
    window.onscroll = function() {scroll()};

    function scroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            botonArriba.style.display = "block";
        } else {
            botonArriba.style.display = "none";
        }
    }

    function irArriba() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // Mostrar fecha y hora de hoy
    document.getElementById("boton_fecha").onmouseover = function fecha() {
        document.getElementById("fecha").innerHTML = Date();
    }

    // Modo Oscuro
    document.getElementById("dark_mode").addEventListener("click", function darkMode() {
        document.getElementById("content").classList.remove("cont_bgcolor");
        document.getElementById("content").classList.add("cont_bgcolorDark");
        document.getElementById("sidebar").classList.remove("side_bgcolor");
        document.getElementById("sidebar").classList.add("side_bgcolorDark");
        document.getElementById("active").classList.remove("active");
        document.getElementById("active").classList.add("activeDark");
        
        const collection = document.getElementsByTagName("ul");
        for (let i = 0; i < collection.length; i++) {
            collection[i].classList.remove("ul_bgcolor");
            collection[i].classList.add("ul_bgcolorDark");
        }

        const parrafo = document.getElementById("fecha");
        parrafo.style.color = "white";
        parrafo.style.fontWeight = "normal";
    })

    // Modo Claro
    document.getElementById("light_mode").addEventListener("click", function lightMode() {
        document.getElementById("content").classList.remove("cont_bgcolorDark");
        document.getElementById("content").classList.add("cont_bgcolor");
        document.getElementById("sidebar").classList.remove("side_bgcolorDark");
        document.getElementById("sidebar").classList.add("side_bgcolor");
        document.getElementById("active").classList.remove("activeDark");
        document.getElementById("active").classList.add("active");
        
        const collection = document.getElementsByTagName("ul");
        for (let i = 0; i < collection.length; i++) {
            collection[i].classList.remove("ul_bgcolorDark");
            collection[i].classList.add("ul_bgcolor");
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
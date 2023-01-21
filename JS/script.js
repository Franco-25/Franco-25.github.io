
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
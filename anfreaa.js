const boton = document.getElementById("botonCarta");
const carta = document.getElementById("carta");

boton.addEventListener("click", () => {

    carta.classList.toggle("mostrar");

    if (carta.classList.contains("mostrar")) {
        boton.textContent = "💛 Cerrar carta";
    } else {
        boton.textContent = "💌 Abrir mi carta";
    }
});


// Crear flores cayendo

function crearFlor() {

    const flor = document.createElement("div");

    flor.classList.add("flor");

    const flores = ["🌻", "🌼", "💛", "🌻"];

    flor.textContent =
        flores[Math.floor(Math.random() * flores.length)];

    flor.style.left = Math.random() * 100 + "vw";

    flor.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    flor.style.fontSize =
        (18 + Math.random() * 20) + "px";

    document.body.appendChild(flor);

    setTimeout(() => {
        flor.remove();
    }, 9000);
}

setInterval(crearFlor, 500);


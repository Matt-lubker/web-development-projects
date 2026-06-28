const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");

function mostrarModal() {
    modal.classList.add("ativo");
    mascara.classList.add("ativo");
}

function esconderModal() {
    modal.classList.remove("ativo");
    mascara.classList.remove("ativo");
}

// Exemplo de script JavaScript que pode ser expandido
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Página carregada');
});

function deleteRecord(recordId) {
    if (confirm("Tem certeza que deseja excluir este registro?")) {
        // A lógica para excluir o registro pode ser adicionada aqui.
        alert("Registro " + recordId + " excluído com sucesso!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const popupOverlay = document.getElementById("forgotPasswordPopup");
    const closePopup = document.getElementById("closePopup");

    // Abrir o popup
    forgotPasswordLink.addEventListener("click", function () {
        popupOverlay.style.display = "flex";
    });

    // Fechar o popup
    closePopup.addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });

    // Fechar o popup quando clicar fora dele
    popupOverlay.addEventListener("click", function (e) {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });
});

// Exemplo de script JavaScript que pode ser expandido
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Página carregada');
});

// Função para excluir um registro
function deleteRecord(recordId) {
    if (confirm("Tem certeza que deseja excluir este registro?")) {
        // A lógica para excluir o registro pode ser adicionada aqui.
        alert("Registro " + recordId + " excluído com sucesso!");
    }
}

// Lógica para o popup de "Esqueci minha senha"
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

// Função para alternar entre modo claro e escuro
function toggleDarkMode() {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');
    
    // Armazenar a preferência no localStorage para persistência
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Carregar preferências de modo (salvas no localStorage)
window.addEventListener('load', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

// Função para exibir notificações
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

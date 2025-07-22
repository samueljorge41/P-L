// Data do casamento
const casamentoData = new Date("October 4, 2025 15:30:00").getTime();

function atualizarContagem() {
    const agora = new Date().getTime();
    const diferenca = casamentoData - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div>${dias} <span>dias</span></div>
        <div>${horas} <span>horas</span></div>
        <div>${minutos} <span>minutos</span></div>
        <div>${segundos} <span>segundos</span></div>
    `;

    if (diferenca < 0) {
        document.getElementById("countdown").innerHTML = "<p>Chegou o grande dia! 🎉</p>";
    }
}

// Executa o preloader ao carregar a página
window.onload = function () {
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';
        document.body.classList.remove('preloader-active'); // Remove a classe após o preloader desaparecer
    }, 1300); // O preloader desaparece após 1.3 segundos
};

// Adiciona a classe ao carregar a página
document.body.classList.add('preloader-active');

// Atualiza a contagem a cada segundo
setInterval(atualizarContagem, 1000);

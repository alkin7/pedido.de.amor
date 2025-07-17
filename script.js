document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Tenta tocar a música automaticamente
    // ATENÇÃO: Navegadores modernos podem bloquear o autoplay até a primeira interação do usuário.
    backgroundMusic.play().catch(error => {
        console.log("Auto-play de música bloqueado. O usuário precisa interagir com a página.");
        // Opcional: Você pode exibir uma mensagem ou um botão "Tocar Música" aqui.
    });

    yesBtn.addEventListener('click', () => {
        alert('YAY! Eu te amo muito! ❤️');
        // Opcional: Redirecionar para outra página ou exibir uma animação de confetti!
        // window.location.href = 'parabens.html';
    });

    noBtn.addEventListener('click', () => {
        alert('Ah, não acredito! Pense bem! 😉');
        // Opcional: Adicione um efeito divertido aqui, como fazer o botão se mover.
        // Para um efeito de "fuga":
        // noBtn.style.position = 'absolute';
        // noBtn.style.left = `${Math.random() * (window.innerWidth - noBtn.offsetWidth)}px`;
        // noBtn.style.top = `${Math.random() * (window.innerHeight - noBtn.offsetHeight)}px`;
    });
});
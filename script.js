// Salva o estado dos botões no localStorage
function salvarEstado() {
    const estado = Array.from(document.querySelectorAll('.check-btn')).map(btn =>
        btn.classList.contains('checked')
    );
    localStorage.setItem('estadoTreino', JSON.stringify(estado));
}

// Restaura o estado salvo ao carregar a página
function restaurarEstado() {
    const estadoSalvo = JSON.parse(localStorage.getItem('estadoTreino')) || [];
    const botoes = document.querySelectorAll('.check-btn');

    botoes.forEach((btn, i) => {
        if (estadoSalvo[i]) {
            btn.classList.add('checked');
            btn.textContent = '✅ Feito';
            btn.style.backgroundColor = '#4CAF50';
            btn.style.color = 'white';
        } else {
            btn.classList.remove('checked');
            btn.textContent = '✅';
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }
    });
}

// Executa após o DOM ser carregado
document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.check-btn');

    // Restaura o estado salvo
    restaurarEstado();

    // Adiciona evento de clique a cada botão
    botoes.forEach(function (btn) {
        btn.addEventListener('click', function () {
            btn.classList.toggle('checked');

            const estaFeito = btn.classList.contains('checked');
            btn.textContent = estaFeito ? '✅ Feito' : '✅';
            btn.style.backgroundColor = estaFeito ? '#4CAF50' : '';
            btn.style.color = estaFeito ? 'white' : '';

            salvarEstado();
        });
    });
});

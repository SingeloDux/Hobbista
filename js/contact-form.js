document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');
  const mensagemSucesso = document.createElement('p');
  mensagemSucesso.style.color = '#ffcc00';
  mensagemSucesso.style.textAlign = 'center';
  mensagemSucesso.style.marginTop = '1rem';
  mensagemSucesso.style.fontWeight = '700';
  mensagemSucesso.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // evita o recarregamento da página
    // Remove mensagem anterior se existir
    if (form.contains(mensagemSucesso)) {
      form.removeChild(mensagemSucesso);
    }
    form.appendChild(mensagemSucesso);
    form.reset(); // limpa o formulário
  });
});
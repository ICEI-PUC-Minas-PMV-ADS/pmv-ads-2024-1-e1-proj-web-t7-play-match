document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('input[type="password"]');

    form.addEventListener('submit', function(event) {
      let hasError = false;
      if (!emailInput.value.includes('@')) {
        alert('Por favor, insira um e-mail válido.');
        hasError = true;
      }

      if (passwordInput.value.length < 5 || passwordInput.value.length > 12) {
        alert('A senha deve ter entre 5 e 12 caracteres.');
        hasError = true;
      }

      if (hasError) {
        event.preventDefault(); // Impede o envio do formulário se houver erro
      }
    });

    // Efeito de hover para os ícones das redes sociais
    const socialIcons = document.querySelectorAll('a img');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
      });
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
      });
    });

  });
  
  
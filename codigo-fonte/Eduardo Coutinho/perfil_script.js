document.getElementById('menuBtn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

function loadProfile() {
    document.getElementById('name').value = localStorage.getItem('name');
    document.getElementById('cpf').value = localStorage.getItem('cpf');
    document.getElementById('email').value = localStorage.getItem('email');
    document.getElementById('phone').value = localStorage.getItem('phone');
  }
  
  function saveProfile() {
    let oldPassword = localStorage.getItem('password');
    let inputOldPassword = document.getElementById('oldPassword').value;
    if (oldPassword === inputOldPassword) {
      let newPassword = document.getElementById('newPassword').value;
      let confirmPassword = document.getElementById('confirmPassword').value;
      if (newPassword === confirmPassword) {
        localStorage.setItem('name', document.getElementById('name').value);
        localStorage.setItem('cpf', document.getElementById('cpf').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('phone', document.getElementById('phone').value);
        localStorage.setItem('password', newPassword);
        alert('Perfil atualizado com sucesso!');
      } else {
        alert('A confirmação da senha não corresponde à nova senha.');
      }
    } else {
      alert('Senha antiga incorreta.');
    }
  }
  
  window.onload = function() {
    loadProfile();
  };
<script>
   document.getElementById('menuBtn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
   
   
   // Função para salvar dados no localStorage
    function saveData() {
        const notifications = document.querySelectorAll('.notification .not div');
        const messages = document.querySelectorAll('.messages .mes div');
        
        let notificationData = [];
        notifications.forEach(notification => {
            notificationData.push({
                quadra: notification.querySelector('.quadra').innerText,
                text: notification.querySelector('p').innerText
            });
        });

        let messageData = [];
        messages.forEach(message => {
            messageData.push({
                name: message.querySelector('.Paulo').innerText,
                text: message.querySelector('p').innerText
            });
        });

        localStorage.setItem('notifications', JSON.stringify(notificationData));
        localStorage.setItem('messages', JSON.stringify(messageData));
    }

    // Função para carregar dados do localStorage
    function loadData() {
        const notificationData = JSON.parse(localStorage.getItem('notifications'));
        const messageData = JSON.parse(localStorage.getItem('messages'));

        const notificationSection = document.querySelector('.notification .not');
        notificationSection.innerHTML = '<h2>Notificações</h2>';
        if (notificationData) {
            notificationData.forEach(notification => {
                const div = document.createElement('div');
                div.innerHTML = `<span class="quadra">${notification.quadra}</span>
                                 <p>${notification.text}</p>`;
                notificationSection.appendChild(div);
            });
        }

        const messageSection = document.querySelector('.messages .mes');
        messageSection.innerHTML = '<h3>Mensagens</h3>';
        if (messageData) {
            messageData.forEach(message => {
                const div = document.createElement('div');
                div.innerHTML = `<span class="Paulo">${message.name}</span>
                                 <p>${message.text}</p>`;
                messageSection.appendChild(div);
            });
        }
    }

    // Função para gerar dados de teste manualmente
    function generateTestData() {
      const testNotifications = [
            { quadra: 'Quadra Pacifico', text: 'Evento de futebol agendado para sábado às 16h.' },
            { quadra: 'Quadra Oceano', text: 'Torneio de basquete na quarta-feira às 19h.' },
            { quadra: 'Quadra Europa', text: 'Treino de vôlei na sexta-feira às 18h.' },
            { quadra: 'Quadra América', text: 'Competição de natação no domingo às 10h.' }
        ];

        const testMessages = [
            { name: 'João Silva', text: 'Vamos jogar futebol no sábado?' },
            { name: 'Maria Fernanda', text: 'Confirmado para o torneio de basquete!' },
            { name: 'Lucas Gomes', text: 'Pode contar comigo para o treino de vôlei.' },
            { name: 'Ana Paula', text: 'Ansiosa para a competição de natação!' }
        ];

        localStorage.setItem('notifications', JSON.stringify(testNotifications));
        localStorage.setItem('messages', JSON.stringify(testMessages));

        alert("Dados de teste gerados no localStorage!");
    }

        


    // Funções de teste
    function testSaveData() {
        saveData();
        alert("Dados salvos no localStorage!");
    }

    function testLoadData() {
        loadData();
        alert("Dados carregados do localStorage!");
    }

    function testClearData() {
        localStorage.removeItem('notifications');
        localStorage.removeItem('messages');
        alert("Dados do localStorage removidos!");
    }

    // Carregar dados ao carregar a página
    document.addEventListener('DOMContentLoaded', loadData);

    // Salvar dados quando o usuário sair da página
    window.addEventListener('beforeunload', saveData);
 </script> 


 <button onclick="testSaveData()">Salvar Dados</button>
 <button onclick="testLoadData()">Carregar Dados</button>
 <button onclick="testClearData()">Limpar Dados</button>
 <button onclick="generateTestData()">Gerar Dados de Teste</button>

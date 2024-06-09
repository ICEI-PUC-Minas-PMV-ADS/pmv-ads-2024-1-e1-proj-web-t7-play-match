const input = document.getElementById('buscar');

input.addEventListener('keypress', function(event) {
  console.log('bla')
    if (event.keyCode === 13) {
        console.log('buscar')
    }
});

const updateItems = () => {
  console.log('updateItems')
  const nomequadra = document.getElementById('nomequadra').value
  const img = document.getElementById('img').value
  localStorage.setItem(nomequadra, JSON.stringify({
    title: nomequadra, 
    imgPath: img
  }))
  const formQuadra = document.getElementById('form-quadra')
  formQuadra.reset()

  window.location.href = 'file:///home/muniz/Downloads/karol/page-2/index.html';
}
document.getElementById('cadastrar').addEventListener('click', updateItems);

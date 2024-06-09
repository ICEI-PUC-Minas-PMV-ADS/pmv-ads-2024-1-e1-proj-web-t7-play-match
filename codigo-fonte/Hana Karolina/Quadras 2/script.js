const db = [
  {
    title: 'Quadra Society2',
    imgPath: 'https://static.sportit.com.br/public/sportit/imagens/produtos/quadra-poliesportiva-piso-modular-externo-m2-2921.jpg'
  },
  {
    title: 'Quadra Futsal',
    imgPath: 'https://www.tudograma.com.br/images/blog/construcao-de-campo-society-confira-o-melhor-custo-beneficio-para-esse-servico/construcao-de-campo-society-confira-o-melhor-custo-beneficio-para-esse-servico-1.jpg'
  },
  {
    title: 'Quadra Futsal sem imagem',
  }
]

const NO_IMAGE = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'

if (!localStorage.length) {
  db.forEach(item => localStorage.setItem(item.title, JSON.stringify(item)))
}

console.log(localStorage)

let searchValue = ''



function createDivs () {
  const container = document.getElementById('container');

  const db = Object.keys(localStorage).map(title => {
    if (searchValue) {
      console.log('searchValue', searchValue)
      return title.toLocaleLowerCase().includes(searchValue) && JSON.parse(localStorage[title])
    } else {
      return JSON.parse(localStorage[title])
    }
  }).filter(e => e)
  console.log(db)
  db.forEach((element, index) => {

    const corpo = document.getElementById('corpo');

    const mainDiv = document.createElement('div');
    mainDiv.className = 'cabeçalho2';

    const spanElement = document.createElement('span');
    spanElement.textContent = element.title;
    mainDiv.appendChild(spanElement);

    const imgFavorite = document.createElement('img');
    imgFavorite.src = element.imgPath || NO_IMAGE;
    imgFavorite.alt = 'Icone para favoritar';
    mainDiv.appendChild(imgFavorite);

    const hrElement = document.createElement('hr');
    mainDiv.appendChild(hrElement);

    const avaliacaoDiv = document.createElement('div');
    avaliacaoDiv.className = 'avaliacao';

    const imgAvaliacao = document.createElement('img');
    imgAvaliacao.src = './Group 37.png';
    imgAvaliacao.alt = 'Avaliação da quadra';
    avaliacaoDiv.appendChild(imgAvaliacao);

    const avaliacaoSpan = document.createElement('span');
    avaliacaoSpan.textContent = '5.2 km de você, aberta agora.';
    avaliacaoDiv.appendChild(avaliacaoSpan);

    mainDiv.appendChild(avaliacaoDiv);

    const imgQuadra = document.createElement('img');
    imgQuadra.className = 'quadra';
    imgQuadra.id = 'imagemQuadra';
    imgQuadra.src = './quadra.png';
    imgQuadra.width = 50;
    mainDiv.appendChild(imgQuadra);

    corpo.appendChild(mainDiv);


    const newDiv = document.createElement('div');

    newDiv.textContent = element.title;

    newDiv.setAttribute('class', 'dynamic-div');
    newDiv.style.border = '1px solid black';
    newDiv.style.margin = '5px';
    newDiv.style.padding = '10px';

  });
}

function clearDiv () {
  const corpo = document.getElementById('corpo');
  while (corpo.firstChild) {
    corpo.removeChild(corpo.firstChild);
  }
}
const input = document.getElementById('buscar');

input.addEventListener('keydown', function (event) {
  if (event.key === 'Backspace') {
    if (input.value.length > 1) {
      const list = [...input.value]
      list.pop()
      searchValue = list.join('')
    } else if (input.value.length > 0) {
      searchValue = undefined
    }
  } else {
    searchValue = input.value +  event.key
    console.log('input.value', input.value)
    console.log('event.key', event.key)
    console.log('searchValue', searchValue)
  }

  clearDiv();
  createDivs()
});


window.onload = function () {
  createDivs();
};
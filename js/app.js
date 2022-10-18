window.addEventListener('scroll', onScroll); //quando a exibição da janela é rolada, a funcão onScroll é acionada

onScroll(); // a função onSroll é chamada 

function onScroll() { // toda vez que a função onScroll for acionada, ela irá chamar as seguintes funções:
  mostraFundoMenu();
  mostraBotaoVoltarTopo();

  ativaMenuSecaoAtual(home);
  ativaMenuSecaoAtual(metaverso);
  ativaMenuSecaoAtual(midiasDigitais);
  ativaMenuSecaoAtual(bioinformatica);
}

function mostraFundoMenu() { // função responsável por mostrar e esconder o fundo da barra do menu
  //A scrollY é uma propriedade de somente leitura e que retorna os pixels que um documento percorreu do canto superior esquerdo da janela.
  if (scrollY > 0) { //Aqui é verificado se o documento não está no topo
    autoNav.classList.add('scroll'); //o elemento cujo id é "autoNav" irá receber uma class chamada "scroll"
  } else {
    autoNav.classList.remove('scroll'); //será retirado do elemento, cujo id é "autoNav", a class chamada "scroll"
  }
}

function mostraBotaoVoltarTopo() { // função responsável por mostrar e esconder o botão de subir para o topo
  if (scrollY > 550) { // é verificado se o valor retornado pelo scrollY é superior a 550px
    backToTopButton.classList.add('show');//o elemento cujo id é "backToTopButton" irá receber uma class chamada "show"
  } else {
    backToTopButton.classList.remove('show');//será retirado do elemento, cujo id é "backToTopButton", a class chamada "show"
  }
}

function ativaMenuSecaoAtual(section) { // função responsável por mostrar no menu em qual seção está do documento

  //A propriedade innerHeightA de somente leitura da Window interface retorna a altura interna da janela em pixels 
  
  const centroTela = scrollY + innerHeight / 2; // a constante 'centroTela' receberá o valor de scrollY mais a metade do valor do innerHeight, basicamente, vai calcular o centro da tela

  const TopoSecao = section.offsetTop; //a constante 'TopoSecao' vai receber a medida, em pixels, da distância do elemento atual, que foi passado por parâmetro quando a função foi chamada, em relação ao topo do elemento pai
  const alturaSecao = section.offsetHeight; //a constante 'alturaSecao' vai receber o tamanho da seção passada por parâmetro através da propriedade offsetHeight
  const topoSecaoAlcancouOuPassouCentroTela = centroTela >= TopoSecao; //vai receber um valor booleano a partir da verificação de que se a parte de cima da seção alcançou o centro da tela 

  const fimSecao = TopoSecao + alturaSecao; // calcula a altura do final da seção
  const fimSecaoAlcancouOuPassouCentroTela = fimSecao <= centroTela; //vai receber um valor booleano a partir da verificação de que se a parte de baixo da seção passou do centro da tela

  const dentroLimitesSecao = topoSecaoAlcancouOuPassouCentroTela && !fimSecaoAlcancouOuPassouCentroTela; //vai receber um valor booleano a partir da verificação de que se a parte de cima da seção alcançou o centro da tela e a parte de baixo da seção não passou do centro da tela

  const idSecao = section.getAttribute('id'); //vai pegar o valor do atributo id da seção
  const elementoMenu = document.querySelector(`#autoNav a[href*=${idSecao}]`); // vai pegar o elemento 'a', que está dentro de um elemento que tenha a id 'autoNav', cujo o atributo 'href' tenha o valor obtido na idSecao

  elementoMenu.classList.remove('active'); // vai remover a class 'actvive' do elemento 'a' cujo o atributo 'href' tenha o valor da seção que chamou a função
  if (dentroLimitesSecao) {
    elementoMenu.classList.add('active'); // caso a a parte de cima da seção tenha alcançado o centro da tela e a parte de baixo da seção não tenha passado do centro da tela, a âncora correspondente a essa seção vai receber uma class 'active'  
  }
}

const sitesButton = document.querySelector("#sitesButton");
const abntButton = document.querySelector("#abntButton");
const sites = document.querySelector("#sites");
const abnt = document.querySelector("#abnt");

sitesButton.addEventListener("click", () => {
  abntButton.removeAttribute("class");
  sitesButton.setAttribute("class", "active");

  abnt.style.display = "none";
  sites.style.display = "block";
});

abntButton.addEventListener("click", () => {
  sitesButton.removeAttribute("class");
  abntButton.setAttribute("class", "active");

  sites.style.display = "none";
  abnt.style.display = "block";
});




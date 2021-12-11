//menu ativo inspirado no vídeo https://www.youtube.com/watch?v=BI3kNsTruWo

const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for(let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].classList.add('active')
  }
  else {
    menuItem[i].classList.remove('active')
  }
}

//Slides dos artistas em destaque inspirados no vídeo https://www.youtube.com/watch?v=BwwOu29K6mE
let time = 7000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider figure")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
      nextImage()
    }, time)
}

window.addEventListener("load", start)

//Mensagem de agradecimento ao enviar formulário inspirada no post https://blog.betrybe.com/javascript/javascript-alert/

function agradecimento () {

  var nome = document.getElementById("nome")

  if ((nome.value != "") && (email.value != "") && (telefone.value != "") && (mensagem.value != "")){
    alert("Olá, " + nome.value + ", agradecemos a sua mensagem. Retornaremos o contato em breve!")
  }
}
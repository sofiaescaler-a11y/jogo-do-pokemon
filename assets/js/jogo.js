var velocidade = 1;
var jogando = true;

var imagem_gameOver = document.querySelector(".imagem_gameOver")

const cenario = {
    left: 0,
    jogo: document.querySelector("#jogo"),
    movimentar(){
        this.left = this.left - velocidade
        this.jogo.style.backgroundPositionX = this.left + "px"  
    },
    verficarGameOver(){
        if (personagem.vidas == 0) {
                velocidade = 0

                imagem_gameOver.style.display = 'block'   
                jogando = false
        }
    },
    limiteVelocidade(){
        if (velocidade > 500){
            velocidade === 499
        }
    }
}
const vilao = {
    right : -153,
    item: document.querySelector("#vilao"),
    movimentar(){
        this.right = this.right + velocidade
        this.item.style.right = this.right + "px" 

        var larguraJogo = cenario.jogo.offsetWidth
        if( larguraJogo < this.right){
            this.right =-153

            personagem.pontos = personagem.pontos + 10  
            document.querySelector("#pontos").innerHTML = personagem.pontos

            if (personagem.pontos % 50 === 0){
                velocidade = velocidade + 1
            }
        } 
    },

    colisao(){
        var posJogador = personagem.item.getBoundingClientRect()
        var posVilao = this.item.getBoundingClientRect()

        if(posJogador.left < posVilao.left && 
            posJogador.right > posVilao.left &&
            posJogador.bottom > posVilao.top &&
            posJogador.top <= posVilao.top){
            
                personagem.vidas = personagem.vidas - 1

                vilao.right = -153
                personagem.bottom = 70
                personagem.item.style.bottom = 70 + "px"
                document.querySelector("#vidas").innerHTML = personagem.vidas

            }
    }
}



const personagem = {
    pontos: 0,
    vidas: 3,
    bottom: 70, 
    pular: false,
    item: document.querySelector("#personagem"),
    
    subir() {
        this.bottom = this.bottom + velocidade * 2
        this.item.style.bottom = this.bottom + "px"
    },
    descer(){
        this.bottom = this.bottom - velocidade
        this.item.style.bottom = this.bottom + "px"
    },
    pulo(){
        
        if (this.pular == true){
            if (this.bottom < 310){
                this.subir()
            }else if (this.bottom == 310){
                this.pular = false
            }
        }else {
            if (this.bottom > 70){
                this.descer()
            }
        }

    }
}
setInterval(function(){
    cenario.movimentar()
    vilao.movimentar()
    personagem.pulo()
    vilao.colisao()
    cenario.verficarGameOver()
    rankiar()
    niveis()
}, 10)

document.addEventListener("keypress", function(){
    if (jogando === true) {
        personagem.pular = true
    } else {
        personagem.pontos = 0
        personagem.vidas = 3
        velocidade = 1

        vilao.right = -153
        personagem.bottom = 70

        document.querySelector("#vidas").innerHTML = 3
        document.querySelector("#pontos").innerHTML = 0 

        imagem_gameOver.style.display = "none"
    }
    
})

function rankiar(){
    var pont = document.querySelector(".pont")
    contador = 0
    if( contador < personagem.pontos){
        contador = contador + personagem.pontos
        pont.innerHTML = contador
        
    }else{
        contador === contador
    }
}
var jogo = document.querySelector("#jogo")
function niveis(){
    if(personagem.pontos === 50){
        jogo.style.backgroundImage = 'url(./assets/img/1.png)'
        jogo.style.backgroundPosition = 0+'px' -250+'px'

    } else if(personagem.pontos === 100){
        jogo.style.backgroundImage = 'url(./assets/img/2.png)'
        jogo.style.backgroundPosition = 0+'px' -250+'px'
    } else if(personagem.pontos === 150){
        jogo.style.backgroundImage = 'url(./assets/img/3.png)'
        jogo.style.backgroundPosition = 0+'px' -250+'px'
    } else if(personagem.pontos === 200){
        jogo.style.backgroundImage = 'url(./assets/img/4.png)'
        jogo.style.backgroundPosition = 0+'px' -250+'px'
    } else if(personagem.pontos === 250){
        jogo.style.backgroundImage = 'url(./assets/img/5.png)'
        jogo.style.backgroundPosition = 0+'px' -250+'px'
    } else if(personagem.pontos === 300){
        jogo.style.backgroundImage = 'url(./assets/img/6.png)'
        jogo.style.backgroundPosition = 0+'px' -250+'px'
    } else if(personagem.pontos === 400){
        jogo.style.backgroundImage = 'url(./assets/img/faseFinal.png)'
        jogo.style.backgroundPosition = 0+'px' -250+'px'
    }
}

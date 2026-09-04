var velocidade = 1;

const cenario = {
    left: 0,
    jogo: document.querySelector("#jogo"),
    movimentar(){
        this.left = this.left - velocidade
        this.jogo.style.backgroundPositionX = this.left + "px"
        
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
}, 10)

document.addEventListener("keypress", function(){
    personagem.pular = true
})


document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://p1-co-des.firebaseio.com/')

  let params = extract()

  let path = '/' + params['foco'] + '/' + params['category'] + '/' + params['course']

  if(path != '/undefined/undefined/undefined'){
    /* codigo das paginas de projeto */
    db.download(path, function(data) {
      let corpo = document.querySelector('.hidden')
      let gif = document.querySelector('.load')
      corpo.classList.remove("hidden")
      gif.classList.add('hidden')

      replace('body', {
          'nome': data['nome'],
          'disciplina': data['disciplina'],
          'descrição' : data['descrição'],
          'conteudo' : data['conteudo'],
          'objetivos' : data['objetivos'],
          'exemplos' : data['exemplos'],
          'foto' : data['foto']
      })
      replace('head', {
          'nome': data['nome']
      })
    })
  }

  else{
    path = '/'

    db.download(path, function(data) {
      let corpo = document.querySelector('.hidden')
      let gif = document.querySelector('.load')
      gif.classList.add('hidden')
      corpo.classList.remove('hidden')
      replace('body', {
          'FocoPrático': data['Foco Prático'],
          'FocoTeórico': data['Foco Teórico'],
      })






      /*
          Inicializa uma medição de tempo, que será gravada no
          banco de dados cujo endereço é passado como parâmetro.
          Altere o endereço abaixo para seu próprio banco de dados.
      */
      let ab = start('https://g4-teste-ab.firebaseio.com/')

      /*
          Seleciona o elemento que, quando clicado, finaliza a
          medição de tempo e envia o resultado para o banco.
          Altere o seletor abaixo para o do elemento desejado.
      */
      let element = document.querySelector('.titulo-ms')

      /*
          A princípio, o restante do código não precisa mudar.
      */

      element.addEventListener('click', function() {
          ab.finish()
      })

      let as = document.querySelectorAll('a')

      for(let a of as) {
          a.addEventListener('click', function(event) {
            console.log('clicked')
              event.preventDefault()
              setTimeout(function() {
                  window.location.assign(a.href)
              }, 5000)
          })
      }








      let foco = document.querySelectorAll('.foco')
      let focoPratico = foco[1]
      let focoTeorico = foco[0]
      let focoT = document.querySelector('.foco-tl')
      let focoP = document.querySelector('.foco-pl')
      let grupoTeorico = document.querySelectorAll('.grupo-teorico')
      let grupoPratico = document.querySelectorAll('.grupo-pratico')
      let itemPratico = document.querySelectorAll('.item-pratico')
      let itemTeorico = document.querySelectorAll('.item-teorico')
      let itemTeoricoEmp = [itemTeorico[0]]
      let itemTeoricoExa = [itemTeorico[1],itemTeorico[2],itemTeorico[3]]
      let itemTeoricoPen = [itemTeorico[4]]
      let itemPraticoAut = [itemPratico[0],itemPratico[1],itemPratico[2]]
      let itemPraticoDes = [itemPratico[3],itemPratico[4],itemPratico[5]]
      let itemPraticoPro = [itemPratico[6],itemPratico[7],itemPratico[8]]


      for(let i of grupoTeorico) {
        i.classList.add("sumiuvt")
      }
      for(let i of grupoPratico) {
        i.classList.add("sumiuvt")
      }
      for(let i of itemTeorico) {
        i.classList.add("sumiuvt")
      }
      for(let i of itemPratico) {
        i.classList.add("sumiuvt")
      }

      variFt = 0
      variFp = 0
      variGt0 = 0
      variGt1 = 0
      variGt2 = 0
      variGp0 = 0
      variGp1 = 0
      variGp2 = 0

      focoTeorico.addEventListener("click", function() {
        if(variFt == 0) {
          for(let i of grupoTeorico) {
            i.classList.remove("sumiuvt")
            this.classList.toggle("active")
          }
          variFt = 1
        }
        else {
          for(let i of grupoTeorico) {
            i.classList.add("sumiuvt")
            this.classList.toggle("active")
          }
          for(let i of itemTeorico) {
            i.classList.add("sumiuvt")
          }
          variFt = 0
          variGt0 = 0
          variGt1 = 0
          variGt2 = 0
        }
      })

      focoPratico.addEventListener('click', function() {
        if(variFp == 0) {
          for(let i of grupoPratico) {
            i.classList.remove("sumiuvt")
            this.classList.toggle("active")
          }
          variFp = 1
        }
        else {
          for(let i of grupoPratico) {
            i.classList.add("sumiuvt")
            this.classList.toggle("active")
          }
          for(let i of itemPratico) {
            i.classList.add("sumiuvt")

          }
          variFp = 0
          variGp0 = 0
          variGp1 = 0
          variGp2 = 0

        }
      })
      function someT(gT) {
        gT.addEventListener('click', function(){
          if(gT == grupoTeorico[0]){
            if(variGt0 == 0) {
              for(let i of itemTeoricoEmp) {
                i.classList.remove("sumiuvt")
                this.classList.toggle("active")
              }
              variGt0 = 1
            } else {
              for(let i of itemTeoricoEmp) {
                i.classList.add("sumiuvt")
                this.classList.toggle("active")
              }
              variGt0 = 0
            }
          } else if(gT == grupoTeorico[1]) {
            if(variGt1 == 0) {
              for(let i of itemTeoricoExa) {
                i.classList.remove("sumiuvt")
                this.classList.toggle("active")
              }
              variGt1 = 1
            } else {
              for(let i of itemTeoricoExa) {
                i.classList.add("sumiuvt")
                this.classList.toggle("active")
              }
              variGt1 = 0
            }
          } else if(gT == grupoTeorico[2]) {
            if(variGt2 == 0) {
              for(let i of itemTeoricoPen) {
                i.classList.remove("sumiuvt")
                this.classList.toggle("active")
              }
              variGt2 = 1
            } else {
              for(let i of itemTeoricoPen) {
                i.classList.add("sumiuvt")
                this.classList.toggle("active")
              }
              variGt2 = 0
            }
          }
        })
      }
      function someP(gP) {
        gP.addEventListener('click', function(){
          if(gP == grupoPratico[0]){
            if(variGp0 == 0) {
              for(let i of itemPraticoAut) {
                i.classList.remove("sumiuvt")
                this.classList.toggle("active")
              }
              variGp0 = 1
            } else {
              for(let i of itemPraticoAut) {
                i.classList.add("sumiuvt")
                this.classList.toggle("active")
              }
              variGp0 = 0
            }
          } else if(gP == grupoPratico[1]) {
            if(variGp1 == 0) {
              for(let i of itemPraticoDes) {
                i.classList.remove("sumiuvt")
                this.classList.toggle("active")
              }
              variGp1 = 1
            } else {
              for(let i of itemPraticoDes) {
                i.classList.add("sumiuvt")
                this.classList.toggle("active")
              }
              variGp1 = 0
            }
          } else if(gP == grupoPratico[2]) {
            if(variGp2 == 0) {
              for(let i of itemPraticoPro) {
                i.classList.remove("sumiuvt")
                this.classList.toggle("active")
              }
              variGp2 = 1
            } else {
              for(let i of itemPraticoPro) {
                i.classList.add("sumiuvt")
                this.classList.toggle("active")
              }
              variGp2 = 0
            }
          }
        })
      }

      for(let i of grupoPratico) {
        someP(i)
      }
      for(let i of grupoTeorico) {
        someT(i)
      }


    })
  }
})

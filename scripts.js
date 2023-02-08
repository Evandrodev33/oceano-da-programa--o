console.log("Evandro Reis")



let Evandro = "1000"

console.log(Evandro)





 let chave = "d170df5362492b3bd92df1f0b3d4c4da"


async function buscarcidade(cidade){

       let dados = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave)

            .then(resposta => resposta.json())

 console.log (dados)
}

 







function cliqueinobotao() {


    let cidade = document.querySelector(".input-cidade").value


    buscarcidade(cidade)
}


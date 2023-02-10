console.log("Evandro Reis")



let Evandro = "1000"



console.log(Evandro)





let chave = "d170df5362492b3bd92df1f0b3d4c4da"

function colocarnatela(dados){
console.log(dados)

document.querySelector(".cidade").innerHTML =  "tempo em " + dados.name
document.querySelector(".tempo").innerHTML = Math.floor (dados.main.temp)  + ("ºC")
document.querySelector(".descriçao").innerHTML = dados.weather [0].description
document.querySelector(".umidade").innerHTML = " umidade " + dados.main.humidity + ("%")

} 






async function buscarcidade(cidade) {

    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"


    )

        .then(resposta => resposta.json())


        colocarnatela(dados)
  
}









function cliqueinobotao() {


    let cidade = document.querySelector(".input-cidade").value


    buscarcidade(cidade)
}


const ramdomNumber =(Math.floor(Math.random() *10) - 1 + 1) 
const WinNumber =(Math.floor(Math.random() *10) - 1 + 1) 

console.log(ramdomNumber , "randomNumber")
console.log(WinNumber , "WinNumber" ) 

if( ramdomNumber === WinNumber){
 console.log("Você ganhou")

} else{
    console.log("Você perdeu")
}
const numBer = 5

if (numBer % 2 === 0) {



    if (numBer % 5 === 0) console.log(" O numero é par, e é divisivel por 5")
    else console.log("O numero é par  e não é divisivel por 5")

} else {

    for (let i = 2; i < numBer; i++)
        if (numBer % i === 0) {
            console.log("Ele é impar, mais não é primo")

            break

        } else {
            if (i === numBer -1) 
            console.log("Ele é um numero primo")



        }

    }

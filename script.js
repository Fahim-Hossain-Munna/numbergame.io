// player one variables
let divOne = document.querySelector('.div-one')
let playerOne = document.querySelector('.playerone')
let playerOneBtn = document.querySelector('.playonebtn')
let playerOneMsg = document.querySelector('.playeronemsg')

// player two variables
let divTwo = document.querySelector('.div-two')
let changeName = document.querySelector('.changeplayer')
let playerTwo = document.querySelector('.playertwo')
let playerTwoBtn = document.querySelector('.playtwobtn')
let playerTwoMsg = document.querySelector('.playertwomsg')
let chance = document.querySelector('.chance')

// random variable

let congressMsg = document.querySelector('h1')
let getPlayerOneNumber 
let count = 5

// player one event start


playerOneBtn.addEventListener('click',()=>{

    if(Boolean(playerOne.value)){
        if(Boolean(playerOne.value - 20)){
            if(playerOne.value >= 1 && playerOne.value <= 10){
                divOne.style.display = "none"
                divTwo.style.display = "block"
                changeName.innerHTML = 'player 2'
                playerTwoMsg.style.color = '#A6FF96'
                playerTwoMsg.innerHTML = 'player one has submitted his number &#127919'
                chance.innerHTML = count
                getPlayerOneNumber = playerOne.value

            }else{
                playerOneMsg.style.color = "#D80032"
                playerOneMsg.innerHTML = "The value given in the input is not correct &#9940"
            }
        }else{
            playerOneMsg.style.color = "#D80032"
            playerOneMsg.innerHTML = "The value given in the input is a string data type and it is not possible to accept the value &#9940"
        }
    }else{
        playerOneMsg.style.color = "#D80032"
        playerOneMsg.innerHTML = "It is not possible to submit the input value as empty &#9940"
    }

})

// player two event start


playerTwoBtn.addEventListener('click',()=>{
    playerTwoMsg.innerHTML = ""
    if(Boolean(playerTwo.value)){
        if(Boolean(playerTwo.value - 20)){
            if(playerTwo.value >= 1 && playerTwo.value <= 10){
                count--
                if(count !== 0){
                    if(playerTwo.value === getPlayerOneNumber){
                        divOne.style.display = "none"
                        divTwo.style.display = "none"
                        congressMsg.style.color = '#A6FF96'
                        congressMsg.innerHTML = 'Congratulation , player 2 is winner &#129395 &#129504'
                    }else{
                        chance.innerHTML = count
                    }
                }else{
                    divOne.style.display = "none"
                    divTwo.style.display = "none"
                    congressMsg.style.color = '#A6FF96'
                    congressMsg.innerHTML = 'Congratulation , player 1 is winner &#129395 &#129504'
                }

            }else{
                playerTwoMsg.style.color = "#D80032"
                playerTwoMsg.innerHTML = "The value given in the input is not correct &#9940"
            }
        }else{
            playerTwoMsg.style.color = "#D80032"
            playerTwoMsg.innerHTML = "The value given in the input is a string data type and it is not possible to accept the value &#9940"
        }
    }else{
        playerTwoMsg.style.color = "#D80032"
        playerTwoMsg.innerHTML = "It is not possible to submit the input value as empty &#9940"
    }

})